import React from 'react';
import { Zap, WhatsAppIcon, Mail, Phone } from './icons';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#059669] to-[#10b981] flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                LeadFlow<span className="text-[#10b981]">.AI</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              AI Lead Automation for Clinics, Gyms, Coaching Businesses & Enquiry-Driven Local Services. Turn website visitors into booked appointments automatically.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Live 24/7 Operations
              </span>
              <span>•</span>
              <span>Make.com + AI Architecture</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('demo')} className="hover:text-emerald-400 transition-colors font-medium">
                  Live Demo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-white transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
                  Contact & Book Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Industries Supported */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Target Solutions
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Dental Clinics
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Medical Clinics & OPD
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Gyms & Fitness Centres
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Yoga & Pilates Studios
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Coaching Centres
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Educational Institutes
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} LeadFlow AI Automation Services. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Engineered for high speed-to-lead conversions.
          </p>
        </div>
      </div>
    </footer>
  );
};
