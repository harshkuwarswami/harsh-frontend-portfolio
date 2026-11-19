import React from 'react';
import { GraduationCap, Calendar, Landmark, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-surface/30 border-t border-b border-white/5" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>05 / Education</span>
          </div>
          <h2 id="education-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Academic <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-text-muted mt-2 max-w-xl text-base">
            Formal foundations in computer applications and information technology from recognized universities.
          </p>
        </div>

        {/* 2-Column Responsive Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Field */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold mb-4">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{edu.field}</span>
                </div>

                {/* Institution & University */}
                <div className="space-y-1 mb-6">
                  <p className="text-sm font-semibold text-text">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Landmark className="w-3.5 h-3.5 text-text-subtle" />
                    <span>{edu.university}</span>
                  </div>
                </div>

                {/* Note */}
                {edu.note && (
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    {edu.note}
                  </p>
                )}
              </div>

              {/* Card Footer: Grade & Status */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-text-subtle uppercase block">Status</span>
                  <span className="text-xs font-medium text-text-muted">{edu.status}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-text-subtle uppercase block">Performance</span>
                  <span className="text-base font-display font-bold text-white bg-surface-elevated px-3 py-1 rounded-lg border border-primary/30 inline-block">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
