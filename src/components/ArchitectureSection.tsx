"use client";

import React, { useState } from "react";
import { ShieldCheck, Radio, Layers, Database, Zap, Lock, RefreshCw, Cpu, Code2 } from "lucide-react";
import { playTactileClick } from "@/utils/sound";

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"payments" | "websockets" | "state" | "media">("payments");

  const handleTab = (tab: "payments" | "websockets" | "state" | "media") => {
    playTactileClick("tab");
    setActiveTab(tab);
  };

  return (
    <section
      id="architecture"
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
              background: "rgba(255, 170, 29, 0.12)",
              border: "1px solid var(--accent-amber-glow)",
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              marginBottom: "1rem",
            }}
          >
            <ShieldCheck size={14} color="var(--accent-amber)" />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent-amber)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              Systems & Production Engineering
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
            Under the hood: Enterprise mobile architecture.
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              color: "var(--text-slate)",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            A high-level architectural walkthrough of how I implement payment gateways, real-time WebSockets,
            and clean state management in production Flutter codebases.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <button
            onClick={() => handleTab("payments")}
            style={{
              background: activeTab === "payments" ? "var(--accent-vermillion)" : "var(--bg-carbon)",
              color: activeTab === "payments" ? "#fff" : "var(--text-slate)",
              border: activeTab === "payments" ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border-medium)",
              padding: "0.7rem 1.4rem",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            <Lock size={16} />
            <span>Stripe & NMI Payments</span>
          </button>

          <button
            onClick={() => handleTab("websockets")}
            style={{
              background: activeTab === "websockets" ? "var(--accent-amber)" : "var(--bg-carbon)",
              color: activeTab === "websockets" ? "#08090C" : "var(--text-slate)",
              border: activeTab === "websockets" ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border-medium)",
              padding: "0.7rem 1.4rem",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            <Radio size={16} />
            <span>WebSockets Event Bus</span>
          </button>

          <button
            onClick={() => handleTab("state")}
            style={{
              background: activeTab === "state" ? "var(--accent-emerald)" : "var(--bg-carbon)",
              color: activeTab === "state" ? "#08090C" : "var(--text-slate)",
              border: activeTab === "state" ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border-medium)",
              padding: "0.7rem 1.4rem",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            <Layers size={16} />
            <span>GetX & MobX State</span>
          </button>

          <button
            onClick={() => handleTab("media")}
            style={{
              background: activeTab === "media" ? "var(--accent-cyan)" : "var(--bg-carbon)",
              color: activeTab === "media" ? "#08090C" : "var(--text-slate)",
              border: activeTab === "media" ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border-medium)",
              padding: "0.7rem 1.4rem",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            <Zap size={16} />
            <span>Media Engine & Audio</span>
          </button>
        </div>

        {/* Tab Content Panes */}
        <div
          className="glass-panel"
          style={{
            padding: "clamp(1.75rem, 4vw, 3.5rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {activeTab === "payments" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "2.5rem" }}>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-vermillion)", fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: "0.4rem" }}>
                  DUAL PAYMENT GATEWAY INFRASTRUCTURE
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
                  PCI-Compliant Stripe & NMI Integration
                </h3>
                <p style={{ color: "var(--text-slate)", marginBottom: "1.2rem", lineHeight: 1.6 }}>
                  In the <strong>Dealer Management SaaS</strong> and <strong>Quetal</strong> apps, I engineered payment gateway integrations.
                  Stripe handles digital card checkout, while NMI handles high-volume dealer transactions and recharge operations.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>1. Zero Raw Card Exposure</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Direct client-side tokenization via secure Flutter SDK bridges; sensitive card numbers never touch intermediary servers.</div>
                  </div>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>2. Idempotent Retry Transactions</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Unique client UUID keys assigned to each recharge order, preventing duplicate debits during cell network drops.</div>
                  </div>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>3. Webhook Ledger Reconciliation</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Asynchronous server webhook verification updates dealer wallet balances within 100ms.</div>
                  </div>
                </div>
              </div>

              {/* Code / Visual Blueprint */}
              <div
                style={{
                  background: "#0A0C10",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  border: "1px solid var(--border-medium)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "#d1d5db",
                  overflowX: "auto",
                }}
              >
                <div style={{ color: "var(--accent-amber)", marginBottom: "0.8rem", fontWeight: 700 }}>
                  // PaymentGatewayService.dart (Architecture Pattern)
                </div>
                <pre style={{ lineHeight: 1.55 }}>
{`abstract class PaymentService {
  Future<PaymentResult> processCharge({
    required double amount,
    required String currency,
    required String idempotencyKey,
  });
}

class StripeService implements PaymentService {
  @override
  Future<PaymentResult> processCharge(...) async {
    // Native Stripe Sheet & 3D Secure Verification
    final sheet = await Stripe.instance.presentPaymentSheet();
    return PaymentResult.fromStripe(sheet);
  }
}

class NMIService implements PaymentService {
  @override
  Future<PaymentResult> processCharge(...) async {
    // US Dealer Wholesale Direct Tokenization
    final token = await NMITokenizer.tokenizeKey(...);
    return await apiGateway.postNmiCharge(token);
  }
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "websockets" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "2.5rem" }}>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-amber)", fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: "0.4rem" }}>
                  LOW-LATENCY DUPLEX COMMUNICATION
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
                  Resilient WebSocket Stream Bus
                </h3>
                <p style={{ color: "var(--text-slate)", marginBottom: "1.2rem", lineHeight: 1.6 }}>
                  Powering live carrier recharge status updates in <strong>Dealer Management SaaS</strong> and real-time telemetry in the{" "}
                  <strong>Smart IoT Alarm</strong> companion app.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>1. Exponential Backoff Auto-Reconnect</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>When switching between Wi-Fi and 5G cellular, connections seamlessly resume with zero dropped event frames.</div>
                  </div>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>2. Heartbeat Ping / Pong Monitoring</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Active socket health checks every 25 seconds prevent silent dead connections caused by aggressive mobile OS sleep policies.</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#0A0C10",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  border: "1px solid var(--border-medium)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "#d1d5db",
                  overflowX: "auto",
                }}
              >
                <div style={{ color: "var(--accent-emerald)", marginBottom: "0.8rem", fontWeight: 700 }}>
                  // WebSocketEventBus.dart (Stream Management)
                </div>
                <pre style={{ lineHeight: 1.55 }}>
{`class WebSocketEventBus extends GetxService {
  late WebSocketChannel _channel;
  final Rx<ConnectionState> status = ConnectionState.connecting.obs;

  void connect(String endpoint) {
    _channel = WebSocketChannel.connect(Uri.parse(endpoint));
    _channel.stream.listen(
      (message) => _dispatchPayload(jsonDecode(message)),
      onError: (err) => _scheduleBackoffReconnect(),
      onDone: () => _handleGracefulDisconnect(),
    );
  }

  void _dispatchPayload(Map<String, dynamic> data) {
    final type = data['event_type'];
    if (type == 'CARRIER_RECHARGE_SUCCESS') {
      Get.find<DealerLedgerController>().updateBalance(data['new_balance']);
    }
  }
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "state" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "2.5rem" }}>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-emerald)", fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: "0.4rem" }}>
                  PREDICTABLE & CLEAN SCALABILITY
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
                  GetX & MobX Reactive State Architecture
                </h3>
                <p style={{ color: "var(--text-slate)", marginBottom: "1.2rem", lineHeight: 1.6 }}>
                  Strict decoupling between UI presentation layers, domain repositories, and data sources. Guarantees 60fps scrolling
                  and testable business logic without UI rebuild cascades.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>Controller & View Separation</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Zero business calculations inside build() methods. UI views remain purely declarative.</div>
                  </div>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>Targeted Obx() Rebuilding</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Only micro-widgets update when reactive variables emit changes, minimizing frame budget usage.</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#0A0C10",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  border: "1px solid var(--border-medium)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "#d1d5db",
                  overflowX: "auto",
                }}
              >
                <div style={{ color: "var(--accent-cyan)", marginBottom: "0.8rem", fontWeight: 700 }}>
                  // Clean Architecture Flow
                </div>
                <pre style={{ lineHeight: 1.55 }}>
{`[ Presentation Layer ]
  └─ Page / Widget (Pure UI)
       │
       ▼ (Binds via GetView)
  └─ Controller (GetxController / MobX Store)
       │
       ▼ (Calls Repository Interface)
[ Domain Layer ]
  └─ UseCase / Business Rules
       │
       ▼ (Queries Abstract Service)
[ Data Layer ]
  ├─ Remote API (REST / WebSockets)
  └─ Local Storage (SQLite / Hive Cache)`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === "media" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "2.5rem" }}>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: "0.4rem" }}>
                  BACKGROUND SERVICES & NATIVE BRIDGING
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
                  High-Performance Media & Equalizer Pipeline
                </h3>
                <p style={{ color: "var(--text-slate)", marginBottom: "1.2rem", lineHeight: 1.6 }}>
                  Built for <strong>VideoFlex</strong> and <strong>Audify Music Player</strong>. Delivers continuous background audio,
                  lock-screen media controls, and real-time audio visualization.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>Native AudioService Binding</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Runs audio decoder on background thread with Android foreground service notification and iOS AVAudioSession configuration.</div>
                  </div>
                  <div style={{ background: "var(--bg-carbon)", padding: "0.85rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-chalk)", fontSize: "0.9rem" }}>10-Band Hardware Equalizer</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-slate)" }}>Real-time parametric equalization utilizing Android OpenSL ES / AudioTrack and iOS AudioUnit DSP effects.</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#0A0C10",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  border: "1px solid var(--border-medium)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "#d1d5db",
                  overflowX: "auto",
                }}
              >
                <div style={{ color: "var(--accent-vermillion)", marginBottom: "0.8rem", fontWeight: 700 }}>
                  // AudioEngineService.dart
                </div>
                <pre style={{ lineHeight: 1.55 }}>
{`class AudioEngineHandler extends BaseAudioHandler with SeekHandler {
  final _player = AudioPlayer();

  @override
  Future<void> play() => _player.play();

  @override
  Future<void> pause() => _player.pause();

  Future<void> applyEqualizerBand(int bandIndex, double gain) async {
    // Native channel call into OpenSL ES / AVAudioEngine
    await _nativePlatformChannel.invokeMethod('setBandGain', {
      'band': bandIndex,
      'gain': gain,
    });
  }
}`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
