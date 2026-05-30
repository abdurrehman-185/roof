import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, PhoneCall } from "lucide-react";

import { legalNavigation, phoneHref, siteConfig, siteNavigation } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-dark)] pb-24 pt-16 text-white lg:pb-0">
      <div className="container-shell">
        <div className="grid gap-10 rounded-[32px] border border-white/8 bg-white/4 p-8 md:grid-cols-[1.25fr_0.85fr_0.85fr_1fr]">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-secondary)]">
              Local roofing website
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {siteConfig.businessName}
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-white/72">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
              Navigation
            </h3>
            <div className="mt-5 grid gap-3">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-white/76 transition hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight className="size-4" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
              Service Areas
            </h3>
            <div className="mt-5 grid gap-2 text-white/76">
              {siteConfig.serviceAreas.map((area) => (
                <p key={area}>{area}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
              Contact
            </h3>
            <div className="mt-5 grid gap-4 text-white/76">
              <a href={phoneHref(siteConfig.phone)} className="inline-flex items-center gap-3">
                <PhoneCall className="size-4 text-[color:var(--brand-secondary)]" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-3">
                <Mail className="size-4 text-[color:var(--brand-secondary)]" />
                {siteConfig.email}
              </a>
              <div className="inline-flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-[color:var(--brand-secondary)]" />
                <span>
                  {siteConfig.city}, {siteConfig.region}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/8 py-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
          <p>
            {siteConfig.businessName} handles roof repairs, replacements, inspections, and roofline work across {siteConfig.city} and nearby areas.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
