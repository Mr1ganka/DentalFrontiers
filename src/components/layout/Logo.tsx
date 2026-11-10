import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className = "", isFooter = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label={clinicConfig.name}
    >
      <Image
        src="/logo.png"
        alt={clinicConfig.name}
        width={1448}
        height={325}
        priority={!isFooter}
        className={isFooter ? "h-10 sm:h-11 w-auto object-contain" : "h-11 sm:h-12 md:h-14 w-auto object-contain"}
      />
    </Link>
  );
}
