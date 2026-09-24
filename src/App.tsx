import React, { useState, useEffect, useMemo } from 'react';
import { LeadAccount, LeadStage, WorkflowNode } from './types/crm';
import { INITIAL_LEADS, INITIAL_WORKFLOW_NODES } from './data/initialData';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { PipelineBoard } from './components/PipelineBoard';
import { LeadTable } from './components/LeadTable';
import { WorkflowEngine } from './components/WorkflowEngine';
import { AuditTranscripts } from './components/AuditTranscripts';
import { AnalyticsView } from './components/AnalyticsView';
import { LeadDetailDrawer } from './components/LeadDetailDrawer';
import { NewLeadModal } from './components/NewLeadModal';
import { CommandPalette } from './components/CommandPalette';
import elenaAvatar from './assets/images/avatar_lead_elena_1790234055781.jpg';
import { CheckCircle2, AlertCircle, Info } from './components/icons';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'warning';
  message: string;
}

export default function App() {
  const [leads, setLeads] = useState<LeadAccount[]>(INITIAL_LEADS);
  const [workflowNodes, setWorkflowNodes] = useState<WorkflowNode[]>(INITIAL_WORKFLOW_NODES);
  const [currentView, setCurrentView] = useState<'pipeline' | 'table' | 'workflow' | 'transcripts' | 'analytics'>('pipeline');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [selectedLead, setSelectedLead] = useState<LeadAccount | null>(null);
  const [filterTemperature, setFilterTemperature] = useState<'all' | 'hot' | 'sla_risk' | 'scheduled'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isNewLeadOpen, setIsNewLeadOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  
  // Toast notifications
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Workflow Simulation State
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    'System ready. Autonomous pipeline active on cluster us-east-1.',
    'Ingress listening for Typeform Enterprise & Clearbit signals.'
  ]);

  // SLA Live Countdown Tick
  useEffect(() => {
    const timer = setInterval(() => {
      setLeads((prevLeads) =>
        prevLeads.map((lead) => {
          if (lead.stage === 'won' || lead.slaSecondsRemaining <= 0) return lead;
          return {
            ...lead,
            slaSecondsRemaining: lead.slaSecondsRemaining - 1
          };
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Global Keyboard Shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Temperature / SLA / Scheduled filter
      if (filterTemperature === 'hot' && lead.temperature !== 'hot') return false;
      if (filterTemperature === 'sla_risk' && (lead.slaSecondsRemaining > 300 || lead.stage === 'won')) return false;
      if (filterTemperature === 'scheduled' && lead.stage !== 'scheduled') return false;

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches =
          lead.company.toLowerCase().includes(q) ||
          lead.contactName.toLowerCase().includes(q) ||
          lead.email.toLowerCase().includes(q) ||
          lead.domain.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [leads, filterTemperature, searchQuery]);

  // Aggregate Metrics
  const totalPipelineValue = useMemo(() => {
    return leads.reduce((sum, lead) => sum + lead.dealValue, 0);
  }, [leads]);

  const hotLeadsCount = useMemo(() => {
    return leads.filter((l) => l.temperature === 'hot').length;
  }, [leads]);

  // Advance Stage Handler
  const handleAdvanceStage = (leadId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const stageOrder: LeadStage[] = ['inbound', 'qualifying', 'scheduled', 'deal_progress', 'won'];

    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id !== leadId) return lead;
        const currentIndex = stageOrder.indexOf(lead.stage);
        if (currentIndex === -1 || currentIndex === stageOrder.length - 1) return lead;

        const nextStage = stageOrder[currentIndex + 1];
        addToast(`Advanced ${lead.company} to ${nextStage.replace('_', ' ').toUpperCase()}`, 'success');

        return {
          ...lead,
          stage: nextStage,
          lastActionText: `Advanced to ${nextStage} by Executive AE`,
          lastActionTime: 'Just now'
        };
      })
    );

    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, stage: stageOrder[Math.min(stageOrder.indexOf(prev.stage) + 1, stageOrder.length - 1)] } : null));
    }
  };

  // Fast-track Autonomous Outreach simulation
  const handleTriggerFastTrack = (leadId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id !== leadId) return lead;

        const newMsg = {
          id: Math.random().toString(36).substring(7),
          sender: 'ai' as const,
          channel: 'sms' as const,
          timestamp: 'Just now',
          content: `Hi ${lead.contactName.split(' ')[0]}, this is Elena with Executive Precision. We received your architecture evaluation request for ${lead.company}. I have reserved Friday at 2:00 PM EST for an executive walkthrough.`
        };

        const newEvent = {
          id: Math.random().toString(36).substring(7),
          timestamp: 'Just now',
          type: 'sms' as const,
          actor: 'Autonomous Agent' as const,
          title: 'Automated Executive SMS Dispatched',
          detail: 'Reserved meeting slot proposed with calendar link.',
          status: 'completed' as const
        };

        addToast(`Autonomous agent dispatched personalized SMS to ${lead.contactName}`, 'info');

        return {
          ...lead,
          stage: lead.stage === 'inbound' ? 'qualifying' : lead.stage,
          lastActionText: 'Autonomous SMS sent with proposed calendar slot',
          lastActionTime: 'Just now',
          transcript: [...lead.transcript, newMsg],
          events: [newEvent, ...lead.events]
        };
      })
    );
  };

  // Update Notes
  const handleUpdateNotes = (leadId: string, notes: string) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, notes } : lead))
    );
    addToast('Account briefing notes updated and saved', 'success');
  };

  // Update Stage directly from Drawer
  const handleUpdateStage = (leadId: string, newStage: LeadStage) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, stage: newStage } : lead))
    );
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, stage: newStage } : null));
    }
    addToast(`Pipeline stage set to ${newStage.toUpperCase()}`, 'success');
  };

  // Trigger Action from Drawer
  const handleTriggerAction = (leadId: string, actionType: string) => {
    if (actionType === 'dispatch_sms') {
      const dummyEvent: React.MouseEvent = { stopPropagation: () => {} } as any;
      handleTriggerFastTrack(leadId, dummyEvent);
    } else if (actionType === 'lock_calendar') {
      handleUpdateStage(leadId, 'scheduled');
    }
  };

  // Add Inbound Lead
  const handleAddLead = (newLeadData: Omit<LeadAccount, 'id' | 'events' | 'transcript'>) => {
    const id = `lead-${Date.now().toString().slice(-4)}`;
    const newLead: LeadAccount = {
      ...newLeadData,
      id,
      events: [
        {
          id: `ev-${Date.now()}`,
          timestamp: 'Just now',
          type: 'enrichment',
          actor: 'Autonomous Agent',
          title: 'Ingress Webhook Intercepted',
          detail: `Enriched ${newLeadData.company} firmographics. Intent score calculated as ${newLeadData.intentScore}.`,
          status: 'completed'
        }
      ],
      transcript: []
    };

    setLeads((prev) => [newLead, ...prev]);
    addToast(`Ingested ${newLead.company} into Inbound Capture queue`, 'success');
  };

  // Export CSV File
  const handleExportCsv = () => {
    const headers = ['ID', 'Company', 'Domain', 'Contact Name', 'Title', 'Email', 'Phone', 'Stage', 'Deal Value ($)', 'Channel', 'Intent Score'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.company}"`,
      l.domain,
      `"${l.contactName}"`,
      `"${l.contactTitle}"`,
      l.email,
      l.phone,
      l.stage,
      l.dealValue,
      `"${l.channel}"`,
      l.intentScore
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `executive_precision_pipeline_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('Pipeline ledger exported to CSV successfully', 'success');
  };

  // Batch actions
  const handleBatchAction = (action: string, selectedIds: string[]) => {
    if (action === 'advance_all') {
      selectedIds.forEach((id) => handleAdvanceStage(id));
      addToast(`Batch advanced ${selectedIds.length} accounts to subsequent stages`, 'success');
    } else if (action === 'dispatch_outreach') {
      const dummyEvent: React.MouseEvent = { stopPropagation: () => {} } as any;
      selectedIds.forEach((id) => handleTriggerFastTrack(id, dummyEvent));
      addToast(`Batch dispatched autonomous outreach across ${selectedIds.length} leads`, 'info');
    }
  };

  // Simulate Autonomous Workflow Execution Step-by-Step
  const handleTriggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);
    setSimulationLogs([
      `[${new Date().toLocaleTimeString()}] INGRESS EVENT: Simulated Typeform submission for "Hyperion Aerospace" ($185k ARR).`,
      `[${new Date().toLocaleTimeString()}] Node #1: Inbound Webhook Received with payload verification (HMAC OK).`
    ]);

    // Step through each node with visual delay
    setTimeout(() => {
      setSimulationStep(1);
      setSimulationLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Node #2: Intent Velocity & SLA Filter evaluated. Score: 94/100 (Pass threshold >= 80). ARR: $185k.`
      ]);
    }, 1200);

    setTimeout(() => {
      setSimulationStep(2);
      setSimulationLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Node #3: Autonomous Multi-Channel Outreach triggered. SMS dispatched with slots: Thu 2pm & Fri 11am.`
      ]);
    }, 2400);

    setTimeout(() => {
      setSimulationStep(3);
      setSimulationLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Node #4: Slot Confirmation Intercept detected natural language acceptance: "Friday 11am works perfect".`
      ]);
    }, 3600);

    setTimeout(() => {
      setSimulationStep(4);
      setSimulationLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Node #5: Calendar Locked. Google Meet invite dispatched, executive brief synced to Salesforce. SLA Met: 46s.`
      ]);
      setIsSimulating(false);
      addToast('Simulated lead passed autonomous pipeline in 46s', 'success');

      // Append the newly simulated lead into active pipeline
      const simulatedLead: LeadAccount = {
        id: `lead-sim-${Date.now().toString().slice(-4)}`,
        company: 'Hyperion Aerospace',
        domain: 'hyperionaero.space',
        contactName: 'Commander Ryan Sterling',
        contactTitle: 'VP Mission Avionics',
        email: 'r.sterling@hyperionaero.space',
        phone: '+1 (321) 555-8821',
        stage: 'scheduled',
        dealValue: 185000,
        temperature: 'hot',
        slaSecondsRemaining: 720,
        slaTotalSeconds: 900,
        channel: 'API Webhook',
        assignedExecutive: 'Elena Vance (Enterprise Lead)',
        assignedAvatar: elenaAvatar,
        lastActionText: 'Calendar Locked: Friday 11:00 AM EST (Simulated)',
        lastActionTime: 'Just now',
        techStack: ['DO-178C', 'RTOS', 'AWS GovCloud', 'Kafka'],
        employees: '1,800',
        intentScore: 94,
        notes: 'Simulated high-velocity inbound lead. Meeting locked autonomously with Elena Vance.',
        events: [
          {
            id: `ev-sim-1`,
            timestamp: 'Just now',
            type: 'calendar',
            actor: 'Autonomous Agent',
            title: 'Autonomous Meeting Locked',
            detail: 'Slot confirmed for Friday 11:00 AM EST. Whitepaper dispatched.',
            status: 'completed'
          }
        ],
        transcript: [
          {
            id: `tr-sim-1`,
            sender: 'ai',
            channel: 'sms',
            timestamp: 'Just now',
            content: 'Hi Ryan, Elena Vance’s office following up on Hyperion Aerospace evaluation. Can we connect Friday at 11:00 AM EST?'
          },
          {
            id: `tr-sim-2`,
            sender: 'lead',
            channel: 'sms',
            timestamp: 'Just now',
            content: 'Friday 11am works perfect. Send over the calendar invite and GovCloud specs.'
          }
        ]
      };

      setLeads((prev) => [simulatedLead, ...prev]);
    }, 4800);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#faf8ff] text-[#131b2e]">
      {/* Collapsible Left Rail (280px / 72px) */}
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        leadsCount={leads.length}
        totalPipelineValue={totalPipelineValue}
        hotLeadsCount={hotLeadsCount}
        userAvatar={elenaAvatar}
      />

      {/* Main Operational Viewport */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navigation Bar (3-zone contract) */}
        <TopHeader
          currentView={currentView}
          onNewLeadClick={() => setIsNewLeadOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onExportCsv={handleExportCsv}
          filterTemperature={filterTemperature}
          setFilterTemperature={setFilterTemperature}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* View Switcher Container */}
        <main className="flex-1 overflow-hidden relative">
          {currentView === 'pipeline' && (
            <PipelineBoard
              leads={filteredLeads}
              onSelectLead={(lead) => setSelectedLead(lead)}
              onAdvanceStage={handleAdvanceStage}
              onTriggerFastTrack={handleTriggerFastTrack}
            />
          )}

          {currentView === 'table' && (
            <LeadTable
              leads={filteredLeads}
              onSelectLead={(lead) => setSelectedLead(lead)}
              onAdvanceStage={handleAdvanceStage}
              onBatchAction={handleBatchAction}
            />
          )}

          {currentView === 'workflow' && (
            <WorkflowEngine
              nodes={workflowNodes}
              onTriggerSimulation={handleTriggerSimulation}
              isSimulating={isSimulating}
              simulationStep={simulationStep}
              simulationLogs={simulationLogs}
            />
          )}

          {currentView === 'transcripts' && (
            <AuditTranscripts
              leads={filteredLeads}
              onSelectLead={(lead) => setSelectedLead(lead)}
            />
          )}

          {currentView === 'analytics' && (
            <AnalyticsView leads={leads} />
          )}
        </main>
      </div>

      {/* Contextual 360px Activity & Lead Dossier Drawer */}
      <LeadDetailDrawer
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
        onUpdateStage={handleUpdateStage}
        onUpdateNotes={handleUpdateNotes}
        onTriggerAction={handleTriggerAction}
      />

      {/* Modal: Ingest New Lead */}
      <NewLeadModal
        isOpen={isNewLeadOpen}
        onClose={() => setIsNewLeadOpen(false)}
        onAddLead={handleAddLead}
      />

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        leads={leads}
        onSelectLead={(lead) => setSelectedLead(lead)}
        onNavigateView={(view) => setCurrentView(view)}
        onNewLead={() => setIsNewLeadOpen(true)}
        onExportCsv={handleExportCsv}
        onSimulateWorkflow={handleTriggerSimulation}
      />

      {/* Executive Toast Notifications Floating Bottom Right */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="p-3 bg-[#0f172a] text-white rounded-xl shadow-xl border border-[#334155] flex items-center gap-2.5 text-xs animate-slide-up pointer-events-auto"
          >
            {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />}
            {toast.type === 'info' && <Info className="w-4 h-4 text-[#818cf8] shrink-0" />}
            {toast.type === 'warning' && <AlertCircle className="w-4 h-4 text-[#d97706] shrink-0" />}
            <span className="flex-1">{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
