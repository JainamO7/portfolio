"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Award, Wrench, FolderGit2, Bot, Sparkles, Code2 } from "lucide-react";
import { WORK_EXPERIENCE, EDUCATION } from "@/data/projectsData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        paddingTop: "clamp(4rem, 8vh, 7rem)",
        paddingBottom: "clamp(5rem, 10vh, 8rem)",
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
              background: "rgba(0, 214, 114, 0.12)",
              border: "1px solid var(--accent-emerald-glow)",
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              marginBottom: "1rem",
            }}
          >
            <Briefcase size={14} color="var(--accent-emerald)" />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent-emerald)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              Career & Proven Track Record
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
            Professional Experience &amp; Education
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              color: "var(--text-slate)",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Proven cross-platform mobile development track record for Android &amp; iOS, verified by published applications on Google Play and commercial deployments.
          </p>
        </div>

        {/* Experience & Education Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Work History */}
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--text-pure)",
              }}
            >
              <Briefcase size={20} color="var(--accent-vermillion)" />
              <span>Professional Experience</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "1.75rem",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <div>
                      <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-pure)" }}>{exp.role}</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--accent-vermillion)" }}>{exp.company}</div>
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgba(255, 255, 255, 0.06)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        color: "var(--text-slate)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.88rem", color: "var(--text-slate)", margin: "0.8rem 0 1rem 0", lineHeight: 1.55 }}>
                    {exp.summary}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.2rem" }}>
                    {exp.highlights.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-chalk)" }}>
                        <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Projects list */}
                  {exp.keyProjects && exp.keyProjects.length > 0 && (
                    <div style={{ marginBottom: "1.1rem" }}>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                          marginBottom: "0.45rem",
                          textTransform: "uppercase",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <FolderGit2 size={13} color="var(--accent-vermillion)" />
                        <span>Key Projects</span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {exp.keyProjects.map((p, i) => (
                          <span
                            key={i}
                            style={{
                              background: "rgba(255, 75, 38, 0.08)",
                              border: "1px solid rgba(255, 75, 38, 0.2)",
                              padding: "0.2rem 0.55rem",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              color: "var(--accent-vermillion)",
                              fontWeight: 600,
                            }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          background: "var(--bg-carbon)",
                          border: "1px solid var(--border-subtle)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "6px",
                          fontSize: "0.75rem",
                          color: "var(--text-slate)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Practices */}
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--text-pure)",
              }}
            >
              <GraduationCap size={22} color="var(--accent-amber)" />
              <span>Academic Foundations</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: "1.75rem",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <div>
                      <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-pure)" }}>{edu.degree}</div>
                      <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--accent-amber)", marginTop: "0.2rem" }}>
                        {edu.institution}
                      </div>
                      {edu.college && (
                        <div style={{ fontSize: "0.85rem", color: "var(--text-slate)", marginTop: "0.25rem" }}>
                          College: <span style={{ color: "var(--text-chalk)", fontWeight: 600 }}>{edu.college}</span>
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgba(255, 170, 29, 0.12)",
                        border: "1px solid rgba(255, 170, 29, 0.25)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        color: "var(--accent-amber)",
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <Award size={13} />
                      <span>{edu.passingYearText}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Development Practices & AI Tools Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(255, 75, 38, 0.08) 0%, rgba(255, 170, 29, 0.04) 100%)",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--accent-vermillion)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "0.45rem",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Sparkles size={13} color="var(--accent-vermillion)" />
                  <span>AI-Assisted Development &amp; Practices</span>
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>
                  Modern Development Tools &amp; Practices
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-slate)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  Worked with modern AI-assisted development tools to support coding, debugging, and development workflows:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "0.95rem" }}>
                  {["OpenAI Codex", "Claude Code", "Google Antigravity"].map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(0, 200, 229, 0.1)",
                        border: "1px solid rgba(0, 200, 229, 0.3)",
                        color: "var(--accent-cyan)",
                        borderRadius: "6px",
                        padding: "0.25rem 0.65rem",
                        fontSize: "0.76rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      <Bot size={11} color="var(--accent-cyan)" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                  <Wrench size={13} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ color: "var(--text-chalk)" }}>Core Practices:</strong> Git, Debugging, Troubleshooting, Application Maintenance, Performance Optimization, Version Control.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
