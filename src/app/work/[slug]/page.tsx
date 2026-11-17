import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Smartphone, Building, User, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASE_STUDIES, PERSONAL_INFO } from "@/data/projectsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} — Flutter Case Study`,
    description: study.oneLiner,
    openGraph: {
      title: `${study.title} — Case Study | ${PERSONAL_INFO.name}`,
      description: study.oneLiner,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-canvas)] overflow-x-hidden w-full">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <article className="max-w-[860px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Back link */}
          <div>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to selected work</span>
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-6 pb-8 border-b border-[var(--color-border)]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-text-muted)]">
              <span className="px-2.5 py-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium">
                {study.platform}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                {study.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Role: {study.role}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[var(--color-text-primary)] leading-tight">
              {study.title}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed">
              {study.oneLiner}
            </p>

            {/* Links */}
            {study.links && study.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {study.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] text-[var(--color-text-primary)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </a>
                ))}
              </div>
            )}
          </header>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
              Overview
            </h2>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              {study.overview}
            </p>
          </section>

          {/* My Role */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
              My Role
            </h2>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              As a Flutter Developer with {study.company}, I focused on feature development, API integration, and ongoing stability across Android and iOS versions.
            </p>
          </section>

          {/* What I Built */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
              What I Built
            </h2>
            <ul className="space-y-3 text-base text-[var(--color-text-muted)]">
              {study.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
              Engineering Challenges
            </h2>
            <ul className="space-y-3 text-base text-[var(--color-text-muted)]">
              {study.challenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-subtle)] mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Data-driven Screenshot Gallery (renders ONLY when real images exist) */}
          {study.screenshots && study.screenshots.length > 0 && (
            <section className="space-y-6 pt-6 border-t border-[var(--color-border)]">
              <h2 className="font-serif text-2xl font-medium text-[var(--color-text-primary)]">
                Application Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {study.screenshots.map((s) => (
                  <div
                    key={s.url}
                    className="relative aspect-[9/16] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={s.url}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Case Study Navigation */}
          <footer className="pt-12 border-t border-[var(--color-border)] flex items-center justify-between">
            <Link
              href="/#work"
              className="text-xs font-mono text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            >
              ← Back to Overview
            </Link>

            <Link
              href={`/work/${nextStudy.slug}`}
              className="text-xs font-mono text-[var(--color-accent)] hover:underline flex items-center gap-1.5"
            >
              <span>Next: {nextStudy.title}</span>
              <span>→</span>
            </Link>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}

