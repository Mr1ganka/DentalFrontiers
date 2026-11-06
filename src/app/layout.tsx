import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { theme } from "@/config/theme";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Frontiers",
  description: "Premium, minimalist dental clinic providing modern dental care.",
  openGraph: {
    title: "Dental Frontiers",
    description: "Premium, minimalist dental clinic providing modern dental care.",
    url: "https://dentalfrontiers.com",
    siteName: "Dental Frontiers",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://dentalfrontiers.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeStyles = {
    "--color-primary": theme.colors.primary,
    "--color-secondary": theme.colors.secondary,
    "--color-tertiary": theme.colors.tertiary,
    "--color-background": theme.colors.background,
    "--color-foreground": theme.colors.foreground,
  } as React.CSSProperties;

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
      style={themeStyles}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
