import React from 'react';
import { Plus, Search, Download, Clock, SlidersHorizontal } from 'lucide-react';

interface TopHeaderProps {
  currentView: 'pipeline' | 'table' | 'workflow' | 'transcripts' | 'analytics';
  onNewLeadClick: () => void;
  onOpenCommandPalette: () => void;
  onExportCsv: () => void;
  filterTemperature: 'all' | 'hot' | 'sla_risk' | 'scheduled';
  setFilterTemperature: (filter: 'all' | 'hot' | 'sla_risk' | 'scheduled') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentView,
  onNewLeadClick,
  onOpenCommandPalette,
  onExportCsv,
  filterTemperature,
  setFilterTemperature,
  searchQuery,
  setSearchQuery
}) => {
  const getBreadcrumbTitle = () => {
    switch (currentView) {
      case 'pipeline':
        return 'Autonomous Pipeline';
      case 'table':
        return 'Lead Accounts Ledger';
      case 'workflow':
        return 'Automation Logic Trees';
      case 'transcripts':
        return 'Communication Audit';
      case 'analytics':
        return 'Velocity Analytics';
      default:
        return 'Executive Workspace';
    }
  };

  return (
    <header className="h-16 px-6 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md flex items-center justify-between gap-4 sticky top-0 z-30">
      {/* Zone 1: Brand & View Context */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="font-extrabold text-base text-[#0f172a] tracking-tight">
          Executive Precision
        </span>
        <span className="text-[#cbd5e1] font-light">/</span>
        <span className="text-sm font-semibold text-[#475569]">
          {getBreadcrumbTitle()}
        </span>
      </div>

      {/* Zone 2: Fast Filter Tabs (Single-line interactive segmented control) */}
      <div className="hidden md:flex items-center gap-1 p-1 bg-[#f1f5f9] rounded-lg shrink-0">
        <button
          onClick={() => setFilterTemperature('all')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
            filterTemperature === 'all'
              ? 'bg-white text-[#0f172a] shadow-xs'
              : 'text-[#64748b] hover:text-[#0f172a]'
          }`}
        >
          All Accounts
        </button>

        <button
          onClick={() => setFilterTemperature('hot')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
            filterTemperature === 'hot'
              ? 'bg-white text-[#be123c] shadow-xs'
              : 'text-[#64748b] hover:text-[#be123c]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
          Hot Queue
        </button>

        <button
          onClick={() => setFilterTemperature('sla_risk')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
            filterTemperature === 'sla_risk'
              ? 'bg-white text-[#b45309] shadow-xs'
              : 'text-[#64748b] hover:text-[#b45309]'
          }`}
        >
          <Clock className="w-3 h-3 text-[#d97706]" />
          SLA Critical
        </button>

        <button
          onClick={() => setFilterTemperature('scheduled')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
            filterTemperature === 'scheduled'
              ? 'bg-white text-[#0369a1] shadow-xs'
              : 'text-[#64748b] hover:text-[#0369a1]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
          Calls Locked
        </button>
      </div>

      {/* Zone 3: Search, Command, Export & Primary CTA */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* Quick Search */}
        <div className="relative hidden lg:block w-48">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search accounts..."
            className="w-full pl-8 pr-3 py-1.5 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-xs text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/15 transition-all"
          />
        </div>

        {/* Command shortcut */}
        <button
          onClick={onOpenCommandPalette}
          className="px-2.5 py-1.5 bg-white border border-[#e2e8f0] rounded-lg text-xs text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] transition-all flex items-center gap-1.5"
          title="Command Palette (Cmd+K)"
        >
          <span className="font-mono text-[11px] bg-[#f1f5f9] px-1 py-0.5 rounded text-[#475569]">⌘K</span>
        </button>

        {/* Export CSV button */}
        <button
          onClick={onExportCsv}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e2e8f0] rounded-lg text-xs font-medium text-[#334155] hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all whitespace-nowrap"
          title="Export CSV"
        >
          <Download className="w-3.5 h-3.5 text-[#64748b]" />
          <span>Export</span>
        </button>

        {/* Primary CTA: Add Inbound Lead */}
        <button
          onClick={onNewLeadClick}
          className="btn-primary-gradient px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm whitespace-nowrap active:scale-[0.98] transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Lead</span>
        </button>
      </div>
    </header>
  );
};
