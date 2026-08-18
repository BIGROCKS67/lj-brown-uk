import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Track Record"
          title="Projects We’ve Delivered"
          description="Housing schemes, commercial sites and leisure developments — real groundworks across the Midlands and beyond."
          light
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <Link
                href={`/projects/${project.id}`}
                className="group relative flex min-h-[280px] overflow-hidden bg-ink-soft sm:min-h-[320px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="relative z-10 mt-auto p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                    {project.category} · {project.location}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-steel-light">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/projects" variant="primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
