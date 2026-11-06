import Link from "next/link";
import { Logo } from "./Logo";
import { clinicConfig } from "@/config/clinic";
import { navigationConfig } from "@/config/navigation";
import { Globe, Heart, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[var(--color-secondary)]/50 pt-16">
      <div className="container grid gap-12 pb-16 md:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {clinicConfig.description}
          </p>
          <div className="flex gap-4">
            <Link href={clinicConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
              <Heart className="h-5 w-5 text-muted-foreground transition-colors hover:text-[var(--color-primary)]" />
            </Link>
            <Link href={clinicConfig.socials.facebook} target="_blank" rel="noopener noreferrer">
              <Globe className="h-5 w-5 text-muted-foreground transition-colors hover:text-[var(--color-primary)]" />
            </Link>
            <Link href={clinicConfig.socials.twitter} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-5 w-5 text-muted-foreground transition-colors hover:text-[var(--color-primary)]" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-heading text-lg font-medium">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-sm">
            {navigationConfig.mainNav.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="text-muted-foreground transition-colors hover:text-[var(--color-primary)]">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-heading text-lg font-medium">Contact</h3>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            <li>{clinicConfig.address}</li>
            <li>
              <a href={`mailto:${clinicConfig.email}`} className="transition-colors hover:text-[var(--color-primary)]">
                {clinicConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${clinicConfig.phone}`} className="transition-colors hover:text-[var(--color-primary)]">
                {clinicConfig.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-heading text-lg font-medium">Hours</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Mon - Sat</span> <span>10:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            {navigationConfig.footerNav.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="transition-colors hover:text-[var(--color-primary)]">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
