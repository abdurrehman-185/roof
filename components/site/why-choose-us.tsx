import { CircleCheckBig } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {siteConfig.whyChooseUs.map((item) => (
        <Card
          key={item.title}
          className="roof-surface h-full rounded-[28px] border-white/60 shadow-none"
        >
          <CardContent className="flex h-full flex-col gap-5 p-7">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <CircleCheckBig className="size-5" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {item.text}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
