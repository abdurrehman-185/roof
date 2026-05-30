import { ShieldCheck } from "lucide-react";

import { siteConfig } from "@/content/site";

export function TrustStrip() {
  return (
    <div className="container-shell relative z-10 -mt-8 sm:-mt-10">
      <div className="roof-surface grid gap-4 rounded-[32px] border border-white/60 p-5 sm:grid-cols-3 sm:p-6">
        {siteConfig.trustStrip.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
              <ShieldCheck className="size-4" />
            </div>
            <p className="text-sm leading-7 text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
