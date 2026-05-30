import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig } from "@/content/site";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  eyebrow?: string;
  breadcrumbs: { label: string; href?: string }[];
};

export function PageHero({
  title,
  description,
  image,
  eyebrow,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-dark)] py-16 text-white sm:py-20">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,21,29,0.98),rgba(16,21,29,0.76),rgba(16,21,29,0.98))]" />
      <div className="absolute inset-0 roof-grid opacity-40" />
      <div className="container-shell relative">
        <div className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow ? (
            <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-secondary)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
            {description}
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
        </div>
      </div>
    </section>
  );
}
