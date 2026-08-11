"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { serviceCategories } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Website enquiry — ${service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-t-2 border-gold bg-gold/10 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-ink">Thank You!</h3>
        <p className="mt-2 text-steel">
          Your email client should open with the enquiry ready to send. We’ll get
          back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Your full name"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="07XXX XXXXXX"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-ink">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
        >
          <option value="">Select a service...</option>
          {serviceCategories.map((cat) => (
            <option key={cat.id} value={cat.title}>
              {cat.title}
            </option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Tell us about the site, location and what you need..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-gold py-3.5 text-base font-semibold uppercase tracking-wide text-ink transition-all hover:bg-gold-light hover:shadow-lg touch-manipulation sm:w-auto sm:px-10"
      >
        Send Enquiry
      </button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">Get In Touch</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">
          Ready to start? Call John or drop us a message for a free, no-obligation
          chat about your project.
        </p>
      </div>

      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="text-sm font-medium text-ink">Phone</p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-sm text-steel hover:text-gold"
            >
              {siteConfig.phone}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="text-sm font-medium text-ink">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="block text-sm text-steel hover:text-gold">
              {siteConfig.email}
            </a>
            <a
              href={`mailto:${siteConfig.emailAlt}`}
              className="block text-sm text-steel hover:text-gold"
            >
              {siteConfig.emailAlt}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="text-sm font-medium text-ink">Yard / Office</p>
            <p className="text-sm text-steel">{siteConfig.address}</p>
            <p className="mt-1 text-sm text-steel">
              Covering {siteConfig.serviceAreas.join(", ")}
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="text-sm font-medium text-ink">Business Hours</p>
            <p className="text-sm text-steel">{siteConfig.hours.weekdays}</p>
            <p className="text-sm text-steel">{siteConfig.hours.saturday}</p>
            <p className="text-sm text-steel">{siteConfig.hours.sunday}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
