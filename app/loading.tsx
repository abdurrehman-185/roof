export default function Loading() {
  return (
    <main id="main-content" className="container-shell py-16 sm:py-20">
      <div className="space-y-5">
        <div className="h-4 w-32 animate-pulse rounded-full bg-muted" />
        <div className="h-16 w-full max-w-3xl animate-pulse rounded-[28px] bg-muted" />
        <div className="h-6 w-full max-w-2xl animate-pulse rounded-full bg-muted" />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-72 animate-pulse rounded-[28px] border border-border bg-white/70"
          />
        ))}
      </div>
    </main>
  );
}
