/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { LiveDemoSection } from './components/LiveDemoSection';
import { UseCasesSection } from './components/UseCasesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BusinessBenefitSection } from './components/BusinessBenefitSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Sparkles, ArrowUp } from './components/icons';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#0f172a] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation Header */}
      <Navbar onOpenDemo={scrollToDemo} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with realistic workflow cards */}
        <HeroSection />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section */}
        <SolutionSection />

        {/* 4. The Most Important Section: Interactive Live Demo Simulation */}
        <LiveDemoSection />

        {/* 5. Real-World Use Cases (Clinics, Gyms, Coaching) */}
        <UseCasesSection />

        {/* 6. Complete Automation Features */}
        <FeaturesSection />

        {/* 7. How It Works (6-step pipeline architecture) */}
        <HowItWorksSection />

        {/* 8. Business Benefits & ROI Comparison */}
        <BusinessBenefitSection />

        {/* 9. Industries Served */}
        <IndustriesSection />

        {/* 10. Call to Action Banner */}
        <CtaBanner />

        {/* 11. Contact / Book a Custom Demo Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Demo Trigger & Back To Top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={scrollToDemo}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-xl shadow-emerald-700/30 hover:scale-105 transition-all cursor-pointer border border-emerald-400/40"
        >
          <Sparkles className="w-4 h-4 fill-white" />
          <span>Interactive Demo</span>
        </button>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white border border-[#cbd5e1] text-[#475569] hover:text-[#0f172a] flex items-center justify-center shadow-md hover:bg-[#f1f5f9] transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
