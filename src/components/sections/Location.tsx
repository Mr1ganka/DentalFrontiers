import { clinicConfig } from "@/config/clinic";
import { MapPin, Navigation, Phone, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Location() {
  return (
    <section id="location" className="section-padding bg-[var(--color-background)] border-t border-black/5">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                Prime Accessibility
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--color-primary)]">
                Our Clinic Location
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Conveniently located at Sammilani Park, Survey Park, Santoshpur in Kolkata with dedicated patient parking and serene clinic interiors.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-3 rounded-xl border border-[#003399]/10 bg-[var(--color-secondary)]/30 p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[var(--color-primary)] mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">Physical Address</h3>
                    <p className="mt-1 text-sm text-neutral-700 leading-relaxed">{clinicConfig.address}</p>
                  </div>
                </div>

                <Link
                  href={clinicConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#002b80] active:scale-[0.98]"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex flex-col gap-2 rounded-xl bg-white p-4 border border-[#003399]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">Direct Contact</span>
                <div className="flex flex-wrap gap-4 text-xs">
                  <a href={`tel:${clinicConfig.phone}`} className="flex items-center gap-1.5 font-medium text-neutral-700 hover:text-[var(--color-primary)] transition-colors">
                    <Phone className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                    {clinicConfig.phone}
                  </a>
                  <a href={`mailto:${clinicConfig.email}`} className="flex items-center gap-1.5 font-medium text-neutral-700 hover:text-[var(--color-primary)] transition-colors">
                    <Mail className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                    {clinicConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-video w-full rounded-[var(--radius)] overflow-hidden bg-muted shadow-lg border border-black/10">
            <iframe
              src={clinicConfig.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Dental Frontiers Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
