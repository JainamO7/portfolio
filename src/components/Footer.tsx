"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Smartphone, Tablet, ArrowUp, Mail, Phone, ExternalLink } from "lucide-react";
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
        padding: "3.5rem 0 2rem 0",
        position: "relative",
      }}
    >
      <div className="main-container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #FF4B26 0%, #B82808 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  letterSpacing: "-0.5px",
                }}
              >
                JK
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  color: "var(--text-pure)",
                }}
              >
                Jainam Kikani
              </span>
            </div>

            <p style={{ fontSize: "0.86rem", color: "var(--text-slate)", lineHeight: 1.6, maxWidth: "320px", marginBottom: "1.2rem" }}>
              Flutter Developer &amp; Mobile Application Developer building robust, production-ready Android &amp; iOS software from Bhavnagar, Gujarat, India.
            </p>

            {/* Live Viewport Chip */}
            <div
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
              <div style={{ color: "var(--accent-vermillion)" }}>
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
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-pure)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)", marginBottom: "1rem" }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="#showroom" onClick={(e) => handleFooterNav(e, "showroom")} style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s ease" }}>
                Interactive Showroom
              </a>
              <a href="#architecture" onClick={(e) => handleFooterNav(e, "architecture")} style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s ease" }}>
                Payment &amp; WebSocket Architecture
              </a>
              <a href="#experience" onClick={(e) => handleFooterNav(e, "experience")} style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s ease" }}>
                Work History &amp; Education
              </a>
              <a href="#skills" onClick={(e) => handleFooterNav(e, "skills")} style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s ease" }}>
                Technical Arsenal &amp; AI Tools
              </a>
              <a href="#contact" onClick={(e) => handleFooterNav(e, "contact")} style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s ease" }}>
                Direct Transmission
              </a>
            </div>
          </div>

          {/* Profiles & Verification Links */}
          <div>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-pure)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)", marginBottom: "1rem" }}>
              Verified Profiles
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="https://github.com/JainamO7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span>GitHub (JainamO7)</span>
                <ExternalLink size={12} color="var(--text-muted)" />
              </a>
              <a
                href="https://www.linkedin.com/in/jainam-kikani-678198230/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-slate)", fontSize: "0.88rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span>LinkedIn (Jainam Kikani)</span>
                <ExternalLink size={12} color="var(--text-muted)" />
              </a>
            
            </div>
          </div>

          {/* Direct Communication Column */}
          <div>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-pure)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)", marginBottom: "1rem" }}>
              Direct Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:kikanijainam7@gmail.com"
                style={{ color: "#fff", fontSize: "0.88rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Mail size={15} color="var(--accent-vermillion)" />
                <span>kikanijainam7@gmail.com</span>
              </a>

              <a
                href="tel:+917490075875"
                style={{ color: "#fff", fontSize: "0.88rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Phone size={15} color="var(--accent-emerald)" />
                <span>+91 7490075875</span>
              </a>

              <button
                onClick={scrollToTop}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-medium)",
                  color: "var(--text-chalk)",
                  padding: "0.55rem 0.9rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginTop: "0.4rem",
                  width: "fit-content",
                }}
              >
                <ArrowUp size={13} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Fine Print Row */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            Built with Next.js, Flutter Architecture Rigor &amp; Human Craft.
          </div>
          <div suppressHydrationWarning>
            © {currentYear} Jainam Kikani. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
