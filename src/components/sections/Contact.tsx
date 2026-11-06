import { ContactForm } from "../forms/ContactForm";
import { Button } from "../ui/Button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[var(--color-secondary)]/30">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-heading text-4xl text-[var(--color-primary)] md:text-5xl">
              Get in Touch
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Ready to schedule an appointment or have a question about our services? We're here to help.
            </p>

            <div className="rounded-[var(--radius)] bg-[var(--color-background)] p-8 shadow-sm mb-8">
              <h3 className="mb-4 text-xl font-medium">Prefer WhatsApp?</h3>
              <p className="mb-6 text-muted-foreground">
                For the fastest response, send us a message on WhatsApp. Our care team is online during business hours.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none">
                <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Message on WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius)] bg-[var(--color-background)] p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-medium">Send us an Email</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
