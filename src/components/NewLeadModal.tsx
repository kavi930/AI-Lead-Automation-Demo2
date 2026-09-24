import React, { useState } from 'react';
import { LeadAccount, ChannelSource } from '../types/crm';
import { X, Sparkles, Building2, Mail, Phone, DollarSign, Layers } from 'lucide-react';

interface NewLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadAccount, 'id' | 'events' | 'transcript'>) => void;
}

export const NewLeadModal: React.FC<NewLeadModalProps> = ({
  isOpen,
  onClose,
  onAddLead
}) => {
  if (!isOpen) return null;

  const [company, setCompany] = useState('');
  const [domain, setDomain] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactTitle, setContactTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dealValue, setDealValue] = useState('125000');
  const [channel, setChannel] = useState<ChannelSource>('Enterprise Form');
  const [techStack, setTechStack] = useState('AWS, Kubernetes, Snowflake');
  const [notes, setNotes] = useState('Urgent inbound evaluation requested via website demo form.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !contactName || !email) return;

    const parsedValue = parseInt(dealValue.replace(/[^0-9]/g, ''), 10) || 100000;

    onAddLead({
      company,
      domain: domain || `${company.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
      contactName,
      contactTitle: contactTitle || 'Executive Lead',
      email,
      phone: phone || '+1 (555) 234-5678',
      stage: 'inbound',
      dealValue: parsedValue,
      temperature: 'hot',
      slaSecondsRemaining: 300,
      slaTotalSeconds: 300,
      channel,
      assignedExecutive: 'Elena Vance (Enterprise Lead)',
      lastActionText: 'Autonomous Agent initiating firmographic enrichment & SLA clock',
      lastActionTime: 'Just now',
      techStack: techStack.split(',').map((s) => s.trim()).filter(Boolean),
      employees: '500+',
      intentScore: 92,
      notes
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-2xl max-w-lg w-full overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#0f172a]">
              Ingest Inbound Lead
            </span>
            <span className="text-[11px] font-mono text-[#4648d4] bg-[#eef2ff] px-2 py-0.5 rounded font-semibold">
              Live Pipeline Ingress
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#64748b] hover:text-[#0f172a] hover:bg-[#e2e8f0] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Apex BioTech"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Domain URL
              </label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g. apexbio.io"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Contact Full Name *
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Contact Title
              </label>
              <input
                type="text"
                value={contactTitle}
                onChange={(e) => setContactTitle(e.target.value)}
                placeholder="e.g. Chief Technology Officer"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Corporate Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="s.jenkins@apexbio.io"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Estimated ARR Value ($)
              </label>
              <input
                type="text"
                value={dealValue}
                onChange={(e) => setDealValue(e.target.value)}
                placeholder="125000"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] font-mono focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Ingress Channel
              </label>
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value as ChannelSource)}
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              >
                <option value="Enterprise Form">Enterprise Form</option>
                <option value="Product Signal">Product Signal</option>
                <option value="API Webhook">API Webhook</option>
                <option value="Inbound SDR">Inbound SDR</option>
                <option value="Executive Referral">Executive Referral</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-[#475569] block mb-1">
                Tech Stack (comma separated)
              </label>
              <input
                type="text"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="AWS, Kubernetes, Kafka"
                className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#475569] block mb-1">
              Context & Inbound Notes
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] focus:bg-white focus:outline-none focus:border-[#4648d4]"
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#f1f5f9]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary-gradient px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Ingress & SLA Clock</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
