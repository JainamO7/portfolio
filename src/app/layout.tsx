import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jainam Kikani | Flutter & Mobile Application Developer",
    template: "%s | Jainam Kikani",
  },
  description:
    "Portfolio of Jainam Kikani, Flutter Developer & Mobile Application Developer. Experienced in building and maintaining cross-platform mobile applications for Android and iOS across media streaming, payments (Stripe, NMI), WebSockets, and AI-assisted tools (OpenAI Codex, Claude Code, Google Antigravity).",
  keywords: [
    "Jainam Kikani",
    "Flutter Developer",
    "Mobile Application Developer",
    "Android iOS Flutter",
    "Adite Technologies",
    "JDK Group",
    "VideoFlex Video Player",
    "Audify Music Player",
    "Quetal",
    "Dealer Management SaaS",
    "BRMS Medical Representative Management",
    "Smart IoT Alarm",
    "Study Unify",
    "GetX",
    "MobX",
    "MVVM Architecture",
    "Stripe",
    "NMI",
    "WebSockets",
    "OpenAI Codex",
    "Claude Code",
    "Google Antigravity",
  ],
  authors: [{ name: "Jainam Kikani", url: "https://github.com/JainamO7" }],
  creator: "Jainam Kikani",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Jainam Kikani | Flutter & Mobile Application Developer",
    description:
      "Cross-platform mobile developer with 1 year professional experience engineering production Flutter applications for Android & iOS across streaming, FinTech, SaaS, and EdTech.",
    type: "website",
    locale: "en_US",
    siteName: "Jainam Kikani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jainam Kikani | Flutter & Mobile Application Developer",
    description:
      "Cross-platform mobile developer with 1 year professional experience engineering production Flutter applications for Android & iOS.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090A0D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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
