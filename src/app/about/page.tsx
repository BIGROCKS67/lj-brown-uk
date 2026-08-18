import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/ui/CTABanner";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet LJ Brown UK — a family-run groundworks and civil engineering company based in Towcester with over 20 years’ experience.",
};

const values = [
  {
    title: "Quality",
    text: "We are dedicated to delivering exceptional quality in every aspect of our work. From meticulous planning to precise execution, we uphold the highest standards.",
  },
  {
    title: "Integrity",
    text: "Trust and integrity form the foundation of our business. We operate with honesty, transparency and respect — strong relationships built on trust.",
  },
  {
    title: "Innovation",
    text: "We continually seek out new methods and best practices to enhance efficiency, sustainability and value for our clients.",
  },
  {
    title: "Safety",
    text: "The safety of our team, clients and communities is paramount. Rigorous protocols keep every site secure.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About LJ Brown UK"
        subtitle="Family construction company · Towcester, Northamptonshire"
        image={images.about}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <SectionHeading
              align="left"
              label="Who We Are"
              title="Welcome To LJ Brown UK"
            />
            <div className="space-y-4 text-base leading-relaxed text-steel">
              <p>
                We are a small–medium size family construction company based in
                Towcester, Northamptonshire. With over 20+ years experience in the
                field and a team that possesses decades of experience, we bring
                serious groundworks capability with a personal touch.
              </p>
              <p>
                Our high standards of workmanship have allowed us to forge strong
                relationships with clients past and present — giving you confidence
                that projects will be delivered on time, within budget, and to the
                highest possible standard.
              </p>
              <p>
                From housing schemes in Milton Keynes to commercial sites in
                Northampton and leisure developments on the south coast, we show up
                ready to dig, form and finish.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src={images.aboutTeam}
                alt="LJ Brown UK on site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Vision & Values"
            title="How We Work"
            description="Innovative construction solutions meet sustainable practices — creating lasting value for clients and communities."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="h-full border-l-2 border-gold bg-white px-6 py-7">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center text-sm text-steel">
            Based at {siteConfig.address}
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
