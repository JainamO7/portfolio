"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Copy, Check, ArrowUpRight } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/icons/BrandIcons";
import { PERSONAL_INFO } from "@/data/projectsData";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all fields before sending.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2335c680-a957-48d1-8a3b-6b77f89cb79b",
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio Inquiry from ${formData.name.trim()}`,
          from_name: "Jainam Kikani Portfolio",
        }),
      });

      const result = await response.json();
      setSubmitting(false);

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || "Failed to send message. Please use direct email.");
      }
    } catch {
      setSubmitting(false);
      // Fallback: trigger user's mail client directly
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hello Jainam,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
      )}`;
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-primary)]">
            Get in touch.
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Open for full-time opportunities, remote positions, and mobile project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-subtle)]">
                Direct Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[var(--color-text-primary)] hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-1.5 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-primary)] hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="p-1.5 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social profiles */}
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-subtle)]">
                Profiles & Socials
              </h3>
              <div className="flex flex-col space-y-2.5">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-canvas)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-colors">
                      <Linkedin size={16} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-mono font-medium text-[var(--color-text-primary)]">LinkedIn</p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">jainam-kikani-678198230</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-canvas)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-colors">
                      <Github size={16} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-mono font-medium text-[var(--color-text-primary)]">GitHub</p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">github.com/JainamO7</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-canvas)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/50 transition-colors">
                      <Whatsapp size={16} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-mono font-medium text-[var(--color-text-primary)]">WhatsApp</p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">+91 7490075875</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
                    Message received.
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and reply to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-[var(--color-accent)] hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[var(--color-text-primary)]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-md border border-[var(--color-border)] bg-[var(--color-canvas)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[var(--color-text-primary)]"
                    >
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-md border border-[var(--color-border)] bg-[var(--color-canvas)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[var(--color-text-primary)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief overview of your project, role, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-[var(--color-border)] bg-[var(--color-canvas)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-md bg-rose-500/10 border border-rose-500/20 text-xs text-rose-500 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-md bg-[var(--color-accent)] text-white dark:text-stone-900 hover:opacity-90 disabled:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
