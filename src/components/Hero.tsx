import Link from "next/link";
import { ArrowDownRight, MapPin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/projectsData";

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-20 md:pt-24 pb-14 sm:pb-20 border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full">
        {/* Availability & Location (Clean, human, no AI-style green dot beacon) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 text-xs font-mono text-[var(--color-text-muted)]">
          <div className="inline-flex items-center self-start px-2.5 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)]">
            Open to opportunities
          </div>

          <span className="hidden sm:inline text-[var(--color-border)]">•</span>

          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-[var(--color-text-subtle)]">({PERSONAL_INFO.locationNotice})</span>
          </div>
        </div>

        {/* Hero Title & Lead */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-text-primary)] leading-[1.2] break-words">
            Flutter developer building Android and iOS apps for media, payments, education, and IoT.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
            Hands-on mobile engineer shipping production apps with Flutter, Dart, GetX, and MobX. Focused on responsive UIs, reliable background playback, Stripe & NMI payments, and real-time WebSockets.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
          <Link
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium rounded-md bg-[var(--color-text-primary)] text-[var(--color-canvas)] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <span>View selected work</span>
            <ArrowDownRight className="w-4 h-4 text-[var(--color-accent)]" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <Mail className="w-4 h-4 text-[var(--color-text-muted)]" />
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
