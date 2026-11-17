import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Jainam Kikani",
  description: "The requested page does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--color-canvas)] text-[var(--color-text-primary)]">
      <div className="max-w-md w-full p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center space-y-6">
        <p className="font-mono text-sm uppercase tracking-wider text-[var(--color-accent)]">
          404 Error
        </p>
        <h1 className="font-serif text-3xl font-medium tracking-tight">
          Page not found.
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          The requested page or case study does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono rounded-md bg-[var(--color-accent)] text-white dark:text-stone-900 hover:opacity-90 transition-opacity"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
