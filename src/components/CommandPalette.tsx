import React, { useState, useEffect } from 'react';
import { LeadAccount } from '../types/crm';
import { 
  Search, 
  Kanban, 
  Table, 
  Workflow, 
  BarChart3, 
  Plus, 
  Download, 
  Play, 
  X,
  Building2,
  ArrowRight
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadAccount[];
  onSelectLead: (lead: LeadAccount) => void;
  onNavigateView: (view: 'pipeline' | 'table' | 'workflow' | 'transcripts' | 'analytics') => void;
  onNewLead: () => void;
  onExportCsv: () => void;
  onSimulateWorkflow: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  leads,
  onSelectLead,
  onNavigateView,
  onNewLead,
  onExportCsv,
  onSimulateWorkflow
}) => {
  const [query, setQuery] = useState('');

  // Handle ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredLeads = leads.filter(
    (l) =>
      l.company.toLowerCase().includes(query.toLowerCase()) ||
      l.contactName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-xl border border-[#cbd5e1] shadow-2xl max-w-xl w-full overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-[#e2e8f0] flex items-center gap-3">
          <Search className="w-4 h-4 text-[#94a3b8] shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search accounts..."
            className="flex-1 bg-transparent text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#94a3b8] hover:text-[#0f172a] hover:bg-[#f1f5f9]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command & Account Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#f8fafc] text-xs">
          {/* Quick Actions Group */}
          <div className="py-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] px-3 py-1 block">
              Quick Actions
            </span>

            <button
              onClick={() => {
                onNewLead();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Plus className="w-4 h-4 text-[#4648d4]" />
                <span className="font-semibold text-[#0f172a]">Create New Inbound Lead</span>
              </div>
              <span className="text-[11px] text-[#94a3b8] font-mono">N</span>
            </button>

            <button
              onClick={() => {
                onSimulateWorkflow();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Play className="w-4 h-4 text-[#0284c7]" />
                <span className="font-semibold text-[#0f172a]">Simulate Inbound Lead Workflow</span>
              </div>
              <span className="text-[11px] text-[#94a3b8] font-mono">S</span>
            </button>

            <button
              onClick={() => {
                onExportCsv();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Download className="w-4 h-4 text-[#059669]" />
                <span className="font-semibold text-[#0f172a]">Export Active Pipeline (CSV)</span>
              </div>
              <span className="text-[11px] text-[#94a3b8] font-mono">E</span>
            </button>
          </div>

          {/* Navigation Views */}
          <div className="py-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] px-3 py-1 block">
              Navigation
            </span>

            <button
              onClick={() => {
                onNavigateView('pipeline');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Kanban className="w-4 h-4 text-[#64748b]" />
                <span className="text-[#334155]">Go to Autonomous Pipeline</span>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigateView('table');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Table className="w-4 h-4 text-[#64748b]" />
                <span className="text-[#334155]">Go to Lead Accounts Grid</span>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigateView('workflow');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Workflow className="w-4 h-4 text-[#64748b]" />
                <span className="text-[#334155]">Go to Automation Logic Trees</span>
              </div>
            </button>
          </div>

          {/* Account Search Matches */}
          {filteredLeads.length > 0 && (
            <div className="py-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] px-3 py-1 block">
                Accounts ({filteredLeads.length})
              </span>
              {filteredLeads.map((lead) => (
                <button
                  key={lead.id}
                  onClick={() => {
                    onSelectLead(lead);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8fafc] text-left transition-colors group"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Building2 className="w-4 h-4 text-[#4648d4] shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-[#0f172a] block truncate">
                        {lead.company}
                      </span>
                      <span className="text-[11px] text-[#64748b] block truncate">
                        {lead.contactName} · {lead.contactTitle}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#0f172a] tabular-nums shrink-0">
                    ${(lead.dealValue / 1000).toFixed(0)}k
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-2.5 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-[11px] text-[#94a3b8]">
          <span>Navigation: <kbd className="px-1.5 py-0.5 bg-white border border-[#cbd5e1] rounded font-mono">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white border border-[#cbd5e1] rounded font-mono">↓</kbd></span>
          <span>Select: <kbd className="px-1.5 py-0.5 bg-white border border-[#cbd5e1] rounded font-mono">↵</kbd></span>
          <span>Close: <kbd className="px-1.5 py-0.5 bg-white border border-[#cbd5e1] rounded font-mono">ESC</kbd></span>
        </div>
      </div>
    </div>
  );
};
