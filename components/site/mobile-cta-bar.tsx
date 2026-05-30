import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig } from "@/content/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[color:var(--brand-dark)]/96 px-4 py-3 shadow-[0_-18px_50px_rgba(16,21,29,0.28)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-full border-white/14 bg-white/6 text-white hover:bg-white/12 hover:text-white"
        >
          <a href={phoneHref(siteConfig.phone)}>
            <PhoneCall className="size-4" />
            Call Now
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  );
}
