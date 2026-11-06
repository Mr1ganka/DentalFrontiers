"use client";

import { useRef } from "react";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "../ui/ReviewCard";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { clinicConfig } from "@/config/clinic";
import Link from "next/link";

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    // Dynamically calculate exact rendered card width
    const firstChild = el.querySelector<HTMLElement>(":scope > div");
    const cardWidth = firstChild?.offsetWidth || 380;
    const step = cardWidth + 24; // card width + 24px gap

    const current = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (direction === "left") {
      if (current <= 15) {
        // At start: smoothly wrap to end
        el.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -step, behavior: "smooth" });
      }
    } else {
      if (current >= maxScroll - 15) {
        // At end: smoothly wrap to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="reviews" className="section-padding bg-[var(--color-background)] overflow-hidden">
      <div className="container relative">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Patient Experiences
            </span>
            <h2 className="mb-3 font-heading text-4xl text-[var(--color-primary)] md:text-5xl tracking-tight">
              Real Patient Stories
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Read authentic feedback from patients who entrusted their smiles to Dental Frontiers in Santoshpur, Kolkata.
            </p>
          </div>

          {/* Action Button & Carousel Controls */}
          <div className="flex items-center gap-3">
            <Link
              href={clinicConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-xs"
            >
              <span>View All on Google Maps</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Header Controls - visible on all devices */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="h-9 w-9 border-neutral-300 hover:border-[var(--color-primary)] hover:bg-white cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="h-9 w-9 border-neutral-300 hover:border-[var(--color-primary)] hover:bg-white cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Grid with Side Navigation Buttons */}
        <div className="group/reviews relative w-full">
          {/* Floating Left Side Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous review"
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:scale-110 active:scale-95 transition-all border border-[#003399]/20 cursor-pointer pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Floating Right Side Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next review"
            className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-xl hover:scale-110 active:scale-95 transition-all border border-[#003399]/20 cursor-pointer pointer-events-auto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 hide-scrollbar px-2 sm:px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="shrink-0 py-2">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link / Prompt */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-muted-foreground">
          <p>
            All testimonials are from verified Google Maps patient check-ins at Dental Frontiers.
          </p>
          <Link
            href={clinicConfig.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
          >
            <span>Have you visited us? Leave a Google Review</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
