import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'composed'>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38BDF8', '#6366F1', '#A78BFA']
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Direct, reliable, transparent mailto composition (No fake API keys, no false promises)
    const emailSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    
    // Trigger mail client
    window.location.href = mailtoLink;
    setSubmittedStatus('composed');

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38BDF8', '#6366F1', '#A78BFA']
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-surface/50 border-t border-white/5" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span>07 / Contact</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Let's Build Something <span className="text-gradient-cyan">Amazing.</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Have an opportunity, project idea, or want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-primary/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/15 text-primary border border-primary/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-subtle uppercase">Direct Email</span>
                  <p className="text-base font-bold text-white font-mono break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-muted leading-relaxed mb-6">
                Feel free to email me directly for entry-level frontend developer inquiries, collaborations, or questions.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-glow-primary transition-all duration-300"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-surface hover:bg-surface-elevated text-text-muted hover:text-white border border-white/10 hover:border-primary/40 transition-colors relative"
                  title="Copy email address"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <div className="mt-3 text-center text-xs font-mono text-emerald-400 animate-in fade-in duration-200">
                  ✓ Copied {personalInfo.email} to clipboard!
                </div>
              )}
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-xl border border-white/10 hover:border-[#0A66C2]/60 transition-all duration-300 group flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-text-muted">Connect Profile</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-white/10 text-white group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                  <span className="text-[11px] text-text-muted">@harshkuwarswami</span>
                </div>
              </a>
            </div>

            {/* Location Notice */}
            <div className="p-4 rounded-xl bg-surface/40 border border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs text-text-muted">
                Based in <strong className="text-white">Aligarh, Uttar Pradesh, India</strong> (IST timezone / UTC+5:30)
              </span>
            </div>
          </div>

          {/* Right Column: Contact Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-display font-bold text-white">Send a Message</h3>
                </div>
                <span className="text-[11px] font-mono text-text-subtle">
                  Direct Mailto Integration
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-1.5">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder:text-text-subtle/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-1.5">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder:text-text-subtle/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-text-muted mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Entry-level Frontend Role / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder:text-text-subtle/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-1.5">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Harsh, I came across your portfolio and wanted to reach out regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder:text-text-subtle/50 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-background font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-glow-primary transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose & Open in Email Client</span>
                </button>
              </form>

              {submittedStatus === 'composed' && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 text-center animate-in fade-in">
                  ✓ Prepared email draft to {personalInfo.email}. Your default mail client has been opened!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
