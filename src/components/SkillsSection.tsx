"use client";

import React from "react";
import { Cpu, Smartphone, Layers, CreditCard, Database, Terminal, Check, Bot, Sparkles } from "lucide-react";
import { TECHNICAL_SKILLS } from "@/data/projectsData";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        paddingTop: "clamp(3rem, 6vh, 6rem)",
        paddingBottom: "clamp(4rem, 8vh, 7rem)",
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
              background: "rgba(0, 200, 229, 0.12)",
              border: "1px solid rgba(0, 200, 229, 0.25)",
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              marginBottom: "1rem",
            }}
          >
            <Cpu size={14} color="var(--accent-cyan)" />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent-cyan)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              Technical Arsenal
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
            Technologies dialed for speed & reliability.
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              color: "var(--text-slate)",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            A cohesive stack built around high-throughput cross-platform mobile frameworks, native platform bindings,
            and AI-assisted developer velocity.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {TECHNICAL_SKILLS.map((grp, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: grp.category.includes("AI") ? "rgba(0, 200, 229, 0.12)" : "var(--bg-elevated)",
                      border: grp.category.includes("AI") ? "1px solid rgba(0, 200, 229, 0.3)" : "1px solid var(--border-medium)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: grp.category.includes("AI") ? "var(--accent-cyan)" : "var(--accent-vermillion)",
                    }}
                  >
                    {getSkillIcon(grp.category)}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-pure)" }}>
                    {grp.category}
                  </h3>
                </div>
                {grp.category.includes("AI") && (
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "100px",
                      background: "rgba(0, 200, 229, 0.15)",
                      border: "1px solid rgba(0, 200, 229, 0.3)",
                      color: "var(--accent-cyan)",
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <Sparkles size={11} />
                    <span>AI-Accelerated</span>
                  </span>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                {grp.skills.map((skill, i) => {
                  const isAiCard = grp.category.includes("AI");
                  const activeBg = isAiCard ? "rgba(0, 200, 229, 0.08)" : "rgba(255, 75, 38, 0.08)";
                  const activeBorder = isAiCard ? "1px solid rgba(0, 200, 229, 0.25)" : "1px solid rgba(255, 75, 38, 0.25)";
                  const activeColor = isAiCard ? "var(--accent-cyan)" : "var(--accent-vermillion)";

                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.55rem 0.75rem",
                        background: skill.highlighted ? activeBg : "var(--bg-carbon)",
                        border: skill.highlighted ? activeBorder : "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                      }}
                    >
                      <span style={{ fontSize: "0.86rem", fontWeight: 600, color: skill.highlighted ? "#fff" : "var(--text-chalk)" }}>
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: skill.highlighted ? activeColor : "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 600,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Additional Languages Card */}
          <div
            className="glass-panel"
            style={{
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-medium)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-amber)",
                }}
              >
                <Terminal size={18} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-pure)" }}>
                Complementary Languages
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
              {[
                { lang: "Python", purpose: "Automation scripts, data pipelines" },
                { lang: "PHP", purpose: "Legacy backend API integrations" },
                { lang: "Java", purpose: "Native Android services & SDK bridges" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.55rem 0.75rem",
                    background: "var(--bg-carbon)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#fff" }}>{item.lang}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{item.purpose}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(category: string) {
  if (category.includes("AI") || category.includes("Agentic")) return <Bot size={18} />;
  if (category.includes("Mobile")) return <Smartphone size={18} />;
  if (category.includes("State")) return <Layers size={18} />;
  if (category.includes("FinTech") || category.includes("Integration")) return <CreditCard size={18} />;
  if (category.includes("Storage") || category.includes("Data")) return <Database size={18} />;
  return <Cpu size={18} />;
}
