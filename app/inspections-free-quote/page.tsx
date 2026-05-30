import { ServicePage } from "@/components/site/service-page";
import { getServiceBySlug } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const service = getServiceBySlug("inspections-free-quote");

export const metadata = buildMetadata({
  title: service.name,
  description: service.summary,
  path: service.route,
  images: [service.image],
});

export default function InspectionsPage() {
  return <ServicePage service={service} />;
}
