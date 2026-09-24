import React from 'react';
import { 
  Sparkles, 
  WhatsAppIcon, 
  Mail, 
  Table, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from './icons';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI Lead Qualification",
      desc: "Instantly understands customer intent, detects urgency, identifies the exact service requested, and scores leads so your staff focuses only on high-value buyers.",
      icon: Sparkles,
      color: "from-indigo-500 to-indigo-600",
      pill: "Intelligence"
    },
    {
      title: "WhatsApp Automation",
      desc: "Delivers instantaneous personalized replies on the messaging app your customers check first. Shares clinic directions, fee structures, and direct slot booking links.",
      icon: WhatsAppIcon,
      color: "from-emerald-500 to-emerald-600",
      pill: "24/7 Response"
    },
    {
      title: "Email & Internal Alerts",
      desc: "Sends rich confirmation packs to prospects while dispatching clear lead briefs to your receptionist, doctor, or gym manager with 1-tap call buttons.",
      icon: Mail,
      color: "from-blue-500 to-blue-600",
      pill: "Zero Drop-Off"
    },
    {
      title: "Lead Management & CRM Sync",
      desc: "Stores every lead, phone number, qualification tag, and transcript in Google Sheets or your CRM in real-time. No manual data entry ever again.",
      icon: Table,
      color: "from-teal-500 to-teal-600",
      pill: "Structured Data"
    },
    {
      title: "Appointment Automation",
      desc: "Connects with your Google Calendar to verify live availability. Customers book verified slots without back-and-forth phone calls or double bookings.",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      pill: "Live Availability"
    },
    {
      title: "Automated Multi-Touch Follow-Up",
      desc: "Automatically checks in with prospective patients or gym members 24h and 72h later if they haven't booked. Turns hesitation into revenue.",
      icon: Clock,
      color: "from-amber-500 to-amber-600",
      pill: "Boosts Show-Up"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8ff] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            Engineered for High-Conversion Local Businesses
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Complete Automation Features for Real Growth
          </h2>
          <p className="mt-3 text-base text-[#64748b]">
            Every capability you need to eliminate response lag, empower your front desk, and book more high-paying clients.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#0f172a] group-hover:scale-105 group-hover:border-emerald-200 transition-all">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {feat.pill}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0f172a] mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f1f5f9] flex items-center text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  Fully automated via LeadFlow AI
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
