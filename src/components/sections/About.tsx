import Image from "next/image";
import { clinicConfig } from "@/config/clinic";

export function About() {
  return (
    <section id="about" className="section-padding bg-[var(--color-background)]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[var(--radius)]">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
              alt="Patient consultation"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 lg:pl-12">
            <h2 className="font-heading text-4xl text-[var(--color-primary)] md:text-5xl">
              About {clinicConfig.name}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe that visiting the dentist shouldn't be a source of anxiety. Our clinic was founded on the principle of providing exceptional dental care in an environment that feels more like a wellness retreat than a clinical setting.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our holistic approach integrates advanced technology with genuine empathy, ensuring that every treatment plan is tailored to your unique needs, comfort level, and long-term oral health goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
