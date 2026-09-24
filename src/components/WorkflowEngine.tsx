import React, { useState } from 'react';
import { WorkflowNode } from '../types/crm';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Sliders, 
  Zap, 
  ArrowDown, 
  Sparkles, 
  Terminal, 
  Layers, 
  ShieldAlert, 
  ChevronRight, 
  Settings 
} from './icons';

interface WorkflowEngineProps {
  nodes: WorkflowNode[];
  onTriggerSimulation: () => void;
  isSimulating: boolean;
  simulationStep: number;
  simulationLogs: string[];
}

export const WorkflowEngine: React.FC<WorkflowEngineProps> = ({
  nodes,
  onTriggerSimulation,
  isSimulating,
  simulationStep,
  simulationLogs
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id || 'node-trigger-1');

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  const getNodeTypeBadge = (type: WorkflowNode['type']) => {
    switch (type) {
      case 'trigger':
        return <span className="text-[10px] font-bold uppercase tracking-wider text-[#4648d4] bg-[#eef2ff] px-2 py-0.5 rounded">Trigger Node</span>;
      case 'condition':
        return <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c3aed] bg-[#f5f3ff] px-2 py-0.5 rounded">Condition Gate</span>;
      case 'action':
        return <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7] bg-[#f0f9ff] px-2 py-0.5 rounded">Autonomous Action</span>;
      case 'fallback':
        return <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706] bg-[#fffbeb] px-2 py-0.5 rounded">SLA Escalation</span>;
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-4rem)] flex flex-col bg-[#faf8ff] overflow-hidden">
      {/* Header & Simulation Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#e2e8f0] shrink-0">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a] flex items-center gap-2">
            <span>Autonomous Pipeline Logic Tree</span>
            <span className="text-xs font-normal text-[#64748b]">| Enterprise Inbound v3.2</span>
          </h2>
          <p className="text-xs text-[#64748b] mt-0.5">
            Engineered sequence executing autonomous lead enrichment, intent triage, and calendar locks.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onTriggerSimulation}
            disabled={isSimulating}
            className={`btn-primary-gradient px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm ${
              isSimulating ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSimulating ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating Inbound Execution ({simulationStep}/5)...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Simulate Inbound Event</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Split Layout: Flow Diagram (Left 8 cols) & Node Inspector / Logs (Right 4 cols) */}
      <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
        {/* Left: Interactive Workflow Nodes Flow */}
        <div className="col-span-12 lg:col-span-8 overflow-y-auto pr-2 pb-6 space-y-4">
          {nodes.map((node, index) => {
            const isSelected = selectedNode?.id === node.id;
            const isCurrentlyActiveInSim = isSimulating && simulationStep === index;
            const isPassedInSim = isSimulating && simulationStep > index;

            return (
              <React.Fragment key={node.id}>
                {/* Visual Connector Arrow */}
                {index > 0 && (
                  <div className="flex items-center justify-center my-1">
                    <div className="w-0.5 h-4 bg-[#cbd5e1] relative">
                      <ArrowDown className="w-3.5 h-3.5 text-[#94a3b8] absolute -bottom-2 -left-[6px]" />
                    </div>
                  </div>
                )}

                {/* Node Card */}
                <div
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`bg-white rounded-xl p-4.5 border transition-all duration-200 cursor-pointer relative ${
                    isCurrentlyActiveInSim
                      ? 'active-node-glow bg-[#f5f7ff]'
                      : isSelected
                      ? 'border-[#6366f1] shadow-sm'
                      : 'border-[#e2e8f0] hover:border-[#cbd5e1]'
                  }`}
                >
                  {/* Top Node Meta */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {getNodeTypeBadge(node.type)}
                      <span className="text-xs text-[#64748b] font-medium">·</span>
                      <span className="text-xs text-[#64748b] font-medium">{node.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCurrentlyActiveInSim ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4648d4] animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-[#4648d4]"></span>
                          In-Flight Execution
                        </span>
                      ) : isPassedInSim ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Passed
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-[#94a3b8]">Node #{index + 1}</span>
                      )}
                    </div>
                  </div>

                  {/* Node Title & Description */}
                  <div className="mb-3">
                    <h3 className="font-bold text-sm text-[#0f172a] mb-1">
                      {node.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {node.description}
                    </p>
                  </div>

                  {/* Node Config Preview Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-[#f1f5f9] text-[11px] text-[#64748b]">
                    {node.config.channel && (
                      <span className="font-mono bg-[#f8fafc] px-2 py-0.5 rounded border border-[#e2e8f0]">
                        Channel: {node.config.channel}
                      </span>
                    )}
                    {node.config.threshold && (
                      <span className="font-mono bg-[#f8fafc] px-2 py-0.5 rounded border border-[#e2e8f0]">
                        Rule: {node.config.threshold}
                      </span>
                    )}
                    {node.config.slaLimit && (
                      <span className="font-mono bg-[#fef3c7] text-[#b45309] px-2 py-0.5 rounded border border-[#fde68a]">
                        {node.config.slaLimit}
                      </span>
                    )}
                    {node.config.actionType && (
                      <span className="font-mono bg-[#eef2ff] text-[#4648d4] px-2 py-0.5 rounded border border-[#e0e7ff]">
                        Dispatch: {node.config.actionType}
                      </span>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Right: Node Inspector & Execution Terminal */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 overflow-hidden">
          {/* Node Inspector Panel */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-xs shrink-0">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] mb-3">
              <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 text-[#4648d4]" />
                Node Configuration
              </span>
              <span className="text-xs text-[#64748b] font-mono">ID: {selectedNode.id}</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[11px] font-semibold text-[#64748b] block mb-1">
                  Node Title
                </label>
                <div className="p-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-md font-semibold text-[#0f172a]">
                  {selectedNode.title}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#64748b] block mb-1">
                  Operational Description
                </label>
                <p className="text-xs text-[#334155] leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#64748b] block mb-1">
                  Parameters & Safeguards
                </label>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-2.5 font-mono text-[11px] space-y-1 text-[#334155]">
                  <div>Execution Timeout: <strong>4.00s</strong></div>
                  <div>Retry Backoff: <strong>Exponential (2x)</strong></div>
                  <div>Fallback Route: <strong>Lead AE Pager</strong></div>
                  <div>Audit Tracing: <strong>Level 3 (Full Telemetry)</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Execution Audit Terminal */}
          <div className="flex-1 bg-[#0f172a] rounded-xl border border-[#334155] p-4 flex flex-col overflow-hidden text-white shadow-md">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b] mb-2 shrink-0">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#818cf8]" />
                <span className="text-xs font-semibold text-[#e2e8f0]">Live Execution Logs</span>
              </div>
              <span className="text-[10px] font-mono text-[#94a3b8] px-1.5 py-0.5 rounded bg-[#1e293b]">
                Real-time
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1.5 font-mono text-[11px] pr-1">
              {simulationLogs.length === 0 ? (
                <div className="text-[#64748b] py-8 text-center">
                  <p>Click "Simulate Inbound Event" above to trace autonomous execution across nodes.</p>
                </div>
              ) : (
                simulationLogs.map((log, i) => (
                  <div key={i} className="leading-relaxed flex items-start gap-2">
                    <span className="text-[#818cf8] shrink-0">›</span>
                    <span className="text-[#cbd5e1]">{log}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
