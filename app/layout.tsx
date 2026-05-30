import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Geist_Mono, Manrope, Rajdhani } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";
import { siteConfig } from "@/content/site";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accentStyles = {
    "--brand-primary": siteConfig.accent.primary,
    "--brand-secondary": siteConfig.accent.secondary,
    "--brand-soft": siteConfig.accent.soft,
    "--brand-dark": siteConfig.accent.dark,
  } as CSSProperties;

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body style={accentStyles} className="min-h-full">
        <a
          href="#main-content"
          className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-lg focus:not-sr-only"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
