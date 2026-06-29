import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyTopBar } from "@/components/CaseStudyTopBar";
import { TabbedCaseStudyContent } from "@/components/TabbedCaseStudyContent";
import { CaseStudyLinks } from "@/components/CaseStudyLinks";
import { CaseStudyStats } from "@/components/CaseStudyStats";
import { PageShell } from "@/components/PageShell";
import {
  getCaseStudyDisplayStats,
  getCaseStudyLiveLinks,
} from "@/lib/caseStudyPage";
import { getAllSlugs, getCaseBySlug } from "@/lib/cases";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const caseStudy = getCaseBySlug(params.slug);
  if (!caseStudy) return { title: "Case study" };
  return { title: caseStudy.title, description: caseStudy.description };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseBySlug(params.slug);
  if (!caseStudy) notFound();

  const liveLinks = getCaseStudyLiveLinks(caseStudy.content);
  const displayStats = getCaseStudyDisplayStats(caseStudy.slug, caseStudy.stats);

  return (
    <PageShell tone="base" caseStudy innerClassName="max-w-[1296px]">
      <CaseStudyTopBar />

      {/* Title: mobile only */}
      <h1 className="mt-6 text-[47px] font-medium leading-normal text-white lg:hidden">
        {caseStudy.title}
      </h1>

      {/* Mobile: single image */}
      {caseStudy.image && (
        <img
          src={caseStudy.image}
          alt=""
          className="mt-6 w-full rounded-[16px] object-cover lg:hidden"
        />
      )}

      {/* Desktop: 3 project images (384×654 each × 3 + 2×72px gap = 1296px), 72px below header */}
      {caseStudy.desktopProjectImages && caseStudy.desktopProjectImages.length > 0 ? (
        <div className="mt-[72px] hidden lg:flex lg:gap-[72px]">
          {caseStudy.desktopProjectImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-[654px] w-[384px] shrink-0 rounded-[16px] object-cover"
            />
          ))}
        </div>
      ) : (
        caseStudy.desktopPageImage && (
          <img
            src={caseStudy.desktopPageImage}
            alt=""
            className="mt-[72px] hidden w-full rounded-[16px] object-cover lg:block"
          />
        )
      )}

      <CaseStudyLinks links={liveLinks} />

      <CaseStudyStats stats={displayStats} />

      <TabbedCaseStudyContent
        content={caseStudy.content}
        hideDesktopVideos={caseStudy.slug === "metals" || caseStudy.slug === "basket"}
      />
    </PageShell>
  );
}
