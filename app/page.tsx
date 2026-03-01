import { AdvancedCapabilities } from "@/components/AdvancedCapabilities";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { ModulesGrid } from "@/components/ModulesGrid";
import { Navbar } from "@/components/Navbar";
import { ProofStats } from "@/components/ProofStats";
import { ServiceCardsGrid } from "@/components/ServiceCards";
import { WhyBlubit } from "@/components/WhyBlubit";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ServiceCardsGrid />
      <ModulesGrid />
      <WhyBlubit />
      <ImplementationProcess />
      <ProofStats />
      <AdvancedCapabilities />
      <CTABanner />
      <Footer />
    </>
  );
}

