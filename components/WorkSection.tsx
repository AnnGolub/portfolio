import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionLabel } from "@/components/SectionLabel";
import type { CaseStudy } from "@/data/cases";

type WorkSectionProps = {
  cases: CaseStudy[];
};

export function WorkSection({ cases }: WorkSectionProps) {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-gradient-to-b from-[#0a0a0a] via-surface-1 to-surface-2 py-16 sm:py-24"
    >
      <div className="px-5 sm:px-8">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Work
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
          Product design and design ops work across fintech, e-commerce, and
          large-scale banking products.
        </p>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-scroll px-5 pb-4 snap-x snap-mandatory scrollbar-none sm:mt-10 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
        {cases.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
