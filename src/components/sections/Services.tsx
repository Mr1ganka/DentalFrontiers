import { services } from "@/data/services";
import { ServiceCard } from "../ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--color-secondary)]/30">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-heading text-4xl text-[var(--color-primary)] md:text-5xl">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive dental care tailored to your individual needs. We combine expertise with a gentle touch.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
