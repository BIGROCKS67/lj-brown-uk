import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { serviceCategories } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="md" className="mb-6" />
            <p className="text-sm leading-relaxed text-steel-light">
              Strong foundations. Built to last. Family-run groundworks and civil
              engineers from Towcester — professional, reliable, built on experience.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold tracking-wider text-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-steel-light transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold tracking-wider text-gold-light">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href="/services"
                    className="text-sm text-steel-light transition-colors hover:text-white"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold tracking-wider text-gold-light">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-steel-light">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-steel">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
