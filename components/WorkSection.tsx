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
      id="projects"
      className="scroll-mt-24 max-md:!m-0 max-md:!bg-transparent max-md:!p-0 max-md:!py-0 py-16 sm:py-24 md:bg-gradient-to-b md:from-[#0a0a0a] md:via-surface-1 md:to-surface-2"
    >
      <h2 className="font-helvetica-neue max-md:!mb-0 max-md:!mt-12 px-2 text-[47px] font-extrabold leading-none text-white md:hidden">
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

      <div className="flex max-md:!mb-0 max-md:!mt-6 max-md:flex-col max-md:!gap-12 md:mt-8 md:flex-row md:gap-4 md:overflow-x-scroll md:px-8 md:pb-4 md:snap-x md:snap-mandatory md:scrollbar-none lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
        {cases.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>

      <div className="flex max-md:!mb-0 max-md:!mt-12 justify-center md:hidden">
        <LetsTalkLink />
      </div>
    </section>
  );
}
