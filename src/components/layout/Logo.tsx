import { clinicConfig } from "@/config/clinic";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className = "", isFooter = false }: LogoProps) {
  return (
    <Link href="/" className={`group flex flex-col justify-center ${className}`}>
      {/* Clinic Name - Alegreya SC (size 48) */}
      <span className="font-clinic text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight text-[var(--color-primary)] leading-none transition-colors group-hover:opacity-90">
        {clinicConfig.name}
      </span>
      {/* Subtitle - Noto Sans Display (size 24) */}
      <span className="font-heading text-xs sm:text-sm md:text-lg lg:text-[24px] font-medium tracking-normal text-[var(--color-tertiary)] leading-tight mt-1 transition-colors group-hover:text-neutral-700">
        {clinicConfig.tagline}
      </span>
    </Link>
  );
}
