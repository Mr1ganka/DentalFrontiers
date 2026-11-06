import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-[var(--color-secondary)]">
      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-tight text-[var(--color-primary)]">
            A new standard of dental care.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience modern, calm, and premium dentistry designed around your comfort and well-being.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/#contact">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#services">Explore Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-[4/5] rounded-[var(--radius)] overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
            alt="Modern Dental Clinic Interior"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-tertiary)] opacity-30 blur-3xl -z-10 rounded-l-full transform translate-x-1/2"></div>
    </section>
  );
}
