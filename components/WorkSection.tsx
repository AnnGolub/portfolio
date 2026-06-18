import { CaseStudyCard } from "@/components/CaseStudyCard";
import { LetsTalkLink } from "@/components/LetsTalkLink";
import type { CaseStudy } from "@/data/cases";

type WorkSectionProps = {
  cases: CaseStudy[];
  onLetsTalkClick?: () => void;
};

export function WorkSection({ cases, onLetsTalkClick }: WorkSectionProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-24 max-lg:!m-0 max-lg:bg-background max-lg:!p-0 max-lg:!py-0 bg-background lg:w-full lg:self-stretch"
    >
      <h2 className="max-lg:!mb-0 max-lg:!mt-12 px-2 text-[47px] font-medium leading-normal text-white lg:hidden">
        Projects
      </h2>

      <h2 className="mb-[72px] hidden text-[47px] font-medium leading-normal text-white lg:block">
        Projects
      </h2>

      <div className="flex max-lg:!mb-0 max-lg:!mt-6 max-lg:flex-col max-lg:!gap-12 lg:hidden">
        {cases.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>

      <div className="hidden flex-row items-start gap-[72px] lg:flex">
        {cases.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} variant="desktop" />
        ))}
      </div>

      <div className="flex max-lg:!mb-0 max-lg:!mt-12 justify-center lg:hidden">
        <LetsTalkLink onClick={onLetsTalkClick} />
      </div>
    </section>
  );
}
