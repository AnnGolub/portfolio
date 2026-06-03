import type { CaseStat } from "@/data/cases";

type CaseStudyStatsProps = {
  stats: CaseStat[];
};

export function CaseStudyStats({ stats }: CaseStudyStatsProps) {
  if (stats.length === 0) return null;

  return (
    <section
      aria-label="Key metrics"
      className="border-y border-white/10 bg-[#0a0a0a] py-10 sm:py-12"
    >
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
        {stats.map((stat) => (
          <li key={`${stat.label}-${stat.value}`}>
            <p className="text-3xl font-black leading-none tracking-tight text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
