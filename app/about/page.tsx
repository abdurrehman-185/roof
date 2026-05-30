import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { ProcessSection } from "@/components/site/process-section";
import { Section } from "@/components/site/section";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: `Learn more about the dependable, quality-focused approach behind ${siteConfig.businessName}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About the company"
        title={`A dependable roofing company in ${siteConfig.city} with a calm, quality-first tone`}
        description="The about page is written to feel local, customer-friendly, and experienced without inventing years in business, fake awards, or unsupported claims."
        image={siteConfig.galleryProjects[4]?.image ?? siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <Section
        eyebrow="What this business stands for"
        title="Honest recommendations, quality-focused roofing, and tidy project delivery"
        description="The tone stays grounded, professional, and easy to trust across residential roofing, commercial enquiries, and planned maintenance work."
      >
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="roof-surface rounded-[32px] border-white/60 shadow-none">
            <CardContent className="p-7 sm:p-8">
              <p className="text-base leading-8 text-muted-foreground">
                {siteConfig.businessName} is positioned as the kind of roofing company that
                explains things clearly, treats homes and commercial properties with respect,
                and recommends work based on actual roof condition rather than pressure.
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Whether the job is a smaller repair, a planned replacement, or a roofline
                upgrade, the emphasis stays on practical workmanship, straightforward advice,
                and a finished result that looks clean and performs properly.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-5">
            {[
              "Clear explanations before work begins",
              "Recommendations guided by roof condition and property type",
              "Respectful communication from first enquiry to final handover",
              "A local-service tone that works for both residential and commercial clients",
            ].map((item) => (
              <Card
                key={item}
                className="roof-surface rounded-[28px] border-white/60 shadow-none"
              >
                <CardContent className="p-6 text-base leading-8 text-muted-foreground">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Why clients respond to this positioning"
        title="Strong enough for a premium roofing brand and reassuring for real customers"
        description="This section keeps the tone professional and customer-friendly while still giving the business a confident, established presence."
      >
        <WhyChooseUs />
      </Section>

      <Section
        eyebrow="How jobs are handled"
        title="A straightforward process clients can trust"
        description="The same framework works for planned maintenance, leak investigations, flat roofing, and full roof replacements."
      >
        <ProcessSection steps={siteConfig.processSteps} />
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Need an about page that feels local and credible?"
          description="This layout gives roofing businesses a clean story, honest positioning, and a trustworthy route into quote requests."
        />
      </Section>
    </main>
  );
}
