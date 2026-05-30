type ProcessStep = {
  title: string;
  text: string;
};

type ProcessSectionProps = {
  steps: readonly ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="roof-surface rounded-[28px] border border-white/60 p-7"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Step {index + 1}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
            {step.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  );
}
