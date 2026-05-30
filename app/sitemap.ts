import type { MetadataRoute } from "next";

import { legalNavigation, siteConfig, siteNavigation } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...siteNavigation.map((item) => item.href),
    ...siteConfig.services.map((service) => service.route),
    ...legalNavigation.map((item) => item.href),
    "/thank-you",
  ];

  return staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
