import { AdvancedCapabilities } from "@/components/AdvancedCapabilities";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { ModulesGrid } from "@/components/ModulesGrid";
import { Navbar } from "@/components/Navbar";
import { OurPartners } from "@/components/OurPartners";
import { ProofStats } from "@/components/ProofStats";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCardsGrid } from "@/components/ServiceCards";
import { WhyBlubit } from "@/components/WhyBlubit";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal variant="zoom-in" delayMs={30} threshold={0.05}>
        <HeroSlider />
      </ScrollReveal>
      <ScrollReveal variant="slide-right">
        <ServiceCardsGrid />
      </ScrollReveal>
      <ScrollReveal variant="tilt-up">
        <ModulesGrid />
      </ScrollReveal>
      <ScrollReveal variant="slide-left">
        <WhyBlubit />
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
      <ScrollReveal variant="lift">
        <OurPartners />
      </ScrollReveal>
      <ScrollReveal variant="zoom-in" delayMs={80}>
        <CTABanner />
      </ScrollReveal>
      <Footer />
    </>
  );
}

