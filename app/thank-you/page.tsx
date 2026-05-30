import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

type ThankYouPageProps = {
  searchParams: Promise<{ name?: string; service?: string }>;
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const name = params.name;
  const service = params.service;

  return (
    <main
      id="main-content"
      className="container-shell flex min-h-[70vh] items-center justify-center py-16 sm:py-20"
    >
      <div className="roof-surface w-full max-w-3xl rounded-[36px] border border-white/60 p-8 text-center sm:p-12">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Thank you
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {name ? `Thanks, ${name}.` : "Your enquiry has been received."}
        </h1>
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {service
            ? `Your ${service.toLowerCase()} enquiry has been sent through the website.`
            : "Your quote request has been sent through the website."}{" "}
          The next step is usually a call-back or inspection arrangement depending on the type
          of roofing work involved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">
              Back to home
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-white/70 hover:bg-white"
          >
            <a href={phoneHref(siteConfig.phone)}>
              <PhoneCall className="size-4" />
              Call {siteConfig.phone}
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
