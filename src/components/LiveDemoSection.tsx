import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  WhatsAppIcon, 
  Mail, 
  Table, 
  Calendar, 
  CheckCheck, 
  AlertCircle, 
  Building2, 
  ArrowRight,
  Phone,
  RefreshCw,
  Send,
  User,
  Check
} from './icons';

type BusinessCategory = 
  | 'Clinic' 
  | 'Dental Clinic' 
  | 'Gym' 
  | 'Fitness Centre' 
  | 'Coaching Centre' 
  | 'Educational Institute' 
  | 'Other';

interface FormData {
  name: string;
  phone: string;
  email: string;
  businessType: BusinessCategory;
  service: string;
  message: string;
}

export const LiveDemoSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: 'Rahul Mehta',
    phone: '+91 98201 44521',
    email: 'rahul.mehta@gmail.com',
    businessType: 'Dental Clinic',
    service: 'Dental Consultation',
    message: 'I want an appointment tomorrow for a toothache checkup.'
  });

  const [isSimulating, setIsSimulating] = useState(false);
  const [hasRunDemo, setHasRunDemo] = useState(true); // Default true so visitor sees results immediately!
  const [activeResultTab, setActiveResultTab] = useState<'timeline' | 'whatsapp' | 'sheets' | 'staff'>('timeline');
  const [simulationStep, setSimulationStep] = useState(7); // 7 = complete

  // Preset scenarios
  const applyPreset = (preset: 'dental' | 'gym' | 'coaching') => {
    if (preset === 'dental') {
      setFormData({
        name: 'Rahul Mehta',
        phone: '+91 98201 44521',
        email: 'rahul.mehta@gmail.com',
        businessType: 'Dental Clinic',
        service: 'Dental Consultation',
        message: 'I want an appointment tomorrow for a toothache checkup.'
      });
    } else if (preset === 'gym') {
      setFormData({
        name: 'Vikram Malhotra',
        phone: '+91 98112 33490',
        email: 'vikram.m@outlook.com',
        businessType: 'Gym',
        service: 'Trial Session',
        message: 'I want to know the monthly membership fee and book a trial session this Friday evening.'
      });
    } else if (preset === 'coaching') {
      setFormData({
        name: 'Sunita Sharma (Parent)',
        phone: '+91 97170 88210',
        email: 'sunita.sharma@yahoo.com',
        businessType: 'Coaching Centre',
        service: 'Demo Class',
        message: 'I want details about the 2-Year NEET coaching program syllabus and upcoming Sunday demo class.'
      });
    }
    triggerSimulation();
  };

  // Tailored services depending on business type
  const getServicesForType = (type: BusinessCategory): string[] => {
    switch (type) {
      case 'Clinic':
        return [
          'General Consultation',
          'Health Check-up',
          'Diagnostic Test',
          'Specialist Doctor Appointment',
          'Follow-up Visit'
        ];
      case 'Dental Clinic':
        return [
          'Dental Consultation',
          'Teeth Cleaning & Polishing',
          'Root Canal Treatment',
          'Braces & Invisible Aligners',
          'Emergency Tooth Pain'
        ];
      case 'Gym':
        return [
          'Gym Membership',
          'Trial Session',
          'Personal Training',
          'Weight Loss Program',
          'Fitness Consultation'
        ];
      case 'Fitness Centre':
        return [
          'Yoga & Pilates Batch',
          'HIIT Functional Training',
          'Trial Workout Pass',
          'Body Composition Analysis',
          'Nutrition Plan'
        ];
      case 'Coaching Centre':
        return [
          'Course Enquiry',
          'Demo Class',
          'Admission Enquiry',
          'Academic Counselling',
          'Fee & Scholarship Enquiry'
        ];
      case 'Educational Institute':
        return [
          'Admission Enquiry',
          'Campus Tour Booking',
          'Degree Program Details',
          'Scholarship Evaluation',
          'Prospectus Request'
        ];
      case 'Other':
      default:
        return [
          'General Service Enquiry',
          'Consultation Booking',
          'Quotation Request',
          'Urgent Follow-Up'
        ];
    }
  };

  const handleBusinessTypeChange = (type: BusinessCategory) => {
    const services = getServicesForType(type);
    setFormData(prev => ({
      ...prev,
      businessType: type,
      service: services[0]
    }));
  };

  const triggerSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);

    const timer1 = setTimeout(() => setSimulationStep(2), 250);
    const timer2 = setTimeout(() => setSimulationStep(3), 550);
    const timer3 = setTimeout(() => setSimulationStep(4), 850);
    const timer4 = setTimeout(() => setSimulationStep(5), 1150);
    const timer5 = setTimeout(() => setSimulationStep(6), 1450);
    const timer6 = setTimeout(() => {
      setSimulationStep(7);
      setIsSimulating(false);
      setHasRunDemo(true);
    }, 1750);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSimulation();
  };

  // Determine intent & priority based on user inputs
  const isAppointmentIntent = 
    formData.service.toLowerCase().includes('consultation') || 
    formData.service.toLowerCase().includes('appointment') ||
    formData.service.toLowerCase().includes('trial') ||
    formData.service.toLowerCase().includes('demo') ||
    formData.message.toLowerCase().includes('appointment') ||
    formData.message.toLowerCase().includes('trial');

  const leadStatus = isAppointmentIntent ? 'HOT' : 'WARM';
  const intentName = isAppointmentIntent ? 'Appointment / Booking' : 'Information & Pricing';
  const priorityLevel = 'HIGH';

  // Dynamic WhatsApp text
  const whatsappPreview = `Hi ${formData.name.split(' ')[0]}! 👋

Thank you for contacting ${formData.businessType === 'Dental Clinic' ? 'Apex Dental Clinic' : formData.businessType === 'Gym' ? 'FitZone Arena' : formData.businessType === 'Coaching Centre' ? 'Excel Academy' : 'our team'}.

We received your enquiry regarding *${formData.service}*.

📅 *Next Available Slots:*
1. Tomorrow (11:30 AM)
2. Tomorrow (04:30 PM)

Would you like us to lock one of these slots for you? Or you can self-confirm here: https://book.flow.ai/slot/${formData.name.toLowerCase().replace(/[^a-z]/g, '')}

Our care coordinator has also been alerted.`;

  return (
    <section id="demo" className="py-16 md:py-24 bg-[#f8fafc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            Interactive Simulation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            See the Automation in Action
          </h2>
          <p className="mt-3 text-base text-[#64748b]">
            Submit a sample enquiry below and watch how LeadFlow AI qualifies the lead, prepares the WhatsApp message, and syncs the calendar in under 2 seconds.
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
            <span className="text-xs text-[#64748b] font-medium mr-1">Load Preset:</span>
            <button
              type="button"
              onClick={() => applyPreset('dental')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#cbd5e1] hover:border-emerald-500 hover:bg-emerald-50 text-[#0f172a] transition-all cursor-pointer shadow-xs"
            >
              🏥 Dental Clinic
            </button>
            <button
              type="button"
              onClick={() => applyPreset('gym')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#cbd5e1] hover:border-emerald-500 hover:bg-emerald-50 text-[#0f172a] transition-all cursor-pointer shadow-xs"
            >
              🏋️ Gym / Trial Session
            </button>
            <button
              type="button"
              onClick={() => applyPreset('coaching')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#cbd5e1] hover:border-emerald-500 hover:bg-emerald-50 text-[#0f172a] transition-all cursor-pointer shadow-xs"
            >
              🎓 Coaching / NEET Demo
            </button>
          </div>
        </div>

        {/* Demo Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sample Enquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#cbd5e1] p-6 shadow-md">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0f172a]">Website Enquiry Form</h3>
                  <p className="text-[11px] text-[#64748b]">Simulated customer-facing form</p>
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded bg-[#f1f5f9] text-[#475569]">
                Step 1: Input
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#334155] mb-1">
                  Customer Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs text-[#0f172a] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white"
                  placeholder="e.g. Rahul Mehta"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs text-[#0f172a] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white"
                    placeholder="+91 98201 00000"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs text-[#0f172a] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#334155] mb-1">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => handleBusinessTypeChange(e.target.value as BusinessCategory)}
                  className="w-full px-3 py-2 text-xs text-[#0f172a] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white"
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
                <label className="block font-semibold text-[#334155] mb-1">
                  Specific Service Requested
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs text-[#0f172a] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white"
                >
                  {getServicesForType(formData.businessType).map((svc, i) => (
                    <option key={i} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#334155] mb-1">
                  Customer Message / Notes
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs text-[#0f172a] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white resize-none"
                  placeholder="Tell us what you are looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={isSimulating}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSimulating 
                    ? 'bg-emerald-700 cursor-not-allowed' 
                    : 'bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-700/20 active:scale-[0.99]'
                }`}
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processing Through AI Workflow ({simulationStep}/7)...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-white" />
                    Run Automation Demo
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Realistic Automation Dashboard */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#cbd5e1] p-6 shadow-md">
            {/* Disclaimer pill */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 mb-5 flex items-center justify-between text-[11px] text-amber-900">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>LIVE DEMO / DEMONSTRATION:</strong> Real-time simulation of our Make.com + AI Agent configuration.
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-[10px] font-bold text-amber-700">
                SANDBOX MODE
              </span>
            </div>

            {/* Status Summary Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#64748b]">Status</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-xs font-extrabold text-emerald-700 mt-1">LEAD RECEIVED ✓</p>
                <p className="text-[10px] text-[#64748b]">Webhook active</p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#64748b]">AI Analysis</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <p className="text-xs font-extrabold text-indigo-700 mt-1">QUALIFIED ✓</p>
                <p className="text-[10px] text-[#64748b]">Lead: {leadStatus}</p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#64748b]">Priority</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                </div>
                <p className="text-xs font-extrabold text-rose-700 mt-1">{priorityLevel}</p>
                <p className="text-[10px] text-[#64748b]">SLA &lt; 5 mins</p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#64748b]">Human Action</span>
                  <User className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <p className="text-xs font-extrabold text-teal-700 mt-1">REQUIRED</p>
                <p className="text-[10px] text-[#64748b]">Slot confirmation</p>
              </div>
            </div>

            {/* Interactive View Tabs */}
            <div className="flex items-center border-b border-[#e2e8f0] mb-5 gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setActiveResultTab('timeline')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeResultTab === 'timeline'
                    ? 'bg-[#0f172a] text-white'
                    : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]'
                }`}
              >
                1. Automation Timeline ({simulationStep >= 7 ? '7/7 Done' : `${simulationStep}/7`})
              </button>
              <button
                type="button"
                onClick={() => setActiveResultTab('whatsapp')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeResultTab === 'whatsapp'
                    ? 'bg-[#075e54] text-white'
                    : 'text-[#64748b] hover:text-[#075e54] hover:bg-emerald-50'
                }`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                2. WhatsApp Preview
              </button>
              <button
                type="button"
                onClick={() => setActiveResultTab('sheets')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeResultTab === 'sheets'
                    ? 'bg-[#059669] text-white'
                    : 'text-[#64748b] hover:text-[#059669] hover:bg-emerald-50'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                3. Google Sheets Sync
              </button>
              <button
                type="button"
                onClick={() => setActiveResultTab('staff')}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeResultTab === 'staff'
                    ? 'bg-[#4338ca] text-white'
                    : 'text-[#64748b] hover:text-[#4338ca] hover:bg-indigo-50'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                4. Staff Alert
              </button>
            </div>

            {/* TAB CONTENT 1: TIMELINE */}
            {activeResultTab === 'timeline' && (
              <div className="space-y-2.5">
                {[
                  { stepNum: 1, title: 'Lead Captured', detail: `Received ${formData.name}'s enquiry via web form webhook`, icon: CheckCircle2 },
                  { stepNum: 2, title: 'AI Analysed Enquiry', detail: `Classified as ${leadStatus} LEAD • Intent: ${intentName} • Priority: ${priorityLevel}`, icon: Sparkles },
                  { stepNum: 3, title: 'Lead Saved', detail: 'Appended record to CRM & Google Sheets with timestamp', icon: Table },
                  { stepNum: 4, title: 'Staff Notification Prepared', detail: 'Generated instant WhatsApp & Slack alert for assigned coordinator', icon: Mail },
                  { stepNum: 5, title: 'WhatsApp Response Prepared', detail: `Constructed personalized reply for ${formData.phone} with available slots`, icon: WhatsAppIcon },
                  { stepNum: 6, title: 'Appointment Availability Checked', detail: 'Queried Google Calendar; verified 2 available slots for tomorrow', icon: Calendar },
                  { stepNum: 7, title: 'Follow-Up Scheduled', detail: 'Automated 24h gentle reminder queued if customer does not select slot', icon: Clock }
                ].map((step, idx) => {
                  const isDone = simulationStep >= step.stepNum;
                  return (
                    <div 
                      key={idx}
                      className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all ${
                        isDone 
                          ? 'bg-[#f8fafc] border-[#e2e8f0]' 
                          : 'bg-white border-[#f1f5f9] opacity-40'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        isDone ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {isDone ? '✓' : step.stepNum}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-[#0f172a]">{step.title}</p>
                          <span className="text-[10px] font-mono text-[#64748b]">
                            {isDone ? 'COMPLETED' : 'QUEUED'}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#64748b] truncate mt-0.5">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB CONTENT 2: WHATSAPP SIMULATION */}
            {activeResultTab === 'whatsapp' && (
              <div className="bg-[#ece5dd] rounded-xl p-4 border border-[#cbd5e1] max-w-md mx-auto">
                {/* WhatsApp header */}
                <div className="bg-[#075e54] text-white p-2.5 rounded-t-lg -mt-4 -mx-4 mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                      LF
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">LeadFlow Automated Reception</p>
                      <p className="text-[10px] text-emerald-200 leading-none mt-0.5">Online • Verified Business</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-100">Live API</span>
                </div>

                {/* WhatsApp chat bubbles */}
                <div className="space-y-3">
                  {/* Incoming user query bubble */}
                  <div className="whatsapp-bubble-in p-2.5 max-w-[85%] rounded-lg text-xs text-[#0f172a] shadow-xs">
                    <p className="text-[10px] font-bold text-[#64748b]">{formData.name}</p>
                    <p className="mt-0.5">{formData.message}</p>
                    <span className="block text-[9px] text-right text-[#94a3b8] mt-1">10:42 AM</span>
                  </div>

                  {/* Outgoing automated AI response bubble */}
                  <div className="whatsapp-bubble-out p-2.5 max-w-[88%] ml-auto rounded-lg text-xs text-[#0f172a] shadow-xs">
                    <p className="whitespace-pre-line text-[11px] leading-relaxed">
                      {whatsappPreview}
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[9px] text-[#64748b] mt-1">
                      <span>10:42 AM</span>
                      <span className="text-blue-500 font-bold">✓✓</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-[10px] text-[#64748b] bg-white/70 px-3 py-1 rounded-full border border-[#cbd5e1]">
                    ⚡ Delivered to customer's WhatsApp in 1.4 seconds
                  </span>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: GOOGLE SHEETS PREVIEW */}
            {activeResultTab === 'sheets' && (
              <div className="overflow-x-auto border border-[#cbd5e1] rounded-xl bg-white">
                <div className="bg-[#f1f5f9] p-2 border-b border-[#cbd5e1] flex items-center justify-between text-[11px] text-[#475569]">
                  <span className="font-bold flex items-center gap-1.5">
                    <Table className="w-3.5 h-3.5 text-emerald-600" />
                    Google Sheets: "Master_Lead_Log_{formData.businessType.replace(/\s+/g, '_')}"
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">Row #148 Inserted</span>
                </div>
                <table className="w-full text-left text-[11px] border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[#64748b] font-mono uppercase text-[10px]">
                      <th className="p-2 border-r border-[#e2e8f0]">Lead ID</th>
                      <th className="p-2 border-r border-[#e2e8f0]">Timestamp</th>
                      <th className="p-2 border-r border-[#e2e8f0]">Name</th>
                      <th className="p-2 border-r border-[#e2e8f0]">Phone</th>
                      <th className="p-2 border-r border-[#e2e8f0]">Service</th>
                      <th className="p-2 border-r border-[#e2e8f0]">Intent</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-emerald-50/50 border-b border-emerald-100 font-medium text-[#0f172a]">
                      <td className="p-2 font-mono border-r border-[#e2e8f0] text-emerald-800">#LF-8921</td>
                      <td className="p-2 border-r border-[#e2e8f0] text-[#64748b]">Just now</td>
                      <td className="p-2 font-bold border-r border-[#e2e8f0]">{formData.name}</td>
                      <td className="p-2 font-mono border-r border-[#e2e8f0]">{formData.phone}</td>
                      <td className="p-2 border-r border-[#e2e8f0]">{formData.service}</td>
                      <td className="p-2 border-r border-[#e2e8f0] text-indigo-700">{intentName}</td>
                      <td className="p-2">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          HOT LEAD
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e2e8f0] text-[#64748b]">
                      <td className="p-2 font-mono border-r border-[#e2e8f0]">#LF-8920</td>
                      <td className="p-2 border-r border-[#e2e8f0]">18m ago</td>
                      <td className="p-2 border-r border-[#e2e8f0]">Dr. Ananya Ray</td>
                      <td className="p-2 font-mono border-r border-[#e2e8f0]">+91 99801 •••••</td>
                      <td className="p-2 border-r border-[#e2e8f0]">Consultation</td>
                      <td className="p-2 border-r border-[#e2e8f0]">Booking</td>
                      <td className="p-2">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          BOOKED
                        </span>
                      </td>
                    </tr>
                    <tr className="text-[#64748b]">
                      <td className="p-2 font-mono border-r border-[#e2e8f0]">#LF-8919</td>
                      <td className="p-2 border-r border-[#e2e8f0]">42m ago</td>
                      <td className="p-2 border-r border-[#e2e8f0]">Rohan Saxena</td>
                      <td className="p-2 font-mono border-r border-[#e2e8f0]">+91 98450 •••••</td>
                      <td className="p-2 border-r border-[#e2e8f0]">Fee Enquiry</td>
                      <td className="p-2 border-r border-[#e2e8f0]">Pricing</td>
                      <td className="p-2">
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                          FOLLOW-UP
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB CONTENT 4: STAFF ALERT */}
            {activeResultTab === 'staff' && (
              <div className="bg-[#1e1e2e] text-white p-4 rounded-xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                      🚨 Hot Lead Alert — Reception Coordinator
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Slack / WhatsApp Bot</span>
                </div>

                <div className="space-y-1 text-xs">
                  <p className="text-slate-300">
                    <strong className="text-white">Customer:</strong> {formData.name} ({formData.phone})
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">Business Type:</strong> {formData.businessType} • {formData.service}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">Message:</strong> "{formData.message}"
                  </p>
                  <p className="text-emerald-400 font-semibold pt-1">
                    ✓ Automated WhatsApp sent with Tomorrow 11:30 AM & 04:30 PM slot options.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${formData.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    1-Tap Call Patient
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveResultTab('whatsapp')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-600 transition-all"
                  >
                    View WhatsApp Chat
                  </button>
                </div>
              </div>
            )}

            {/* Bottom explanation */}
            <div className="mt-5 pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748b]">
              <span>
                Want this running live for your actual website?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800"
              >
                Book a Live 1-on-1 Business Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
