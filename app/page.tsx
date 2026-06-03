import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { site } from "@/data/site";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const previews = getAllCases();

  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-6 sm:pt-24 sm:pb-28">
      <section>
        <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          {site.tagline}
        </p>
      </section>

      <section className="mt-16 sm:mt-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-sm font-medium text-white/40">Selected work</h2>
          <Link
            href="/work"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            View all
          </Link>
        </div>
        <div className="mt-2">
          {previews.map((caseStudy) => (
            <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>
    </div>
  );
}
