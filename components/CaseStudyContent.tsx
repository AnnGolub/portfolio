import { CaseStudyMeta } from "@/components/CaseStudyMeta";
import { CaseStudyStats } from "@/components/CaseStudyStats";
import { LiveLinks } from "@/components/LiveLinks";
import type { CaseStat } from "@/data/cases";
import {
  parseCaseContent,
  splitSectionParagraphs,
} from "@/lib/parseCaseContent";

type CaseStudyContentProps = {
  content: string;
  stats: CaseStat[];
};

export function CaseStudyContent({ content, stats }: CaseStudyContentProps) {
  const { meta, sections } = parseCaseContent(content);

  return (
    <div className="mt-10 sm:mt-12">
      {meta.length > 0 && (
        <section aria-label="Project details">
          <CaseStudyMeta items={meta} />
        </section>
      )}

      <CaseStudyStats stats={stats} />

      <div
        className={
          meta.length > 0 || stats.length > 0 ? "mt-10 sm:mt-14" : undefined
        }
      >
        {sections.map((section, index) => (
          <section
            key={section.title}
            className={index > 0 ? "mt-14 sm:mt-20" : undefined}
          >
            <h2 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              {section.title}
            </h2>
            <div className="mt-6">
              {section.title === "LIVE" ? (
                <LiveLinks value={section.body} />
              ) : (
                <div className="space-y-6">
                  {splitSectionParagraphs(section.body).map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-[1.85] text-white/75 sm:text-lg sm:leading-[1.9]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
