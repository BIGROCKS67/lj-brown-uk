import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: `${project.title} — ${project.location}. ${project.summary}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const gallery = project.gallery ?? [project.image];
  const heroImage = project.heroImage ?? project.image;

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={`${project.category} · ${project.location}`}
        image={heroImage}
      />

      <section className="bg-paper py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
              {project.category} · {project.location}
            </p>
            <h2 className="mt-2 max-w-3xl font-display text-2xl font-semibold text-ink sm:text-3xl">
              {project.summary}
            </h2>
            {project.body && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
                {project.body}
              </p>
            )}
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {gallery.map((src, i) => (
              <FadeIn key={src} delay={(i % 2) * 0.06}>
                <figure className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image
                    src={src}
                    alt={`${project.title}, ${project.location} — photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                    priority={i < 2}
                  />
                </figure>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/projects" variant="ghost">
              All Projects
            </Button>
          </div>
        </div>
      </section>

      <CTABanner title="Want Us On Your Next Scheme?" />
    </>
  );
}
