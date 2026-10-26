import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Smartphone, Briefcase, Mail } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Jainam Kikani",
  description: "The requested page does not exist. Return to Jainam Kikani's Flutter & Mobile Developer portfolio.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        background: "var(--bg-pitch)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div
        className="glass-panel"
        style={{
          maxWidth: "560px",
          width: "100%",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "clamp(4.5rem, 12vw, 7.5rem)",
            fontWeight: 900,
            fontFamily: "var(--font-display)",
            lineHeight: 1,
            background: "linear-gradient(135deg, #54C5F8 0%, #0175C2 70%, #F7D538 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 800,
            color: "var(--text-pure)",
            marginBottom: "0.8rem",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-slate)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          The page or screen you are looking for has been moved, renamed, or does not exist on this route.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <Link href="/" className="btn-primary" style={{ textDecoration: "none" }}>
            <Home size={16} />
            <span>Return to Portfolio</span>
          </Link>

          <Link href="/#contact" className="btn-secondary" style={{ textDecoration: "none" }}>
            <Mail size={16} />
            <span>Get in Touch</span>
          </Link>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <Link href="/#showroom" style={{ color: "var(--text-slate)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            <Smartphone size={13} color="var(--accent-vermillion)" />
            <span>Showroom</span>
          </Link>
          <Link href="/#experience" style={{ color: "var(--text-slate)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            <Briefcase size={13} color="var(--accent-emerald)" />
            <span>Experience</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
