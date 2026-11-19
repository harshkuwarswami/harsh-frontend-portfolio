import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>06 / Certifications</span>
          </div>
          <h2 id="certifications-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Verified <span className="text-gradient-cyan">Credentials</span>
          </h2>
          <p className="text-text-muted mt-2 max-w-xl text-base">
            Professional certifications completed through Tata Consultancy Services and industry learning programs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-text mb-4">
                  {cert.issuer}
                </p>

                {cert.credentialNote && (
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    {cert.credentialNote}
                  </p>
                )}
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Valid through: <strong className="text-white">{cert.expiryDate}</strong></span>
                </div>
                <Award className="w-4 h-4 text-primary/70" />
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Remaining Credentials Note */}
        <div className="p-6 rounded-2xl bg-surface/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Full Certification History</p>
              <p className="text-xs text-text-muted">
                Harsh's LinkedIn profile features 6 total certifications. The remaining 4 credentials will be displayed here once their formal certificate titles and issuers are verified.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface hover:bg-surface-elevated text-xs font-semibold text-primary border border-primary/20 hover:border-primary/50 whitespace-nowrap transition-colors"
          >
            <span>View All on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
