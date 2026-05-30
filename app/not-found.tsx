import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container-shell flex min-h-[70vh] items-center justify-center py-16 sm:py-20"
    >
      <div className="roof-surface w-full max-w-3xl rounded-[36px] border border-white/60 p-8 text-center sm:p-12">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          404 page
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The roof you were looking for is not here.
        </h1>
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          The page may have moved, the link may be outdated, or this route may not have been
          added to the live site.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">
              Back to the homepage
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
