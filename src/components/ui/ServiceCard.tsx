"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/data/services";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${service.title} details`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-[#003399]/15 bg-white shadow-sm transition-all duration-300 ease-out cursor-pointer min-h-[380px] hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-[#003399]/20 hover:border-[var(--color-primary)]/50 hover:ring-1 hover:ring-[var(--color-primary)]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
    >
      {/* Default State: ONLY Image and Title */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="relative h-64 w-full overflow-hidden bg-muted">
          <Image
            src={getAssetPath(service.image)}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Title Container (Visible by default) */}
        <div className="flex flex-1 items-center justify-between p-5 bg-white border-t border-[#003399]/5">
          <h3 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {service.title}
          </h3>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--color-primary)] group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Raised Card Information Layer:
          Controlled by BOTH native CSS group-hover AND React state isHovered.
          Guaranteed to display on mouse enter and hide on mouse leave!
      */}
      <div
        className={`absolute inset-0 z-30 flex flex-col justify-between bg-white p-6 shadow-2xl transition-all duration-300 ease-out ${
          isHovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
        }`}
      >
        <div className="flex flex-col gap-3 overflow-y-auto pr-1">
          {/* Title Header */}
          <div className="border-b border-[#003399]/15 pb-2.5">
            <h4 className="font-heading text-lg font-bold text-[var(--color-primary)] leading-tight">
              {service.title}
            </h4>
          </div>

          {/* In-Depth Description */}
          <p className="text-xs leading-relaxed text-neutral-600">
            {service.detailedInfo}
          </p>

          {/* Key Clinical Procedures */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 mb-2">
              Clinical Procedures:
            </p>
            <ul className="space-y-1.5">
              {service.procedures.map((proc, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-neutral-700">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                  <span className="leading-tight">{proc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended For Note */}
          <div className="rounded-lg bg-[var(--color-secondary)] px-3 py-2 border border-[#003399]/10">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
              Recommended For:
            </span>
            <span className="text-xs text-neutral-700 line-clamp-2">
              {service.idealFor}
            </span>
          </div>
        </div>

        {/* Action Button inside Raised Card */}
        <div className="pt-3 border-t border-[#003399]/15 shrink-0 mt-2">
          <Link
            href="#contact"
            onClick={(e) => e.stopPropagation()}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#002b80] active:scale-[0.98]"
          >
            <span>Book Consultation for this Care</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
