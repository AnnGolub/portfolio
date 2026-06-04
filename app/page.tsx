import { AboutSection } from "@/components/AboutSection";
import { HashScrollOnLoad } from "@/components/HashScrollOnLoad";
import { Hero } from "@/components/Hero";
import { MobileHeroIntro } from "@/components/MobileHeroIntro";
import { WorkSection } from "@/components/WorkSection";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getAllCases();

  return (
    <>
      <HashScrollOnLoad />
      <Hero />
      <MobileHeroIntro />
      <WorkSection cases={cases} />
      <AboutSection />
    </>
  );
}
