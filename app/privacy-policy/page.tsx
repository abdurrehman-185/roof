import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Privacy policy"
        title={`Privacy policy for ${siteConfig.businessName}`}
        description="This policy page is written in plain language and should be reviewed against the live business details before launch."
        image={siteConfig.galleryProjects[3]?.image ?? siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <Section>
        <div className="roof-surface rounded-[32px] border border-white/60 p-7 sm:p-10">
          <div className="space-y-8 text-base leading-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                1. Who this policy applies to
              </h2>
              <p className="mt-4">
                This policy applies to visitors who browse this website, submit a quote
                request, call the business, or email {siteConfig.businessName}. The business
                details shown on the site should be updated to match the live company before
                launch.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                2. Information collected
              </h2>
              <p className="mt-4">
                The website may collect contact details such as name, email address, phone
                number, postcode or ZIP, service required, and any message submitted through
                the quote form.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                3. How information is used
              </h2>
              <p className="mt-4">
                Information is used to respond to enquiries, provide roofing quotes, arrange
                inspections, and improve customer communication. It should not be used in a
                way that conflicts with the laws and regulations that apply to the business.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                4. Data sharing
              </h2>
              <p className="mt-4">
                Any sharing of enquiry data with employees, subcontractors, CRM tools, email
                providers, or hosting providers should be reviewed and documented for the live
                version of the site.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                5. Contact
              </h2>
              <p className="mt-4">
                For privacy-related questions, update this section with the correct business
                contact details before launch. The current site details use {siteConfig.email} and{" "}
                {siteConfig.phone}.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
