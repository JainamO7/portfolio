"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Smartphone, Tablet, ArrowUp, Code2 } from "lucide-react";
import { playTactileClick } from "@/utils/sound";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
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

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-carbon)",
        padding: "3rem 0 2rem 0",
        position: "relative",
      }}
    >
      <div className="main-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Brand & Tagline */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "var(--text-pure)",
                marginBottom: "0.25rem",
              }}
            >
              Jainam Kikani
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>
              Flutter & Mobile Application Developer • Bhavnagar, Gujarat, India
            </div>
          </div>

          {/* Live Viewport & 4K Detector Pill */}
          <div
            style={{
              background: "var(--bg-pitch)",
              border: "1px solid var(--border-medium)",
              borderRadius: "12px",
              padding: "0.55rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <div style={{ color: "var(--accent-vermillion)" }}>
              {viewportInfo.category.includes("Mobile") ? (
                <Smartphone size={16} />
              ) : viewportInfo.category.includes("Tablet") ? (
                <Tablet size={16} />
              ) : (
                <Monitor size={16} />
              )}
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fff" }} suppressHydrationWarning>
                {mounted ? viewportInfo.category : "Calibrating display..."}
              </div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }} suppressHydrationWarning>
                {mounted && viewportInfo.width > 0 ? `${viewportInfo.width}×${viewportInfo.height} px • @${viewportInfo.dpr.toFixed(1)}x DPR` : "Detecting resolution..."}
              </div>
            </div>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            title="Scroll to top"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-medium)",
              color: "var(--text-chalk)",
              padding: "0.6rem 0.9rem",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              transition: "all 0.2s ease",
            }}
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom fine print */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
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
            Handcrafted with Next.js, TypeScript & Human-Centered Design. No AI-cliché templates.
          </div>
          <div>
            © 2026 Jainam Kikani. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
