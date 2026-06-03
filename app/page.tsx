import { Hero } from "@/components/Hero";
import { WorkCarousel } from "@/components/WorkCarousel";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const previews = getAllCases();

  return (
    <>
      <Hero />
      <section className="bg-gradient-to-b from-[#0a0a0a] via-surface-1 to-surface-2 py-16 sm:py-24">
        <WorkCarousel cases={previews} />
      </section>
    </>
  );
}
