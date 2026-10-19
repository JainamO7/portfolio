"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ExternalLink } from "lucide-react";
import { playTactileClick } from "@/utils/sound";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick("pop");
    setFormSubmitted(true);
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
                    <a
                      href={`tel:${phone}`}
                      style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", textDecoration: "none" }}
                    >
                      {phone}
                    </a>
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
                href="https://github.com/Jainam07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: "center", fontSize: "0.88rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub (Jainam07)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jainam-kikani"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: "center", fontSize: "0.88rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
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
                  Message Transmitted!
                </div>
                <div style={{ fontSize: "0.86rem", color: "var(--text-slate)" }}>
                  Thank you! I will review your message and reply to {formData.email || "you"} shortly.
                </div>
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
                    placeholder="e.g. Sarah Connor"
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
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-chalk)", display: "block", marginBottom: "0.4rem" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-chalk)", display: "block", marginBottom: "0.4rem" }}>
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="We're looking to build a high-performance cross-platform Flutter application with payment integration..."
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

                <button type="submit" className="btn-primary" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
                  <Send size={16} />
                  <span>Transmit Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
