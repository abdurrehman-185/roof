import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { BeforeAfter } from "@/components/site/before-after";
import { CtaBanner } from "@/components/site/cta-banner";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { ProcessSection } from "@/components/site/process-section";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceBySlug, siteConfig, type ServiceItem } from "@/content/site";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";

type ServicePageProps = {
  service: ServiceItem;
};

export function ServicePage({ service }: ServicePageProps) {
  const serviceStepTitles = [
    "Inspect the roof",
    "Recommend the right scope",
    "Complete the roofing work",
    "Review the finished result",
  ];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name, href: service.route },
  ];
  const relatedServices = service.related.map((slug) => getServiceBySlug(slug));
  const featuredProject = siteConfig.galleryProjects.find(
    (project) =>
      project.beforeImage &&
      project.afterImage &&
      project.service.toLowerCase().includes(service.shortName.toLowerCase().split(" ")[0]),
  );

  return (
    <main id="main-content">
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs.map(({ label, href }) => ({ name: label, href: href ?? service.route })))} />

      <PageHero
        eyebrow={service.badge}
        title={service.heroTitle}
        description={service.heroDescription}
        image={service.image}
        breadcrumbs={breadcrumbs}
      />

      <Section
        eyebrow="What this service covers"
        title={service.name}
        description={service.intro}
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="roof-surface rounded-[32px] border-white/60 shadow-none">
            <CardContent className="p-7 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                What the service includes
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                    <p className="text-base leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="roof-surface rounded-[32px] border-white/60 shadow-none">
            <CardContent className="p-7 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Common problems solved
              </h3>
              <div className="mt-6 grid gap-3">
                {service.problems.map((problem) => (
                  <Badge
                    key={problem}
                    className="w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {problem}
                  </Badge>
                ))}
              </div>
              <h4 className="mt-8 text-lg font-semibold text-foreground">
                Why property owners hire this company
              </h4>
              <div className="mt-4 grid gap-3">
                {service.reasons.map((reason) => (
                  <p key={reason} className="text-base leading-8 text-muted-foreground">
                    {reason}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {featuredProject?.beforeImage && featuredProject.afterImage ? (
        <Section
          className="bg-white/55"
          eyebrow="Before and after"
          title="Project presentation matters"
          description="A roofing site should show the difference between a failing roof and a properly finished result, especially when customers are comparing repair and replacement options."
        >
          <BeforeAfter
            title={featuredProject.title}
            beforeImage={featuredProject.beforeImage}
            afterImage={featuredProject.afterImage}
          />
        </Section>
      ) : null}

      <Section
        eyebrow="How the work is approached"
        title={`A clearer ${service.shortName.toLowerCase()} process`}
        description="A simple step-by-step process helps customers understand what happens next and why the work is being recommended."
      >
        <ProcessSection
          steps={service.process.map((step, index) => ({
            title: serviceStepTitles[index] ?? `Step ${index + 1}`,
            text: step,
          }))}
        />
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Related roofing services"
        title="Useful next pages"
        description="Strong internal linking helps both users and local SEO while keeping related services easy to find."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {relatedServices.map((item) => (
            <Card
              key={item.slug}
              className="roof-surface rounded-[28px] border-white/60 shadow-none"
            >
              <CardContent className="p-7">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Related service
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {item.name}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {item.summary}
                </p>
                <Link
                  href={item.route}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
                >
                  View service page
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service FAQ"
        title={`Questions about ${service.shortName.toLowerCase()}`}
        description="These answers are structured to be useful for homeowners, commercial clients, and search engines without sounding stuffed or robotic."
      >
        <FaqAccordion items={service.faqs} />
      </Section>

      <Section className="pt-0">
        <CtaBanner title={service.ctaTitle} description={service.ctaText} />
      </Section>
    </main>
  );
}
