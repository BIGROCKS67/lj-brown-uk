import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { featuredServices } from "@/data/services";

export function FeaturedServices() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Groundworks & Civil Engineering"
          description="From first dig to drainage and foundations — full site packages for housing, commercial and infrastructure schemes."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.06}>
              <Link
                href="/services"
                className="group relative block aspect-[4/3] overflow-hidden bg-ink"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-steel-light">
                    {service.summary}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold-light">
                    View services
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="ghost">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
