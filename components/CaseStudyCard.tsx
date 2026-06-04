import Link from "next/link";
import type { CaseStudy } from "@/data/cases";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  className?: string;
};

export function CaseStudyCard({ caseStudy, className = "" }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className={`group block max-md:!m-0 max-md:px-0 px-2 md:flex md:h-full md:min-h-[24rem] md:w-[min(88vw,22rem)] md:shrink-0 md:flex-col md:justify-between md:border md:border-white/10 md:bg-[#0a0a0a] md:p-8 md:px-8 md:transition-colors md:hover:border-white/20 lg:w-full lg:shrink ${className}`}
    >
      {/* Mobile */}
      <div className="md:hidden">
        <div className="px-2">
          <img
            src={caseStudy.image}
            alt=""
            className="h-auto w-full rounded-none object-cover"
            aria-hidden
          />
        </div>
        <div className="font-helvetica-neue flex items-end justify-between px-2 pb-0 pt-2">
          <span className="max-w-[55%] self-end whitespace-pre-line text-left text-[16px] font-normal leading-5 text-white">
            {caseStudy.mobileTitle}
          </span>
          <span className="max-w-[40%] shrink-0 self-end whitespace-nowrap text-right text-[14px] font-normal leading-5 text-white/60">
            {caseStudy.category}
          </span>
        </div>
      </div>

      {/* Desktop — unchanged */}
      <div className="hidden md:flex md:h-full md:flex-col md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-80">
            {caseStudy.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/60">
            {caseStudy.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <li
                key={tag}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-white/35"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 space-y-4 border-t border-white/10 pt-6">
          {caseStudy.stats.map((stat) => (
            <li key={stat.label}>
              <p className="text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
