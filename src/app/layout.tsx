import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jainam Kikani | Flutter & Mobile Application Developer",
  description:
    "Portfolio of Jainam Kikani, Flutter & Cross-Platform Mobile Developer. Specializing in high-performance iOS & Android apps, Stripe/NMI payments, WebSockets, real-time media streaming, and modern AI-augmented workflows with Claude Code, Google Antigravity & Codex.",
  keywords: [
    "Jainam Kikani",
    "Flutter Developer",
    "Mobile Application Developer",
    "Android iOS Flutter",
    "Claude Code",
    "Google Antigravity",
    "Codex",
    "AI Augmented Developer",
    "GetX MobX",
    "Stripe Payments Flutter",
    "WebSockets Flutter",
    "VideoFlex",
    "Audify Music Player",
    "PrepaidIQ",
    "Qué Tal Móvil",
    "Smart WiFi Alarm",
  ],
  authors: [{ name: "Jainam Kikani" }],
  creator: "Jainam Kikani",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        {children}
      </body>
    </html>
  );
}
