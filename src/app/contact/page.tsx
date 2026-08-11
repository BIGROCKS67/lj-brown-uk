import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm, ContactInfo } from "@/components/contact/ContactForm";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LJ Brown UK in Towcester for groundworks and civil engineering quotes. Call 07719 322825 or email office@ljbrownukltd.co.uk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let’s talk about your site — quote requests welcome"
        image={images.services.foundations}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Get In Touch"
            title="Start Your Project"
            description="Fill in the form or call us directly. We’ll come back with a clear next step."
          />
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <ContactInfo />
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-3">
              <div className="border border-ink/5 bg-paper p-6 sm:p-8">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
