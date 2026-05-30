import { siteConfig, type FaqItem, type ServiceItem } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description:
      "Roof repairs, replacements, flat roofing, gutters, and inspection-led roofing services.",
    url: siteConfig.siteUrl,
    image: siteConfig.galleryProjects.map((project) => project.image),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      streetAddress: siteConfig.address || undefined,
    },
    areaServed: siteConfig.serviceAreas,
    sameAs: siteConfig.socialLinks.map((link) => link.href),
  };
}

export function buildServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} in ${siteConfig.city}`,
    description: service.summary,
    areaServed: siteConfig.serviceAreas,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.siteUrl,
    },
    url: absoluteUrl(service.route),
  };
}

export function buildFaqSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
