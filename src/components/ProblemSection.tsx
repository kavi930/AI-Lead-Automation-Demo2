import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  MessageSquare, 
  Phone, 
  Calendar, 
  History, 
  Table, 
  ShieldAlert,
  ArrowRight
} from './icons';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Website Enquiries Are Missed",
      desc: "Forms sit in email inboxes for hours or days while potential patients or gym members enquire with competitors.",
      icon: Clock,
      stat: "62% lost"
    },
    {
      title: "WhatsApp Messages Go Unanswered",
      desc: "Inquiries get buried under personal group messages and customer chats, with zero tracking or follow-up sequence.",
      icon: MessageSquare,
      stat: "No tracking"
    },
    {
      title: "Staff Forget to Call Leads Back",
      desc: "Receptionists get busy with walking clinic patients, gym floor visitors, or parents, and postpone calling new leads.",
      icon: Phone,
      stat: "44% abandoned"
    },
    {
      title: "Leads Are Stored Manually",
      desc: "Enquiries written down in physical diaries, paper sticky notes, or disorganized spreadsheets get forgotten or misplaced.",
      icon: Table,
      stat: "Lost records"
    },
    {
      title: "Appointment Requests Require Manual Phone Tag",
      desc: "Staff exchange 3-5 back-and-forth phone calls just to fix an appointment slot, frustrating prospective customers.",
      icon: Calendar,
      stat: "3+ calls per slot"
    },
    {
      title: "Enquiries Outside Working Hours Are Lost",
      desc: "Over 50% of people research clinics, gyms, and coaching classes after 7 PM and on weekends when your front desk is closed.",
      icon: History,
      stat: "58% after-hours"
    },
    {
      title: "Staff Wastes Hours on Repetitive FAQs",
      desc: "Front desk spends half their day repeatedly answering fee structures, clinic location, timings, and course brochures.",
      icon: ShieldAlert,
      stat: "3.5 hrs/day wasted"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8ff] border-y border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            The High Cost of Slow Follow-Up
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            How Many Enquiries Are You Losing Because Nobody Responds Fast Enough?
          </h2>
          <p className="mt-4 text-base text-[#64748b]">
            Enquiry-driven businesses spend significant budget on marketing, ads, and word-of-mouth. But if your response isn't instant, prospective customers book with whoever replies first.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.slice(0, 6).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-rose-200 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                    {item.stat}
                  </span>
                </div>
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

        {/* Wide 7th Card: Staff Repetitive Work Banner */}
        <div className="mt-6 bg-gradient-to-r from-white via-rose-50/40 to-white rounded-2xl p-6 border border-rose-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0f172a]">
                Staff Spend Countless Hours Answering Repetitive Questions
              </h4>
              <p className="text-xs text-[#64748b] mt-1 max-w-2xl">
                Instead of attending to in-person patients, gym members, or students, your staff is overwhelmed answering routine questions about fee ranges, schedules, and directions.
              </p>
            </div>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            See How AI Solves This
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
