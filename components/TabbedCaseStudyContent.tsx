"use client";

import { useState } from "react";
import {
  parseCaseContent,
  splitSectionParagraphs,
  type CaseSection,
} from "@/lib/parseCaseContent";

function toSentenceCase(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function renderParagraph(paragraph: string, index: number) {
  if (paragraph.startsWith("[IMAGE:") && paragraph.endsWith("]")) {
    const filename = paragraph.slice(7, -1);
    return (
      <div key={index} className="mt-6">
        <img src={`/${filename}`} alt="" className="w-full rounded-[16px]" />
      </div>
    );
  }

  if (paragraph.startsWith("[VIDEO:") && paragraph.endsWith("]")) {
    const filename = paragraph.slice(7, -1);
    return (
      <div key={index} className="mt-6 -mx-2">
        <video src={`/${filename}`} className="w-full" autoPlay muted loop playsInline />
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
    return (
      <div key={index} className="flex gap-3">
        <span className="mt-[2px] shrink-0 text-[18px] font-normal leading-6 text-white/60">•</span>
        <p className="text-[18px] font-normal leading-6 text-white/60">{paragraph.slice(2)}</p>
      </div>
    );
  }

  return (
    <p key={index} className="text-[18px] font-normal leading-6 text-white/60">
      {paragraph}
    </p>
  );
}

function SectionContent({ section }: { section: CaseSection }) {
  return (
    <div className="space-y-4">
      {splitSectionParagraphs(section.body).map((p, i) => renderParagraph(p, i))}
    </div>
  );
}

type Props = { content: string };

export function TabbedCaseStudyContent({ content }: Props) {
  const { sections } = parseCaseContent(content);
  const contentSections = sections.filter((s) => s.title !== "LIVE");
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      {/* Mobile: tabs */}
      <div className="lg:hidden">
        {/* Tab bar — breaks out of px-2 page padding to go edge-to-edge */}
        <div className="mt-12 -mx-2">
          <div
            className="overflow-x-auto px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.tab-scroll::-webkit-scrollbar { display: none; }`}</style>
            <div className="tab-scroll flex items-start gap-4" style={{ width: "max-content" }}>
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
          {/* Divider — full width, edge to edge */}
          <div className="h-px bg-white" style={{ opacity: 0.1 }} />
        </div>

        {/* Active tab content */}
        <div className="mt-12">
          <SectionContent section={contentSections[activeIdx]} />
        </div>
      </div>

      {/* Desktop: regular stacked layout */}
      <div className="hidden lg:block">
        {contentSections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="mb-6 text-left text-[32px] font-medium leading-normal text-white">
              {toSentenceCase(section.title)}
            </h2>
            <SectionContent section={section} />
          </section>
        ))}
      </div>
    </>
  );
}
