import type { CaseStat } from "@/data/cases";

type CaseStudyStatsProps = {
  stats: CaseStat[];
};

export function CaseStudyStats({ stats }: CaseStudyStatsProps) {
  if (stats.length === 0) return null;

  return (
    <section aria-label="Key metrics" className="mb-10">
      <ul className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <li key={`${stat.label}-${stat.value}`}>
            <p className="text-[28px] font-bold leading-none text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-normal text-white/50">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
