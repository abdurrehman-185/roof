import { BeforeAfter } from "@/components/site/before-after";
import { CtaBanner } from "@/components/site/cta-banner";
import { GalleryShowcase } from "@/components/site/gallery-showcase";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery / Projects",
  description: `Roofing project gallery for ${siteConfig.city}, including repairs, replacements, flat roofs, and roofline work.`,
  path: "/gallery",
});

export default function GalleryPage() {
  const beforeAfterProject = siteConfig.galleryProjects.find(
    (project) => project.beforeImage && project.afterImage,
  );

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Gallery and projects"
        title="A roofing project gallery built to feel visual, clean, and professional"
        description="The gallery page is designed to hold future real project photos while still looking polished from day one, complete with category filters and room for before and after presentation."
        image={siteConfig.galleryProjects[0].image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      {beforeAfterProject?.beforeImage && beforeAfterProject.afterImage ? (
        <Section
          eyebrow="Before and after"
          title="Room for transformation-led project presentation"
          description="Before and after layouts help roofing businesses demonstrate workmanship quality and the visual improvement a finished job can make."
        >
          <BeforeAfter
            title={beforeAfterProject.title}
            beforeImage={beforeAfterProject.beforeImage}
            afterImage={beforeAfterProject.afterImage}
          />
        </Section>
      ) : null}

      <Section
        className="bg-white/55"
        eyebrow="Project grid"
        title="Roofing projects, filters, and future-ready image space"
        description="Each project card includes service type, city, and a short summary so the gallery stays useful for both visitors and search visibility."
      >
        <GalleryShowcase projects={siteConfig.galleryProjects} />
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Need a gallery page that feels like real contractor work?"
          description="This gallery structure is ready for real roofing photography, before and after jobs, and future category growth."
        />
      </Section>
    </main>
  );
}
