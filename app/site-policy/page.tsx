import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms / Site Policy",
  description: `Terms and site policy for ${siteConfig.businessName}.`,
  path: "/site-policy",
});

export default function SitePolicyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Terms and site policy"
        title="Website use, quote guidance, and general site policy"
        description="This page provides a straightforward structure for website terms, estimate guidance, and general site use expectations."
        image={siteConfig.galleryProjects[2]?.image ?? siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Site Policy", href: "/site-policy" },
        ]}
      />

      <Section>
        <div className="roof-surface rounded-[32px] border border-white/60 p-7 sm:p-10">
          <div className="space-y-8 text-base leading-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                1. Website content
              </h2>
              <p className="mt-4">
                This website is designed to describe roofing services, provide general service
                information, and help prospective customers contact the business for a quote or
                inspection.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                2. Quotes and estimates
              </h2>
              <p className="mt-4">
                Quotes, estimates, and service recommendations should always be treated as
                subject to property condition, access, materials, and the final agreed scope of
                roofing work.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                3. Accuracy of information
              </h2>
              <p className="mt-4">
                The live business should review all website content before launch to confirm
                that service descriptions, service areas, contact details, and policy wording
                match its real operations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                4. External links
              </h2>
              <p className="mt-4">
                Where the website links to social media profiles, review platforms, or external
                services, those platforms operate under their own terms and privacy policies.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                5. Updates
              </h2>
              <p className="mt-4">
                The business may update website content, legal notices, and policies whenever
                needed. For launch, this page should be reviewed with the company’s final legal
                and operational preferences in mind.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
