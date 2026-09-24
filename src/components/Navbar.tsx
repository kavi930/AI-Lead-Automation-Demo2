import React, { useState } from 'react';
import { Zap, Sparkles, X } from './icons';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#059669] to-[#10b981] flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-all">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-[#0f172a]">
                  LeadFlow<span className="text-[#059669]">.AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Live
                </span>
              </div>
              <p className="text-[11px] text-[#64748b] leading-none hidden sm:block">
                AI Lead Automation for Local Businesses
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-sm font-semibold text-[#059669] hover:text-[#047857] flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Live Demo
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-[#475569] hover:text-[#059669] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#demo"
              onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
              className="text-xs font-semibold text-[#334155] hover:text-[#0f172a] px-3 py-2"
            >
              Try Simulation
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              Get a Free Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#059669] rounded-lg"
            >
              Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#475569] hover:text-[#0f172a] rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <button 
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#334155] rounded-md hover:bg-[#f8fafc]"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#334155] rounded-md hover:bg-[#f8fafc]"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('solutions')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#334155] rounded-md hover:bg-[#f8fafc]"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('demo')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#059669] bg-emerald-50 rounded-md"
          >
            Live Demo
          </button>
          <button 
            onClick={() => scrollToSection('industries')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#334155] rounded-md hover:bg-[#f8fafc]"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-[#334155] rounded-md hover:bg-[#f8fafc]"
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-2.5 px-4 text-center text-xs font-bold text-white bg-[#0f172a] rounded-lg shadow-sm"
            >
              Get a Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
