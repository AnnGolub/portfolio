import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { PageShell } from "@/components/PageShell";
import { SectionLabel } from "@/components/SectionLabel";
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
    <PageShell tone="elevated">
      <Link
        href="/#work"
        className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
      >
        ← Work
      </Link>

      <header className="mt-8 border-b border-white/10 pb-10 sm:mt-10 sm:pb-12">
        <SectionLabel>Case study</SectionLabel>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {caseStudy.title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          {caseStudy.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {caseStudy.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-8">
          {caseStudy.stats.map((stat) => (
            <li key={stat.label}>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </header>

      <CaseStudyContent content={caseStudy.content} />
    </PageShell>
  );
}
