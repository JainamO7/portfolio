"use client";

import React, { useState, useEffect } from "react";
import { Smartphone, Monitor, Layers, Briefcase, Mail, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavClick = () => {};

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
            background: scrolled ? "rgba(18, 21, 27, 0.88)" : "rgba(18, 21, 27, 0.6)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid var(--border-medium)",
            borderRadius: "18px",
            padding: "0.75rem 1.4rem",
            boxShadow: scrolled ? "0 16px 40px -10px rgba(0,0,0,0.6)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          {/* Brand & Status */}
          <a
            href="#"
            onClick={onNavClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
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
                FLUTTER & MOBILE DEV
              </div>
            </div>
          </a>

          {/* Quick Navigation Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <a
              href="#showroom"
              onClick={onNavClick}
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 0.85rem",
                borderRadius: "8px",
                color: "var(--text-slate)",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
            >
              <Smartphone size={15} color="var(--accent-vermillion)" />
              <span>Showroom</span>
            </a>

            <a
              href="#architecture"
              onClick={onNavClick}
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 0.85rem",
                borderRadius: "8px",
                color: "var(--text-slate)",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
            >
              <Layers size={15} color="var(--accent-amber)" />
              <span>Architecture</span>
            </a>

            <a
              href="#experience"
              onClick={onNavClick}
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 0.85rem",
                borderRadius: "8px",
                color: "var(--text-slate)",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
            >
              <Briefcase size={15} color="var(--accent-emerald)" />
              <span>Experience</span>
            </a>
          </div>

          {/* Controls & CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="#contact"
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
                transition: "all 0.2s ease",
              }}
            >
              <Mail size={14} />
              <span>Connect</span>
            </a>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .nav-link:hover {
          color: var(--text-pure) !important;
          background: rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 768px) {
          .nav-link {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
