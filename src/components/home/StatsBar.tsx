"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

const stats = [
  { value: siteConfig.stats.yearsExperience, label: "Years Experience" },
  { value: siteConfig.stats.projectsCompleted, label: "Projects Delivered" },
  { value: siteConfig.stats.focus, label: "Core Specialism" },
  { value: siteConfig.stats.coverage, label: "Coverage" },
];

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-8 bg-ink-soft sm:-mt-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gold/20 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.05} className="bg-ink-soft px-4 py-8 text-center sm:py-10">
            <p className="font-display text-3xl font-bold text-gold-light sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-steel-light sm:text-sm">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
