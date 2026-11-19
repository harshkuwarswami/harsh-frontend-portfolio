import React, { useState } from 'react';
import { Layout, Code2, Wrench, Compass, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>02 / Technical Skills</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-4">
            <div>
              <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Toolkit & <span className="text-gradient-cyan">Technologies</span>
              </h2>
              <p className="text-text-muted mt-2 max-w-xl text-base">
                Verified technologies developed through academic curriculum, practical internship, and project implementations.
              </p>
            </div>
            {/* Honest representation badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-xs text-text-muted">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              <span>Accurate & un-fabricated skill representations</span>
            </div>
          </div>
        </div>

        {/* Category Tabs (Desktop & Tablet) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 scrollbar-none">
          {skillCategories.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2.5 rounded-xl font-display text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-primary text-background shadow-lg shadow-primary/20 border border-primary'
                    : 'bg-surface/60 text-text-muted hover:text-white hover:bg-surface border border-white/5'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <span>{getCategoryIcon(category.iconName)}</span>
                <span>{category.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-background/20 text-background font-bold' : 'bg-white/5 text-text-subtle'
                  }`}
                >
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="mb-6">
          <p className="text-sm font-mono text-text-muted">
            {skillCategories[activeTab].description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  {skill.tag && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary">
                      {skill.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-text-subtle">
                  Verified Area
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency */}
        <div className="mt-12 p-4 rounded-xl bg-surface/40 border border-white/5 flex items-start sm:items-center gap-3">
          <div className="p-1.5 rounded-md bg-secondary/15 text-secondary shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            <strong className="text-white">Note on technical proficiency:</strong> Skills listed represent verified exposure from academic coursework, internship projects, and personal repositories. Rather than misleading progress percentages, real capabilities are evidenced in the selected projects below.
          </p>
        </div>
      </div>
    </section>
  );
};
