"use client";

import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Layers,
  Briefcase,
  Cpu,
  Mail,
  Menu,
  X,
  Phone,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { playTactileClick } from "@/utils/sound";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playTactileClick("soft");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (targetId: string) => {
    playTactileClick("soft");
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 0",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="main-container">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled ? "rgba(11, 17, 26, 0.95)" : "rgba(11, 17, 26, 0.8)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border-medium)",
            borderRadius: "18px",
            padding: "0.75rem 1.4rem",
            boxShadow: scrolled ? "0 16px 40px -10px rgba(0, 0, 0, 0.75), 0 0 20px rgba(84, 197, 248, 0.08)" : "none",
            transition: "all 0.3s ease",
            position: "relative",
          }}
        >
          {/* Brand & Clickable Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            aria-label="Jainam Kikani Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #54C5F8 0%, #0175C2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                boxShadow: "0 2px 14px rgba(84, 197, 248, 0.45)",
                flexShrink: 0,
              }}
            >
              JK
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-pure)",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1.2,
                }}
              >
                Jainam Kikani
              </div>
              <div
                style={{
                  fontSize: "0.74rem",
                  color: "var(--text-slate)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                FLUTTER &amp; MOBILE DEV
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links">
            <button
              onClick={() => handleNavClick("showroom")}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Smartphone size={15} color="var(--accent-vermillion)" />
              <span>Showroom</span>
            </button>

            <button
              onClick={() => handleNavClick("architecture")}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Layers size={15} color="var(--accent-amber)" />
              <span>Architecture</span>
            </button>

            <button
              onClick={() => handleNavClick("experience")}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Briefcase size={15} color="var(--accent-emerald)" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => handleNavClick("skills")}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Cpu size={15} color="var(--accent-cyan)" />
              <span>Skills</span>
            </button>
          </div>

          {/* Desktop Action Controls */}
          <div className="desktop-controls">
            <a
              href="https://github.com/JainamO7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "var(--bg-carbon)",
                border: "1px solid var(--border-medium)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-chalk)",
                transition: "all 0.2s ease",
              }}
              title="GitHub (JainamO7)"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/jainam-kikani-678198230/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "var(--bg-carbon)",
                border: "1px solid var(--border-medium)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0A66C2",
                transition: "all 0.2s ease",
              }}
              title="LinkedIn Profile"
            >
              <Linkedin size={17} />
            </a>

            <button
              onClick={() => handleNavClick("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                background: "linear-gradient(135deg, #54C5F8 0%, #0175C2 100%)",
                color: "#ffffff",
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
                fontSize: "0.86rem",
                fontWeight: 700,
                border: "1px solid rgba(255, 255, 255, 0.35)",
                boxShadow: "0 2px 14px rgba(84, 197, 248, 0.32)",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Mail size={15} />
              <span>Connect</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="mobile-toggle">
            <button
              onClick={() => {
                playTactileClick("pop");
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Menu"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: mobileMenuOpen ? "var(--accent-vermillion)" : "var(--bg-carbon)",
                border: "1px solid var(--border-medium)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-dropdown glass-panel"
            style={{
              marginTop: "0.6rem",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              animation: "fadeInDown 0.2s ease forwards",
            }}
          >
            <button
              onClick={() => handleNavClick("showroom")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255, 75, 38, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Smartphone size={17} color="var(--accent-vermillion)" />
                </div>
                <div>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", display: "block", color: "#fff" }}>Showroom</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Hardware Frames</span>
                </div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </button>

            <button
              onClick={() => handleNavClick("architecture")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255, 170, 29, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Layers size={17} color="var(--accent-amber)" />
                </div>
                <div>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", display: "block", color: "#fff" }}>Architecture</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Payments &amp; Sockets</span>
                </div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </button>

            <button
              onClick={() => handleNavClick("experience")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0, 214, 114, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Briefcase size={17} color="var(--accent-emerald)" />
                </div>
                <div>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", display: "block", color: "#fff" }}>Experience</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>1 Yr • Adite &amp; JDK</span>
                </div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </button>

            <button
              onClick={() => handleNavClick("skills")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0, 200, 229, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Cpu size={17} color="var(--accent-cyan)" />
                </div>
                <div>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", display: "block", color: "#fff" }}>Skills</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Flutter, GetX, Dart</span>
                </div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="mobile-menu-item"
              style={{
                background: "rgba(255, 75, 38, 0.12)",
                border: "1px solid rgba(255, 75, 38, 0.35)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent-vermillion)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={16} color="#fff" />
                </div>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "0.95rem", display: "block", color: "var(--accent-vermillion)" }}>Direct Connect</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--accent-vermillion)", fontFamily: "var(--font-mono)" }}>Get in Touch</span>
                </div>
              </div>
              <ChevronRight size={16} color="var(--accent-vermillion)" />
            </button>

            {/* Quick Profile & Phone Strip in Mobile Menu */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "0.85rem",
                marginTop: "0.4rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
              }}
            >
              <a
                href="https://github.com/JainamO7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.82rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jainam-kikani-678198230/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.82rem", color: "#0A66C2", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://wa.me/917490075875"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.82rem", color: "var(--accent-emerald)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+917490075875"
                className="btn-secondary"
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.82rem", color: "var(--accent-emerald)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Phone size={14} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .desktop-controls {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .mobile-toggle {
          display: none;
        }
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          color: var(--text-slate);
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          color: var(--text-pure) !important;
          background: rgba(255, 255, 255, 0.05);
        }
        .mobile-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: var(--bg-carbon);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }
        .mobile-menu-item:hover {
          background: var(--bg-surface);
          border-color: var(--border-medium);
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 860px) {
          .desktop-nav-links,
          .desktop-controls {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
