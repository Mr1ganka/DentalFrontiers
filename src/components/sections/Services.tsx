import { services } from "@/data/services";
import { ServiceCard } from "../ui/ServiceCard";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--color-secondary)]/30 relative">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 font-heading text-4xl text-[var(--color-primary)] md:text-5xl lg:text-6xl tracking-tight">
            Our Services
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every smile is distinct. We combine microsurgical precision with calming biological protocols to deliver bespoke dental care with zero compromise on comfort.
          </p>
        </div>

        {/* Services Grid with Raised Card Hover */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Assistance Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-8 border border-[#003399]/10 shadow-sm md:flex-row md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)] text-[var(--color-primary)]">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-[var(--color-primary)]">
                Unsure which dental treatment suits your situation?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Schedule a complimentary 15-minute clinical consultation or speak directly with our head treatment coordinator.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto shrink-0">
            <Link href="#contact">Speak with a Specialist</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
