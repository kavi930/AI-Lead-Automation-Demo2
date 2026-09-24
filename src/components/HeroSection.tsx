import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  CalendarCheck, 
  Building2, 
  Zap, 
  ShieldCheck,
  CheckCheck,
  PhoneCall
} from './icons';

export const HeroSection: React.FC = () => {
  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#faf8ff]">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-100/40 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-indigo-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Positioning Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                AI Lead Automation for Clinics, Gyms & Coaching Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Turn Every Enquiry Into a Followed-Up Lead — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#0d9488]">Automatically</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Capture website enquiries, qualify leads with AI, respond through WhatsApp and email, and automate appointment follow-ups — without your staff manually chasing every enquiry.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToDemo}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] rounded-xl shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                See Live Automation Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0f172a] bg-white hover:bg-[#f1f5f9] border border-[#cbd5e1] rounded-xl shadow-xs transition-all hover:border-[#94a3b8] cursor-pointer"
              >
                Book a Demo
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-black text-[#0f172a]">&lt; 60s</p>
                <p className="text-xs font-medium text-[#64748b]">Instant response</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#059669]">24/7</p>
                <p className="text-xs font-medium text-[#64748b]">No missed night leads</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0f172a]">3.4x</p>
                <p className="text-xs font-medium text-[#64748b]">Booking conversion</p>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Dashboard Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Workflow Container */}
              <div className="bg-white rounded-2xl border border-[#cbd5e1] shadow-2xl p-5 sm:p-6 space-y-4">
                {/* Header bar of card */}
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-semibold text-[#64748b] ml-2">
                      Live Enquiry Engine
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Real-time Workflow
                  </span>
                </div>

                {/* Step Flow Path Badge Bar */}
                <div className="overflow-x-auto pb-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#475569] whitespace-nowrap min-w-max">
                    <span className="px-2 py-1 bg-[#f1f5f9] rounded text-[#0f172a]">Customer Enquiry</span>
                    <span className="text-[#94a3b8]">→</span>
                    <span className="px-2 py-1 bg-indigo-50 text-[#4338ca] rounded">AI Qualification</span>
                    <span className="text-[#94a3b8]">→</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded font-black">HOT LEAD</span>
                    <span className="text-[#94a3b8]">→</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded">WhatsApp</span>
                    <span className="text-[#94a3b8]">→</span>
                    <span className="px-2 py-1 bg-[#f1f5f9] rounded">Staff Alert</span>
                    <span className="text-[#94a3b8]">→</span>
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Appointment</span>
                  </div>
                </div>

                {/* CARD 1: NEW ENQUIRY */}
                <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                      New Website Enquiry
                    </span>
                    <span className="text-[10px] font-mono text-[#94a3b8]">Just now (0.4s ago)</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#0f172a]">Rahul Mehta</p>
                      <p className="text-xs text-[#059669] font-semibold">Dental Consultation</p>
                    </div>
                    <span className="text-xs font-mono text-[#64748b] bg-white px-2 py-0.5 rounded border border-[#e2e8f0]">
                      +91 98201 •••••
                    </span>
                  </div>
                  <p className="text-xs text-[#334155] italic mt-2 bg-white p-2 rounded-lg border border-[#e2e8f0]">
                    "I want an appointment tomorrow."
                  </p>
                </div>

                {/* CARD 2: AI ANALYSIS */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50/60 to-indigo-50/60 border border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669]">
                        AI Real-Time Analysis
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-600 text-white shadow-xs">
                      Confidence 98%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-xs">
                      <span className="block text-[10px] text-[#64748b]">Lead Status</span>
                      <span className="font-extrabold text-emerald-700">HOT LEAD</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-xs">
                      <span className="block text-[10px] text-[#64748b]">Intent</span>
                      <span className="font-bold text-[#0f172a]">Appointment</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-xs">
                      <span className="block text-[10px] text-[#64748b]">Priority</span>
                      <span className="font-bold text-rose-600">HIGH</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-xs">
                      <span className="block text-[10px] text-[#64748b]">Human Required</span>
                      <span className="font-bold text-indigo-700">YES</span>
                    </div>
                  </div>
                </div>

                {/* CARD 3: AUTOMATION COMPLETED */}
                <div className="p-3.5 rounded-xl bg-white border border-[#cbd5e1] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a]">
                      Autonomous Actions Executed
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold">100% Automated</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-[#0f172a] bg-[#f8fafc] p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Lead saved in Google Sheets</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0f172a] bg-[#f8fafc] p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Staff notified on WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0f172a] bg-[#f8fafc] p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Instant WhatsApp response sent</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0f172a] bg-[#f8fafc] p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dr. Calendar availability checked</span>
                    </div>
                  </div>
                </div>

                {/* Footer simulation status */}
                <div className="flex items-center justify-between text-[11px] text-[#64748b] pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    Total processing time: <strong>1.8 seconds</strong>
                  </span>
                  <span className="font-semibold text-emerald-700">Ready for Next Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
