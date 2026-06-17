import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { PageShell } from "@/components/PageShell";
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

  return (
    <PageShell
      tone="base"
      className="!px-4 sm:!px-4"
      innerClassName="max-w-full"
    >
      <Link
        href="/#projects"
        className="mb-6 inline-block text-sm text-white/50 transition-colors hover:text-white"
      >
        ← Work
      </Link>

      {caseStudy.image ? (
        <img
          src={caseStudy.image}
          alt=""
          className="mb-8 w-full rounded-xl object-cover"
        />
      ) : (
        <div
          className="mb-8 h-60 w-full rounded-xl bg-[#1a1a1a]"
          aria-hidden
        />
      )}

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          {caseStudy.title}
        </h1>
        <p className="mt-3 text-base leading-[26px] text-white/[0.85]">
          {caseStudy.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/20 px-3 py-1 text-[13px] text-white/60"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <CaseStudyContent content={caseStudy.content} stats={caseStudy.stats} />
    </PageShell>
  );
}
