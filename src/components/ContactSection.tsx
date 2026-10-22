"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ArrowRight,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { playTactileClick } from "@/utils/sound";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Email verification states
  const [emailStatus, setEmailStatus] = useState<"idle" | "checking" | "valid" | "invalid" | "typo">("idle");
  const [emailFeedback, setEmailFeedback] = useState<string>("");
  const [suggestedEmail, setSuggestedEmail] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const email = "kikanijainam7@gmail.com";
  const phone = "+91 7490075875";

  const handleCopyEmail = () => {
    playTactileClick("pop");
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    playTactileClick("pop");
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // Perform free domain & typo verification
  const verifyEmail = async (emailToVerify: string): Promise<boolean> => {
    const trimmed = emailToVerify.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setEmailStatus("idle");
      setEmailFeedback("");
      setSuggestedEmail("");
      return false;
    }

    setEmailStatus("checking");
    setEmailFeedback("Verifying mail server & domain...");

    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();

      if (data.isTypo && data.suggestion) {
        setEmailStatus("typo");
        setEmailFeedback(data.message || `Did you mean @${data.suggestion.split("@")[1]}?`);
        setSuggestedEmail(data.suggestion);
        return false;
      } else if (data.valid) {
        setEmailStatus("valid");
        setEmailFeedback(data.message || "Domain verified and active.");
        setSuggestedEmail("");
        return true;
      } else {
        setEmailStatus("invalid");
        setEmailFeedback(data.message || "Invalid email address or domain.");
        setSuggestedEmail("");
        return false;
      }
    } catch {
      setEmailStatus("valid");
      setEmailFeedback("Format valid.");
      return true;
    }
  };

  const handleEmailChange = (val: string) => {
    setFormData({ ...formData, email: val });

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (!val || val.length < 5 || !val.includes("@")) {
      setEmailStatus("idle");
      setEmailFeedback("");
      setSuggestedEmail("");
      return;
    }

    // Debounce DNS lookup by 600ms
    debounceTimer.current = setTimeout(() => {
      verifyEmail(val);
    }, 600);
  };

  const applySuggestedEmail = () => {
    if (suggestedEmail) {
      playTactileClick("pop");
      setFormData({ ...formData, email: suggestedEmail });
      verifyEmail(suggestedEmail);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick("pop");
    setSubmitError("");

    setSubmitting(true);
    const isValid = await verifyEmail(formData.email);

    if (!isValid) {
      setSubmitting(false);
      return;
    }

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
          subject: `Portfolio Message from ${formData.name.trim()}`,
          from_name: "Jainam Kikani Portfolio",
        }),
      });

      const result = await response.json();
      setSubmitting(false);

      if (result.success) {
        setFormSubmitted(true);
      } else {
        setSubmitError(result.message || "Could not deliver email. Please try again or use direct email above.");
      }
    } catch {
      setSubmitting(false);
      // Resilient fallback: open mail client with message drafted
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Jainam,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
      )}`;
      setFormSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "clamp(4rem, 8vh, 7rem)",
        paddingBottom: "clamp(5rem, 10vh, 9rem)",
        position: "relative",
      }}
    >
      <div className="main-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255, 75, 38, 0.12)",
              border: "1px solid var(--accent-vermillion-glow)",
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} color="var(--accent-vermillion)" />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent-vermillion)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              Direct Connect
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s build your next flagship app.
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              color: "var(--text-slate)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Available for full-time Mobile Engineering roles, high-impact consulting, and Flutter architecture contracts.
          </p>
        </div>

        {/* Contact Terminal Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(290px, 100%), 1fr))",
            gap: "2.5rem",
            maxWidth: "1060px",
            margin: "0 auto",
          }}
        >
          {/* Direct Details & One-Click Copy */}
          <div
            className="glass-panel"
            style={{
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--accent-emerald)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "0.6rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--accent-emerald)",
                  }}
                  className="status-beacon"
                />
                CURRENTLY OPEN TO OPPORTUNITIES
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.5rem" }}>
                Reach out directly
              </h3>

              {/* Email Card with Copy */}
              <div
                style={{
                  background: "var(--bg-carbon)",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(255, 75, 38, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-vermillion)",
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      PRIMARY EMAIL
                    </div>
                    <a
                      href={`mailto:${email}`}
                      style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", textDecoration: "none" }}
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    background: copiedEmail ? "var(--accent-emerald)" : "var(--bg-elevated)",
                    color: copiedEmail ? "#08090C" : "var(--text-chalk)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.45rem 0.75rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Card with Copy */}
              <div
                style={{
                  background: "var(--bg-carbon)",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(0, 214, 114, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-emerald)",
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      PHONE / WHATSAPP
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                      <a
                        href={`tel:${phone}`}
                        style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", textDecoration: "none" }}
                      >
                        {phone}
                      </a>
                      <a
                        href="https://wa.me/917490075875"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.74rem",
                          color: "var(--accent-emerald)",
                          textDecoration: "none",
                          fontFamily: "var(--font-mono)",
                          background: "rgba(0, 214, 114, 0.1)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "6px",
                          border: "1px solid rgba(0, 214, 114, 0.25)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <MessageSquare size={13} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy phone to clipboard"
                  style={{
                    background: copiedPhone ? "var(--accent-emerald)" : "var(--bg-elevated)",
                    color: copiedPhone ? "#08090C" : "var(--text-chalk)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.45rem 0.75rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Location Card */}
              <div
                style={{
                  background: "var(--bg-carbon)",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "14px",
                  padding: "1rem 1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(255, 170, 29, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-amber)",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>
                    Bhavnagar, Gujarat, India (Remote or Relocation)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="https://github.com/JainamO7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: "center", fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Github size={16} />
                <span>GitHub (JainamO7)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jainam-kikani-678198230/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: "center", fontSize: "0.88rem", color: "#0A66C2", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Message Transmission Card */}
          <div
            className="glass-panel"
            style={{
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Send an Instant Transmission
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-slate)", marginBottom: "1.5rem" }}>
              Need a project quote, mobile architecture review, or have an open role? Leave a message below.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  background: "rgba(0, 214, 114, 0.1)",
                  border: "1px solid var(--accent-emerald)",
                  borderRadius: "14px",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--accent-emerald)",
                    color: "#08090C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto",
                  }}
                >
                  <Check size={24} />
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>
                  Message Sent Successfully!
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-slate)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                  Thank you, <strong style={{ color: "#fff" }}>{formData.name}</strong>! Your message has been received. I will review it and reply to <strong style={{ color: "var(--accent-emerald)" }}>{formData.email}</strong> shortly.
                </div>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                    setEmailStatus("idle");
                    setSubmitError("");
                  }}
                  className="btn-secondary"
                  style={{ fontSize: "0.84rem", margin: "0 auto" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-chalk)", display: "block", marginBottom: "0.4rem" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      background: "var(--bg-carbon)",
                      border: "1px solid var(--border-medium)",
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-chalk)" }}>
                      Email Address
                    </label>
                    {/* <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      Live MX &amp; Typo Verification
                    </span> */}
                  </div>

                  <div style={{ position: "relative" }}>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={() => formData.email && verifyEmail(formData.email)}
                      style={{
                        width: "100%",
                        background: "var(--bg-carbon)",
                        border:
                          emailStatus === "valid"
                            ? "1px solid var(--accent-emerald)"
                            : emailStatus === "invalid"
                            ? "1px solid #FF3366"
                            : emailStatus === "typo"
                            ? "1px solid var(--accent-amber)"
                            : "1px solid var(--border-medium)",
                        borderRadius: "10px",
                        padding: "0.75rem 2.5rem 0.75rem 1rem",
                        color: "#fff",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.2s ease",
                      }}
                    />

                    {/* Status Icon */}
                    <div
                      style={{
                        position: "absolute",
                        right: "0.9rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }}
                    >
                      {emailStatus === "checking" && <Loader2 size={16} className="animate-spin" color="var(--accent-cyan)" />}
                      {emailStatus === "valid" && <CheckCircle2 size={16} color="var(--accent-emerald)" />}
                      {emailStatus === "invalid" && <AlertCircle size={16} color="#FF3366" />}
                      {emailStatus === "typo" && <AlertCircle size={16} color="var(--accent-amber)" />}
                    </div>
                  </div>

                  {/* Typo Auto-Correction Prompt */}
                  {emailStatus === "typo" && (
                    <div
                      style={{
                        marginTop: "0.45rem",
                        background: "rgba(255, 170, 29, 0.12)",
                        border: "1px solid rgba(255, 170, 29, 0.35)",
                        borderRadius: "8px",
                        padding: "0.45rem 0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "0.78rem",
                        color: "var(--accent-amber)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <Lightbulb size={14} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
                        <span>{emailFeedback}</span>
                      </div>
                      <button
                        type="button"
                        onClick={applySuggestedEmail}
                        style={{
                          background: "var(--accent-amber)",
                          color: "#08090C",
                          border: "none",
                          borderRadius: "6px",
                          padding: "0.2rem 0.55rem",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <span>Fix to {suggestedEmail}</span>
                        <ArrowRight size={11} />
                      </button>
                    </div>
                  )}

                  {/* Feedback Message */}
                  {emailStatus === "invalid" && (
                    <div style={{ fontSize: "0.76rem", color: "#FF3366", marginTop: "0.35rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <AlertCircle size={13} />
                      <span>{emailFeedback}</span>
                    </div>
                  )}

                  {emailStatus === "valid" && (
                    <div style={{ fontSize: "0.76rem", color: "var(--accent-emerald)", marginTop: "0.35rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <CheckCircle2 size={13} />
                      <span>{emailFeedback}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-chalk)", display: "block", marginBottom: "0.4rem" }}>
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      background: "var(--bg-carbon)",
                      border: "1px solid var(--border-medium)",
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {submitError && (
                  <div style={{ background: "rgba(255, 51, 102, 0.12)", border: "1px solid rgba(255, 51, 102, 0.35)", borderRadius: "8px", padding: "0.6rem 0.85rem", fontSize: "0.82rem", color: "#FF3366", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <AlertCircle size={15} />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || emailStatus === "invalid" || emailStatus === "typo"}
                  className="btn-primary"
                  style={{
                    justifyContent: "center",
                    marginTop: "0.5rem",
                    opacity: submitting || emailStatus === "invalid" || emailStatus === "typo" ? 0.6 : 1,
                    cursor: submitting || emailStatus === "invalid" || emailStatus === "typo" ? "not-allowed" : "pointer",
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Verifying &amp; Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Transmit Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
