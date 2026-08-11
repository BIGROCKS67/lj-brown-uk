import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

export function Intro() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden bg-ink">
            <Image
              src={images.about}
              alt="LJ Brown UK groundworks team on site"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeading
            align="left"
            label="About Us"
            title="Family Firm. Serious Groundworks."
            description="We’re a small–medium size family construction company based in Towcester, Northamptonshire — with over 20 years in the field and a team that carries decades of site experience."
          />
          <p className="mt-4 text-base leading-relaxed text-steel">
            High standards of workmanship have forged strong relationships with
            clients past and present. That means confidence your project will be
            delivered on time, within budget, and to the highest possible standard.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              Learn More About Us
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
