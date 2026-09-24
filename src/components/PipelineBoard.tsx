import React from 'react';
import { LeadAccount, LeadStage } from '../types/crm';
import { 
  Building2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CalendarCheck, 
  CheckCircle2, 
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal
} from './icons';

interface PipelineBoardProps {
  leads: LeadAccount[];
  onSelectLead: (lead: LeadAccount) => void;
  onAdvanceStage: (leadId: string, e: React.MouseEvent) => void;
  onTriggerFastTrack: (leadId: string, e: React.MouseEvent) => void;
}

interface ColumnConfig {
  id: LeadStage;
  title: string;
  description: string;
  colorBorder: string;
}

const COLUMNS: ColumnConfig[] = [
  {
    id: 'inbound',
    title: 'Inbound Capture',
    description: 'Enrichment & triage in-flight',
    colorBorder: 'border-t-[#818cf8]'
  },
  {
    id: 'qualifying',
    title: 'AI Qualification',
    description: 'Conversational agent active',
    colorBorder: 'border-t-[#6366f1]'
  },
  {
    id: 'scheduled',
    title: 'Meeting Locked',
    description: 'Calendar slot confirmed',
    colorBorder: 'border-t-[#0284c7]'
  },
  {
    id: 'deal_progress',
    title: 'Deal Execution',
    description: 'AE negotiations & legal review',
    colorBorder: 'border-t-[#4f46e5]'
  },
  {
    id: 'won',
    title: 'Closed Won',
    description: 'Enterprise contract signed',
    colorBorder: 'border-t-[#059669]'
  },
  {
    id: 'review',
    title: 'Needs Review',
    description: 'Exception or custom SLA review',
    colorBorder: 'border-t-[#d97706]'
  }
];

export const PipelineBoard: React.FC<PipelineBoardProps> = ({
  leads,
  onSelectLead,
  onAdvanceStage,
  onTriggerFastTrack
}) => {
  // Format seconds to mm:ss
  const formatSla = (seconds: number) => {
    if (seconds <= 0) return '00:00 EXPIRED';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 h-[calc(100vh-4rem)] overflow-x-auto overflow-y-hidden bg-[#faf8ff]">
      <div className="flex gap-4 h-full min-w-[1380px] pb-4">
        {COLUMNS.map((col) => {
          const colLeads = leads.filter((l) => l.stage === col.id);
          const colValue = colLeads.reduce((acc, curr) => acc + curr.dealValue, 0);

          return (
            <div
              key={col.id}
              className="flex-1 min-w-[260px] max-w-[320px] bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col h-full shadow-xs"
            >
              {/* Column Header */}
              <div className={`p-3.5 bg-white rounded-t-xl border-b border-[#e2e8f0] border-t-4 ${col.colorBorder}`}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-[#0f172a] truncate">
                    {col.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-[#f1f5f9] text-[#475569] rounded-md tabular-nums">
                    {colLeads.length}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#64748b]">
                  <span className="truncate text-[11px]">{col.description}</span>
                  <span className="font-mono font-semibold text-[#0f172a] tabular-nums shrink-0">
                    ${(colValue / 1000).toFixed(0)}k
                  </span>
                </div>
              </div>

              {/* Cards Container */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                {colLeads.length === 0 ? (
                  <div className="h-32 border-2 border-dashed border-[#cbd5e1]/60 rounded-lg flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-xs text-[#94a3b8] font-medium">No accounts in stage</p>
                    <p className="text-[11px] text-[#cbd5e1] mt-0.5">Drag or fast-track lead here</p>
                  </div>
                ) : (
                  colLeads.map((lead) => {
                    const isHot = lead.temperature === 'hot';
                    const isSlaCritical = lead.slaSecondsRemaining < 300 && lead.slaSecondsRemaining > 0;
                    const isWon = lead.stage === 'won';

                    return (
                      <div
                        key={lead.id}
                        onClick={() => onSelectLead(lead)}
                        className="bg-white p-3.5 rounded-lg border border-[#e2e8f0] hover:border-[#6366f1] hover:shadow-md transition-all duration-200 cursor-pointer group relative flex flex-col justify-between"
                      >
                        {/* Header: Company & Deal Value */}
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span className="font-bold text-sm text-[#0f172a] group-hover:text-[#4648d4] transition-colors line-clamp-1">
                              {lead.company}
                            </span>
                            <span className="font-mono font-bold text-xs text-[#0f172a] tabular-nums shrink-0">
                              ${(lead.dealValue / 1000).toFixed(0)}k
                            </span>
                          </div>

                          {/* Contact & Title */}
                          <div className="flex items-center gap-2 mb-2.5">
                            {lead.avatarUrl ? (
                              <img 
                                src={lead.avatarUrl} 
                                alt={lead.contactName} 
                                className="w-5 h-5 rounded-full object-cover shrink-0 ring-1 ring-[#cbd5e1]"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-[#f1f5f9] text-[#475569] text-[10px] font-bold flex items-center justify-center shrink-0">
                                {lead.contactName.charAt(0)}
                              </div>
                            )}
                            <div className="text-xs text-[#475569] truncate">
                              <span className="font-medium text-[#1e293b]">{lead.contactName}</span>
                              <span className="text-[#94a3b8] mx-1">·</span>
                              <span className="text-[11px] text-[#64748b]">{lead.contactTitle}</span>
                            </div>
                          </div>

                          {/* Status Tokens Row */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                            {/* Temperature token */}
                            {isHot && (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-rose-50 text-[#be123c] border border-rose-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse"></span>
                                HOT LEAD
                              </span>
                            )}

                            {lead.stage === 'scheduled' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]">
                                <CalendarCheck className="w-3 h-3" />
                                Locked
                              </span>
                            )}

                            {/* SLA Badge */}
                            {!isWon && (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                                isSlaCritical 
                                  ? 'bg-[#fef3c7] text-[#b45309] border-[#fde68a] animate-pulse'
                                  : 'bg-[#f8fafc] text-[#64748b] border-[#e2e8f0]'
                              }`}>
                                <Clock className="w-2.5 h-2.5" />
                                {formatSla(lead.slaSecondsRemaining)}
                              </span>
                            )}
                          </div>

                          {/* Last Action Description */}
                          <div className="p-2 bg-[#f8fafc] rounded-md border border-[#f1f5f9] text-[11px] text-[#475569] mb-3">
                            <div className="flex items-center justify-between text-[#94a3b8] mb-0.5 text-[10px]">
                              <span>Autonomous Step</span>
                              <span className="font-mono">{lead.lastActionTime}</span>
                            </div>
                            <p className="line-clamp-2 leading-relaxed text-[#334155] font-medium">
                              {lead.lastActionText}
                            </p>
                          </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="pt-2 border-t border-[#f1f5f9] flex items-center justify-between gap-1 text-xs">
                          <button
                            onClick={(e) => onTriggerFastTrack(lead.id, e)}
                            className="px-2 py-1 text-[11px] font-medium text-[#4648d4] hover:bg-[#eef2ff] rounded transition-colors flex items-center gap-1"
                            title="Auto simulate agent engagement"
                          >
                            <Sparkles className="w-3 h-3" />
                            <span>Auto-Engage</span>
                          </button>

                          {lead.stage !== 'won' && (
                            <button
                              onClick={(e) => onAdvanceStage(lead.id, e)}
                              className="px-2 py-1 text-[11px] font-semibold text-[#0f172a] hover:bg-[#f1f5f9] rounded transition-colors flex items-center gap-1"
                              title="Advance lead to next pipeline stage"
                            >
                              <span>Next</span>
                              <ArrowRight className="w-3 h-3 text-[#64748b]" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
