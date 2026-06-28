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
  if (!caseStudy) {
    return { title: "Case study" };
  }
  return {
    title: caseStudy.title,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const liveLinks = getCaseStudyLiveLinks(caseStudy.content);
  const displayStats = getCaseStudyDisplayStats(
    caseStudy.slug,
    caseStudy.stats,
  );

  const mobileImage = caseStudy.image;
  const desktopImage = caseStudy.desktopPageImage ?? caseStudy.image;

  return (
    <PageShell tone="base" caseStudy innerClassName="max-w-[1296px]">
      <CaseStudyTopBar />

      <h1 className="mt-6 text-[47px] font-medium leading-normal text-white">
        {caseStudy.title}
      </h1>

      {/* Mobile image */}
      {mobileImage && (
        <img
          src={mobileImage}
          alt=""
          className="mt-6 w-full rounded-[16px] object-cover lg:hidden"
        />
      )}

      {/* Desktop image */}
      {desktopImage && (
        <img
          src={desktopImage}
          alt=""
          className="mt-6 hidden w-full rounded-[16px] object-cover lg:block"
        />
      )}

      <CaseStudyLinks links={liveLinks} />

      <CaseStudyStats stats={displayStats} />

      <TabbedCaseStudyContent content={caseStudy.content} />
    </PageShell>
  );
}
