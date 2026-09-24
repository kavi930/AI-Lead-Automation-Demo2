import React from 'react';
import { 
  Kanban, 
  Table, 
  Workflow, 
  MessageSquareText, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Sparkles,
  Layers
} from './icons';

interface SidebarProps {
  currentView: 'pipeline' | 'table' | 'workflow' | 'transcripts' | 'analytics';
  setCurrentView: (view: 'pipeline' | 'table' | 'workflow' | 'transcripts' | 'analytics') => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  leadsCount: number;
  totalPipelineValue: number;
  hotLeadsCount: number;
  userAvatar?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  setCurrentView,
  collapsed,
  setCollapsed,
  leadsCount,
  totalPipelineValue,
  hotLeadsCount,
  userAvatar
}) => {
  const navItems = [
    {
      id: 'pipeline' as const,
      label: 'Autonomous Pipeline',
      icon: Kanban,
      badge: `${leadsCount}`
    },
    {
      id: 'table' as const,
      label: 'Lead Accounts Grid',
      icon: Table,
      badge: undefined
    },
    {
      id: 'workflow' as const,
      label: 'Automation Trees',
      icon: Workflow,
      badge: 'LIVE'
    },
    {
      id: 'transcripts' as const,
      label: 'Audit & Transcripts',
      icon: MessageSquareText,
      badge: undefined
    },
    {
      id: 'analytics' as const,
      label: 'Conversion Velocity',
      icon: BarChart3,
      badge: undefined
    }
  ];

  return (
    <aside 
      className={`relative flex flex-col shrink-0 border-r border-[#e2e7ff] bg-[#faf8ff] transition-all duration-300 ease-in-out z-20 ${
        collapsed ? 'w-[72px]' : 'w-[280px]'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#e2e7ff]">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#4648d4] to-[#6063ee] flex items-center justify-center text-white shadow-sm shrink-0">
            <Layers className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col truncate">
              <span className="font-extrabold text-[15px] tracking-tight text-[#131b2e] leading-tight">
                Executive Precision
              </span>
              <span className="text-[11px] font-medium text-[#64748b] tracking-wider uppercase">
                Autonomous CRM
              </span>
            </div>
          )}
        </div>

        {/* Toggle Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md text-[#64748b] hover:text-[#131b2e] hover:bg-[#eaedff] transition-colors"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="p-3 flex-1 flex flex-col gap-1 overflow-y-auto">
        <div className="px-2 py-1 mb-1">
          {!collapsed && (
            <span className="text-[10px] font-bold text-[#767586] tracking-widest uppercase">
              Operational Workspace
            </span>
          )}
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                isActive
                  ? 'bg-[#ffffff] text-[#4648d4] shadow-sm font-semibold border border-[#e2e7ff]'
                  : 'text-[#334155] hover:bg-[#f2f3ff] hover:text-[#0f172a]'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon 
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive ? 'text-[#4648d4]' : 'text-[#64748b] group-hover:text-[#334155]'
                }`} 
              />
              {!collapsed && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span 
                  className={`text-[11px] px-1.5 py-0.5 rounded font-mono font-medium ${
                    item.badge === 'LIVE'
                      ? 'bg-[#e0e7ff] text-[#4338ca]'
                      : 'bg-[#f1f5f9] text-[#64748b]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Live Operational Metrics Card (when expanded) */}
        {!collapsed && (
          <div className="mt-6 mx-1 p-3.5 rounded-xl bg-[#ffffff] border border-[#e2e7ff] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#131b2e] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#e11d48]" />
                Live Pipeline State
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#059669] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse"></span>
                Nominal
              </span>
            </div>

            <div className="space-y-2 mt-3 text-xs">
              <div className="flex justify-between items-center text-[#464554]">
                <span>Active ARR</span>
                <span className="font-mono font-semibold text-[#131b2e] tabular-nums">
                  ${(totalPipelineValue / 1000).toFixed(0)}k
                </span>
              </div>
              <div className="flex justify-between items-center text-[#464554]">
                <span>Hot Inbound Queue</span>
                <span className="font-mono font-semibold text-[#e11d48] tabular-nums">
                  {hotLeadsCount} Leads
                </span>
              </div>
              <div className="flex justify-between items-center text-[#464554]">
                <span>Avg SLA Response</span>
                <span className="font-mono font-semibold text-[#059669] tabular-nums">
                  1m 42s
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] text-[#64748b]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#4648d4]" />
                SOC2 Certified
              </span>
              <span className="font-mono">99.98% SLA</span>
            </div>
          </div>
        )}
      </div>

      {/* User / Assigned Executive Card */}
      <div className="p-3 border-t border-[#e2e7ff] bg-[#faf8ff]">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-1.5 rounded-lg hover:bg-[#f2f3ff] transition-colors`}>
          {userAvatar ? (
            <img 
              src={userAvatar} 
              alt="Elena Vance" 
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#cbd5e1] shrink-0" 
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#4648d4] text-white flex items-center justify-center font-bold text-xs shrink-0">
              EV
            </div>
          )}

          {!collapsed && (
            <div className="flex flex-col truncate flex-1">
              <span className="text-xs font-semibold text-[#131b2e] truncate">
                Elena Vance
              </span>
              <span className="text-[11px] text-[#64748b] truncate">
                VP Revenue Automation
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
