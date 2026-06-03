import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PageShell } from "@/components/PageShell";
import { SectionLabel } from "@/components/SectionLabel";
import { getAllCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in product design, fintech, and design operations at scale.",
};

export default function WorkPage() {
  const allCases = getAllCases();

  return (
    <PageShell tone="elevated">
      <header>
        <SectionLabel>Portfolio</SectionLabel>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Work
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
          Product design and design ops work across fintech, e-commerce, and
          large-scale banking products.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {allCases.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>

      <p className="mt-12">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
        >
          ← Home
        </Link>
      </p>
    </PageShell>
  );
}
