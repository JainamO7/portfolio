import { TECHNICAL_SKILLS } from "@/data/projectsData";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">
            Skills
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-primary)]">
            Technical competencies.
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Core stack and day-to-day tools for mobile application engineering.
          </p>
        </div>

        {/* Plain Categorized Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TECHNICAL_SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-5 sm:p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-4"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-medium">
                {group.category}
              </h3>

              <ul className="space-y-2 text-sm text-[var(--color-text-primary)]">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
