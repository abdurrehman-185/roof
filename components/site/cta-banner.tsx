import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig } from "@/content/site";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--brand-dark),#1b2431)] px-6 py-8 text-white shadow-[0_28px_80px_rgba(16,21,29,0.18)] sm:px-8 lg:px-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
            Ready to talk roofing?
          </p>
          <h3 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/76">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
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
            className="h-12 rounded-full border-white/20 bg-white/6 px-6 text-white hover:bg-white/12 hover:text-white"
          >
            <a href={phoneHref(siteConfig.phone)}>
              <PhoneCall className="size-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
