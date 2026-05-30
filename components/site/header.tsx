import Link from "next/link";
import { Mail, MapPin, Menu, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { phoneHref, siteConfig, siteNavigation } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--brand-dark)]/96 text-white backdrop-blur-xl">
      <div className="border-b border-white/8">
        <div className="container-shell flex min-h-10 items-center justify-between gap-4 py-2 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <MapPin className="size-3.5 text-[color:var(--brand-secondary)]" />
            <span>
              Serving {siteConfig.city} and {siteConfig.region}
            </span>
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={phoneHref(siteConfig.phone)}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <PhoneCall className="size-3.5 text-[color:var(--brand-secondary)]" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="size-3.5 text-[color:var(--brand-secondary)]" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="max-w-[220px]">
          <span className="block font-display text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">
            Roofing Company
          </span>
          <span className="mt-1 block text-lg font-semibold tracking-tight sm:text-xl">
            {siteConfig.businessName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/78 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/16 bg-white/6 px-4 text-white hover:bg-white/12 hover:text-white"
          >
            <a href={phoneHref(siteConfig.phone)}>{siteConfig.phone}</a>
          </Button>
          <Button
            asChild
            className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-white/16 bg-white/6 text-white hover:bg-white/12 hover:text-white"
              >
                <Menu className="size-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[92vw] max-w-sm border-l-white/10 bg-[color:var(--brand-dark)] text-white">
              <SheetHeader className="text-left">
                <SheetTitle className="text-white">{siteConfig.businessName}</SheetTitle>
                <SheetDescription className="text-white/70">
                  Fast access to services, service areas, and quote requests.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 grid gap-3">
                {siteNavigation.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className="h-12 justify-start rounded-2xl px-4 text-white hover:bg-white/8 hover:text-white"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
              <div className="mt-8 grid gap-3 rounded-[28px] border border-white/10 bg-white/4 p-5">
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center gap-2 text-sm text-white/80"
                >
                  <PhoneCall className="size-4 text-[color:var(--brand-secondary)]" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/80"
                >
                  <Mail className="size-4 text-[color:var(--brand-secondary)]" />
                  {siteConfig.email}
                </a>
                <Button
                  asChild
                  className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
