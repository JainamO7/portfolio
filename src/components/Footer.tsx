import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/projectsData";

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-canvas)] text-[var(--color-text-muted)] text-xs font-mono">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-[var(--color-text-primary)] font-medium">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-[var(--color-text-subtle)]">
            {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-5">
          <Link href="/#work" className="hover:text-[var(--color-text-primary)] transition-colors">
            Work
          </Link>
          <Link href="/#experience" className="hover:text-[var(--color-text-primary)] transition-colors">
            Experience
          </Link>
          <Link href="/#skills" className="hover:text-[var(--color-text-primary)] transition-colors">
            Skills
          </Link>
          <Link href="/#about" className="hover:text-[var(--color-text-primary)] transition-colors">
            About
          </Link>
          <Link href="/#contact" className="hover:text-[var(--color-text-primary)] transition-colors">
            Contact
          </Link>
        </div>

        {/* Right: Back to top */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
