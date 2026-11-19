import React from 'react';
import { MapPin, GraduationCap, Briefcase, Code, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-surface/50 border-t border-b border-white/5" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>01 / About Me</span>
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Curious Mind. <span className="text-gradient-cyan">Developer Mindset.</span>
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
              
              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-6">
                "{personalInfo.aboutSummary}"
              </p>

              <p className="text-text-muted leading-relaxed mb-4">
                My journey in computer applications blends theoretical computer science concepts with hands-on web development. I enjoy taking ideas and translating them into clean, accessible, and responsive user interfaces that perform smoothly across devices.
              </p>

              <p className="text-text-muted leading-relaxed">
                Alongside academic pursuits in my Master of Computer Applications (MCA) program, I completed a practical Python Developer Internship with Codec Technologies India, refining my programmatic thinking and structured software development discipline. I am currently focused on entry-level Frontend Developer roles where I can contribute to real-world codebases and continue expanding my engineering toolkit.
              </p>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Responsive UI & Modern Web</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React.js & Component Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Practical Internship Experience</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Academic Background in IT (BCA/MCA)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors"
              >
                <span>{personalInfo.email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Factual Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Card 1: Location */}
            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-text-subtle uppercase tracking-wider">Location</span>
                  <span className="text-sm font-bold text-white mt-0.5">{personalInfo.location}</span>
                  <span className="text-xs text-text-muted mt-1">Open to remote & onsite junior roles</span>
                </div>
              </div>
            </div>

            {/* Card 2: Academic Status */}
            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-secondary/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-text-subtle uppercase tracking-wider">Education</span>
                  <span className="text-sm font-bold text-white mt-0.5">BCA Graduate · MCA Candidate</span>
                  <span className="text-xs text-text-muted mt-1">MCA (Information Technology) · 2024–2026</span>
                </div>
              </div>
            </div>

            {/* Card 3: Experience */}
            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-accent/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-text-subtle uppercase tracking-wider">Internship</span>
                  <span className="text-sm font-bold text-white mt-0.5">Python Developer Intern</span>
                  <span className="text-xs text-text-muted mt-1">Codec Technologies India (Oct–Nov 2025)</span>
                </div>
              </div>
            </div>

            {/* Card 4: Focus */}
            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-colors">
                  <Code className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-text-subtle uppercase tracking-wider">Career Focus</span>
                  <span className="text-sm font-bold text-white mt-0.5">Frontend & Web Development</span>
                  <span className="text-xs text-text-muted mt-1">Clean markup, modern CSS, dynamic React apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
