import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyBackButton } from "@/components/CaseStudyBackButton";
import { CaseStudyContent } from "@/components/CaseStudyContent";
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

  return (
    <PageShell
      tone="base"
      className="!px-4 sm:!px-4"
      innerClassName="max-w-full"
    >
      <CaseStudyBackButton />

      <h1 className="mt-6 text-[47px] font-medium leading-normal text-white">
        {caseStudy.title}
      </h1>

      {caseStudy.image ? (
        <img
          src={caseStudy.image}
          alt=""
          className="mt-6 w-full rounded-xl object-cover"
        />
      ) : (
        <div className="mt-6 h-60 w-full rounded-xl bg-[#1a1a1a]" aria-hidden />
      )}

      <CaseStudyLinks links={liveLinks} />

      <CaseStudyStats stats={displayStats} />

      <CaseStudyContent content={caseStudy.content} />
    </PageShell>
  );
}
