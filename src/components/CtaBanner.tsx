import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from './icons';

export const CtaBanner: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 fill-emerald-400" />
          Turn Website Traffic Into Confirmed Clients
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Want to See This Automation Running on Your Business?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I'll show you how your website enquiries can automatically flow into lead qualification, WhatsApp, email and appointment workflows.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToDemo}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all cursor-pointer"
          >
            Try Live Demo
          </button>
        </div>

        {/* Benefits reminder */}
        <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No Long-Term Contracts
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Zero Software Installation Required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Live In Under 7 Days
          </span>
        </div>
      </div>
    </section>
  );
};
