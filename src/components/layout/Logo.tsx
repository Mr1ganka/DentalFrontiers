import { clinicConfig } from "@/config/clinic";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex flex-col">
      <span className="font-heading text-2xl tracking-wide text-[var(--color-primary)]">
        {clinicConfig.name}
      </span>
      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100">
        Dental Studio
      </span>
    </Link>
  );
}
