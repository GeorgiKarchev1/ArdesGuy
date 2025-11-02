import { HeroSection } from "@/components/landing/hero-section";
import { StorySection } from "@/components/landing/story-section";
import { ServicesSection } from "@/components/landing/services-section";
import { StepsSection } from "@/components/landing/steps-section";
import { PlatformsSection } from "@/components/landing/platforms-section";
import { ConsultationSection } from "@/components/landing/consultation-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { AchievementsSection } from "@/components/landing/achievements-section";
import { TargetAudienceSection } from "@/components/landing/target-audience-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <StepsSection />
      <ConsultationSection />
      <PlatformsSection />
      <BenefitsSection />
      <AchievementsSection />
      <TargetAudienceSection />
      <PortfolioSection />
      <FinalCTASection />
      <ContactSection />
    </div>
  );
}