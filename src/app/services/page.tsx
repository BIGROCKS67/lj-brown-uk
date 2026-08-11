import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/ui/CTABanner";
import { images } from "@/data/images";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Excavation, foundations, trenching, utilities, drainage and full groundworks packages from LJ Brown UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Where experience meets precision on site"
        image={images.services.trenching}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Deliver"
            title="Full Groundworks Capability"
            description="From site strip and excavation through to foundations, utilities and drainage — one team, one standard."
          />

          <div className="space-y-16 sm:space-y-24">
            {serviceCategories.map((service, i) => {
              const reverse = i % 2 === 1;
              return (
                <FadeIn key={service.id}>
                  <div
                    id={service.slug}
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 48vw, 100vw"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                        0{i + 1}
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-steel">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {service.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm font-medium text-ink"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Package Quote?"
        description="Tell us the site location and scope — we’ll come back with a clear breakdown."
      />
    </>
  );
}
