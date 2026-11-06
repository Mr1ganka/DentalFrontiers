"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navigationConfig } from "@/config/navigation";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#003399]/10 bg-[var(--color-background)]/95 backdrop-blur-md shadow-xs">
      <div className="container flex min-h-[96px] py-2 items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[var(--color-primary)]"
            >
              {item.title}
            </Link>
          ))}
          <Button asChild>
            <Link href={navigationConfig.contactCTA.href}>
              {navigationConfig.contactCTA.title}
            </Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="container flex flex-col gap-4 border-t pb-8 pt-4 md:hidden">
          {navigationConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-[var(--color-primary)]"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full" size="lg">
            <Link href={navigationConfig.contactCTA.href} onClick={() => setIsOpen(false)}>
              {navigationConfig.contactCTA.title}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
