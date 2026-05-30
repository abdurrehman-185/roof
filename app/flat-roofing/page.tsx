import { ServicePage } from "@/components/site/service-page";
import { getServiceBySlug } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("flat-roofing");

export const metadata = buildMetadata({
  title: service.name,
  description: service.summary,
  path: service.route,
  images: [service.image],
});

export default function FlatRoofingPage() {
  return <ServicePage service={service} />;
}
