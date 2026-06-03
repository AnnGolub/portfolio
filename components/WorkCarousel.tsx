import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionLabel } from "@/components/SectionLabel";
import type { CaseStudy } from "@/data/cases";

type WorkCarouselProps = {
  cases: CaseStudy[];
  showViewAll?: boolean;
};

export function WorkCarousel({ cases, showViewAll = true }: WorkCarouselProps) {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="flex items-end justify-between gap-4 px-5 sm:px-8">
        <SectionLabel>Selected work</SectionLabel>
        {showViewAll && (
          <Link
            href="/work"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
          >
            View all
          </Link>
        )}
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-none sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-8 sm:pb-0 lg:grid-cols-3">
        {cases.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.slug}
            caseStudy={caseStudy}
            className="snap-center sm:snap-align-none"
          />
        ))}
      </div>
    </section>
  );
}
