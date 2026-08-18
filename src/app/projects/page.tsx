import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/ui/CTABanner";
import { images } from "@/data/images";
import { alsoDelivered, projectHasPhotos, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Housing, commercial and leisure groundworks projects delivered by LJ Brown UK across Northamptonshire and beyond.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Real schemes. Real groundworks. Real results."
        image={images.projects.carWash}
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Track Record"
            title="Work We’re Proud Of"
            description="Housing, commercial and leisure — real site photos from jobs we’ve delivered."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={(i % 3) * 0.06}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group flex h-full flex-col overflow-hidden bg-white"
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[16/11] overflow-hidden bg-ink">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col border-t-2 border-gold px-5 py-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                        {project.category} · {project.location}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                        {project.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
                        {project.summary}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                        {projectHasPhotos(project) ? "View photos →" : "View project →"}
                      </p>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 border-t border-ink/10 pt-10">
            <h3 className="font-display text-lg font-semibold text-ink">
              Also delivered
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel">
              Jobs on the books — photos to follow.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {alsoDelivered.map((job) => (
                <li
                  key={`${job.title}-${job.location}`}
                  className="border-l-2 border-gold bg-white px-4 py-3"
                >
                  <p className="font-display text-base font-semibold text-ink">
                    {job.title}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {job.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner title="Want Us On Your Next Scheme?" />
    </>
  );
}
