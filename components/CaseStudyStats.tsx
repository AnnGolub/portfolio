import type { CaseStat } from "@/data/cases";

type CaseStudyStatsProps = {
  stats: CaseStat[];
};

export function CaseStudyStats({ stats }: CaseStudyStatsProps) {
  if (stats.length === 0) return null;

  return (
    <section aria-label="Key metrics" className="mt-12 flex w-full flex-col gap-6 p-4">
      {stats.map((stat) => (
        <div
          key={`${stat.label}-${stat.value}`}
          className="flex items-end justify-between self-stretch"
        >
          <p className="text-[32px] font-medium leading-normal text-white">
            {stat.value}
          </p>
          <p className="text-right text-sm font-normal leading-[18px] text-white/60">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
