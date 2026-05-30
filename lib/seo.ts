import type { Metadata } from "next";

import { siteConfig, siteDescription } from "@/content/site";

const defaultImage = siteConfig.galleryProjects[0]?.image ?? "";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  images?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  images = defaultImage ? [defaultImage] : [],
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.businessName,
      images: images.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} roofing project`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.businessName,
  title: {
    default: `${siteConfig.businessName} | Roofing company in ${siteConfig.city}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteDescription,
  keywords: [
    `roofing company in ${siteConfig.city}`,
    `roof repairs in ${siteConfig.region}`,
    `trusted roofers near ${siteConfig.city}`,
    `new roofs in ${siteConfig.city}`,
    "flat roofing",
    "gutters fascias soffits",
  ],
  openGraph: {
    title: `${siteConfig.businessName} | Roofing company in ${siteConfig.city}`,
    description: siteDescription,
    url: siteConfig.siteUrl,
    type: "website",
    siteName: siteConfig.businessName,
    images: defaultImage
      ? [
          {
            url: defaultImage,
            width: 1200,
            height: 630,
            alt: `${siteConfig.businessName} roofing services`,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Roofing company in ${siteConfig.city}`,
    description: siteDescription,
    images: defaultImage ? [defaultImage] : [],
  },
};
