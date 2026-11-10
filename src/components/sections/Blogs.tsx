"use client";

import { useEffect, useRef } from "react";
import { blogs } from "@/data/blogs";
import { BlogCard } from "../ui/BlogCard";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

export function Blogs() {
  const isPausedRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Tripled list ensures seamless infinite wrap in both directions
  const revolvingBlogs = [...blogs, ...blogs, ...blogs];

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    if (el.scrollLeft === 0 && el.scrollWidth > 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }

    let lastTime: number | null = null;
    const speed = 22; // gentle, reduced speed: 22 pixels per second

    const animate = (time: number) => {
      if (lastTime !== null && !isPausedRef.current && el) {
        const delta = (time - lastTime) / 1000;
        el.scrollLeft += speed * delta;

        const blogsWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= 2 * blogsWidth) {
          el.scrollLeft -= blogsWidth;
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
    isPausedRef.current = true;
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const el = scrollContainerRef.current;
    if (el) {
      const firstChild = el.querySelector<HTMLElement>(":scope > div");
      const cardWidth = firstChild?.offsetWidth || 360;
      const step = cardWidth + 24;
      const blogsWidth = el.scrollWidth / 3;

      if (direction === "left") {
        if (el.scrollLeft <= step) {
          el.scrollLeft += blogsWidth;
        }
        el.scrollBy({ left: -step, behavior: "smooth" });
      } else {
        if (el.scrollLeft >= 2 * blogsWidth - step) {
          el.scrollLeft -= blogsWidth;
        }
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 4500);
  };

  return (
    <section id="blogs" className="section-padding bg-[var(--color-background)] overflow-hidden">
      <div className="container relative">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-secondary)]/50 px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--color-primary)] uppercase">
            <BookOpen className="h-3.5 w-3.5" />
            Dental Wisdom & Clinical Insights
          </div>
          <h2 className="mb-3 font-heading text-4xl text-[var(--color-primary)] md:text-5xl tracking-tight">
            The Clinical Journal
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Evidence-based guides, smile aesthetics, and patient wellness breakthroughs published by our clinical team.
          </p>
        </div>

        {/* Carousel Grid with Side Navigation Buttons */}
        <div className="group/blogs relative w-full">
          {/* Floating Left Side Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous article"
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:scale-110 active:scale-95 transition-all border border-[#003399]/20 cursor-pointer pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Floating Right Side Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next article"
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
            className="flex gap-6 overflow-x-auto px-2 sm:px-4 py-2 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {revolvingBlogs.map((blog, index) => (
              <div
                key={`${blog.id}-${index}`}
                className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
