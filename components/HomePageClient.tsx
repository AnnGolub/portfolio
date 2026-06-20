"use client";

import { AboutSection } from "@/components/AboutSection";
import { DesktopHomeHeader } from "@/components/DesktopHomeHeader";
import { HashScrollOnLoad } from "@/components/HashScrollOnLoad";
import { Hero } from "@/components/Hero";
import { MobileHeroIntro } from "@/components/MobileHeroIntro";
import { WorkSection } from "@/components/WorkSection";
import { useLetsTalkModal } from "@/components/LetsTalkModalProvider";
import type { CaseStudy } from "@/data/cases";

type HomePageClientProps = {
  cases: CaseStudy[];
};

export function HomePageClient({ cases }: HomePageClientProps) {
  const { openModal } = useLetsTalkModal();

  return (
    <>
      <HashScrollOnLoad />
      <div className="lg:mx-auto lg:flex lg:max-w-[1440px] lg:flex-col lg:items-center lg:gap-32 lg:bg-[#0A0A0A] lg:px-[72px] lg:pb-[128px]">
        <div className="lg:flex lg:w-full lg:max-w-[1296px] lg:flex-col lg:items-center lg:gap-32">
          <div className="lg:flex lg:w-full lg:flex-col lg:items-center lg:gap-[72px]">
            <DesktopHomeHeader />
            <Hero onLetsTalkClick={openModal} />
          </div>
          <MobileHeroIntro onLetsTalkClick={openModal} />
          <WorkSection cases={cases} onLetsTalkClick={openModal} />
          <AboutSection />
        </div>
      </div>
    </>
  );
}
