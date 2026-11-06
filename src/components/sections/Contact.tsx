import { ContactForm } from "../forms/ContactForm";
import { Button } from "../ui/Button";
import { MessageCircle, Phone, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { clinicConfig } from "@/config/clinic";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[var(--color-secondary)]/30 relative">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-white/70 px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--color-primary)] uppercase backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Concierge Scheduling
              </div> */}
              <h2 className="mb-4 font-heading text-4xl text-[var(--color-primary)] md:text-5xl tracking-tight">
                Get in Touch
              </h2>
              <p className="mb-8 text-base text-neutral-700 leading-relaxed">
                Whether you are arranging a routine hygiene visit or exploring full smile rehabilitation, our patient care team is here to assist with kindness and clarity.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 rounded-xl bg-white p-4 border border-[#003399]/10 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-secondary)] text-[var(--color-primary)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Direct Phone</p>
                    <a href={`tel:${clinicConfig.phone}`} className="text-sm font-bold text-neutral-900 hover:text-[var(--color-primary)] transition-colors">
                      {clinicConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl bg-white p-4 border border-[#003399]/10 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-secondary)] text-[var(--color-primary)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email Inquiries</p>
                    <a href={`mailto:${clinicConfig.email}`} className="text-sm font-bold text-neutral-900 hover:text-[var(--color-primary)] transition-colors">
                      {clinicConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl bg-white p-4 border border-[#003399]/10 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-secondary)] text-[var(--color-primary)]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Clinic Hours</p>
                    <p className="text-sm font-semibold text-neutral-900">
                      Mon – Sat: 10:00 AM – 8:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <div className="rounded-2xl bg-white p-6 border border-[#003399]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Need Immediate Assistance?</h3>
              </div>
              <p className="mb-4 text-xs text-muted-foreground leading-relaxed">
                Connect directly with our care coordinator on WhatsApp for same-day scheduling and quick inquiries.
              </p>
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 py-2.5 px-4 text-sm font-semibold text-white shadow-sm transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>Message on WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-8 sm:p-10 border border-[#003399]/10 shadow-sm">
              <h3 className="mb-2 font-heading text-2xl font-bold text-[var(--color-primary)]">
                Send an Appointment Request
              </h3>
              <p className="mb-8 text-sm text-muted-foreground">
                Please provide your contact information and details on the care you seek. We will respond within 2 business hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
