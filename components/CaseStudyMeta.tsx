import type { CaseMetaItem } from "@/lib/parseCaseContent";

type CaseStudyMetaProps = {
  items: CaseMetaItem[];
};

const PRIMARY_LABELS = ["Role", "Team", "Timeline", "Status"];

export function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  if (items.length === 0) return null;

  const sorted = [
    ...items.filter((item) => PRIMARY_LABELS.includes(item.label)),
    ...items.filter((item) => !PRIMARY_LABELS.includes(item.label)),
  ];

  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-6 pb-10 sm:grid-cols-2 sm:gap-y-8 sm:pb-12">
      {sorted.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base sm:leading-relaxed">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
