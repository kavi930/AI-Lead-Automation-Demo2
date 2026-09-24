import React, { useState } from 'react';
import { LeadAccount, LeadStage } from '../types/crm';
import { 
  X, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  Save, 
  ArrowRight, 
  Send,
  Layers,
  History,
  ShieldCheck
} from 'lucide-react';

interface LeadDetailDrawerProps {
  lead: LeadAccount | null;
  onClose: () => void;
  onUpdateStage: (leadId: string, newStage: LeadStage) => void;
  onUpdateNotes: (leadId: string, notes: string) => void;
  onTriggerAction: (leadId: string, actionType: string) => void;
}

export const LeadDetailDrawer: React.FC<LeadDetailDrawerProps> = ({
  lead,
  onClose,
  onUpdateStage,
  onUpdateNotes,
  onTriggerAction
}) => {
  if (!lead) return null;

  const [notes, setNotes] = useState<string>(lead.notes);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveNotes = () => {
    onUpdateNotes(lead.id, notes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const formatSla = (seconds: number) => {
    if (seconds <= 0) return '00:00 EXPIRED';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white border-l border-[#e2e8f0] shadow-2xl z-50 flex flex-col animate-slide-left">
      {/* Header */}
      <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
            Account Intelligence Dossier
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4648d4]"></span>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-md text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Drawer Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Account Title & Deal ARR */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-[#0f172a] leading-tight">
              {lead.company}
            </h2>
            <a 
              href={`https://${lead.domain}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-[#4648d4] hover:underline flex items-center gap-1 mt-0.5"
            >
              <Globe className="w-3 h-3" />
              <span>{lead.domain}</span>
            </a>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-[#64748b] block">ARR Valuation</span>
            <span className="font-mono font-extrabold text-lg text-[#0f172a] tabular-nums">
              ${lead.dealValue.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Stage Selector */}
        <div className="bg-[#f8fafc] p-3 rounded-lg border border-[#e2e8f0]">
          <label className="text-[11px] font-semibold text-[#475569] block mb-1.5">
            Pipeline Stage
          </label>
          <select
            value={lead.stage}
            onChange={(e) => onUpdateStage(lead.id, e.target.value as LeadStage)}
            className="w-full bg-white border border-[#cbd5e1] rounded-md px-3 py-1.5 text-xs font-semibold text-[#0f172a] focus:outline-none focus:border-[#4648d4]"
          >
            <option value="inbound">Inbound Capture</option>
            <option value="qualifying">AI Autonomous Qualification</option>
            <option value="scheduled">Meeting Locked</option>
            <option value="deal_progress">Deal In Progress</option>
            <option value="won">Closed Won</option>
            <option value="review">Needs Exception Review</option>
          </select>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white p-3.5 rounded-lg border border-[#e2e8f0] space-y-2 text-xs">
          <div className="flex items-center gap-2.5 pb-2 border-b border-[#f1f5f9]">
            {lead.avatarUrl ? (
              <img 
                src={lead.avatarUrl} 
                alt={lead.contactName} 
                className="w-9 h-9 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#4648d4] text-white flex items-center justify-center font-bold text-xs">
                {lead.contactName.charAt(0)}
              </div>
            )}
            <div>
              <div className="font-bold text-[#0f172a]">{lead.contactName}</div>
              <div className="text-[11px] text-[#64748b]">{lead.contactTitle}</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[#475569] pt-1">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Mail className="w-3 h-3 text-[#64748b]" />
              {lead.email}
            </span>
          </div>

          <div className="flex items-center justify-between text-[#475569]">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Phone className="w-3 h-3 text-[#64748b]" />
              {lead.phone}
            </span>
          </div>
        </div>

        {/* Operational Metas: Intent, SLA, Source */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
            <span className="text-[10px] text-[#64748b] uppercase font-bold block mb-1">Intent Velocity</span>
            <div className="font-mono text-base font-bold text-[#0f172a] tabular-nums">
              {lead.intentScore} <span className="text-xs font-normal text-[#64748b]">/ 100</span>
            </div>
          </div>

          <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
            <span className="text-[10px] text-[#64748b] uppercase font-bold block mb-1">SLA Remaining</span>
            <div className="font-mono text-base font-bold text-[#b45309] tabular-nums">
              {formatSla(lead.slaSecondsRemaining)}
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <span className="text-[11px] font-semibold text-[#475569] block mb-1.5">
            Detected Infrastructure Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {lead.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#f1f5f9] text-[#334155] border border-[#e2e8f0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="space-y-2 pt-2 border-t border-[#f1f5f9]">
          <span className="text-[11px] font-semibold text-[#475569] block">
            Autonomous Actions
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onTriggerAction(lead.id, 'dispatch_sms')}
              className="px-3 py-2 bg-white border border-[#cbd5e1] hover:border-[#4648d4] rounded-lg text-xs font-semibold text-[#0f172a] flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <Send className="w-3 h-3 text-[#4648d4]" />
              <span>Dispatch SMS</span>
            </button>

            <button
              onClick={() => onTriggerAction(lead.id, 'lock_calendar')}
              className="px-3 py-2 bg-white border border-[#cbd5e1] hover:border-[#0284c7] rounded-lg text-xs font-semibold text-[#0f172a] flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <Calendar className="w-3 h-3 text-[#0284c7]" />
              <span>Lock Meeting</span>
            </button>
          </div>
        </div>

        {/* Audit Events Timeline */}
        <div className="pt-2">
          <span className="text-[11px] font-semibold text-[#475569] flex items-center gap-1.5 mb-3">
            <History className="w-3.5 h-3.5 text-[#64748b]" />
            Audit Trace History
          </span>
          <div className="space-y-3 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-[#e2e8f0]">
            {lead.events.map((ev) => (
              <div key={ev.id} className="relative pl-6 text-xs">
                <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-[#4648d4]"></div>
                <div className="flex items-center justify-between text-[#64748b] text-[10px] mb-0.5">
                  <span className="font-semibold text-[#0f172a]">{ev.title}</span>
                  <span className="font-mono">{ev.timestamp}</span>
                </div>
                <p className="text-[#475569] leading-relaxed text-[11px]">
                  {ev.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Notes Area */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-[#475569]">
              Executive Brief Notes
            </span>
            {isSaved && (
              <span className="text-[10px] text-[#059669] font-semibold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Saved
              </span>
            )}
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-2.5 text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
            placeholder="Add internal account intelligence..."
          />
          <div className="mt-2 flex justify-end">
            <button
              onClick={handleSaveNotes}
              className="px-3 py-1 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Save className="w-3 h-3" />
              <span>Save Notes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
