import React, { useState, useMemo } from 'react';
import { LeadAccount, LeadStage } from '../types/crm';
import { 
  Building2, 
  Clock, 
  ArrowUpDown, 
  Sparkles, 
  ExternalLink, 
  CheckSquare, 
  Square, 
  Filter,
  CheckCircle,
  AlertCircle,
  Calendar,
  Send
} from 'lucide-react';

interface LeadTableProps {
  leads: LeadAccount[];
  onSelectLead: (lead: LeadAccount) => void;
  onAdvanceStage: (leadId: string, e: React.MouseEvent) => void;
  onBatchAction: (action: string, selectedIds: string[]) => void;
}

type SortField = 'company' | 'dealValue' | 'intentScore' | 'slaSecondsRemaining' | 'stage';

export const LeadTable: React.FC<LeadTableProps> = ({
  leads,
  onSelectLead,
  onAdvanceStage,
  onBatchAction
}) => {
  const [sortField, setSortField] = useState<SortField>('dealValue');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [stageFilter, setStageFilter] = useState<string>('all');

  // Handle Sort
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  // Toggle selection
  const toggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredLeads.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredLeads.map((l) => l.id));
    }
  };

  // Filter & Sort
  const filteredLeads = useMemo(() => {
    let list = [...leads];
    if (stageFilter !== 'all') {
      list = list.filter((l) => l.stage === stageFilter);
    }

    list.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (typeof valA === 'string') {
        const cmp = valA.localeCompare(valB as string);
        return sortAsc ? cmp : -cmp;
      }
      return sortAsc ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });

    return list;
  }, [leads, stageFilter, sortField, sortAsc]);

  const formatSla = (seconds: number) => {
    if (seconds <= 0) return '00:00 EXPIRED';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getStageBadge = (stage: LeadStage) => {
    switch (stage) {
      case 'inbound':
        return <span className="text-[11px] font-medium text-[#4f46e5]">Inbound Triage</span>;
      case 'qualifying':
        return <span className="text-[11px] font-semibold text-[#6366f1]">AI Qualification</span>;
      case 'scheduled':
        return <span className="text-[11px] font-semibold text-[#0284c7]">Meeting Locked</span>;
      case 'deal_progress':
        return <span className="text-[11px] font-medium text-[#7c3aed]">Deal Execution</span>;
      case 'won':
        return <span className="text-[11px] font-bold text-[#059669]">Closed Won</span>;
      case 'review':
        return <span className="text-[11px] font-medium text-[#d97706]">Exception Review</span>;
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-4rem)] flex flex-col bg-[#faf8ff] overflow-hidden">
      {/* Table Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          {/* Segmented stage filter */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#e2e8f0] rounded-lg">
            <button
              onClick={() => setStageFilter('all')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                stageFilter === 'all'
                  ? 'bg-[#f1f5f9] text-[#0f172a]'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              All Stages ({leads.length})
            </button>
            <button
              onClick={() => setStageFilter('inbound')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                stageFilter === 'inbound'
                  ? 'bg-[#f1f5f9] text-[#0f172a]'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              Inbound
            </button>
            <button
              onClick={() => setStageFilter('qualifying')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                stageFilter === 'qualifying'
                  ? 'bg-[#f1f5f9] text-[#0f172a]'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              AI Qualifying
            </button>
            <button
              onClick={() => setStageFilter('scheduled')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                stageFilter === 'scheduled'
                  ? 'bg-[#f1f5f9] text-[#0f172a]'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              Meeting Locked
            </button>
            <button
              onClick={() => setStageFilter('won')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                stageFilter === 'won'
                  ? 'bg-[#f1f5f9] text-[#0f172a]'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              Closed Won
            </button>
          </div>
        </div>

        {/* Batch Operations Bar */}
        {selectedIds.length > 0 && (
          <div className="flex items-center gap-2 p-1.5 px-3 bg-[#4648d4] text-white rounded-lg text-xs font-medium shadow-sm animate-fade-in">
            <span className="font-semibold">{selectedIds.length} accounts selected</span>
            <span className="text-white/40">|</span>
            <button
              onClick={() => onBatchAction('dispatch_outreach', selectedIds)}
              className="px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded text-white font-semibold transition-all flex items-center gap-1"
            >
              <Send className="w-3 h-3" />
              Batch Engage
            </button>
            <button
              onClick={() => onBatchAction('advance_all', selectedIds)}
              className="px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded text-white font-semibold transition-all"
            >
              Advance Stage
            </button>
            <button
              onClick={() => setSelectedIds([])}
              className="px-1 text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Main High-Density Grid Container */}
      <div className="flex-1 bg-white rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead className="bg-[#f8fafc] text-[#475569] text-xs font-semibold border-b border-[#e2e8f0] sticky top-0 z-10">
              <tr>
                <th className="py-3 px-3 w-10 text-center">
                  <button 
                    onClick={toggleSelectAll} 
                    className="text-[#94a3b8] hover:text-[#4648d4] transition-colors"
                  >
                    {selectedIds.length === filteredLeads.length && filteredLeads.length > 0 ? (
                      <CheckSquare className="w-4 h-4 text-[#4648d4]" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </th>

                <th 
                  onClick={() => handleSort('company')} 
                  className="py-3 px-4 cursor-pointer hover:text-[#0f172a] select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Account & Contact</span>
                    <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" />
                  </div>
                </th>

                <th 
                  onClick={() => handleSort('stage')} 
                  className="py-3 px-4 cursor-pointer hover:text-[#0f172a] select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Stage</span>
                    <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" />
                  </div>
                </th>

                <th 
                  onClick={() => handleSort('dealValue')} 
                  className="py-3 px-4 text-right cursor-pointer hover:text-[#0f172a] select-none"
                >
                  <div className="flex items-center justify-end gap-1.5">
                    <span>Deal Value (ARR)</span>
                    <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" />
                  </div>
                </th>

                <th 
                  onClick={() => handleSort('intentScore')} 
                  className="py-3 px-4 text-center cursor-pointer hover:text-[#0f172a] select-none"
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span>Intent Score</span>
                    <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" />
                  </div>
                </th>

                <th 
                  onClick={() => handleSort('slaSecondsRemaining')} 
                  className="py-3 px-4 cursor-pointer hover:text-[#0f172a] select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span>SLA Countdown</span>
                    <ArrowUpDown className="w-3 h-3 text-[#94a3b8]" />
                  </div>
                </th>

                <th className="py-3 px-4">Channel</th>
                <th className="py-3 px-4">Latest Autonomous Step</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#f1f5f9] text-xs">
              {filteredLeads.map((lead) => {
                const isSelected = selectedIds.includes(lead.id);
                const isHot = lead.temperature === 'hot';
                const isSlaCritical = lead.slaSecondsRemaining < 300 && lead.slaSecondsRemaining > 0;

                return (
                  <tr
                    key={lead.id}
                    onClick={() => onSelectLead(lead)}
                    className={`hover:bg-[#f8fafc] cursor-pointer transition-colors group ${
                      isSelected ? 'bg-[#f1f5f9]/80' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-2.5 px-3 text-center" onClick={(e) => toggleSelect(lead.id, e)}>
                      <button className="text-[#94a3b8] hover:text-[#4648d4] transition-colors">
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#4648d4]" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                      </button>
                    </td>

                    {/* Account & Contact */}
                    <td className="py-2.5 px-4">
                      <div className="flex items-center gap-2.5">
                        {lead.avatarUrl ? (
                          <img 
                            src={lead.avatarUrl} 
                            alt={lead.contactName} 
                            className="w-7 h-7 rounded-full object-cover shrink-0 ring-1 ring-[#cbd5e1]"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-bold flex items-center justify-center shrink-0">
                            {lead.contactName.charAt(0)}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#0f172a] group-hover:text-[#4648d4] transition-colors">
                              {lead.company}
                            </span>
                            {isHot && (
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e11d48]" title="Hot Lead" />
                            )}
                          </div>
                          <div className="text-[#64748b] text-[11px]">
                            <span>{lead.contactName}</span>
                            <span className="mx-1">·</span>
                            <span>{lead.contactTitle}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Stage */}
                    <td className="py-2.5 px-4 whitespace-nowrap">
                      {getStageBadge(lead.stage)}
                    </td>

                    {/* Deal Value */}
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-sm text-[#0f172a] tabular-nums whitespace-nowrap">
                      ${lead.dealValue.toLocaleString()}
                    </td>

                    {/* Intent Score */}
                    <td className="py-2.5 px-4 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <div className="w-12 bg-[#f1f5f9] rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              lead.intentScore >= 90 ? 'bg-[#4648d4]' : lead.intentScore >= 80 ? 'bg-[#0284c7]' : 'bg-[#94a3b8]'
                            }`}
                            style={{ width: `${lead.intentScore}%` }}
                          />
                        </div>
                        <span className="font-mono font-semibold text-[#0f172a] tabular-nums text-[11px]">
                          {lead.intentScore}
                        </span>
                      </div>
                    </td>

                    {/* SLA Countdown */}
                    <td className="py-2.5 px-4 whitespace-nowrap">
                      {lead.stage === 'won' ? (
                        <span className="text-[#059669] font-medium flex items-center gap-1 text-[11px]">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Won / SLA Closed
                        </span>
                      ) : (
                        <span className={`inline-flex items-center gap-1 font-mono text-[11px] font-semibold tabular-nums px-2 py-0.5 rounded ${
                          isSlaCritical
                            ? 'bg-[#fef3c7] text-[#b45309]'
                            : 'text-[#475569]'
                        }`}>
                          <Clock className="w-3 h-3" />
                          {formatSla(lead.slaSecondsRemaining)}
                        </span>
                      )}
                    </td>

                    {/* Channel */}
                    <td className="py-2.5 px-4 text-[#64748b] text-[11px] whitespace-nowrap">
                      {lead.channel}
                    </td>

                    {/* Latest Autonomous Step */}
                    <td className="py-2.5 px-4 max-w-[280px]">
                      <div className="text-[11px] text-[#334155] font-medium truncate" title={lead.lastActionText}>
                        {lead.lastActionText}
                      </div>
                      <div className="text-[10px] text-[#94a3b8] font-mono">
                        {lead.lastActionTime}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-2.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectLead(lead);
                          }}
                          className="px-2 py-1 text-[11px] font-medium text-[#4648d4] hover:bg-[#eef2ff] rounded transition-colors"
                        >
                          Dossier
                        </button>
                        {lead.stage !== 'won' && (
                          <button
                            onClick={(e) => onAdvanceStage(lead.id, e)}
                            className="px-2 py-1 text-[11px] font-semibold bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] rounded transition-colors"
                          >
                            Advance
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer Summary */}
        <div className="p-3 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b] shrink-0">
          <div className="flex items-center gap-2">
            <span>Showing <strong className="text-[#0f172a]">{filteredLeads.length}</strong> of {leads.length} accounts</span>
            <span>·</span>
            <span>Total Value: <strong className="text-[#0f172a] font-mono tabular-nums">${filteredLeads.reduce((a, c) => a + c.dealValue, 0).toLocaleString()}</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px]">Auto-refreshed every 15s</span>
          </div>
        </div>
      </div>
    </div>
  );
};
