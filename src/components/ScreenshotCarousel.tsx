"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectScreenshot } from "@/data/projectsData";

interface Props {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
}

export default function ScreenshotCarousel({ screenshots, projectTitle }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const current = screenshots[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-2.5">
      {/* Clean caption row above device frame - never obscures the screenshot */}
      <div className="flex items-center justify-between px-1 text-xs font-mono">
        <span className="text-[var(--color-text-primary)] font-medium truncate">
          {current.label}
        </span>
        <span className="text-[var(--color-text-subtle)] text-[11px] flex-shrink-0 ml-2">
          {currentIndex + 1} of {screenshots.length}
        </span>
      </div>

      {/* Device frame container - completely unobstructed & mobile centered */}
      <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto aspect-[9/16] bg-[var(--color-canvas)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-xs flex items-center justify-center">
        <Image
          src={current.url}
          alt={current.alt || `${projectTitle} screenshot: ${current.label}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-contain p-1.5"
          priority={false}
          loading="lazy"
          quality={85}
        />

        {/* Carousel Prev / Next Buttons */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label={`Previous screenshot for ${projectTitle}`}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[var(--color-surface)]/95 border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:scale-105 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label={`Next screenshot for ${projectTitle}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[var(--color-surface)]/95 border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:scale-105 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails row */}
      {screenshots.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-0.5 scrollbar-none">
          {screenshots.map((s, idx) => (
            <button
              key={s.url}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Select ${s.label}`}
              className={`relative flex-shrink-0 w-11 h-16 rounded-md border overflow-hidden transition-all ${
                idx === currentIndex
                  ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)] opacity-100"
                  : "border-[var(--color-border)] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={s.url}
                alt={s.label}
                fill
                sizes="44px"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
