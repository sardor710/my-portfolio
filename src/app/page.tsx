import { SiteChrome } from "@/components/SiteChrome";
import { HeroSection } from "@/components/HeroSection";
import { DayToRemember } from "@/components/DayToRemember";
import { BreathtakingSection } from "@/components/BreathtakingSection";
import { DahliaDifference } from "@/components/DahliaDifference";
import { Testimonials } from "@/components/Testimonials";
import { DelicateTouch } from "@/components/DelicateTouch";
import { LoveQuote } from "@/components/LoveQuote";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteChrome />
      <main id="top" className="overflow-x-hidden">
        <HeroSection />
        <BreathtakingSection />
        <DayToRemember />
        <DahliaDifference />
        <Testimonials />
        <DelicateTouch />
        <LoveQuote />
      </main>
      <SiteFooter />
    </>
  );
}
