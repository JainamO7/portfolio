import { GraduationCap } from "lucide-react";
import { PERSONAL_INFO, EDUCATION } from "@/data/projectsData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">
            About
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-primary)]">
            Background & philosophy.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Avatar / Photo Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            <div className="w-full aspect-square max-w-[280px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col items-center justify-center p-6 text-center shadow-xs">
              <div className="w-20 h-20 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-subtle)] flex items-center justify-center text-2xl font-serif font-semibold text-[var(--color-accent)] mb-4">
                JK
              </div>
              <h3 className="font-serif text-lg font-medium text-[var(--color-text-primary)]">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-[var(--color-text-muted)] mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-[var(--color-text-subtle)] mt-2">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* Bio text & Education */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Education subsection */}
            <div className="pt-6 border-t border-[var(--color-border)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-subtle)]">
                      <span>{edu.year}</span>
                    </div>
                    <h4 className="font-medium text-sm text-[var(--color-text-primary)]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {edu.college}
                    </p>
                    <p className="text-xs text-[var(--color-text-subtle)]">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

