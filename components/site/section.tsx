import { MotionReveal } from "@/components/site/motion-reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  centered = false,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="container-shell">
        {(eyebrow || title || description) && (
          <MotionReveal
            className={cn(
              "mb-10 max-w-3xl",
              centered && "mx-auto text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {description}
              </p>
            ) : null}
          </MotionReveal>
        )}
        {children}
      </div>
    </section>
  );
}
