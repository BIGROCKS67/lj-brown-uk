import { HardHat, ShieldCheck, Timer, Handshake } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: HardHat,
    title: "Quality",
    text: "Meticulous planning and precise execution — every job finished to a standard you can build on.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    text: "Honest, transparent and respectful. Strong client relationships built on trust, not sales talk.",
  },
  {
    icon: Timer,
    title: "On Programme",
    text: "20+ years of experience means we know how to keep groundworks moving without cutting corners.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Rigorous site protocols that protect our team, your project and everyone around it.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why LJ Brown"
          title="Built On Trust. Delivered On Site."
          description="A small–medium family construction company from Towcester with decades of groundworks experience behind the name."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full border-t-2 border-gold bg-white px-5 py-7">
                <item.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
