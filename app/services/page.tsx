import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { ProcessSection } from "@/components/site/process-section";
import { Section } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description: `Explore roofing services in ${siteConfig.city}, including roof repairs, new roofs, flat roofing, gutters, and storm response.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Roofing services"
        title={`Roofing services in ${siteConfig.city} built for repairs, replacements, and local lead generation`}
        description="The services overview is designed to feel commercial and polished while giving customers a clear path into the right roofing page for their property."
        image={siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <Section
        eyebrow="Primary services"
        title="Service pages that cover the jobs customers actually search for"
        description="Each key service has its own hero, scope of work, common problems solved, process, FAQ content, and conversion CTA."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Additional options"
        title="Supporting roofing services customers often ask about"
        description="These supporting services help round out the offer for homes, managed properties, and commercial enquiries."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {siteConfig.additionalServices.map((service) => (
            <Card
              key={service.name}
              className="roof-surface rounded-[28px] border-white/60 shadow-none"
            >
              <CardContent className="p-7">
                <Badge className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Additional service
                </Badge>
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

      <Section
        eyebrow="From enquiry to quote"
        title="A conversion-focused service structure"
        description="The services architecture gives users a clear next step, keeps phone and quote CTAs prominent, and supports strong internal linking across the whole site."
      >
        <ProcessSection steps={siteConfig.processSteps} />
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Want a services page that feels premium without feeling overbuilt?"
          description="The structure here is built for roofing companies that want clarity, local trust, and stronger conversion across every main service page."
        />
      </Section>
    </main>
  );
}
