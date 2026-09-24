import React from 'react';
import { 
  CheckCircle2, 
  X, 
  Clock, 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck, 
  ArrowRight 
} from './icons';

export const BusinessBenefitSection: React.FC = () => {
  const benefits = [
    {
      title: "Faster Response = Higher Conversion",
      desc: "Prospects convert at a 21x higher rate when replied to in under 5 minutes compared to 30 minutes later.",
      stat: "21x",
      sub: "higher conversion rate"
    },
    {
      title: "24/7 Lead Capture & Handling",
      desc: "Never miss prospective patients, members, or students who search your business at 10 PM or on Sunday afternoons.",
      stat: "100%",
      sub: "coverage around the clock"
    },
    {
      title: "Zero Lost or Forgotten Enquiries",
      desc: "Every query is captured into your master spreadsheet and tracked with automated reminders so nobody slips through.",
      stat: "0",
      sub: "leads lost in the cracks"
    },
    {
      title: "Less Repetitive Work for Staff",
      desc: "Automate FAQ answers, clinic directions, fee inquiries, and scheduling so your team can focus on in-clinic service.",
      stat: "4-6 hrs",
      sub: "saved per staff member daily"
    },
    {
      title: "Professional Patient/Customer Experience",
      desc: "Immediate, courteous, and structured communication creates trust before the patient or member even steps in your door.",
      stat: "94%",
      sub: "positive first impression"
    },
    {
      title: "Scale Seamlessly Without New Hires",
      desc: "Whether you get 15 enquiries a day or 150 from a new marketing campaign, your system handles it with zero extra payroll.",
      stat: "10x",
      sub: "capacity with zero added headcount"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            Tangible Business ROI
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Your Team Should Talk to Customers — Not Manually Manage Every Enquiry.
          </h2>
          <p className="mt-3 text-base text-[#64748b]">
            Stop paying skilled staff to copy-paste names into Excel and chase cold leads. Automate the busywork so they can deliver great service.
          </p>
        </div>

        {/* Before vs After Visual Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* WITHOUT AUTOMATION */}
          <div className="bg-white rounded-2xl border border-rose-200 p-6 md:p-8 shadow-xs relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#f1f5f9] mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">The Old Manual Way</span>
                <h3 className="text-lg font-bold text-[#0f172a]">Without Automation</h3>
              </div>
              <span className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold">
                ✕
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-[#475569]">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Enquiries sit in email inboxes or WhatsApp for 3-6 hours before anyone notices.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Night and weekend enquiries go completely unanswered until Monday morning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Receptionists manually write phone numbers in notebooks or scattered spreadsheets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Staff make 4 back-and-forth phone calls trying to find a matching calendar slot.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Prospective patients or gym members get impatient and book with your competitor.</span>
              </li>
            </ul>
          </div>

          {/* WITH LEADFLOW AUTOMATION */}
          <div className="bg-white rounded-2xl border border-emerald-300 p-6 md:p-8 shadow-md relative ring-1 ring-emerald-400/20">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-100 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">The LeadFlow AI Way</span>
                <h3 className="text-lg font-bold text-[#0f172a]">With LeadFlow Automation</h3>
              </div>
              <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                ✓
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-[#0f172a]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Instant WhatsApp response within 45 seconds</strong> of website form submission.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>24/7/365 active handling:</strong> night, holiday, and weekend leads are engaged immediately.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>AI qualifies customer intent</strong> and calculates urgency (HOT vs WARM lead).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Direct Google Calendar integration</strong> lets customers view and reserve available slots.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Staff only talks to qualified, high-intent prospects</strong> ready for consultation.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ROI Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-xs">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black text-[#059669] tracking-tight">{b.stat}</span>
                <span className="text-[11px] font-medium text-[#64748b]">{b.sub}</span>
              </div>
              <h4 className="text-sm font-bold text-[#0f172a] mb-1.5">{b.title}</h4>
              <p className="text-xs text-[#64748b] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
