import {
  parseCaseContent,
  splitSectionParagraphs,
} from "@/lib/parseCaseContent";
import { Fragment } from "react";

type CaseStudyContentProps = {
  content: string;
};

export function CaseStudyContent({ content }: CaseStudyContentProps) {
  const { sections } = parseCaseContent(content);
  const contentSections = sections.filter((section) => section.title !== "LIVE");

  if (contentSections.length === 0) return null;

  return (
    <div className="mt-12">
      {contentSections.map((section, index) => (
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
          </section>
        </Fragment>
      ))}
    </div>
  );
}
