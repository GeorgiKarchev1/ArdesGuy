import { HeroSection } from "@/components/landing/hero-section";
import { StorySection } from "@/components/landing/story-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <SocialProofSection />
      <FinalCTASection />
    </div>
  );
}