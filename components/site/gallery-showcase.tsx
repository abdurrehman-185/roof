"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { type GalleryProject } from "@/content/site";
import { cn } from "@/lib/utils";

type GalleryShowcaseProps = {
  projects: GalleryProject[];
};

export function GalleryShowcase({ projects }: GalleryShowcaseProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  if (!projects.length) {
    return (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="roof-surface rounded-[28px] border border-dashed border-border p-7"
          >
            <div className="rounded-[22px] bg-muted/70 p-10 text-center text-muted-foreground">
              Project photography can be added here as the portfolio grows.
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium",
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white/70 text-foreground hover:border-primary/40",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={`${project.title}-${project.city}`}
            className="roof-surface overflow-hidden rounded-[28px] border border-white/60"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.alt}
                width={900}
                height={720}
                className="h-64 w-full object-cover"
                sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
              />
              <div className="absolute left-4 top-4">
                <Badge className="rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-foreground">
                  {project.category}
                </Badge>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {project.service} · {project.city}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-base leading-8 text-muted-foreground">
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
