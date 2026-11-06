import { clinicConfig } from "@/config/clinic";

export function Location() {
  return (
    <section id="location" className="section-padding bg-[var(--color-background)] border-t">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h2 className="font-heading text-4xl text-[var(--color-primary)]">
              Visit Us
            </h2>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-lg">Address</h3>
              <p className="text-muted-foreground">{clinicConfig.address}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-lg">Contact</h3>
              <a href={`tel:${clinicConfig.phone}`} className="text-muted-foreground hover:text-[var(--color-primary)] transition-colors">{clinicConfig.phone}</a>
              <a href={`mailto:${clinicConfig.email}`} className="text-muted-foreground hover:text-[var(--color-primary)] transition-colors">{clinicConfig.email}</a>
            </div>
          </div>

          <div className="lg:col-span-2 relative aspect-video w-full rounded-[var(--radius)] overflow-hidden bg-muted">
            <iframe
              src={clinicConfig.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
