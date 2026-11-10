import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import { HeartHandshake, Microscope, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export function About() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Zero-Anxiety Sensory Comfort",
      desc: "Warm blankets, soothing acoustics, and gentle sedation protocols ensure you remain completely relaxed.",
    },
    {
      icon: Microscope,
      title: "Micro-Precision Dentistry",
      desc: "Surgical magnification and laser-assisted diagnostics eliminate invasive drilling and preserve healthy enamel.",
    },
    {
      icon: Sparkles,
      title: "Biological & Aesthetic Harmony",
      desc: "We prioritize biocompatible ceramic materials engineered to match your natural smile's shade and vitality.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-[var(--color-background)] relative">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column Image with Overlapping Detail */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] shadow-xl border border-black/5">
              <Image
                src={getAssetPath("/services/root-canal.jpg")}
                alt="Gentle dentist consultation with patient at Dental Frontiers"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Small Aesthetic Metric Pill */}
            {/* <div className="absolute -bottom-6 right-4 sm:-right-4 rounded-xl border border-neutral-200/80 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">15+ Years</p>
                  <p className="text-xs text-muted-foreground">Of Clinical Mastery</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column Content */}
          <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                Our Philosophy & Foundation
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--color-primary)] tracking-tight">
                About {clinicConfig.name}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-neutral-700">
              We founded {clinicConfig.name} on a singular premise: world-class dental care should feel restorative rather than clinical. By replacing cold sterile routines with empathy and calm aesthetics, we make your dental health an experience to look forward to.
            </p>

            {/* Three Structured Pillars */}
            <div className="mt-2 grid gap-5 sm:grid-cols-1">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-[#003399]/10 bg-[var(--color-secondary)]/25 p-4 transition-colors hover:bg-[var(--color-secondary)]/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-primary)] shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
