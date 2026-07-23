import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutHero } from "@/components/about/AboutHero";
import { EveryDetailMatters } from "@/components/about/EveryDetailMatters";
import { DahliaTeam } from "@/components/about/DahliaTeam";
import { AboutQuote } from "@/components/about/AboutQuote";

export const metadata: Metadata = {
  title: "О нас | Dahlia Floral & Event Design",
  description:
    "Наши цветочные композиции превосходят обыденное, добавляя особую нотку волшебства в день вашей свадьбы. Познакомьтесь с командой Dahlia Floral & Event Design.",
};

export default function AboutPage() {
  return (
    <>
      <SiteChrome />
      <main id="top" className="overflow-x-hidden">
        <AboutHero />
        <EveryDetailMatters />
        <DahliaTeam />
        <AboutQuote />
      </main>
      <SiteFooter />
    </>
  );
}
