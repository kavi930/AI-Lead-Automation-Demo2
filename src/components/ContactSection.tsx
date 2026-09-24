import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  WhatsAppIcon, 
  Phone, 
  Mail, 
  Building2, 
  ShieldCheck,
  Calendar
} from './icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Dental Clinic',
    phone: '',
    email: '',
    notes: ''
  });

  const [automationChoices, setAutomationChoices] = useState<string[]>([
    'WhatsApp response',
    'Lead qualification',
    'Appointment booking'
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleChoice = (choice: string) => {
    if (automationChoices.includes(choice)) {
      setAutomationChoices(automationChoices.filter(c => c !== choice));
    } else {
      setAutomationChoices([...automationChoices, choice]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const choicesList = [
    'WhatsApp response',
    'Lead qualification',
    'Appointment booking',
    'Follow-ups',
    'CRM sync'
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Offer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              Schedule a Custom Walkthrough
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Get a Customized Automation Plan for Your Business
            </h2>

            <p className="text-base text-[#475569] leading-relaxed">
              I will prepare a customized automation workflow for your business and show you a live demo on how to capture, qualify, and book more enquiries.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-[#334155]">
                  <strong>100% Tailored to Your Field:</strong> Clinics, dental, gyms, coaching, and local service businesses.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-[#334155]">
                  <strong>Zero Disruption:</strong> Connects to your current Google Calendar, WhatsApp, and Sheets without changing existing habits.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-[#334155]">
                  <strong>Fast Setup:</strong> Usually active and automating leads in under 7 business days.
                </p>
              </div>
            </div>

            {/* Direct Quick Contact */}
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-[#cbd5e1] space-y-2 text-xs">
              <p className="font-bold text-[#0f172a]">Prefer a direct discussion?</p>
              <div className="flex items-center gap-4 text-[#475569]">
                <span className="flex items-center gap-1.5 font-medium">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  Instant WhatsApp Walkthrough
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-4 h-4 text-blue-600" />
                  demo@leadflowai.io
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f8fafc] rounded-3xl border border-[#cbd5e1] p-6 sm:p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    Demo Request Received!
                  </h3>
                  <p className="text-xs text-[#64748b] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'there'}</strong>. We have generated a custom automation brief for <strong>{formData.businessName || 'your business'}</strong>. We will message you on WhatsApp at <strong>{formData.phone || 'your phone'}</strong> to schedule the 15-minute live screen walkthrough.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-4"
                  >
                    ← Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs text-[#0f172a] bg-white border border-[#cbd5e1] rounded-xl focus:outline-none focus:border-emerald-500 shadow-xs"
                        placeholder="Dr. Samir Sen / Coach Priya"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3 py-2 text-xs text-[#0f172a] bg-white border border-[#cbd5e1] rounded-xl focus:outline-none focus:border-emerald-500 shadow-xs"
                        placeholder="e.g. Apex Smiles Dental Clinic"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Business Category *
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3 py-2 text-xs text-[#0f172a] bg-white border border-[#cbd5e1] rounded-xl focus:outline-none focus:border-emerald-500 shadow-xs"
                      >
                        <option value="Clinic">Clinic</option>
                        <option value="Dental Clinic">Dental Clinic</option>
                        <option value="Gym">Gym</option>
                        <option value="Fitness Centre">Fitness Centre</option>
                        <option value="Coaching Centre">Coaching Centre</option>
                        <option value="Educational Institute">Educational Institute</option>
                        <option value="Other">Other Local Service Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs text-[#0f172a] bg-white border border-[#cbd5e1] rounded-xl focus:outline-none focus:border-emerald-500 shadow-xs"
                        placeholder="+91 98200 12345"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#334155] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-[#0f172a] bg-white border border-[#cbd5e1] rounded-xl focus:outline-none focus:border-emerald-500 shadow-xs"
                      placeholder="owner@clinic.com"
                    />
                  </div>

                  {/* Checkboxes: What would you like to automate? */}
                  <div>
                    <label className="block text-xs font-bold text-[#334155] mb-2">
                      What would you like to automate? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {choicesList.map((choice, idx) => {
                        const isChecked = automationChoices.includes(choice);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleChoice(choice)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                              isChecked
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold'
                                : 'bg-white border-[#cbd5e1] text-[#475569] hover:bg-[#f1f5f9]'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              isChecked ? 'bg-emerald-600 text-white' : 'border border-[#94a3b8]'
                            }`}>
                              {isChecked ? '✓' : ''}
                            </span>
                            <span>{choice}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#334155] mb-1">
                      Any specific requirement or monthly enquiry volume? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-[#0f172a] bg-white border border-[#cbd5e1] rounded-xl focus:outline-none focus:border-emerald-500 shadow-xs resize-none"
                      placeholder="e.g. We get around 40-50 enquiries/month from Google Ads and Instagram..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 fill-white" />
                    {isSubmitting ? 'Submitting Request...' : 'Request Free Custom Demo'}
                  </button>

                  <p className="text-[11px] text-center text-[#64748b]">
                    🔒 No spam. We will only contact you to demonstrate the automation setup.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
