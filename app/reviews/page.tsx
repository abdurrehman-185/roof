import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reviews",
  description: `Read styled review content for ${siteConfig.businessName} and see how verified customer feedback can be presented cleanly.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Reviews"
        title="A tasteful reviews page without inflated counters or badge clutter"
        description="This page is built to house verified Google, Facebook, and trade-directory feedback in a way that feels polished and trustworthy."
        image={siteConfig.galleryProjects[1].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews", href: "/reviews" },
        ]}
      />

      <Section
        eyebrow="Customer feedback"
        title="Review cards with a clean, premium contractor feel"
        description="The layout leaves room for future verified customer feedback while keeping the presentation simple, elegant, and easy to scan."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.reviews.map((review) => (
            <TestimonialCard key={`${review.name}-${review.location}`} review={review} />
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/55"
        eyebrow="Future-proof social proof"
        title="Ready for Google, Facebook, and trade-directory reviews"
        description="No fake counts are needed. A better approach is a calm, well-designed page that can be filled with real customer feedback over time."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {["Google reviews", "Facebook recommendations", "Trade-directory feedback"].map(
            (item) => (
              <Card
                key={item}
                className="roof-surface rounded-[28px] border-white/60 shadow-none"
              >
                <CardContent className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {item}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    Add verified customer quotes, reviewer names, and source details whenever
                    they are ready to publish.
                  </p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Need a reviews page that feels polished before the first live testimonial lands?"
          description="This review layout gives a roofing business a strong trust section without relying on exaggerated proof points."
        />
      </Section>
    </main>
  );
}
