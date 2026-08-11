"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandDivider } from "@/components/brand/BrandDivider";
import { Logo } from "@/components/brand/Logo";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <Image
        src={images.hero}
        alt="LJ Brown UK excavator on a construction site"
        fill
        className="object-cover object-[center_40%] sm:object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/95" />
      <div className="grain absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center sm:mb-8"
        >
          <span className="inline-flex rounded-sm bg-ink/50 px-6 py-4 ring-1 ring-gold/30 backdrop-blur-sm sm:px-8 sm:py-5">
            <Logo size="lg" linked={false} />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mb-5 max-w-xs sm:mb-6 sm:max-w-sm"
        >
          <BrandDivider label="Towcester · UK" light />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Strong Foundations.{" "}
          <span className="text-gold-light">Built to Last.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-steel-light sm:mt-6 sm:text-lg md:text-xl normal-case tracking-normal"
        >
          Professional. Reliable. Built on experience. Family-run groundworks
          from Towcester — excavation, drainage, concrete and site works
          delivered on time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink shadow-lg transition-all hover:bg-gold-light hover:shadow-xl touch-manipulation sm:px-8 sm:py-4 sm:text-base"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-sm border-2 border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:border-gold-light hover:bg-white/5 touch-manipulation sm:px-8 sm:py-4 sm:text-base"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
