"use client";

import { AboutSection } from "@/components/AboutSection";
import { HashScrollOnLoad } from "@/components/HashScrollOnLoad";
import { Hero } from "@/components/Hero";
import { MobileHeroIntro } from "@/components/MobileHeroIntro";
import { WorkSection } from "@/components/WorkSection";
import type { CaseStudy } from "@/data/cases";
import { useState } from "react";
import LetsTalkModal from "@/components/LetsTalkModal";

type HomePageClientProps = {
  cases: CaseStudy[];
};

export function HomePageClient({ cases }: HomePageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <HashScrollOnLoad />
      <Hero onLetsTalkClick={openModal} />
      <MobileHeroIntro onLetsTalkClick={openModal} />
      <WorkSection cases={cases} onLetsTalkClick={openModal} />
      <AboutSection />
      <LetsTalkModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
