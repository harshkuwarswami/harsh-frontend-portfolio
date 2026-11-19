import React, { useState, useEffect } from 'react';
import { Github, Mail, Sparkles, Terminal, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { HeroScene } from '../components/3d/HeroScene';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentRole = personalInfo.animatedRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid"
      aria-label="Introduction"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-subtle/80 border border-primary/25 backdrop-blur-md mb-6 shadow-sm shadow-primary/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-primary tracking-wide uppercase">
                Open to Entry-Level Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              Hi, I'm{' '}
              <span className="text-gradient-cyan block sm:inline">
                {personalInfo.fullName}
              </span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-12 sm:h-14 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-text-muted mr-3">
                I build as a
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-primary border-b-2 border-primary/50 pb-0.5">
                {displayText}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-background font-bold text-sm text-center shadow-lg shadow-primary/25 hover:shadow-glow-primary transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Explore My Work</span>
                <Layers className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface/80 hover:bg-surface-elevated text-white border border-primary/30 hover:border-primary/60 font-semibold text-sm text-center backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-primary" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-surface/50 hover:bg-surface text-text-muted hover:text-white border border-white/10 hover:border-white/20 font-medium text-sm text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Quick Micro Credentials Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-text-subtle uppercase">Location</span>
                <span className="text-xs font-semibold text-text">Aligarh, India</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-text-subtle uppercase">Education</span>
                <span className="text-xs font-semibold text-text">BCA · MCA (IT)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-text-subtle uppercase">Stack</span>
                <span className="text-xs font-semibold text-primary">React & Modern Web</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Visual & Real Portrait Composite */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Interactive 3D Canvas Background Layer */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 lg:opacity-90">
              <HeroScene />
            </div>

            {/* Professional Portrait Composite Card with Identity Preservation */}
            <div className="relative z-10 w-full max-w-sm mx-auto group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-2xl bg-surface/85 backdrop-blur-xl border border-primary/30 p-3 shadow-2xl overflow-hidden">
                {/* Photo frame with subtle angle */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                  <img
                    src={personalInfo.profileImage}
                    alt="Harsh Kuwar Swami - Aspiring Frontend Developer"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                    width="400"
                    height="400"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Developer Badge 1 (Top Right) */}
                <div className="absolute -top-2 -right-2 bg-surface-card/95 border border-primary/40 backdrop-blur-md rounded-xl p-2.5 shadow-xl shadow-black/50 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>&lt;developer/&gt;</span>
                  </div>
                  <p className="text-[10px] text-text-muted font-mono mt-0.5">
                    curiosity: true;
                  </p>
                </div>

                {/* Floating Developer Badge 2 (Bottom Left) */}
                <div className="absolute -bottom-2 -left-2 bg-surface-card/95 border border-secondary/40 backdrop-blur-md rounded-xl px-3 py-2 shadow-xl shadow-black/50 -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-primary/20 text-primary">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">Frontend Dev</span>
                      <span className="text-[10px] text-text-muted">React · JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Discovery Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors group"
            aria-label="Scroll down to explore portfolio"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll to Explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-text-muted group-hover:border-primary flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 rounded-full bg-primary animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
