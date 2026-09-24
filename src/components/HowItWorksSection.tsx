import React from 'react';
import { 
  Globe, 
  Cpu, 
  Sparkles, 
  Layers, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  WhatsAppIcon,
  Table,
  Calendar,
  Zap
} from './icons';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Customer Enquiry Comes In",
      desc: "Prospect submits your website form, clicks a Facebook/Instagram lead ad, or starts a WhatsApp conversation.",
      tag: "Trigger Point",
      icon: Globe
    },
    {
      step: "02",
      title: "Make Automation Receives Enquiry",
      desc: "A secure webhook captures the lead payload instantly and activates the automation scenario within 200ms.",
      tag: "Webhook Engine",
      icon: Cpu
    },
    {
      step: "03",
      title: "AI Agent Analyses Message",
      desc: "The AI model evaluates message intent, extracts contact data, determines urgency, and calculates a qualification score.",
      tag: "AI Intelligence",
      icon: Sparkles
    },
    {
      step: "04",
      title: "Intelligent Router Selects Path",
      desc: "Branching logic routes the lead: urgent doctor consults go to priority triage; price inquiries receive detailed PDF brochures.",
      tag: "Decision Router",
      icon: Layers
    },
    {
      step: "05",
      title: "Business Services Connected",
      desc: "Live APIs trigger in parallel: Google Sheets appends the record, WhatsApp sends the message, and Calendar reserves the slot.",
      tag: "Multi-Service Sync",
      icon: Table
    },
    {
      step: "06",
      title: "Customer Receives Instant Response",
      desc: "The prospective client gets a warm, personalized response in under 60 seconds while your competitors are still offline.",
      tag: "Instant Conversion",
      icon: Send
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            Simple 6-Step Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            How the Automation Operates Behind the Scenes
          </h2>
          <p className="mt-3 text-base text-[#64748b]">
            A rock-solid pipeline built with modern webhook automation, natural language AI, and your favorite business tools.
          </p>
        </div>

        {/* Visual Pipeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] relative hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#cbd5e1] flex items-center justify-center text-[#0f172a] group-hover:border-emerald-400 group-hover:text-emerald-700 transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    STEP {item.step}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b] block mb-1">
                  {item.tag}
                </span>

                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Connection Diagram */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#f1f5f9] via-emerald-50/50 to-[#f1f5f9] border border-[#cbd5e1] text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-3">
            Connected Tool Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#0f172a]">
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#cbd5e1] shadow-xs">
              🌐 Your Website / WordPress / Webflow
            </span>
            <span className="text-emerald-600 font-bold">➔</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#cbd5e1] shadow-xs">
              ⚡ Webhook Engine
            </span>
            <span className="text-emerald-600 font-bold">➔</span>
            <span className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg shadow-xs">
              🤖 AI Lead Intelligence
            </span>
            <span className="text-emerald-600 font-bold">➔</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#cbd5e1] shadow-xs">
              💬 WhatsApp Cloud API
            </span>
            <span className="text-emerald-600 font-bold">+</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#cbd5e1] shadow-xs">
              📊 Google Sheets
            </span>
            <span className="text-emerald-600 font-bold">+</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#cbd5e1] shadow-xs">
              📅 Google Calendar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
