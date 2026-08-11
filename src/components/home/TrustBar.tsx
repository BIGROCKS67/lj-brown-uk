import { ShieldCheck, Users, HardHat } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const items = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Users, label: "Experienced Team" },
  { icon: HardHat, label: "Committed to Safety" },
];

export function TrustBar() {
  return (
    <section className="border-y border-gold/20 bg-ink-soft">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-center gap-4 px-4 py-5 sm:flex-row sm:items-center sm:gap-10 sm:px-6 sm:py-6 lg:px-8">
        <p className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left sm:text-base">
          Built on Quality.{" "}
          <span className="text-gold-light">Delivered on Time.</span>
        </p>
        <div className="hidden h-6 w-px bg-gold/30 sm:block" />
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-gold" strokeWidth={2} />
              <span className="text-xs font-semibold uppercase tracking-wider text-steel-light sm:text-sm">
                {item.label}
              </span>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
