import { Briefcase, Calendar, MapPin } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/projectsData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-primary)]">
            Professional background.
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 border-l border-[var(--color-border)] space-y-4"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-canvas)]" />

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--color-text-primary)]">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-[var(--color-text-muted)]">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-text-subtle)]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.dates}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities bullets */}
              <ul className="space-y-2 pt-1 text-sm sm:text-base text-[var(--color-text-muted)] max-w-3xl">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-[var(--color-accent)] mt-1.5">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
