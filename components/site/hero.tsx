import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

import { MotionReveal } from "@/components/site/motion-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig, phoneHref } from "@/content/site";

const heroImages = siteConfig.galleryProjects.slice(0, 3);

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-dark)] pt-12 text-white sm:pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,162,91,0.14),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(186,77,55,0.18),transparent_26%)]" />
      <div className="absolute inset-0 roof-grid opacity-50" />
      <div className="container-shell relative grid gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <MotionReveal className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
            Roofing company in {siteConfig.city}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Roof repairs, replacements, and trusted workmanship for properties across{" "}
            {siteConfig.city}.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            {siteConfig.businessName} is positioned as the dependable local option for
            leak repairs, new roofs, flat roofing, roofline upgrades, and inspection-led
            quote requests throughout {siteConfig.region}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/16 bg-white/6 px-6 text-white hover:bg-white/12 hover:text-white"
            >
              <a href={phoneHref(siteConfig.phone)}>
                <PhoneCall className="size-4" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {siteConfig.heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/78"
              >
                <CheckCircle2 className="mb-3 size-5 text-[color:var(--brand-secondary)]" />
                {highlight}
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6">
              <Image
                src={heroImages[0]?.image ?? ""}
                alt={heroImages[0]?.alt ?? "Roofing project"}
                width={900}
                height={1100}
                className="h-full min-h-[420px] w-full object-cover"
                priority
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(16,21,29,0.92))] p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
                  Featured project
                </p>
                <p className="mt-2 text-xl font-semibold">{heroImages[0]?.title}</p>
              </div>
            </div>
            <div className="grid gap-5">
              {heroImages.slice(1).map((project) => (
                <div
                  key={project.title}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={620}
                    className="h-52 w-full object-cover"
                    sizes="(min-width: 1024px) 16vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,21,29,0.88))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-secondary)]">
                      {project.service}
                    </p>
                    <p className="mt-2 text-lg font-semibold">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
