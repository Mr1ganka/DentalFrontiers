import type { Metadata } from "next";
import { Alegreya_SC, Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import { theme } from "@/config/theme";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const alegreyaSC = Alegreya_SC({
  variable: "--font-alegreya-sc",
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});

import { getAssetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Dental Frontiers | Multi-speciality dental clinic",
  description: "Modern, multi-speciality premium dental clinic providing gentle, advanced dental care.",
  openGraph: {
    title: "Dental Frontiers | Multi-speciality dental clinic",
    description: "Modern, multi-speciality premium dental clinic providing gentle, advanced dental care.",
    url: "https://dentalfrontiers.com",
    siteName: "Dental Frontiers",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: getAssetPath("/icon.png"), type: "image/png" },
      { url: getAssetPath("/favicon.ico") },
    ],
    apple: [{ url: getAssetPath("/apple-icon.png"), sizes: "180x180", type: "image/png" }],
    shortcut: getAssetPath("/favicon.ico"),
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
    "--radius": theme.layout.borderRadius,
  } as React.CSSProperties;

  return (
    <html
      lang="en"
      className={`${alegreyaSC.variable} ${notoSansDisplay.variable} h-full scroll-smooth antialiased`}
      style={themeStyles}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
