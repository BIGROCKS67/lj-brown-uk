"use client";

import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/98 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2 gap-px bg-white/10">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 bg-ink py-3 text-sm font-semibold text-white touch-manipulation active:bg-ink-soft"
        >
          <Phone className="h-5 w-5 shrink-0 text-gold-light" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex min-h-[3.25rem] items-center justify-center gap-2 bg-gold py-3 text-sm font-semibold text-ink touch-manipulation active:bg-gold-light"
        >
          <MessageSquare className="h-5 w-5 shrink-0" />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
