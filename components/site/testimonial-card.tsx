import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { type ReviewItem } from "@/content/site";

type TestimonialCardProps = {
  review: ReviewItem;
};

export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <Card className="roof-surface h-full rounded-[28px] border-white/60 shadow-none">
      <CardContent className="flex h-full flex-col gap-6 p-7">
        <Quote className="size-10 text-primary" />
        <p className="text-base leading-8 text-foreground">{review.quote}</p>
        <div className="mt-auto border-t border-border/70 pt-4">
          <p className="font-semibold text-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">
            {review.location} · {review.service}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
