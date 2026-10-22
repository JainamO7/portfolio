"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Smartphone,
  Tablet,
  Monitor,
  Play,
  Pause,
  Volume2,
  Download,
  Wifi,
  Battery,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sliders,
  Sparkles,
  ArrowRight,
  Layers,
  Radio,
  Clock,
  Heart,
  Search,
  Maximize2,
  RefreshCw,
  FolderDown,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projectsData";
import { playTactileClick } from "@/utils/sound";

export default function DeviceShowroom() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("quetal");
  const [deviceMode, setDeviceMode] = useState<"mobile" | "tablet" | "monitor">("mobile");
  const [activeScreenshotUrl, setActiveScreenshotUrl] = useState<string>("/screenshots/quetal/quetal-checkout.png");

  const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  useEffect(() => {
    setDeviceMode(currentProject.defaultDevice);
    setActiveScreenshotUrl(currentProject.screenshotUrl || (currentProject.gallery?.[0]?.url ?? ""));
  }, [currentProject]);

  const handleProjectSelect = (id: string) => {
    playTactileClick("soft");
    setSelectedProjectId(id);
    const target = PROJECTS.find((p) => p.id === id);
    if (target) {
      setDeviceMode(target.defaultDevice);
      setActiveScreenshotUrl(target.screenshotUrl || (target.gallery?.[0]?.url ?? ""));
    }
  };

  const handleDeviceChange = (mode: "mobile" | "tablet" | "monitor") => {
    playTactileClick("soft");
    setDeviceMode(mode);
  };

  return (
    <section
      id="showroom"
      style={{
        paddingTop: "clamp(4rem, 8vh, 7rem)",
        paddingBottom: "clamp(5rem, 10vh, 9rem)",
        position: "relative",
      }}
    >
      <div className="main-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255, 75, 38, 0.12)",
              border: "1px solid var(--accent-vermillion-glow)",
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} color="var(--accent-vermillion)" />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent-vermillion)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              Interactive Hardware Showroom
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Experience apps on real hardware frames.
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              color: "var(--text-slate)",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Preview production applications on their native hardware targets — flagship iPhone mobile frames, iPad Pro, and 4K Studio Displays.
          </p>
        </div>

        {/* Project Selector Ribbon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            overflowX: "auto",
            paddingBottom: "1.2rem",
            marginBottom: "2.5rem",
            scrollbarWidth: "none",
          }}
        >
          {PROJECTS.map((proj) => {
            const isActive = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => handleProjectSelect(proj.id)}
                style={{
                  background: isActive ? "var(--bg-surface)" : "var(--bg-carbon)",
                  border: isActive ? `1.5px solid ${proj.appDetails.themeColor}` : "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "0.75rem 1.25rem",
                  color: isActive ? "var(--text-pure)" : "var(--text-slate)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive ? `0 4px 20px ${proj.appDetails.themeColor}33` : "none",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: proj.appDetails.themeColor,
                    display: "inline-block",
                  }}
                />
                <span>{proj.title}</span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.08)",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {proj.category.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Hardware Switcher Toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
            background: "var(--bg-carbon)",
            border: "1px solid var(--border-medium)",
            borderRadius: "16px",
            padding: "0.75rem 1.25rem",
          }}
        >
          {/* Native Hardware Target Display */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                marginRight: "0.4rem",
                textTransform: "uppercase",
              }}
            >
              Hardware Target:
            </span>

            {currentProject.defaultDevice === "mobile" && (
              <div
                style={{
                  background: "rgba(255, 75, 38, 0.14)",
                  border: "1px solid var(--accent-vermillion)",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "0.45rem 1rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 2px 10px rgba(255, 75, 38, 0.2)",
                }}
              >
                <Smartphone size={15} color="var(--accent-vermillion)" />
                <span>Flagship Mobile (iPhone 16 Pro) • Native Android &amp; iOS</span>
              </div>
            )}

            {currentProject.defaultDevice === "monitor" && (
              <div
                style={{
                  background: "rgba(0, 102, 255, 0.14)",
                  border: "1px solid var(--accent-cyan)",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "0.45rem 1rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 2px 10px rgba(0, 102, 255, 0.2)",
                }}
              >
                <Monitor size={15} color="var(--accent-cyan)" />
                <span>4K Studio Display • Native SaaS Dashboard</span>
              </div>
            )}

            {currentProject.defaultDevice === "tablet" && (
              <div
                style={{
                  background: "rgba(255, 170, 29, 0.14)",
                  border: "1px solid var(--accent-amber)",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "0.45rem 1rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 2px 10px rgba(255, 170, 29, 0.2)",
                }}
              >
                <Tablet size={15} color="var(--accent-amber)" />
                <span>iPad Pro • Native Tablet Platform</span>
              </div>
            )}
          </div>

          {/* Verification Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--accent-emerald)",
                fontFamily: "var(--font-mono)",
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent-emerald)",
                  display: "inline-block",
                }}
              />
              {currentProject.gallery ? "Verified Production Screenshots (Click Tabs to Inspect)" : "Interactive Simulation Active"}
            </div>
          </div>
        </div>

        {/* The Master Stage Grid: Device Frame on Left/Center, Project Intel on Right */}
        <div
          className={`showroom-stage-grid ${deviceMode === "monitor" ? "mode-monitor" : "mode-phone"}`}
        >
          {/* Hardware Frame Stage */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              order: deviceMode === "monitor" ? 2 : 1,
            }}
          >
            {/* Multi-Screenshot Gallery Tabs (BMRA App) */}
            {currentProject.gallery && currentProject.gallery.length > 0 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  flexWrap: "wrap",
                  marginBottom: "1.2rem",
                  width: "100%",
                }}
              >
                {currentProject.gallery.map((screen, idx) => {
                  const isSelected = activeScreenshotUrl === screen.url;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenshotUrl(screen.url)}
                      style={{
                        background: isSelected ? "var(--accent-vermillion)" : "var(--bg-carbon)",
                        color: isSelected ? "#ffffff" : "var(--text-chalk)",
                        border: isSelected ? "1px solid var(--accent-vermillion)" : "1px solid var(--border-medium)",
                        borderRadius: "8px",
                        padding: "0.35rem 0.75rem",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: isSelected ? "0 2px 10px rgba(255, 75, 38, 0.35)" : "none",
                      }}
                    >
                      {screen.label}
                    </button>
                  );
                })}
              </div>
            )}

            <div
              className="device-perspective-stage"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {deviceMode === "mobile" && (
                /* Mobile Hardware Frame (iPhone 16 Pro Style) */
                <div
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    height: "760px",
                    background: "#1c1f26",
                    borderRadius: "52px",
                    padding: "12px",
                    boxShadow:
                      "0 35px 80px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.12), inset 0 0 0 2px #2d3340",
                    position: "relative",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Side volume and power buttons */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "140px",
                      width: "4px",
                      height: "36px",
                      background: "#373e4d",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "190px",
                      width: "4px",
                      height: "56px",
                      background: "#373e4d",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "-4px",
                      top: "170px",
                      width: "4px",
                      height: "75px",
                      background: "#373e4d",
                      borderRadius: "0 2px 2px 0",
                    }}
                  />

                  {/* Inner Screen */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#08090C",
                      borderRadius: "42px",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="screen-glare" />

                    {/* Dynamic Island & Status Bar */}
                    <div
                      style={{
                        height: "44px",
                        padding: "0 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        zIndex: 30,
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      <span>9:41</span>
                      <div
                        style={{
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "108px",
                          height: "26px",
                          background: "#000",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 10px",
                        }}
                      >
                        <div
                          style={{
                            width: "9px",
                            height: "9px",
                            borderRadius: "50%",
                            background: "#1a1a1a",
                            border: "1px solid #333",
                          }}
                        />
                        <div
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "var(--accent-emerald)",
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <Wifi size={13} />
                        <Battery size={13} />
                      </div>
                    </div>

                    {/* Mobile Screen Body */}
                    <div
                      style={{
                        flex: 1,
                        overflowY: "auto",
                        position: "relative",
                        zIndex: 20,
                        padding: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {renderSimulatedScreen(currentProject, activeScreenshotUrl, "mobile")}
                    </div>

                  {/* Home Indicator Bar */}
                  <div
                    style={{
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 30,
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "4px",
                        background: "rgba(255, 255, 255, 0.4)",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {deviceMode === "tablet" && (
              /* Tablet Hardware Frame (iPad Pro Style) */
              <div
                style={{
                  width: "100%",
                  maxWidth: "680px",
                  height: "560px",
                  background: "#1c1f26",
                  borderRadius: "36px",
                  padding: "16px",
                  boxShadow:
                    "0 40px 90px -20px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 0 0 2px #2d3340",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Tablet Top Camera Notch */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#0d0f14",
                    border: "1px solid #333",
                  }}
                />

                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#08090C",
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="screen-glare" />

                  {/* Tablet Status Bar */}
                  <div
                    style={{
                      height: "36px",
                      padding: "0 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#fff",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      zIndex: 30,
                    }}
                  >
                    <span>9:41 AM — iPad Pro</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <Wifi size={14} />
                      <Battery size={14} />
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Tablet Body */}
                  <div
                    style={{
                      flex: 1,
                      overflowY: "auto",
                      padding: "1.2rem",
                      zIndex: 20,
                    }}
                  >
                    {renderSimulatedScreen(currentProject, activeScreenshotUrl, "tablet")}
                  </div>
                </div>
              </div>
            )}

            {deviceMode === "monitor" && (
              /* 4K Studio Display Hardware Frame */
              <div
                style={{
                  width: "100%",
                  maxWidth: "1020px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Display Panel */}
                <div
                  style={{
                    width: "100%",
                    height: "580px",
                    background: "#161920",
                    borderRadius: "20px 20px 10px 10px",
                    padding: "12px 12px 24px 12px",
                    boxShadow: "0 40px 100px -20px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.12)",
                    position: "relative",
                  }}
                >
                  {/* Top Camera */}
                  <div
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#000",
                      border: "1px solid #333",
                    }}
                  />

                  {/* Inner Screen */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#08090C",
                      borderRadius: "12px",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="screen-glare" />

                    {/* Desktop Browser / App Window Chrome */}
                    <div
                      style={{
                        height: "38px",
                        background: "#14171E",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 1rem",
                        justifyContent: "space-between",
                        zIndex: 30,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F56" }} />
                        <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E" }} />
                        <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#27C93F" }} />
                      </div>
                      <div
                        style={{
                          background: "#0B0D11",
                          padding: "0.2rem 1.2rem",
                          borderRadius: "6px",
                          fontSize: "0.74rem",
                          color: "var(--text-slate)",
                          fontFamily: "var(--font-mono)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {currentProject.id === "dealer-saas"
                          ? "https://dealer.prepaidiq.com/portal/activations"
                          : "https://enterprise.cloud/dashboard"}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--accent-emerald)", fontFamily: "var(--font-mono)" }}>
                        ● 4K RETINA (3840×2160)
                      </div>
                    </div>

                    {/* Desktop Monitor Screen Content */}
                    <div
                      style={{
                        flex: 1,
                        overflowY: "auto",
                        padding: "1.4rem",
                        zIndex: 20,
                      }}
                    >
                      {renderSimulatedScreen(currentProject, activeScreenshotUrl, "monitor")}
                    </div>
                  </div>
                </div>

                {/* Display Stand Neck & Base */}
                <div
                  style={{
                    width: "160px",
                    height: "90px",
                    background: "linear-gradient(to bottom, #2b303c 0%, #1c2028 100%)",
                    clipPath: "polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                />
                <div
                  style={{
                    width: "min(320px, 90vw)",
                    height: "14px",
                    background: "linear-gradient(to right, #1f232b 0%, #2e3544 50%, #1f232b 100%)",
                    borderRadius: "6px 6px 1px 1px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  }}
                />
              </div>
            )}
            </div>
          </div>

          {/* Project Details & Technical Intel Column */}
          <div
            className="glass-panel"
            style={{
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              order: deviceMode === "monitor" ? 1 : 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: currentProject.appDetails.themeColor,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                }}
              >
                {currentProject.category}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "var(--text-chalk)",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {currentProject.appDetails.status}
              </span>
            </div>

            <h3
              style={{
                fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--text-pure)",
                marginBottom: "0.4rem",
              }}
            >
              {currentProject.title}
            </h3>

            <p style={{ fontSize: "1.05rem", color: "var(--text-slate)", marginBottom: "1.4rem" }}>
              {currentProject.subtitle}
            </p>

            {/* Overview */}
            <p style={{ fontSize: "0.95rem", color: "var(--text-chalk)", lineHeight: 1.6, marginBottom: "1.6rem" }}>
              {currentProject.overview}
            </p>

            {/* Metrics Chips */}
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.8rem" }}>
              {currentProject.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-medium)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "8px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-chalk)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <CheckCircle2 size={13} color="var(--accent-emerald)" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: "1.8rem" }}>
              <div
                style={{
                  fontSize: "0.84rem",
                  fontWeight: 700,
                  color: "var(--text-pure)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Key Production Capabilities
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {currentProject.keyFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.9rem",
                      color: "var(--text-slate)",
                    }}
                  >
                    <span style={{ color: currentProject.appDetails.themeColor, fontWeight: 800 }}>›</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Highlights */}
            <div
              style={{
                background: "var(--bg-carbon)",
                border: "1px solid var(--border-medium)",
                borderRadius: "12px",
                padding: "1.2rem",
                marginBottom: "1.8rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--accent-amber)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <Layers size={15} />
                <span>ARCHITECTURAL HIGHLIGHT</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {currentProject.architecturalHighlights.map((arch, idx) => (
                  <li key={idx} style={{ fontSize: "0.86rem", color: "var(--text-slate)" }}>
                    • {arch}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-pure)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Technologies Used
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {currentProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-subtle)",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      color: "var(--text-chalk)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Watch / Inspect Link */}
            {currentProject.liveUrl && (
              <div style={{ marginTop: "1.8rem" }}>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    width: "100%",
                    padding: "0.95rem 1.4rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <ExternalLink size={18} />
                  <span>
                    {currentProject.liveUrl.includes("play.google.com")
                      ? "View on Google Play Store"
                      : currentProject.liveUrl.includes("codecanyon.net")
                      ? "Direct Watch & Inspect on CodeCanyon"
                      : "View Live Application"}
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper renderer for simulated Flutter screens
function renderSimulatedScreen(
  project: Project,
  activeScreenshotUrl: string,
  targetDevice: "mobile" | "tablet" | "monitor" = "mobile"
) {
  // If screenshot or active gallery image is selected, render it in full fidelity
  if (activeScreenshotUrl) {
    // When a mobile app is previewed on a tablet frame, render clean master-detail split layout
    if (targetDevice === "tablet" && project.defaultDevice === "mobile") {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(200px, 240px) 1fr",
            gap: "1.25rem",
            height: "100%",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "460px",
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border-medium)",
              background: "#08090C",
            }}
          >
            <Image
              src={activeScreenshotUrl}
              alt={project.title}
              fill
              style={{ objectFit: "contain" }}
              sizes="240px"
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", color: "#fff" }}>
            <div style={{ fontSize: "0.74rem", color: project.appDetails.themeColor, fontWeight: 700, fontFamily: "var(--font-mono)" }}>
              RESPONSIVE TABLET SPLIT-VIEW
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-pure)" }}>{project.title}</div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-slate)", lineHeight: 1.5 }}>
              Optimized Flutter mobile architecture with reactive UI components adaptable to tablet form-factors.
            </p>
            <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent-emerald)", marginBottom: "0.2rem" }}>
                Multi-Screen Adaptive Layout
              </div>
              <div style={{ fontSize: "0.76rem", color: "var(--text-slate)" }}>
                GetX responsive layout breakpoints scale navigation flows from handset screens to tablet displays.
              </div>
            </div>
          </div>
        </div>
      );
    }

    // When a mobile app is previewed on a desktop monitor frame
    if (targetDevice === "monitor" && project.defaultDevice === "mobile") {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(240px, 280px) 1fr",
            gap: "2rem",
            height: "100%",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "500px",
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border-medium)",
              background: "#08090C",
            }}
          >
            <Image
              src={activeScreenshotUrl}
              alt={project.title}
              fill
              style={{ objectFit: "contain" }}
              sizes="280px"
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", color: "#fff" }}>
            <div style={{ fontSize: "0.78rem", color: project.appDetails.themeColor, fontWeight: 700, fontFamily: "var(--font-mono)" }}>
              4K STUDIO DISPLAY • MOBILE EMULATION
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-pure)" }}>{project.title}</div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-slate)", lineHeight: 1.6 }}>
              Production Flutter code running with pixel-perfect fidelity across high-resolution desktop and ultrawide monitors.
            </p>
            <div style={{ background: "var(--bg-carbon)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-cyan)", marginBottom: "0.3rem" }}>
                Cross-Platform Flutter Engine
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-slate)" }}>
                Single Dart codebase deploying natively to mobile handsets, desktop preview harnesses, and tablets.
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          minHeight: targetDevice === "monitor" ? "480px" : "660px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Image
          src={activeScreenshotUrl}
          alt={project.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 420px"
          priority
        />
      </div>
    );
  }

  // Official VideoFlex CodeCanyon Showcase Screen
  if (project.id === "videoflex") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%", justifyContent: "space-between" }}>
        <div>
          {/* Header Badge */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255, 51, 102, 0.15) 0%, rgba(255, 51, 102, 0.05) 100%)",
              border: "1px solid rgba(255, 51, 102, 0.3)",
              borderRadius: "14px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.7rem", color: "#FF3366", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                CODECANYON VERIFIED PRODUCT
              </span>
              <span style={{ fontSize: "0.68rem", color: "var(--accent-emerald)" }}>● Android + iOS</span>
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
              VideoFlex Video Player
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-slate)", marginTop: "0.25rem" }}>
              by AditeTechnologies • Commercial Mobile App
            </div>
          </div>

          {/* Core Feature Matrix */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ background: "#11141C", padding: "0.75rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>🎬 Online & Offline Dual Playback Engine</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", marginTop: "0.2rem" }}>ExoPlayer high-bitrate streaming with background downloads & pause/resume caching.</div>
            </div>

            <div style={{ background: "#11141C", padding: "0.75rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>⚡ Short Video Reels & Live Search</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", marginTop: "0.2rem" }}>Vertical short-form feed with sub-200ms fuzzy search indexing.</div>
            </div>

            <div style={{ background: "#11141C", padding: "0.75rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>🌐 Multilingual & Dual Themes</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", marginTop: "0.2rem" }}>Dynamic localization with instant dark and light mode UI switching.</div>
            </div>
          </div>
        </div>

        {/* Direct Watch & Inspect Link on CodeCanyon */}
        <a
          href="https://codecanyon.net/item/online-offline-android-video-player/22633586"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #FF3366 0%, #D81B60 100%)",
            color: "#ffffff",
            borderRadius: "12px",
            padding: "0.95rem 1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            fontWeight: 700,
            fontSize: "0.92rem",
            textDecoration: "none",
            boxShadow: "0 6px 25px rgba(255, 51, 102, 0.45)",
            border: "1px solid rgba(255,255,255,0.2)",
            marginTop: "1rem",
          }}
        >
          <span>Direct Watch & Inspect on CodeCanyon</span>
          <ExternalLink size={16} />
        </a>
      </div>
    );
  }

  // Official Audify CodeCanyon Showcase Screen
  if (project.id === "audify") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%", justifyContent: "space-between" }}>
        <div>
          {/* Header Badge */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 229, 255, 0.05) 100%)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              borderRadius: "14px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.7rem", color: "#00E5FF", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                CODECANYON VERIFIED PRODUCT
              </span>
              <span style={{ fontSize: "0.68rem", color: "var(--accent-emerald)" }}>● Android + iOS</span>
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
              Audify Music Player
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-slate)", marginTop: "0.25rem" }}>
              by AditeTechnologies • Commercial Mobile App
            </div>
          </div>

          {/* Core Feature Matrix */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ background: "#11141C", padding: "0.75rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>🎛️ 10-Band Hardware DSP Equalizer</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", marginTop: "0.2rem" }}>Native parametric frequency equalization, bass-boost, and 3D virtualizer.</div>
            </div>

            <div style={{ background: "#11141C", padding: "0.75rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>📜 Synchronized Real-Time Lyrics</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", marginTop: "0.2rem" }}>Karaoke-style lyric scrolling engine with millisecond audio timestamp sync.</div>
            </div>

            <div style={{ background: "#11141C", padding: "0.75rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>🔔 Push Messaging & Monetization</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", marginTop: "0.2rem" }}>Integrated Firebase Cloud Messaging (FCM) & Google AdMob advertising banner rails.</div>
            </div>
          </div>
        </div>

        {/* Direct Watch & Inspect Link on CodeCanyon */}
        <a
          href="https://codecanyon.net/item/online-audio-player/22045856?s_rank=2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #00C8E5 0%, #0097A7 100%)",
            color: "#08090C",
            borderRadius: "12px",
            padding: "0.95rem 1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            fontWeight: 700,
            fontSize: "0.92rem",
            textDecoration: "none",
            boxShadow: "0 6px 25px rgba(0, 200, 229, 0.45)",
            border: "1px solid rgba(255,255,255,0.3)",
            marginTop: "1rem",
          }}
        >
          <span>Direct Watch & Inspect on CodeCanyon</span>
          <ExternalLink size={16} />
        </a>
      </div>
    );
  }

  // Simulated Dealer Management SaaS Screen (FinTech & WebSockets)
  if (project.id === "dealer-saas") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", height: "100%" }}>
        {/* Metric Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: targetDevice === "monitor" ? "repeat(4, 1fr)" : "1fr 1fr", gap: "0.75rem" }}>
          <div style={{ background: "#111822", padding: "0.85rem", borderRadius: "10px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <div style={{ fontSize: "0.72rem", color: "#10B981", fontFamily: "var(--font-mono)" }}>LIVE STRIPE PAYOUTS</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>$54,820.00</div>
            <div style={{ fontSize: "0.68rem", color: "#8E9AA8" }}>+14.2% vs yesterday</div>
          </div>

          <div style={{ background: "#111822", padding: "0.85rem", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--accent-amber)", fontFamily: "var(--font-mono)" }}>NMI GATEWAY QUEUE</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>$18,450.00</div>
            <div style={{ fontSize: "0.68rem", color: "#8E9AA8" }}>100% PCI-Compliant</div>
          </div>

          <div style={{ background: "#111822", padding: "0.85rem", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--text-slate)", fontFamily: "var(--font-mono)" }}>ACTIVE DEALERS</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>428 Stores</div>
            <div style={{ fontSize: "0.68rem", color: "#10B981" }}>All US Territories</div>
          </div>

          <div style={{ background: "#111822", padding: "0.85rem", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>WEBSOCKET FEED</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>14ms Latency</div>
            <div style={{ fontSize: "0.68rem", color: "#10B981" }}>Duplex Stream Active</div>
          </div>
        </div>

        {/* Live WebSocket Event Stream Table */}
        <div style={{ background: "#0E131A", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff", fontFamily: "var(--font-mono)" }}>
              REAL-TIME TRANSACTION BUS (LIVE WEBSOCKETS)
            </span>
            <span style={{ fontSize: "0.72rem", color: "#10B981" }}>● Connected</span>
          </div>

          <div style={{ padding: "0.5rem 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { id: "TX-9021", carrier: "AT&T Mobility", type: "Unlimited Recharge", amount: "+$75.00", status: "Success", time: "Just now" },
              { id: "TX-9020", carrier: "Verizon Wireless", type: "Wholesale SIM Pack", amount: "+$1,250.00", status: "NMI Settled", time: "12s ago" },
              { id: "TX-9019", carrier: "T-Mobile Prepaid", type: "Family Plan Topup", amount: "+$120.00", status: "Stripe Confirmed", time: "34s ago" },
            ].map((tx, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5rem 0",
                  borderBottom: idx !== 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  fontSize: "0.8rem",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: "#fff" }}>{tx.carrier}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-slate)" }}>{tx.id} • {tx.type}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, color: "#10B981", fontFamily: "var(--font-mono)" }}>{tx.amount}</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>{tx.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Standard Flutter App Screen for Study Unify, Quetal, BRMS, IoT
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #181d26 0%, #11141c 100%)",
          borderRadius: "14px",
          padding: "1.2rem",
          border: `1px solid ${project.appDetails.themeColor}44`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span style={{ fontSize: "0.75rem", color: project.appDetails.themeColor, fontWeight: 700, fontFamily: "var(--font-mono)" }}>
            {project.category}
          </span>
          <span style={{ fontSize: "0.72rem", color: "var(--accent-emerald)" }}>● State: Active</span>
        </div>
        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem" }}>
          {project.title}
        </div>
        <div style={{ fontSize: "0.84rem", color: "var(--text-slate)", marginBottom: "1rem" }}>
          {project.subtitle}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
          <div style={{ background: "#0D1017", padding: "0.6rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>PRIMARY PATTERN</div>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>Clean MVVM</div>
          </div>
          <div style={{ background: "#0D1017", padding: "0.6rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>STATE ENGINE</div>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>GetX Reactive</div>
          </div>
        </div>
      </div>

      <div style={{ background: "#11141A", borderRadius: "12px", padding: "1rem", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem", fontFamily: "var(--font-mono)" }}>
          LOCAL STORAGE & DATA LAYER
        </div>
        <div style={{ fontSize: "0.82rem", color: "var(--text-slate)", lineHeight: 1.5 }}>
          SQLite local-first persistence with automated background reconciliation when network telemetry re-establishes.
        </div>
      </div>
    </div>
  );
}
