import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink, Shield } from "lucide-react";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { CASE_STUDIES, CLIENT_PROJECTS } from "@/data/projectsData";

export default function SelectedWork() {
  const [featuredCaseStudy, ...otherCaseStudies] = CASE_STUDIES;

  return (
    <section id="work" className="py-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">
              Selected Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-primary)]">
              Cross-platform mobile applications.
            </h2>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] max-w-md">
            Production apps built with Flutter for Android and iOS. Real screenshots from production builds and client deployments.
          </p>
        </div>

        {/* 1. Production Applications & Client Work (Smart IoT Alarm, Dealer SaaS, Quetal, BRMS) */}
        <div className="mb-20 space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-[var(--color-border)] text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
            <Shield className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Production Applications & Client Deployments (Live App Screenshots)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CLIENT_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="p-5 sm:p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between space-y-6 hover:border-[var(--color-accent)]/40 transition-colors"
              >
                {/* Header & Meta */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                      {project.platform}
                    </span>
                    <span className="text-xs font-mono text-[var(--color-text-muted)]">
                      Role: {project.role}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {project.oneLiner}
                  </p>

                  {project.ndaNote && (
                    <p className="text-xs font-mono text-[var(--color-text-subtle)] italic">
                      {project.ndaNote}
                    </p>
                  )}
                </div>

                {/* Screenshot Carousel with clean external labels */}
                <div className="py-1">
                  <ScreenshotCarousel
                    screenshots={project.screenshots}
                    projectTitle={project.title}
                  />
                </div>

                {/* Key Features & Tech */}
                <div className="space-y-4 pt-4 border-t border-[var(--color-border)]">
                  <div className="space-y-1.5">
                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-subtle)]">
                      Delivered Features:
                    </p>
                    <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[var(--color-accent)] mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.playStoreLink && (
                    <div className="pt-2">
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-[var(--color-accent)]/40 bg-[var(--color-accent-subtle)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white dark:hover:text-stone-900 transition-colors"
                      >
                        <span>View on Google Play</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 2. Featured Case Studies Section ("then other") */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 pb-3 border-b border-[var(--color-border)] text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
            <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Technical Case Studies (In-Depth Architecture & Features)</span>
          </div>

          {/* Featured Case Study (Large Card) */}
          <article className="p-5 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--color-text-muted)]">
                  <span className="px-2 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                    {featuredCaseStudy.platform}
                  </span>
                  <span>•</span>
                  <span>{featuredCaseStudy.company}</span>
                  <span>•</span>
                  <span>Role: {featuredCaseStudy.role}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--color-text-primary)]">
                  {featuredCaseStudy.title}
                </h3>

                <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                  {featuredCaseStudy.oneLiner}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-subtle)]">
                    Highlights:
                  </p>
                  <ul className="space-y-1.5 text-sm text-[var(--color-text-muted)]">
                    {featuredCaseStudy.whatIBuilt.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-2">
                  {featuredCaseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-canvas)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-[var(--color-border)] lg:pl-8">
                <div className="space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-subtle)]">
                    Project Overview
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {featuredCaseStudy.overview}
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${featuredCaseStudy.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-[var(--color-accent)] text-white dark:text-stone-900 hover:opacity-95 transition-opacity"
                  >
                    <span>Read full case study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {featuredCaseStudy.links?.[0] && (
                    <a
                      href={featuredCaseStudy.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                    >
                      <span>{featuredCaseStudy.links[0].label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Accompanying Case Studies (2-column grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCaseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--color-text-muted)]">
                    <span className="px-2 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                      {cs.platform}
                    </span>
                    <span>•</span>
                    <span>{cs.company}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--color-text-primary)]">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {cs.oneLiner}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
                      {cs.whatIBuilt.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[var(--color-accent)]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--color-accent)] hover:underline"
                  >
                    <span>Read case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {cs.links?.[0] && (
                    <a
                      href={cs.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
