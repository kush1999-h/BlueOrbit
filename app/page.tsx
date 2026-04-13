import { AuthorityStrip } from "@/components/AuthorityStrip";
import { AdvancedCapabilities } from "@/components/AdvancedCapabilities";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { ModulesGrid } from "@/components/ModulesGrid";
import { Navbar } from "@/components/Navbar";
import { ProofStats } from "@/components/ProofStats";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhyBlueOrbit } from "@/components/WhyBlueOrbit";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal variant="zoom-in" delayMs={30} threshold={0.05}>
        <HeroSlider />
      </ScrollReveal>
      <ScrollReveal variant="fade-up" delayMs={40}>
        <AuthorityStrip />
      </ScrollReveal>
      <ScrollReveal variant="tilt-up">
        <ModulesGrid />
      </ScrollReveal>
      <ScrollReveal variant="slide-left">
        <WhyBlueOrbit />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <ImplementationProcess />
      </ScrollReveal>
      <ScrollReveal variant="blur-in">
        <AdvancedCapabilities />
      </ScrollReveal>
      <ScrollReveal variant="pop-in">
        <ProofStats />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <IndustriesSection />
      </ScrollReveal>
      <ScrollReveal variant="zoom-in" delayMs={80}>
        <CTABanner />
      </ScrollReveal>
      <Footer />
    </>
  );
}
