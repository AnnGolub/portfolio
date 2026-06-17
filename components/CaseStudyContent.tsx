import {
  parseCaseContent,
  splitSectionParagraphs,
} from "@/lib/parseCaseContent";

type CaseStudyContentProps = {
  content: string;
};

export function CaseStudyContent({ content }: CaseStudyContentProps) {
  const { sections } = parseCaseContent(content);
  const contentSections = sections.filter((section) => section.title !== "LIVE");

  if (contentSections.length === 0) return null;

  return (
    <div>
      {contentSections.map((section) => (
        <section key={section.title} className="mt-12">
          <h2 className="mb-6 text-left text-[32px] font-medium leading-normal text-white">
            {section.title}
          </h2>
          <div className="space-y-4">
            {splitSectionParagraphs(section.body).map((paragraph, i) => (
              <p
                key={i}
                className="text-[18px] font-normal leading-6 text-white/60"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
