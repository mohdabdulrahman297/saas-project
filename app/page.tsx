
import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import DemoSection from "@/components/home/demo-section";
import Hebluection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col ">
        <Hebluection />
        <DemoSection/>
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
      {/* <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection /> */}
    </div>
  );
}