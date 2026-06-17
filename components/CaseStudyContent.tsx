import { CaseStudyMeta } from "@/components/CaseStudyMeta";
import { CaseStudyStats } from "@/components/CaseStudyStats";
import { LiveLinks } from "@/components/LiveLinks";
import type { CaseStat } from "@/data/cases";
import {
  parseCaseContent,
  splitSectionParagraphs,
} from "@/lib/parseCaseContent";
import { Fragment } from "react";

type CaseStudyContentProps = {
  content: string;
  stats: CaseStat[];
};

export function CaseStudyContent({ content, stats }: CaseStudyContentProps) {
  const { meta, sections } = parseCaseContent(content);

  return (
    <div>
      {meta.length > 0 && (
        <section aria-label="Project details" className="mb-10">
          <CaseStudyMeta items={meta} />
        </section>
      )}

      <CaseStudyStats stats={stats} />

      <div>
        {sections.map((section, index) => (
          <Fragment key={section.title}>
            {index > 0 && (
              <hr
                className="mb-10 border-0 border-t border-white/10"
                aria-hidden
              />
            )}
            <section>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
                {section.title}
              </h2>
              {section.title === "LIVE" ? (
                <LiveLinks
                  value={section.body}
                  className="text-base leading-[26px] text-white/[0.85]"
                />
              ) : (
                <div className="space-y-4">
                  {splitSectionParagraphs(section.body).map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base font-normal leading-[26px] text-white/[0.85]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </section>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
