"use client";

import { useState } from "react";
import {
  parseCaseContent,
  splitSectionParagraphs,
  type CaseSection,
} from "@/lib/parseCaseContent";
import { VideoWithLoader } from "@/components/VideoWithLoader";

function toSentenceCase(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function renderParagraph(
  paragraph: string,
  index: number,
  opts: { hideVideos?: boolean; desktop?: boolean } = {}
) {
  if (paragraph.startsWith("[IMAGE:") && paragraph.endsWith("]")) {
    const filename = paragraph.slice(7, -1);
    return (
      <div key={index} className="mt-6">
        <img src={`/${filename}`} alt="" className="w-full rounded-[16px]" />
      </div>
    );
  }

  if (paragraph.startsWith("[IMAGES_M:") && paragraph.endsWith("]")) {
    if (opts.desktop) return null;
    const files = paragraph.slice(10, -1).split(",");
    return (
      <div key={index} className="flex flex-col gap-6">
        {files.map((f) => (
          <img key={f} src={`/${f.trim()}`} alt="" className="w-full rounded-[16px] object-cover" />
        ))}
      </div>
    );
  }

  if (paragraph.startsWith("[IMAGES_D:") && paragraph.endsWith("]")) {
    if (!opts.desktop) return null;
    const files = paragraph.slice(10, -1).split(",");
    return (
      <div key={index} className="flex flex-col gap-6">
        {files.map((f) => (
          <img key={f} src={`/${f.trim()}`} alt="" className="w-full rounded-[16px] object-cover" />
        ))}
      </div>
    );
  }

  if (paragraph.startsWith("[VIDEO:") && paragraph.endsWith("]")) {
    if (opts.hideVideos) return null;
    const filename = paragraph.slice(7, -1);
    return (
      <div key={index} className="-mx-2 lg:mx-0" style={{ marginTop: 48 }}>
        <VideoWithLoader src={`/${filename}`} />
      </div>
    );
  }

  if (paragraph.startsWith("[HEADING:") && paragraph.endsWith("]")) {
    const text = paragraph.slice(9, -1);
    return (
      <p key={index} className="mt-6 text-[18px] font-bold leading-normal text-white">
        {text}
      </p>
    );
  }

  if (paragraph === "[SPACER]") {
    return <div key={index} className="mt-12" />;
  }

  if (paragraph.startsWith("* ")) {
    const textClass = opts.desktop
      ? "text-[24px] font-normal leading-normal text-white/60"
      : "text-[18px] font-normal leading-6 text-white/60";
    return (
      <div key={index} className="flex gap-3">
        <span className={`mt-[2px] shrink-0 ${textClass}`}>•</span>
        <p className={textClass}>{paragraph.slice(2)}</p>
      </div>
    );
  }

  const textClass = opts.desktop
    ? "text-[24px] font-normal leading-normal text-white/60"
    : "text-[18px] font-normal leading-6 text-white/60";

  return (
    <p key={index} className={textClass}>
      {paragraph}
    </p>
  );
}

function SectionContent({
  section,
  hideVideos,
  desktop,
}: {
  section: CaseSection;
  hideVideos?: boolean;
  desktop?: boolean;
}) {
  return (
    <div className="space-y-4">
      {splitSectionParagraphs(section.body).map((p, i) =>
        renderParagraph(p, i, { hideVideos, desktop })
      )}
    </div>
  );
}

function hasImages(section: CaseSection): boolean {
  return splitSectionParagraphs(section.body).some(
    (p) => p.startsWith("[IMAGES_M:") || p.startsWith("[IMAGES_D:") || p.startsWith("[IMAGE:")
  );
}

type Props = { content: string; hideDesktopVideos?: boolean };

export function TabbedCaseStudyContent({ content, hideDesktopVideos }: Props) {
  const { sections } = parseCaseContent(content);
  const contentSections = sections.filter((s) => s.title !== "LIVE");
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      {/* Mobile: tabs */}
      <div className="lg:hidden">
        <div className="mt-12 -mx-2">
          <div
            className="overflow-x-auto px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.tab-scroll::-webkit-scrollbar { display: none; }`}</style>
            <div
              className="tab-scroll flex items-start gap-4"
              style={{ width: "max-content" }}
            >
              {contentSections.map((section, i) => {
                const active = i === activeIdx;
                return (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className="flex flex-col items-start gap-[10px]"
                  >
                    <span
                      className={`whitespace-nowrap text-[16px] font-normal leading-6 ${
                        active ? "text-white" : "text-white/60"
                      }`}
                    >
                      {toSentenceCase(section.title)}
                    </span>
                    <div
                      className={`h-[2px] w-full rounded-t-[1px] ${
                        active ? "bg-white" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="h-px bg-white" style={{ opacity: 0.1 }} />
        </div>

        <div className="mt-12">
          <SectionContent section={contentSections[activeIdx]} />
        </div>
      </div>

      {/* Desktop: two-column 636px + 24px + 636px, 128px between blocks */}
      <div className="hidden lg:block">
        {contentSections.map((section) => {
          const sticky = hasImages(section);
          return (
            <section key={section.title} className="mt-[128px] flex items-start gap-6">
              <h2
                className={`w-[636px] shrink-0 text-[47px] font-medium leading-normal text-white${
                  sticky ? " sticky top-0 self-start" : ""
                }`}
              >
                {toSentenceCase(section.title)}
              </h2>
              <div className="w-[636px] shrink-0">
                <SectionContent section={section} hideVideos={hideDesktopVideos} desktop />
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
