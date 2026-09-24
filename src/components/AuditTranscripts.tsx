import React, { useState } from 'react';
import { LeadAccount, CommunicationMessage } from '../types/crm';
import { 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  Bot, 
  User, 
  Sparkles, 
  ShieldCheck, 
  CalendarCheck,
  Search,
  CheckCircle2
} from 'lucide-react';

interface AuditTranscriptsProps {
  leads: LeadAccount[];
  onSelectLead: (lead: LeadAccount) => void;
}

export const AuditTranscripts: React.FC<AuditTranscriptsProps> = ({
  leads,
  onSelectLead
}) => {
  const [selectedLeadId, setSelectedLeadId] = useState<string>(leads[0]?.id || '');
  const [channelFilter, setChannelFilter] = useState<'all' | 'sms' | 'email' | 'call_transcript'>('all');

  const activeLead = leads.find((l) => l.id === selectedLeadId) || leads[0];

  const filteredMessages = activeLead?.transcript.filter((msg) => {
    if (channelFilter === 'all') return true;
    return msg.channel === channelFilter;
  }) || [];

  return (
    <div className="p-6 h-[calc(100vh-4rem)] flex flex-col bg-[#faf8ff] overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#e2e8f0] shrink-0">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a] flex items-center gap-2">
            <span>Live Communication Transcripts & Autonomous Audit</span>
          </h2>
          <p className="text-xs text-[#64748b] mt-0.5">
            Full omni-channel audit trail across conversational SMS, executive email negotiation, and calendar lock events.
          </p>
        </div>

        {/* Channel filter tabs */}
        <div className="flex items-center gap-1 p-1 bg-white border border-[#e2e8f0] rounded-lg">
          <button
            onClick={() => setChannelFilter('all')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              channelFilter === 'all'
                ? 'bg-[#f1f5f9] text-[#0f172a]'
                : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
          >
            All Channels
          </button>
          <button
            onClick={() => setChannelFilter('sms')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              channelFilter === 'sms'
                ? 'bg-[#f1f5f9] text-[#0f172a]'
                : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
          >
            SMS Dispatch
          </button>
          <button
            onClick={() => setChannelFilter('email')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              channelFilter === 'email'
                ? 'bg-[#f1f5f9] text-[#0f172a]'
                : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
          >
            Executive Email
          </button>
        </div>
      </div>

      {/* Main Split: Left Lead Selector & Right Transcript Stream */}
      <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
        {/* Left Column: Accounts List */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-xl border border-[#e2e8f0] flex flex-col overflow-hidden shadow-xs">
          <div className="p-3 bg-[#f8fafc] border-b border-[#e2e8f0] text-xs font-bold text-[#475569] uppercase tracking-wider">
            Engaged Accounts ({leads.length})
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#f1f5f9]">
            {leads.map((lead) => {
              const isSelected = lead.id === activeLead?.id;
              const hasTranscripts = lead.transcript.length > 0;

              return (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLeadId(lead.id)}
                  className={`p-3.5 cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#eef2ff] border-l-4 border-l-[#4648d4]' : 'hover:bg-[#f8fafc]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-bold text-xs text-[#0f172a] truncate">
                      {lead.company}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#0f172a] tabular-nums">
                      ${(lead.dealValue / 1000).toFixed(0)}k
                    </span>
                  </div>

                  <div className="text-[11px] text-[#64748b] flex items-center justify-between">
                    <span>{lead.contactName}</span>
                    <span className="font-mono text-[10px] text-[#94a3b8]">
                      {lead.transcript.length} msgs
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Full Transcript & AI Reasoning View */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-xl border border-[#e2e8f0] flex flex-col overflow-hidden shadow-xs">
          {/* Active Account Banner */}
          <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {activeLead?.avatarUrl ? (
                <img 
                  src={activeLead.avatarUrl} 
                  alt={activeLead.contactName} 
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-[#cbd5e1]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#eef2ff] text-[#4648d4] font-bold flex items-center justify-center text-sm">
                  {activeLead?.contactName.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="font-bold text-sm text-[#0f172a]">
                  {activeLead?.company} · {activeLead?.contactName}
                </h3>
                <p className="text-xs text-[#64748b]">
                  {activeLead?.contactTitle} ({activeLead?.email})
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectLead(activeLead)}
              className="px-3 py-1.5 bg-white border border-[#cbd5e1] hover:border-[#6366f1] text-[#0f172a] text-xs font-semibold rounded-lg transition-all shadow-xs"
            >
              Open Full Dossier
            </button>
          </div>

          {/* Transcript Dialogue Scroll */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#f8fafc]/50">
            {filteredMessages.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-[#94a3b8]">
                <MessageSquare className="w-8 h-8 text-[#cbd5e1] mb-2" />
                <p className="text-xs font-medium">No recorded transcripts for this filter</p>
                <p className="text-[11px] text-[#cbd5e1] mt-0.5">Dispatches will appear once autonomous agent triggers</p>
              </div>
            ) : (
              filteredMessages.map((msg) => {
                const isAi = msg.sender === 'ai';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 max-w-[85%] ${
                      isAi ? 'mr-auto' : 'ml-auto flex-row-reverse'
                    }`}
                  >
                    <div className="shrink-0 pt-0.5">
                      {isAi ? (
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#4648d4] to-[#6063ee] text-white flex items-center justify-center text-xs shadow-xs">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                          {activeLead.contactName.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className={`flex items-center gap-2 mb-1 text-[11px] ${isAi ? '' : 'justify-end'}`}>
                        <span className="font-bold text-[#0f172a]">
                          {isAi ? 'Autonomous Executive Agent' : activeLead.contactName}
                        </span>
                        <span className="font-mono text-[#94a3b8] text-[10px]">{msg.timestamp}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#f1f5f9] rounded text-[#64748b] uppercase">
                          {msg.channel}
                        </span>
                      </div>

                      <div
                        className={`p-3.5 rounded-xl text-xs leading-relaxed ${
                          isAi
                            ? 'bg-white border border-[#e2e8f0] text-[#1e293b] shadow-xs'
                            : 'bg-[#4648d4] text-white shadow-xs'
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* AI Agent Reasoning Trace Card */}
            {activeLead && (
              <div className="p-3.5 bg-[#f5f3ff] rounded-xl border border-[#ddd6fe] text-xs text-[#5b21b6] mt-6">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Agent Autonomous Reasoning Trace</span>
                </div>
                <p className="text-[11px] text-[#6d28d9] leading-relaxed">
                  Calculated intent velocity score of <strong>{activeLead.intentScore}/100</strong>. Verified target budget ARR exceeds $75,000 threshold. Extracted schedule preference and locked Google Meet with Elena Vance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
