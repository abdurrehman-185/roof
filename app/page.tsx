import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { BeforeAfter } from "@/components/site/before-after";
import { CtaBanner } from "@/components/site/cta-banner";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { ProcessSection } from "@/components/site/process-section";
import { Section } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { TrustStrip } from "@/components/site/trust-strip";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig, siteDescription } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { buildFaqSchema, buildLocalBusinessSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: `Roofing company in ${siteConfig.city}`,
  description: siteDescription,
  path: "/",
});

export default function Home() {
  const featuredProjects = siteConfig.galleryProjects.filter((project) => project.featured);
  const beforeAfterProject = siteConfig.galleryProjects.find(
    (project) => project.beforeImage && project.afterImage,
  );

  return (
    <main id="main-content">
      <JsonLd data={buildLocalBusinessSchema()} />
      <JsonLd data={buildFaqSchema(siteConfig.homeFaqs)} />

      <Hero />
      <TrustStrip />

      <Section
        id="services"
        eyebrow="Roofing services"
        title={`Practical roofing services for ${siteConfig.city} and nearby areas`}
        description="The service structure is flexible enough to suit roof repairs, new roofs, flat roofing, storm response, inspections, and future service additions with only small content edits."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8 rounded-[28px] border border-border/70 bg-white/70 p-6">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Additional editable services
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {siteConfig.additionalServices.map((service) => (
              <Badge
                key={service.name}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {service.name}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Why homeowners choose local roofers"
        title="Built to feel established, local, and trustworthy"
        description="The goal is a premium contractor presentation that feels sellable to a real roofing business owner without leaning on fake counters, inflated claims, or generic SaaS styling."
      >
        <WhyChooseUs />
      </Section>

      <Section
        eyebrow="Simple process"
        title="A lead flow that feels clear from first click to final quote"
        description="The process section keeps the sales journey easy to understand on both mobile and desktop while still feeling professional."
      >
        <ProcessSection steps={siteConfig.processSteps} />
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Featured projects"
        title="Roofing imagery that feels specific to the trade"
        description="Real roofing visuals, before and after presentation, and project summaries help the site feel grounded in actual roofing work rather than abstract marketing filler."
      >
        {beforeAfterProject?.beforeImage && beforeAfterProject.afterImage ? (
          <BeforeAfter
            title={beforeAfterProject.title}
            beforeImage={beforeAfterProject.beforeImage}
            afterImage={beforeAfterProject.afterImage}
          />
        ) : null}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="roof-surface overflow-hidden rounded-[28px] border border-white/60"
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={900}
                height={720}
                className="h-64 w-full object-cover"
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
              <div className="space-y-3 p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.service} · {project.city}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-base leading-8 text-muted-foreground">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/gallery">
              View all projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Client feedback"
        title="Review cards styled for a premium, trustworthy feel"
        description="The reviews area avoids fake counters and badge clutter while still giving the site a polished, high-conversion social-proof section."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {siteConfig.reviews.slice(0, 3).map((review) => (
            <TestimonialCard key={`${review.name}-${review.location}`} review={review} />
          ))}
        </div>
        <div className="mt-8">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border bg-white/70 hover:bg-white"
          >
            <Link href="/reviews">Read more reviews</Link>
          </Button>
        </div>
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Service areas"
        title={`Trusted roofers near ${siteConfig.city} and the wider region`}
        description="Local service language is woven in naturally through the city, region, and area content so the page feels useful rather than stuffed."
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="roof-surface rounded-[32px] border border-white/60 p-7 sm:p-8">
            <p className="text-base leading-8 text-muted-foreground">
              Based around {siteConfig.city}, the site is ready to position a roofing company
              for surrounding towns, managed properties, and commercial work across{" "}
              {siteConfig.region}. The wording keeps coverage clear for both nearby homeowners
              and commercial clients looking for a dependable local roofing company.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.serviceAreas.map((area) => (
                <Badge
                  key={area}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  <MapPin className="mr-2 size-3.5" />
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {siteConfig.services.slice(0, 4).map((service) => (
              <div
                key={service.slug}
                className="roof-surface rounded-[28px] border border-white/60 p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Roofing FAQ"
        title="Common questions homeowners and property managers ask"
        description="These answers support local search visibility and help a business sound informative without drifting into keyword stuffing."
      >
        <FaqAccordion items={siteConfig.homeFaqs} />
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title={`Need a roofing company in ${siteConfig.city} that feels dependable from the first click?`}
          description="The site is built to convert on mobile, showcase roofing-specific imagery, and give customers a clear path into calling or requesting a quote."
        />
      </Section>
    </main>
  );
}
