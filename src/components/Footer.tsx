"use client";

import React, { useState, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Tablet,
  ArrowUp,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  MessageSquare,
  Layers,
  Briefcase,
  Cpu,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { playTactileClick } from "@/utils/sound";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);
  const [viewportInfo, setViewportInfo] = useState<{
    width: number;
    height: number;
    dpr: number;
    category: string;
  }>({
    width: 0,
    height: 0,
    dpr: 1,
    category: "Calibrating display...",
  });

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());

    const updateResolution = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      let category = "Desktop 1080p";
      if (width < 640) {
        category = "Mobile Screen";
      } else if (width < 1024) {
        category = "Tablet Viewport";
      } else if (width >= 2560 || (width >= 1920 && dpr >= 2)) {
        category = "4K / Retina Ultra-HD";
      } else if (width >= 1440) {
        category = "QHD 1440p Display";
      }

      setViewportInfo({ width, height, dpr, category });
    };

    updateResolution();
    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, []);

  const scrollToTop = () => {
    playTactileClick("soft");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFooterNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    playTactileClick("soft");
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-carbon)",
        padding: "4rem 0 2.2rem 0",
        position: "relative",
      }}
    >
      <div className="main-container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: "2.8rem",
            marginBottom: "3.2rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.85rem",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "9px",
                  background: "linear-gradient(135deg, #54C5F8 0%, #0175C2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  letterSpacing: "-0.5px",
                  boxShadow: "0 2px 14px rgba(84, 197, 248, 0.45)",
                }}
              >
                JK
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "var(--text-pure)",
                    display: "block",
                    lineHeight: 1.2,
                  }}
                >
                  Jainam Kikani
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--accent-vermillion)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                  }}
                >
                  Flutter &amp; Mobile Developer
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--text-slate)", lineHeight: 1.6, maxWidth: "320px", marginBottom: "1rem" }}>
              Mobile Application Developer building robust, production-ready Android &amp; iOS software with clean MVVM architecture, GetX, MobX, and secure payment systems.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                marginBottom: "1rem",
              }}
            >
              <MapPin size={13} color="var(--accent-amber)" />
              <span>Bhavnagar, Gujarat, India</span>
            </div>

            {/* Live Viewport Chip */}
            {/* <div
              style={{
                background: "var(--bg-pitch)",
                border: "1px solid var(--border-medium)",
                borderRadius: "10px",
                padding: "0.45rem 0.85rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              <div style={{ color: "var(--accent-vermillion)", display: "flex", alignItems: "center" }}>
                {viewportInfo.category.includes("Mobile") ? (
                  <Smartphone size={14} />
                ) : viewportInfo.category.includes("Tablet") ? (
                  <Tablet size={14} />
                ) : (
                  <Monitor size={14} />
                )}
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff" }} suppressHydrationWarning>
                  {mounted ? viewportInfo.category : "Calibrating display..."}
                </div>
              </div> */}
            {/* </div> */}
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-pure)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontFamily: "var(--font-mono)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Sparkles size={13} color="var(--accent-vermillion)" />
              <span>Navigation</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <a
                href="#showroom"
                onClick={(e) => handleFooterNav(e, "showroom")}
                style={{
                  color: "var(--text-slate)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  transition: "all 0.2s ease",
                }}
              >
                <Smartphone size={14} color="var(--accent-vermillion)" />
                <span>Interactive Hardware Showroom</span>
              </a>

              <a
                href="#architecture"
                onClick={(e) => handleFooterNav(e, "architecture")}
                style={{
                  color: "var(--text-slate)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  transition: "all 0.2s ease",
                }}
              >
                <Layers size={14} color="var(--accent-amber)" />
                <span>Payment &amp; WebSocket Architecture</span>
              </a>

              <a
                href="#experience"
                onClick={(e) => handleFooterNav(e, "experience")}
                style={{
                  color: "var(--text-slate)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  transition: "all 0.2s ease",
                }}
              >
                <Briefcase size={14} color="var(--accent-emerald)" />
                <span>Work History &amp; Education</span>
              </a>

              <a
                href="#skills"
                onClick={(e) => handleFooterNav(e, "skills")}
                style={{
                  color: "var(--text-slate)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  transition: "all 0.2s ease",
                }}
              >
                <Cpu size={14} color="var(--accent-cyan)" />
                <span>Technical Arsenal &amp; AI Tools</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleFooterNav(e, "contact")}
                style={{
                  color: "var(--text-slate)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronRight size={14} color="var(--accent-vermillion)" />
                <span>Direct Transmission</span>
              </a>
            </div>
          </div>

          {/* Profiles & Verification Links */}
          <div>
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-pure)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontFamily: "var(--font-mono)",
                marginBottom: "1rem",
              }}
            >
              Verified Profiles
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="https://github.com/JainamO7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-chalk)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.45rem 0.65rem",
                  borderRadius: "8px",
                  background: "var(--bg-pitch)",
                  border: "1px solid var(--border-subtle)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <Github size={15} />
                </div>
                <span style={{ flex: 1, fontWeight: 500 }}>GitHub (JainamO7)</span>
                <ExternalLink size={13} color="var(--text-muted)" />
              </a>

              <a
                href="https://www.linkedin.com/in/jainam-kikani-678198230/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-chalk)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.45rem 0.65rem",
                  borderRadius: "8px",
                  background: "var(--bg-pitch)",
                  border: "1px solid var(--border-subtle)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "6px",
                    background: "rgba(10, 102, 194, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0A66C2",
                  }}
                >
                  <Linkedin size={15} />
                </div>
                <span style={{ flex: 1, fontWeight: 500 }}>LinkedIn Profile</span>
                <ExternalLink size={13} color="var(--text-muted)" />
              </a>

              <a
                href="https://wa.me/917490075875"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-chalk)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.45rem 0.65rem",
                  borderRadius: "8px",
                  background: "var(--bg-pitch)",
                  border: "1px solid var(--border-subtle)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "6px",
                    background: "rgba(0, 214, 114, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-emerald)",
                  }}
                >
                  <MessageSquare size={15} />
                </div>
                <span style={{ flex: 1, fontWeight: 500 }}>WhatsApp Chat</span>
                <ExternalLink size={13} color="var(--text-muted)" />
              </a>
            </div>
          </div>

          {/* Direct Communication Column */}
          <div>
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-pure)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontFamily: "var(--font-mono)",
                marginBottom: "1rem",
              }}
            >
              Direct Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:kikanijainam7@gmail.com"
                style={{
                  color: "#fff",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  transition: "color 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: "rgba(255, 75, 38, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-vermillion)",
                  }}
                >
                  <Mail size={15} />
                </div>
                <span>kikanijainam7@gmail.com</span>
              </a>

              <a
                href="tel:+917490075875"
                style={{
                  color: "#fff",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  transition: "color 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: "rgba(0, 214, 114, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-emerald)",
                  }}
                >
                  <Phone size={15} />
                </div>
                <span>+91 7490075875</span>
              </a>

              <button
                onClick={scrollToTop}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-medium)",
                  color: "var(--text-chalk)",
                  padding: "0.55rem 0.95rem",
                  borderRadius: "9px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  marginTop: "0.4rem",
                  width: "fit-content",
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowUp size={14} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Fine Print Row */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "1.6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
          }}
        >
          {/* <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Sparkles size={13} color="var(--accent-vermillion)" />
            <span>Built with Next.js, Lucide Iconography &amp; Flutter Architecture Rigor.</span>
          </div> */}
          <div suppressHydrationWarning>
            © {currentYear} Jainam Kikani. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
