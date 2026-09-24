import React from 'react';
import { 
  Stethoscope, 
  Dumbbell, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Activity,
  Award
} from './icons';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      name: "Clinics & OPD Practices",
      desc: "Instant patient symptom pre-triage, doctor OPD timetable sharing, follow-up visit booking, and clinic location maps.",
      icon: Stethoscope,
      tags: ["Doctor Slots", "Patient Triage", "OPD Booking"]
    },
    {
      name: "Dental Clinics",
      desc: "Emergency tooth pain response, smile makeover & aligner lead capture, automated hygiene reminder recalls, and consultation bookings.",
      icon: Activity,
      tags: ["Aligners & Implants", "Emergency Pain", "Recall Alerts"]
    },
    {
      name: "Gyms & Health Clubs",
      desc: "Instant membership pricing brochures, 1-Day workout pass links, trainer consultation scheduling, and inactive member re-engagement.",
      icon: Dumbbell,
      tags: ["Trial Passes", "Brochure PDFs", "Membership Sales"]
    },
    {
      name: "Fitness, Yoga & Pilates Studios",
      desc: "Batch slot reservation, trial class confirmation, body analysis scheduling, and automated WhatsApp payment links.",
      icon: Award,
      tags: ["Class Seats", "Studio Passes", "Drop-in Bookings"]
    },
    {
      name: "Coaching Centres",
      desc: "Course syllabus delivery, parent admission enquiries, demo class registrations, and automated reminders for weekend seminars.",
      icon: GraduationCap,
      tags: ["NEET / JEE / UPSC", "Demo Class", "Parent Counselling"]
    },
    {
      name: "Educational Institutes & Schools",
      desc: "Prospectus dispatch, campus tour time slots, scholarship exam registrations, and automated multi-touch admission follow-ups.",
      icon: Building2,
      tags: ["Admissions", "Campus Tours", "Fee Guidelines"]
    },
    {
      name: "Local Service & Consultancies",
      desc: "Chartered accountants, legal consultants, interior designers, salons & spas needing automated client appointment scheduling.",
      icon: Zap,
      tags: ["Consultations", "Quote Requests", "Calendar Sync"]
    }
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Industry Specialization
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Designed for Businesses Where Speed to Lead Wins
          </h2>
          <p className="mt-3 text-base text-[#64748b]">
            Every industry has unique questions and qualification rules. Our workflows are tailored with custom conversation prompts and booking rules.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] shadow-xs hover:shadow-md hover:border-emerald-300 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#cbd5e1] flex items-center justify-center text-emerald-600 mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0f172a] mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e2e8f0]/80 flex flex-wrap gap-1.5">
                  {ind.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-[#cbd5e1] text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
