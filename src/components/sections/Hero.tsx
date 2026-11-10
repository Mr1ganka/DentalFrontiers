import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-16 pb-20 overflow-hidden bg-[var(--color-secondary)]/60">
      <div className="container relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col gap-6 max-w-2xl lg:col-span-7">
          {/* Eyebrow Pill */}
          {/* <div className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-primary)]/20 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--color-primary)] uppercase backdrop-blur-md shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            <span>Excellence in Aesthetic & Restorative Care</span>
          </div> */}

          {/* Clinic Brand Typography with Exact Fonts and Sizes */}
          <div className="flex flex-col gap-1.5">
            <h1 className="font-clinic text-3xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-[var(--color-primary)] leading-[1.08]">
              Dental Frontiers
            </h1>
            <p className="font-heading text-lg sm:text-xl md:text-[24px] font-medium tracking-normal text-[var(--color-tertiary)] leading-snug">
              Multi-speciality dental clinic
            </p>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-neutral-900 tracking-tight">
            A gentle, modern standard of comprehensive dental wellness.
          </h2>

          <p className="font-heading text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
            Experience serene, minimally-invasive dentistry designed around your peace of mind, biological longevity, and a confident, radiant smile.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" asChild className="h-12 px-8 text-base shadow-md shadow-[#003399]/25 bg-[var(--color-primary)] hover:bg-[#002b80] text-white">
              <Link href="/#contact" className="flex items-center gap-2">
                <span>Book Appointment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-12 px-8 text-base border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5">
              <Link href="/#services">Explore All Services</Link>
            </Button>
          </div>

          {/* Social Proof & Trust Badges */}
          <div className="pt-6 border-t border-[#003399]/15 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              {/* <div className="flex -space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 stroke-amber-500" />
                ))}
              </div> */}
              {/* <div className="text-xs">
                <span className="font-bold text-neutral-900">4.9 / 5.0</span>
                <span className="text-muted-foreground ml-1">(500+ Verified Reviews)</span>
              </div> */}
            </div>

            {/* <div className="flex items-center gap-2 text-xs text-neutral-700">
              <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
              <span className="font-medium">100% Pain-Free Calming Protocol</span>
            </div> */}
          </div>
        </div>

        {/* Right Column Image with Floating Glassmorphic Pill */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full rounded-[var(--radius)] overflow-hidden shadow-2xl border border-white/60">
            <Image
              src="/hero/hero.jpg"
              alt="Modern serene dental clinic interior at Dental Frontiers"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>

      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[var(--color-tertiary)] opacity-20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-white opacity-40 blur-3xl -z-10 rounded-full pointer-events-none" />
    </section>
  );
}
