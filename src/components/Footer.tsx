import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-surface-subtle/80 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface border border-primary/30 flex items-center justify-center font-display font-bold text-base text-primary shadow-glow-primary">
              <span className="text-white">H</span>
              <span className="text-primary font-black">.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-white">
                {personalInfo.fullName}
              </span>
              <span className="text-[11px] text-text-muted">
                Aspiring Frontend & Web Developer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface border border-white/10 text-text-muted hover:text-white hover:border-primary/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface border border-white/10 text-text-muted hover:text-white hover:border-primary/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-surface border border-white/10 text-text-muted hover:text-white hover:border-primary/40 transition-colors"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-elevated text-xs font-mono text-text-muted hover:text-primary border border-white/10 hover:border-primary/40 transition-colors group"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-subtle">
          <p className="flex items-center gap-1 font-mono">
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span className="text-white/20">•</span>
            <span className="text-primary flex items-center gap-1">
              <span>Aligarh, India</span>
              <Heart className="w-3 h-3 text-secondary fill-secondary inline" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
