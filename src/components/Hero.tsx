"use client";

import React from "react";
import { ArrowDown, Smartphone, ShieldCheck, Zap, Radio, Sparkles } from "lucide-react";
import { playTactileClick } from "@/utils/sound";

export default function Hero() {
  const onCtaClick = () => {
    playTactileClick("pop");
  };

  return (
    <section
      style={{
        paddingTop: "clamp(7.5rem, 14vh, 12rem)",
        paddingBottom: "clamp(3.5rem, 8vh, 6rem)",
        position: "relative",
      }}
    >
      <div className="main-container">
        {/* Top Status & Location Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "var(--bg-carbon)",
            border: "1px solid var(--border-medium)",
            borderRadius: "100px",
            padding: "0.4rem 1.1rem",
            marginBottom: "1.8rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--accent-emerald)",
              display: "inline-block",
            }}
            className="status-beacon"
          />
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--text-chalk)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontFamily: "var(--font-mono)",
            }}
          >
            Flutter & Mobile Engineer • AI-Augmented
          </span>
          <span style={{ color: "var(--border-titanium)" }}>•</span>
          <span
            style={{
              fontSize: "0.82rem",
              color: "var(--text-slate)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Bhavnagar, India
          </span>
        </div>

        {/* Main Display Headline */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5.2vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            maxWidth: "1280px",
            marginBottom: "1.6rem",
            letterSpacing: "-0.035em",
          }}
        >
          Engineering tactile mobile experiences with{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF4B26 0%, #FFAA1D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            architectural rigor
          </span>{" "}
          and real-world speed.
        </h1>

        {/* Human Narrative Subtitle */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
            color: "var(--text-slate)",
            maxWidth: "840px",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
          }}
        >
          Hi, I&apos;m <strong>Jainam Kikani</strong>. I build and ship production Android & iOS applications across
          media streaming, FinTech payments (Stripe & NMI), and real-time WebSockets. Supercharged by modern AI-augmented workflows
          (Claude Code, Google Antigravity & Codex) for high-velocity craft.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4.5rem",
          }}
        >
          <a href="#showroom" onClick={onCtaClick} className="btn-primary">
            <Smartphone size={18} />
            <span>Launch Device Showroom</span>
          </a>

          <a href="#architecture" onClick={onCtaClick} className="btn-secondary">
            <ShieldCheck size={18} color="var(--accent-amber)" />
            <span>View Payment & WebSocket Systems</span>
          </a>
        </div>

        {/* Production Metrics Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: "1.6rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--accent-vermillion)",
                marginBottom: "0.5rem",
              }}
            >
              <Smartphone size={18} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                CROSS-PLATFORM
              </span>
            </div>
            <div
              style={{
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              8+ Apps
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              Shipped across Google Play & iOS (Media, FinTech, EdTech, IoT)
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "1.6rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--accent-emerald)",
                marginBottom: "0.5rem",
              }}
            >
              <Zap size={18} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                PAYMENTS & RAILS
              </span>
            </div>
            <div
              style={{
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              Stripe & NMI
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              PCI-compliant tokenized checkouts, subscriptions & dealer invoicing
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "1.6rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--accent-amber)",
                marginBottom: "0.5rem",
              }}
            >
              <Radio size={18} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                REAL-TIME SYNC
              </span>
            </div>
            <div
              style={{
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              WebSockets
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              Sub-50ms duplex streaming for live telemetry, recharge & order state
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "1.6rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--accent-cyan)",
                marginBottom: "0.5rem",
              }}
            >
              <Sparkles size={18} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                STATE & SPEED
              </span>
            </div>
            <div
              style={{
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              GetX & MobX
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              60fps reactive rendering, zero memory leaks, offline SQLite caching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
