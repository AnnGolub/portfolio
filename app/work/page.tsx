import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { getAllCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in product design, fintech, and design operations at scale.",
};

export default function WorkPage() {
  const allCases = getAllCases();

  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-6 sm:pt-16 sm:pb-28">
      <header>
        <h1 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
          Work
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
          Product design and design ops work across fintech, e-commerce, and
          large-scale banking products.
        </p>
      </header>

      <div className="mt-10 sm:mt-14">
        {allCases.map((caseStudy) => (
          <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
}
