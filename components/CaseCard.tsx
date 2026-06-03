import Link from "next/link";
import type { CaseStudy } from "@/data/cases";

type CaseCardProps = {
  caseStudy: CaseStudy;
};

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block border-t border-white/10 py-8 first:border-t-0 sm:py-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-medium tracking-tight text-white transition-opacity group-hover:opacity-70 sm:text-xl">
            {caseStudy.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {caseStudy.description}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 sm:max-w-[12rem] sm:justify-end">
          {caseStudy.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs text-white/40"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
