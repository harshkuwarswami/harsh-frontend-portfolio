import React from 'react';
import { ExternalLink, Github, Lock, CheckCircle2, AlertCircle, Utensils, Share2, Video, ArrowUpRight } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'urban-plate':
        return <Utensils className="w-6 h-6 text-primary" />;
      case 'nexdrop':
        return <Share2 className="w-6 h-6 text-secondary" />;
      case 'ai-video-detector':
        return <Video className="w-6 h-6 text-accent" />;
      default:
        return <ExternalLink className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-surface/30 border-t border-b border-white/5" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>03 / Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-4">
            <div>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Featured <span className="text-gradient-cyan">Projects</span>
              </h2>
              <p className="text-text-muted mt-2 max-w-xl text-base">
                Three real projects from my software development portfolio, spanning modern frontend applications, file transfer concepts, and Python experimentation.
              </p>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-white/10 hover:border-primary/40 text-xs font-semibold text-text-muted hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3-Column Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isLive = project.status === 'Live Demo';
            const isReported = project.status === 'Deployment Reported';
            const isNotDeployed = project.status === 'Not Deployed';

            return (
              <article
                key={project.id}
                className="glass-panel rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Visual Preview / Graphic Header */}
                <div className="relative h-48 bg-gradient-to-br from-surface-elevated via-surface to-background flex items-center justify-center border-b border-white/10 overflow-hidden">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-30" />

                  {/* Radial accent glow */}
                  <div
                    className="absolute w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: project.accentColor || '#38BDF8' }}
                  />

                  {/* Custom Graphic Representation */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-surface/90 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="font-display font-bold text-sm tracking-wide text-white">
                      {project.title.split('—')[0].trim()}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase mt-0.5">
                      {project.category}
                    </span>
                  </div>

                  {/* Overline Project Index */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-text-muted">
                    0{index + 1}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    {isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Demo
                      </span>
                    )}
                    {isReported && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        <AlertCircle className="w-3 h-3" />
                        URL Pending
                      </span>
                    )}
                    {isNotDeployed && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-500/15 text-slate-300 border border-slate-500/30">
                        Not Deployed
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-primary/90 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface border border-white/10 text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Repository note for private repos */}
                    {project.isRepoPrivate && (
                      <div className="mb-4 p-2.5 rounded-lg bg-surface/50 border border-white/5 flex items-center gap-2 text-[11px] text-text-subtle font-mono">
                        <Lock className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                        <span>Source repo is private on GitHub</span>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      {isLive && project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-background font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-primary/20 transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {/* GitHub Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`py-2.5 px-3 rounded-lg border border-white/10 hover:border-primary/40 text-text-muted hover:text-white font-medium text-xs text-center flex items-center justify-center gap-1.5 transition-colors ${
                          !isLive ? 'flex-1' : ''
                        }`}
                        title={project.isRepoPrivate ? "Repository is private" : "View source code on GitHub"}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{project.isRepoPrivate ? 'Repo Info' : 'View Code'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Transparent Verification Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-surface/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Truth in Portfolio Presentation</p>
              <p className="text-xs text-text-muted">
                Urban Plate is deployed and accessible live. NexDrop live URL will be updated once confirmed, and AI Video Detector remains an experimental Python codebase.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-surface hover:bg-surface-elevated text-xs font-semibold text-primary border border-primary/20 hover:border-primary/50 whitespace-nowrap transition-colors"
          >
            Visit GitHub Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
};
