import { CaseStudyCard } from "@/components/CaseStudyCard";
import { LetsTalkLink } from "@/components/LetsTalkLink";
import { SectionLabel } from "@/components/SectionLabel";
import type { CaseStudy } from "@/data/cases";

type WorkSectionProps = {
  cases: CaseStudy[];
};

export function WorkSection({ cases }: WorkSectionProps) {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-gradient-to-b from-[#0a0a0a] via-surface-1 to-surface-2 max-md:py-0 max-md:pb-16 py-16 sm:py-24"
    >
      <h2 className="font-helvetica-neue mt-12 px-2 text-[47px] font-extrabold leading-none text-white md:hidden">
        Projects
      </h2>

      <div className="hidden px-5 sm:px-8 md:block">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Work
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
          Product design and design ops work across fintech, e-commerce, and
          large-scale banking products.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-12 md:mt-8 md:flex-row md:gap-4 md:overflow-x-scroll md:px-8 md:pb-4 md:snap-x md:snap-mandatory md:scrollbar-none lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
        {cases.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <LetsTalkLink />
      </div>
    </section>
  );
}
