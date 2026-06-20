import {
  parseCaseContent,
  splitSectionParagraphs,
} from "@/lib/parseCaseContent";

type CaseStudyContentProps = {
  content: string;
};

function toSentenceCase(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function renderParagraph(paragraph: string, index: number) {
  if (paragraph.startsWith("[IMAGE:") && paragraph.endsWith("]")) {
    const filename = paragraph.slice(7, -1);
    return (
      <div key={index} className="mt-6">
        <img
          src={`/${filename}`}
          alt=""
          className="w-full rounded-none"
        />
      </div>
    );
  }

  if (paragraph.startsWith("[HEADING:") && paragraph.endsWith("]")) {
    const text = paragraph.slice(9, -1);
    return (
      <p key={index} className="mt-6 text-[18px] font-bold leading-auto text-white">
        {text}
      </p>
    );
  }

  if (paragraph === "[SPACER]") {
    return <div key={index} className="mt-12" />;
  }

  return (
    <p key={index} className="text-[18px] font-normal leading-6 text-white/60">
      {paragraph}
    </p>
  );
}

export function CaseStudyContent({ content }: CaseStudyContentProps) {
  const { sections } = parseCaseContent(content);
  const contentSections = sections.filter((section) => section.title !== "LIVE");

  if (contentSections.length === 0) return null;

  return (
    <div>
      {contentSections.map((section) => (
        <section key={section.title} className="mt-12">
          <h2 className="mb-6 text-left text-[32px] font-medium leading-normal text-white">
            {toSentenceCase(section.title)}
          </h2>
          <div className="space-y-4">
            {splitSectionParagraphs(section.body).map((paragraph, i) =>
              renderParagraph(paragraph, i)
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
