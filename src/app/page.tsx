import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { TrustBar } from "@/components/home/TrustBar";
import { Intro } from "@/components/home/Intro";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { CTABanner } from "@/components/ui/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustBar />
      <Intro />
      <FeaturedServices />
      <WhyChoose />
      <ProjectsPreview />
      <CTABanner
        title="Strong Foundations Start Here"
        description="Tell us about the job — excavation, drainage, concrete or full site works. Clear quote. No fluff."
      />
    </>
  );
}
