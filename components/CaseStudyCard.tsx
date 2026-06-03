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
      className={`group flex h-full min-h-[22rem] w-[min(88vw,22rem)] shrink-0 flex-col justify-between border border-white/10 bg-[#0a0a0a] p-6 transition-colors hover:border-white/20 sm:min-h-[24rem] sm:w-full sm:shrink sm:p-8 ${className}`}
    >
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-80 sm:text-2xl">
          {caseStudy.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
          {caseStudy.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 sm:text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-8 space-y-4 border-t border-white/10 pt-6">
        {caseStudy.stats.map((stat) => (
          <li key={stat.label}>
            <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </Link>
  );
}
