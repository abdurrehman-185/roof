import Image from "next/image";

type BeforeAfterProps = {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfter({
  title,
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {[
        { label: beforeLabel, image: beforeImage },
        { label: afterLabel, image: afterImage },
      ].map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white"
        >
          <Image
            src={item.image}
            alt={`${title} ${item.label}`}
            width={1000}
            height={720}
            className="h-[320px] w-full object-cover sm:h-[420px]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,21,29,0.82))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-secondary)]">
              {item.label}
            </p>
            <p className="mt-2 text-xl font-semibold">{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
