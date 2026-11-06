"use client";

import { useRef } from "react";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "../ui/ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="section-padding bg-[var(--color-background)] overflow-hidden">
      <div className="container relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-heading text-4xl text-[var(--color-primary)] md:text-5xl">
              Patient Experiences
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Hear from our community about their experiences at Dental Frontiers.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="snap-start py-4">
              <ReviewCard review={review} />
            </div>
          ))}
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
