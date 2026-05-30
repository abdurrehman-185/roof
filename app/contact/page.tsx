import { Mail, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Card, CardContent } from "@/components/ui/card";
import { phoneHref, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.businessName} for roof repairs, replacements, inspections, and quote requests in ${siteConfig.city}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title={`Get in touch with ${siteConfig.businessName}`}
        description="The contact page is intentionally short, clear, and mobile-friendly, with a direct path to calling or submitting a quote request."
        image={siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Section
        id="quote-form"
        eyebrow="Request a quote"
        title="Short form, strong trust signals, and clear contact details"
        description="Everything needed for a high-converting local roofing contact page is here without clutter, filler sections, or hard-to-find phone details."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            <Card className="roof-surface rounded-[32px] border-white/60 shadow-none">
              <CardContent className="space-y-5 p-7">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Contact details
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    Speak to the team
                  </h2>
                </div>
                <a href={phoneHref(siteConfig.phone)} className="inline-flex items-center gap-3 text-base font-medium text-foreground">
                  <PhoneCall className="size-5 text-primary" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-3 text-base font-medium text-foreground">
                  <Mail className="size-5 text-primary" />
                  {siteConfig.email}
                </a>
                <div className="inline-flex items-start gap-3 text-base text-muted-foreground">
                  <MapPin className="mt-1 size-5 text-primary" />
                  <span>
                    {siteConfig.city}, {siteConfig.region}
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="roof-surface rounded-[32px] border-white/60 shadow-none">
              <CardContent className="p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  Why this page converts well
                </h3>
                <div className="mt-5 grid gap-4">
                  {siteConfig.contactHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 size-5 shrink-0 text-primary" />
                      <p className="text-base leading-8 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
