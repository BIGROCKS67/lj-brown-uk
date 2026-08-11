"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top,0px)]",
        scrolled || mobileOpen
          ? "bg-ink/97 shadow-lg backdrop-blur-md"
          : "bg-ink/90 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none",
        !scrolled && !mobileOpen && "lg:bg-gradient-to-b lg:from-ink/70 lg:to-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold-light",
                pathname === item.href ? "text-gold-light" : "text-white/90"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-steel-light hover:text-gold-light"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ink shadow-md transition-all hover:bg-gold-light hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex h-11 w-11 items-center justify-center rounded-sm text-white touch-manipulation active:bg-white/10"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-white touch-manipulation active:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink lg:hidden">
          <nav className="flex flex-col px-4 py-2 pb-24" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-[3rem] items-center border-b border-white/5 text-base font-medium uppercase tracking-wider touch-manipulation",
                  pathname === item.href ? "text-gold-light" : "text-white/90"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 flex min-h-[3rem] items-center justify-center rounded-sm bg-gold text-base font-semibold uppercase tracking-wide text-ink touch-manipulation active:bg-gold-light"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-3 flex min-h-[3rem] items-center justify-center gap-2 rounded-sm border border-white/20 text-base font-semibold text-white touch-manipulation active:bg-white/5"
            >
              <Phone className="h-5 w-5 text-gold-light" />
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
