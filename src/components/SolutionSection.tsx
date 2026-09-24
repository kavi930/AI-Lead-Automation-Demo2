import React from 'react';
import { 
  Globe, 
  Sparkles, 
  WhatsAppIcon, 
  Mail, 
  Table, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  PhoneCall
} from './icons';

export const SolutionSection: React.FC = () => {
  const channelSteps = [
    {
      step: "01",
      title: "Website / Webhook",
      subtitle: "Instant Capture",
      desc: "Your website enquiry, social ad lead, or landing page form enters the automation system in under 2 seconds.",
      icon: Globe,
      badge: "Fast Ingestion"
    },
    {
      step: "02",
      title: "AI Lead Engine",
      subtitle: "Semantic Intelligence",
      desc: "AI understands what the customer wants, extracts urgency, classifies intent (HOT/WARM), and determines if staff attention is required.",
      icon: Sparkles,
      badge: "Intent & Priority"
    },
    {
      step: "03",
      title: "WhatsApp Response",
      subtitle: "Customer Touchpoint",
      desc: "The customer immediately receives a personalized, natural WhatsApp message answering their specific question with available appointment slots.",
      icon: WhatsAppIcon,
      badge: "98% Open Rate"
    },
    {
      step: "04",
      title: "Email & Staff Alert",
      subtitle: "Team Notification",
      desc: "The assigned coordinator or doctor receives an instant brief with customer intent, telephone link, and suggested next steps.",
      icon: Mail,
      badge: "Instant Internal Sync"
    },
    {
      step: "05",
      title: "Google Sheets / CRM",
      subtitle: "Structured Records",
      desc: "Every single detail, timestamp, phone number, and conversation transcript is automatically logged in your master CRM or Google Sheet.",
      icon: Table,
      badge: "Zero Manual Entry"
    },
    {
      step: "06",
      title: "Calendar Booking",
      subtitle: "Slot Automation",
      desc: "Appointment requests are verified against live Google Calendar availability, locking slots without double-booking.",
      icon: Calendar,
      badge: "Real-Time Sync"
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            Seamless End-to-End Orchestration
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            One Automation System. Multiple Channels.
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            From the second a prospect fills your website form to their confirmed appointment in your calendar, our intelligent workflow handles every touchpoint smoothly.
          </p>
        </div>

        {/* Channels Flow Chart Banner */}
        <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-2xl p-6 mb-12 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-[#64748b] text-center mb-6">
            Complete Automated Pipeline Architecture
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col items-center">
              <Globe className="w-6 h-6 text-indigo-600 mb-2" />
              <span className="text-xs font-bold text-[#0f172a]">Website Form</span>
              <span className="text-[10px] text-[#64748b] mt-0.5">Lead Ingestion</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs flex flex-col items-center relative">
              <span className="hidden lg:block absolute -left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-500">➔</span>
              <Sparkles className="w-6 h-6 text-emerald-600 mb-2" />
              <span className="text-xs font-bold text-[#0f172a]">AI Agent</span>
              <span className="text-[10px] text-emerald-700 font-semibold mt-0.5">Qualifies & Scores</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col items-center relative">
              <span className="hidden lg:block absolute -left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#94a3b8]">➔</span>
              <WhatsAppIcon className="w-6 h-6 text-emerald-600 mb-2" />
              <span className="text-xs font-bold text-[#0f172a]">WhatsApp</span>
              <span className="text-[10px] text-[#64748b] mt-0.5">Instant Response</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col items-center relative">
              <span className="hidden lg:block absolute -left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#94a3b8]">➔</span>
              <Mail className="w-6 h-6 text-blue-600 mb-2" />
              <span className="text-xs font-bold text-[#0f172a]">Email / Alerts</span>
              <span className="text-[10px] text-[#64748b] mt-0.5">Staff Notified</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col items-center relative">
              <span className="hidden lg:block absolute -left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#94a3b8]">➔</span>
              <Table className="w-6 h-6 text-teal-600 mb-2" />
              <span className="text-xs font-bold text-[#0f172a]">Google Sheets</span>
              <span className="text-[10px] text-[#64748b] mt-0.5">CRM Database</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-indigo-200 shadow-xs flex flex-col items-center relative">
              <span className="hidden lg:block absolute -left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-indigo-500">➔</span>
              <Calendar className="w-6 h-6 text-indigo-600 mb-2" />
              <span className="text-xs font-bold text-[#0f172a]">Google Calendar</span>
              <span className="text-[10px] text-indigo-700 font-semibold mt-0.5">Slot Confirmed</span>
            </div>
          </div>
        </div>

        {/* Detailed Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channelSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#94a3b8]">
                    {item.step}
                  </span>
                </div>
                <div className="mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669]">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#64748b] leading-relaxed mt-2">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f1f5f9] text-[#475569]">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
