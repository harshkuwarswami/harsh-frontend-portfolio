import React from 'react';
import { Calendar, Building, ExternalLink, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>04 / Experience</span>
          </div>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Practical <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-text-muted mt-2 max-w-xl text-base">
            Hands-on professional software internship experience verified through LinkedIn credentials.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 sm:pl-10 pb-12 last:pb-0 border-l-2 border-primary/30 group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-glow-primary group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto my-auto mt-0.5" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/15 text-primary border border-primary/30">
                    {exp.employmentType.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{exp.period}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-white font-semibold">{exp.duration}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-primary/90 mb-6">
                  <Building className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 mb-6">
                  {exp.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Verification Action */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span>Completion Certificate Verified</span>
                  </div>

                  <a
                    href={exp.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-primary/40 text-xs font-semibold text-text-muted hover:text-white transition-colors"
                  >
                    <span>View on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
