import { LiveLinks } from "@/components/LiveLinks";
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
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {sorted.map((item) => (
        <div key={item.label} className={item.label === "Live" ? "sm:col-span-2" : undefined}>
          <dt className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
            {item.label}
          </dt>
          <dd className="text-base font-normal leading-[26px] text-white/[0.85]">
            {item.label === "Live" ? (
              <LiveLinks value={item.value} />
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
