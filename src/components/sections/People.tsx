"use client";

import { useEffect, useRef } from "react";
import { team } from "@/data/team";
import { TeamCard } from "../ui/TeamCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function People() {
  const isPausedRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Tripled list ensures seamless infinite wrap in both directions
  const revolvingTeam = [...team, ...team, ...team];

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Start in middle set if at initial position 0
    if (el.scrollLeft === 0 && el.scrollWidth > 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }

    let lastTime: number | null = null;
    const speed = 22; // gentle, reduced speed: 22 pixels per second

    const animate = (time: number) => {
      if (lastTime !== null && !isPausedRef.current && el) {
        const delta = (time - lastTime) / 1000;
        el.scrollLeft += speed * delta;

        const teamWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= 2 * teamWidth) {
          el.scrollLeft -= teamWidth;
        }
      }
      lastTime = time;
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    // 1. Immediately kill the continuous animation so it never cancels smooth scroll
    isPausedRef.current = true;
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const el = scrollContainerRef.current;
    if (el) {
      const firstChild = el.querySelector<HTMLElement>(":scope > div");
      const cardWidth = firstChild?.offsetWidth || 320;
      const step = cardWidth + 24;
      const teamWidth = el.scrollWidth / 3;

      if (direction === "left") {
        if (el.scrollLeft <= step) {
          el.scrollLeft += teamWidth;
        }
        el.scrollBy({ left: -step, behavior: "smooth" });
      } else {
        if (el.scrollLeft >= 2 * teamWidth - step) {
          el.scrollLeft -= teamWidth;
        }
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }

    // 2. Schedule auto-resume after 4.5 seconds of inactivity
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 4500);
  };

  return (
    <section id="people" className="section-padding bg-[var(--color-secondary)]/30 overflow-hidden">
      <div className="container relative">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Multi-Speciality Clinical Faculty
          </span>
          <h2 className="mb-3 font-heading text-4xl text-[var(--color-primary)] md:text-5xl tracking-tight">
            Our Clinical Team
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Meet our team of MDS dental specialists and caring clinicians committed to gentle, minimally-invasive oral healthcare.
          </p>
        </div>

        {/* Carousel Grid with Side Navigation Buttons */}
        <div className="group/people relative w-full">
          {/* Floating Left Side Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous clinicians"
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:scale-110 active:scale-95 transition-all border border-[#003399]/20 cursor-pointer pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Floating Right Side Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next clinicians"
            className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:scale-110 active:scale-95 transition-all border border-[#003399]/20 cursor-pointer pointer-events-auto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            className="flex items-stretch gap-6 overflow-x-auto px-2 sm:px-4 py-4 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {revolvingTeam.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="flex shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
