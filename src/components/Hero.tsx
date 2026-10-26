"use client";

import React from "react";
import {
  Smartphone,
  ShieldCheck,
  CreditCard,
  Radio,
  Layers,
  MapPin,
  Mail,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
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
        {/* Top Status & Location Badge (shadcn-style pill) */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "var(--bg-carbon)",
            border: "1px solid var(--border-medium)",
            borderRadius: "100px",
            padding: "0.45rem 1.15rem",
            marginBottom: "1.8rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            flexWrap: "wrap",
          }}
        >
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
            Flutter Developer | Mobile Application Developer
          </span>
          <span style={{ color: "var(--border-titanium)" }}>•</span>
          <span
            style={{
              fontSize: "0.82rem",
              color: "var(--text-slate)",
              fontFamily: "var(--font-mono)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <MapPin size={12} color="var(--accent-amber)" />
            <span>Bhavnagar, Gujarat, India</span>
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
          Building cross-platform mobile solutions with{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #54C5F8 0%, #0175C2 65%, #F7D538 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Flutter &amp; Dart
          </span>{" "}
          for Android and iOS.
        </h1>

        {/* Human Narrative Subtitle - Directly from Resume Professional Summary */}
        <p
          style={{
            fontSize: "clamp(1.02rem, 1.35vw, 1.25rem)",
            color: "var(--text-slate)",
            maxWidth: "880px",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          Hi, I&apos;m <strong>Jainam Kikani</strong>. Flutter Developer experienced in building and maintaining
          cross-platform mobile applications for Android and iOS across education platforms, video and music player applications,
          payment integrations (Stripe, NMI), dealer management systems, appointment management, and IoT-connected applications.
          Skilled in Flutter, Dart, REST API, GetX, MobX, MVVM architecture, SQLite, Firebase, WebSockets, and AI-assisted development tools (OpenAI Codex, Claude Code, Google Antigravity).
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            flexWrap: "wrap",
            marginBottom: "4.5rem",
          }}
        >
          <a href="#showroom" onClick={onCtaClick} className="btn-primary">
            <Smartphone size={18} />
            <span>Launch Device Showroom</span>
          </a>

          <a href="#experience" onClick={onCtaClick} className="btn-secondary">
            <ShieldCheck size={18} color="var(--accent-amber)" />
            <span>View Experience &amp; Projects</span>
          </a>

          {/* Quick Verified Profile Pills */}
          <a
            href="https://github.com/JainamO7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "0.6rem 0.95rem",
              fontSize: "0.86rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
            title="GitHub (JainamO7)"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jainam-kikani-678198230/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "0.6rem 0.95rem",
              fontSize: "0.86rem",
              color: "#0A66C2",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            onClick={onCtaClick}
            className="btn-secondary"
            style={{
              padding: "0.6rem 0.95rem",
              fontSize: "0.86rem",
              color: "var(--accent-vermillion)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>
        </div>

        {/* Production Metrics Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
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
                gap: "0.65rem",
                color: "var(--accent-vermillion)",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "rgba(255, 75, 38, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Smartphone size={16} />
              </div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                CROSS-PLATFORM
              </span>
            </div>
            <div
              style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              8+ Projects
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              Android &amp; iOS mobile apps across media, payments, SaaS, and EdTech
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
                gap: "0.65rem",
                color: "var(--accent-emerald)",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "rgba(0, 214, 114, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CreditCard size={16} />
              </div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                PAYMENTS
              </span>
            </div>
            <div
              style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              Stripe &amp; NMI
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              Payment gateway integrations for mobile checkouts and dealer SaaS
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
                gap: "0.65rem",
                color: "var(--accent-amber)",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "rgba(255, 170, 29, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Radio size={16} />
              </div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                APIs &amp; REAL-TIME
              </span>
            </div>
            <div
              style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              WebSockets &amp; REST
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              HTTP, REST API integration, JSON parsing &amp; real-time duplex WebSockets
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
                gap: "0.65rem",
                color: "var(--accent-cyan)",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "rgba(0, 200, 229, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Layers size={16} />
              </div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                STATE &amp; ARCHITECTURE
              </span>
            </div>
            <div
              style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "var(--text-pure)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
              }}
            >
              GetX &amp; MobX
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--text-slate)", marginTop: "0.4rem" }}>
              MVVM software architecture, SQLite local storage &amp; Firebase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
