"use client";

import React, { useState, useEffect } from "react";
import { Smartphone, Layers, Briefcase, Cpu, Mail, Menu, X, Phone } from "lucide-react";
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
            background: scrolled ? "rgba(18, 21, 27, 0.94)" : "rgba(18, 21, 27, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border-medium)",
            borderRadius: "18px",
            padding: "0.75rem 1.4rem",
            boxShadow: scrolled ? "0 16px 40px -10px rgba(0,0,0,0.6)" : "none",
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
                background: "linear-gradient(135deg, #FF4B26 0%, #B82808 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                boxShadow: "0 2px 10px rgba(255, 75, 38, 0.35)",
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
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--accent-emerald)",
                    display: "inline-block",
                  }}
                  className="status-beacon"
                />
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
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
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
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <button
              onClick={() => handleNavClick("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "var(--accent-vermillion)",
                color: "#ffffff",
                padding: "0.55rem 1.1rem",
                borderRadius: "10px",
                fontSize: "0.86rem",
                fontWeight: 600,
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 2px 12px var(--accent-vermillion-glow)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <Mail size={14} />
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
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <Smartphone size={18} color="var(--accent-vermillion)" />
                <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Showroom</span>
              </div>
              <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Hardware Frames</span>
            </button>

            <button
              onClick={() => handleNavClick("architecture")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <Layers size={18} color="var(--accent-amber)" />
                <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Architecture</span>
              </div>
              <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Payments &amp; Sockets</span>
            </button>

            <button
              onClick={() => handleNavClick("experience")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <Briefcase size={18} color="var(--accent-emerald)" />
                <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Experience</span>
              </div>
              <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>1 Yr • Adite &amp; JDK</span>
            </button>

            <button
              onClick={() => handleNavClick("skills")}
              className="mobile-menu-item"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <Cpu size={18} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Skills</span>
              </div>
              <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Flutter, GetX, Dart</span>
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="mobile-menu-item"
              style={{
                background: "rgba(255, 75, 38, 0.12)",
                border: "1px solid rgba(255, 75, 38, 0.3)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <Mail size={18} color="var(--accent-vermillion)" />
                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--accent-vermillion)" }}>Direct Connect</span>
              </div>
              <span style={{ fontSize: "0.74rem", color: "var(--accent-vermillion)", fontFamily: "var(--font-mono)" }}>Get in Touch</span>
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
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.8rem" }}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jainam-kikani-678198230/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.8rem", color: "#0A66C2" }}
              >
                LinkedIn
              </a>

              <a
                href="tel:+917490075875"
                className="btn-secondary"
                style={{ padding: "0.55rem", justifyContent: "center", fontSize: "0.8rem", gridColumn: "span 2", color: "var(--accent-emerald)" }}
              >
                <Phone size={13} />
                <span>Call +91 7490075875</span>
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
