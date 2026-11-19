import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-primary/15 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label={`${personalInfo.fullName} - Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-surface to-surface-elevated border border-primary/30 flex items-center justify-center font-display font-bold text-lg text-primary shadow-glow-primary group-hover:border-primary transition-all duration-300">
              <span className="text-white group-hover:text-primary transition-colors">H</span>
              <span className="text-primary font-black">.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-primary transition-colors">
                {personalInfo.fullName}
              </span>
              <span className="text-[10px] text-text-muted flex items-center gap-1 font-mono">
                <Code2 className="w-3 h-3 text-primary inline" />
                Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-surface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-primary/20 border border-primary/40 shadow-sm shadow-primary/20'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full blur-[1px]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-glow-primary group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface border border-primary/20 text-text hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden mt-3 rounded-2xl bg-surface/95 backdrop-blur-xl border border-primary/25 shadow-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-4 duration-200"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-primary/20 text-white border border-primary/40 font-semibold'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-primary shadow-glow-primary" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  )}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                <span>Let's Build Something Amazing</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
