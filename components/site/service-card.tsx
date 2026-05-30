import Link from "next/link";
import { ArrowRight, Droplets, House, SearchCheck, ShieldAlert, Wrench } from "lucide-react";

import { type ServiceItem } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = {
  "roof-repairs": Wrench,
  "roof-replacements-new-roofs": House,
  "flat-roofing": SearchCheck,
  "gutters-fascias-soffits": Droplets,
  "storm-damage-emergency-roofing": ShieldAlert,
  "inspections-free-quote": SearchCheck,
} satisfies Record<ServiceItem["slug"], React.ComponentType<{ className?: string }>>;

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.slug];

  return (
    <Card className="roof-surface h-full rounded-[28px] border-white/60 shadow-none">
      <CardContent className="flex h-full flex-col gap-5 p-7">
        <div className="flex items-center justify-between">
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <Icon className="size-5" />
          </div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {service.badge}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {service.name}
          </h3>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            {service.summary}
          </p>
        </div>
        <Link
          href={service.route}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
        >
          View service page
          <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
