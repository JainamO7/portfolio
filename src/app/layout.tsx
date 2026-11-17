import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jainamkikani.dev"),
  title: {
    default: "Jainam Kikani — Flutter & Mobile Application Developer",
    template: "%s | Jainam Kikani",
  },
  description:
    "Flutter developer building cross-platform Android and iOS apps across media, payments, education, and IoT. Open to opportunities.",
  authors: [{ name: "Jainam Kikani", url: "https://github.com/JainamO7" }],
  creator: "Jainam Kikani",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Jainam Kikani — Flutter & Mobile Application Developer",
    description:
      "Flutter developer building cross-platform Android and iOS apps across media, payments, education, and IoT.",
    type: "website",
    locale: "en_US",
    siteName: "Jainam Kikani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jainam Kikani — Flutter & Mobile Application Developer",
    description:
      "Flutter developer building cross-platform Android and iOS apps across media, payments, education, and IoT.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFA" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = saved === 'dark' || ((!saved || saved === 'system') && prefersDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ colorScheme: "light dark" }}
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased selection:bg-[var(--color-accent-subtle)] selection:text-[var(--color-accent)] font-sans">
        {children}
      </body>
    </html>
  );
}
