import React from 'react';
import { LeadAccount } from '../types/crm';
import { 
  TrendingUp, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Calendar, 
  Users, 
  BarChart, 
  ArrowUpRight 
} from './icons';

interface AnalyticsViewProps {
  leads: LeadAccount[];
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ leads }) => {
  const totalValue = leads.reduce((a, c) => a + c.dealValue, 0);
  const wonLeads = leads.filter((l) => l.stage === 'won');
  const scheduledLeads = leads.filter((l) => l.stage === 'scheduled');
  const wonValue = wonLeads.reduce((a, c) => a + c.dealValue, 0);

  const channels = [
    { name: 'Enterprise Form', share: '42%', velocity: '1m 14s', conv: '68%' },
    { name: 'Product Signal', share: '28%', velocity: '48s', conv: '82%' },
    { name: 'API Webhook', share: '18%', velocity: '12s', conv: '74%' },
    { name: 'Executive Referral', share: '12%', velocity: '3m 10s', conv: '91%' }
  ];

  return (
    <div className="p-6 h-[calc(100vh-4rem)] overflow-y-auto bg-[#faf8ff] space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-[#e2e8f0]">
        <h2 className="text-lg font-bold text-[#0f172a]">
          Autonomous Conversion & Velocity Analytics
        </h2>
        <p className="text-xs text-[#64748b] mt-0.5">
          Real-time measurement of automated SLA response latency, qualification velocity, and enterprise ARR yield.
        </p>
      </div>

      {/* Top 4 KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-xs">
          <div className="flex items-center justify-between text-[#64748b] text-xs font-semibold mb-2">
            <span>Total Active Pipeline</span>
            <TrendingUp className="w-4 h-4 text-[#4648d4]" />
          </div>
          <div className="font-mono text-2xl font-extrabold text-[#0f172a] tabular-nums">
            ${(totalValue / 1000).toFixed(0)}k
          </div>
          <div className="mt-2 flex items-center text-[11px] text-[#059669] font-medium gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+24.6% vs previous cycle</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-xs">
          <div className="flex items-center justify-between text-[#64748b] text-xs font-semibold mb-2">
            <span>Median SLA First Touch</span>
            <Clock className="w-4 h-4 text-[#0284c7]" />
          </div>
          <div className="font-mono text-2xl font-extrabold text-[#0f172a] tabular-nums">
            1m 42s
          </div>
          <div className="mt-2 flex items-center text-[11px] text-[#059669] font-medium gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>4.8x faster than industry median</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-xs">
          <div className="flex items-center justify-between text-[#64748b] text-xs font-semibold mb-2">
            <span>Calendar Lock Rate</span>
            <Calendar className="w-4 h-4 text-[#7c3aed]" />
          </div>
          <div className="font-mono text-2xl font-extrabold text-[#0f172a] tabular-nums">
            78.4%
          </div>
          <div className="mt-2 flex items-center text-[11px] text-[#059669] font-medium gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+38% meeting show rate</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-xs">
          <div className="flex items-center justify-between text-[#64748b] text-xs font-semibold mb-2">
            <span>Closed Won Yield</span>
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
          </div>
          <div className="font-mono text-2xl font-extrabold text-[#0f172a] tabular-nums">
            ${(wonValue / 1000).toFixed(0)}k
          </div>
          <div className="mt-2 flex items-center text-[11px] text-[#64748b] font-mono">
            <span>{wonLeads.length} enterprise accounts signed</span>
          </div>
        </div>
      </div>

      {/* Breakdown Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Channel Ingress Performance Table */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs">
          <h3 className="font-bold text-sm text-[#0f172a] mb-1">
            Ingress Channel Velocity & Conversion
          </h3>
          <p className="text-xs text-[#64748b] mb-4">
            Response latency and calendar booking yield across autonomous trigger sources.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f8fafc] text-[#475569] font-semibold border-b border-[#e2e8f0]">
                <tr>
                  <th className="py-2.5 px-3">Ingress Channel</th>
                  <th className="py-2.5 px-3">Volume Share</th>
                  <th className="py-2.5 px-3">First Touch Velocity</th>
                  <th className="py-2.5 px-3 text-right">Meeting Conversion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {channels.map((ch, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafc]">
                    <td className="py-3 px-3 font-semibold text-[#0f172a]">{ch.name}</td>
                    <td className="py-3 px-3 font-mono text-[#475569] tabular-nums">{ch.share}</td>
                    <td className="py-3 px-3 font-mono text-[#059669] font-semibold tabular-nums">{ch.velocity}</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-[#0f172a] tabular-nums">{ch.conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SLA Compliance Gauge & Breakdown */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-sm text-[#0f172a] mb-1">
              Autonomous SLA Performance
            </h3>
            <p className="text-xs text-[#64748b] mb-4">
              99.8% of inbound high-intent leads touched in under 5 minutes.
            </p>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[#0f172a]">&lt; 2 Minutes (Autonomous Instant)</span>
                  <span className="font-mono font-bold text-[#4648d4] tabular-nums">84.2%</span>
                </div>
                <div className="w-full h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#4648d4] rounded-full" style={{ width: '84.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[#0f172a]">2 - 5 Minutes (Standard SLA)</span>
                  <span className="font-mono font-bold text-[#0284c7] tabular-nums">13.8%</span>
                </div>
                <div className="w-full h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0284c7] rounded-full" style={{ width: '13.8%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[#0f172a]">&gt; 5 Minutes (Human Escalation)</span>
                  <span className="font-mono font-bold text-[#d97706] tabular-nums">2.0%</span>
                </div>
                <div className="w-full h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#d97706] rounded-full" style={{ width: '2.0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#f1f5f9] text-[11px] text-[#64748b] flex items-center justify-between">
            <span>Target Benchmark: &lt; 5m</span>
            <span className="font-semibold text-[#059669]">Compliant · Zero Breach</span>
          </div>
        </div>
      </div>
    </div>
  );
};
