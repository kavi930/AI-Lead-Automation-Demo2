import React, { useState } from 'react';
import { 
  Stethoscope, 
  Dumbbell, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  WhatsAppIcon, 
  Calendar, 
  Table, 
  Clock,
  Zap,
  Building2
} from './icons';

export const UseCasesSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState<'clinic' | 'gym' | 'coaching'>('clinic');

  const cases = {
    clinic: {
      category: 'Clinics & Dental Practices',
      icon: Stethoscope,
      accentColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      enquiryText: '"I have severe tooth pain and need an urgent appointment tomorrow morning."',
      patientName: 'Rahul Mehta',
      serviceRequested: 'Emergency Dental Consultation',
      qualification: {
        lead: 'HOT LEAD',
        intent: 'Urgent Appointment',
        priority: 'CRITICAL',
        humanRequired: 'YES (Dr. slot approval)'
      },
      workflowSteps: [
        'Enquiry received from clinic landing page or Google Maps ad',
        'AI categorises urgency: HIGH / Pain symptom detected',
        'Automated WhatsApp response dispatched with Dr. availability & directions',
        'Clinic receptionist receives instant sound/notification alert with 1-tap call',
        'Appointment slot secured in Google Calendar without phone tag'
      ],
      whatsappSnippet: 'Hi Rahul, we noticed you have severe tooth pain. Dr. Sharma has an emergency opening tomorrow at 10:15 AM. Shall we reserve this slot for you?'
    },
    gym: {
      category: 'Gyms & Fitness Centres',
      icon: Dumbbell,
      accentColor: 'text-indigo-700',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      enquiryText: '"What is your monthly membership fee? Can I get a free workout trial session?"',
      patientName: 'Vikram Malhotra',
      serviceRequested: 'Membership & Workout Trial',
      qualification: {
        lead: 'WARM / READY',
        intent: 'Pricing + Trial Pass',
        priority: 'MEDIUM-HIGH',
        humanRequired: 'NO (Self-serve booking)'
      },
      workflowSteps: [
        'Lead captured from Instagram ad or website fitness calculator',
        'AI extracts dual enquiry type: Pricing Guide + Trial Pass',
        'Automated WhatsApp message sends membership PDF brochure + trial pass link',
        'Lead instantly synced to Gym Sales CRM & Google Sheet',
        'Automatic follow-up trigger queued after 48 hours if trial pass remains unused'
      ],
      whatsappSnippet: 'Hey Vikram! 💪 Here is our full membership plan and equipment guide. Your 1-Day VIP Trial Pass is ready: tap here to choose your workout slot!'
    },
    coaching: {
      category: 'Coaching Centres & Institutes',
      icon: GraduationCap,
      accentColor: 'text-blue-700',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
      enquiryText: '"I want details about the 2-Year NEET coaching program and Sunday demo class."',
      patientName: 'Sunita Sharma (Parent)',
      serviceRequested: 'NEET Foundation & Demo Class',
      qualification: {
        lead: 'HIGH VALUE HOT LEAD',
        intent: 'Admissions & Demo Seat',
        priority: 'HIGH',
        humanRequired: 'YES (Senior Counsellor)'
      },
      workflowSteps: [
        'Parent submits enquiry form for student admission',
        'AI categorises course interest: 2-Year Medical NEET Program',
        'WhatsApp delivers course syllabus PDF, fee schedule, and demo class link',
        'Lead immediately assigned and routed to Senior Educational Counsellor',
        'Automatic SMS/WhatsApp reminder sent 24h before the Sunday demo class'
      ],
      whatsappSnippet: 'Dear Sunita ji, thank you for your interest in our NEET 2-Year program. We have attached the complete syllabus and reserved 1 seat for Sunday 11 AM demo class.'
    }
  };

  const current = cases[activeCase];
  const IconComponent = current.icon;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            Tailored Industry Workflows
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Built for Businesses That Depend on Enquiries
          </h2>
          <p className="mt-3 text-base text-[#64748b]">
            Explore how LeadFlow AI transforms enquiry response across your exact industry.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#f1f5f9] border border-[#e2e8f0] gap-2">
            <button
              onClick={() => setActiveCase('clinic')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCase === 'clinic'
                  ? 'bg-white text-emerald-800 shadow-sm border border-emerald-200'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <Stethoscope className="w-4 h-4 text-emerald-600" />
              Clinics & Dental
            </button>

            <button
              onClick={() => setActiveCase('gym')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCase === 'gym'
                  ? 'bg-white text-indigo-800 shadow-sm border border-indigo-200'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <Dumbbell className="w-4 h-4 text-indigo-600" />
              Gyms & Fitness
            </button>

            <button
              onClick={() => setActiveCase('coaching')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCase === 'coaching'
                  ? 'bg-white text-blue-800 shadow-sm border border-blue-200'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Coaching & Institutes
            </button>
          </div>
        </div>

        {/* Case Study Card */}
        <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Flow & Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#cbd5e1] flex items-center justify-center text-[#0f172a] shadow-xs">
                  <IconComponent className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${current.badgeBg}`}>
                    {current.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                    Automating {current.serviceRequested}
                  </h3>
                </div>
              </div>

              {/* Real Enquiry Quote Box */}
              <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b] block mb-1">
                  Customer Enquiry Received:
                </span>
                <p className="text-sm font-semibold text-[#0f172a] italic">
                  {current.enquiryText}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-[#64748b]">
                  <span>From: <strong>{current.patientName}</strong></span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold">Response Time: 45 seconds</span>
                </div>
              </div>

              {/* Step by Step Workflow */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Automated Workflow Execution:
                </h4>
                {current.workflowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#334155]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Artifacts */}
            <div className="lg:col-span-5 space-y-4">
              {/* AI Qualification Output Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#cbd5e1] shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-[#0f172a]">Lead Qualification</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                    Automated
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#f8fafc] p-2 rounded-lg border border-[#e2e8f0]">
                    <span className="block text-[10px] text-[#64748b]">Score</span>
                    <span className="font-extrabold text-emerald-700">{current.qualification.lead}</span>
                  </div>
                  <div className="bg-[#f8fafc] p-2 rounded-lg border border-[#e2e8f0]">
                    <span className="block text-[10px] text-[#64748b]">Extracted Intent</span>
                    <span className="font-bold text-[#0f172a] truncate block">{current.qualification.intent}</span>
                  </div>
                  <div className="bg-[#f8fafc] p-2 rounded-lg border border-[#e2e8f0]">
                    <span className="block text-[10px] text-[#64748b]">Priority Level</span>
                    <span className="font-bold text-rose-600">{current.qualification.priority}</span>
                  </div>
                  <div className="bg-[#f8fafc] p-2 rounded-lg border border-[#e2e8f0]">
                    <span className="block text-[10px] text-[#64748b]">Human Attention</span>
                    <span className="font-bold text-indigo-700">{current.qualification.humanRequired}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Message Preview Card */}
              <div className="bg-[#ece5dd] p-4 rounded-2xl border border-[#cbd5e1] shadow-xs">
                <div className="flex items-center justify-between mb-2 text-[11px] font-bold text-[#075e54]">
                  <span className="flex items-center gap-1">
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    Automated WhatsApp Delivered
                  </span>
                  <span className="text-[10px] font-mono text-[#64748b]">0.9s</span>
                </div>
                <div className="whatsapp-bubble-out p-3 rounded-xl text-xs text-[#0f172a] shadow-xs">
                  <p className="whitespace-pre-line text-[11px] leading-relaxed">
                    {current.whatsappSnippet}
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[9px] text-[#64748b] mt-2">
                    <span>Just now</span>
                    <span className="text-blue-500 font-bold">✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
