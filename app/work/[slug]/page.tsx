import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-6 sm:pt-16 sm:pb-28">
      <Link
        href="/work"
        className="text-sm text-white/50 transition-colors hover:text-white"
      >
        ← Work
      </Link>

      <header className="mt-8 border-b border-white/10 pb-10 sm:mt-10 sm:pb-12">
        <h1 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
          {caseStudy.title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
          {caseStudy.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {caseStudy.tags.map((tag) => (
            <li key={tag} className="text-sm text-white/40">
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="prose-case mt-10 sm:mt-12">
        <p className="text-base leading-relaxed text-white/80 sm:text-lg sm:leading-relaxed">
          {caseStudy.content}
        </p>
      </div>
    </article>
  );
}
