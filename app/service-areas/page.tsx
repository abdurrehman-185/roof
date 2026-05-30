import { MapPin, Wrench } from "lucide-react";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Areas",
  description: `Explore service areas for ${siteConfig.businessName} in ${siteConfig.city} and nearby locations.`,
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Service areas"
        title={`Roofing services in ${siteConfig.city} and across ${siteConfig.region}`}
        description="This page is written to localize easily for either a US or UK roofing business while still sounding direct, trustworthy, and naturally SEO-aware."
        image={siteConfig.galleryProjects[3]?.image ?? siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
        ]}
      />

      <Section
        eyebrow="Where work is carried out"
        title="Built for local roofing enquiries"
        description="The service area structure keeps local coverage clear for real customers while still sounding natural and trustworthy."
      >
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="roof-surface rounded-[32px] border-white/60 shadow-none">
            <CardContent className="p-7 sm:p-8">
              <p className="text-base leading-8 text-muted-foreground">
                The site is designed to support local SEO phrases such as roofing company in{" "}
                {siteConfig.city}, roof repairs in {siteConfig.region}, and trusted roofers
                near key surrounding areas without sounding repetitive or stuffed.
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                It also gives businesses a straightforward way to explain that they work
                across nearby towns, residential streets, commercial premises, and managed
                buildings without locking the copy into one country-specific wording style.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {siteConfig.serviceAreas.map((area) => (
              <Card
                key={area}
                className="roof-surface rounded-[28px] border-white/60 shadow-none"
              >
                <CardContent className="p-6">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                    {area}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    Roof repairs, replacements, inspections, and roofline work can all be
                    localized to {area} with small content edits.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="What customers can enquire about"
        title="Services supported across the wider service area"
        description="Service areas pages work best when they reinforce the core services without turning into a list of awkward keywords."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service) => (
            <Card
              key={service.slug}
              className="roof-surface rounded-[28px] border-white/60 shadow-none"
            >
              <CardContent className="p-7">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Wrench className="size-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  {service.name}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {service.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title={`Need roofing services in ${siteConfig.city} or a nearby area?`}
          description="The service area structure is designed to move local visitors into either a call or a short quote request with as little friction as possible."
        />
      </Section>
    </main>
  );
}
