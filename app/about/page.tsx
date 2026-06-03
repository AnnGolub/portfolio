import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Bio and contact for ${site.name}, senior product designer.`,
};

export default function AboutPage() {
  return (
    <PageShell tone="surface">
      <h1 className="sr-only">{site.name}</h1>

      <img
        src="/photo.jpg"
        alt="Anna Golubeva"
        width={256}
        height={256}
        className="h-64 w-64 rounded-full object-cover"
      />

      <div className="mt-10 space-y-6 text-base leading-[1.85] text-white/70 sm:mt-12 sm:text-lg sm:leading-[1.9]">
        <p>
          I grew up in Saint Petersburg and trained as a ballet dancer before
          finding my way into product design. Turns out choreography and UX have
          more in common than you&apos;d think — both are about guiding people
          through an experience without them noticing the work behind it.
        </p>
        <p>
          5+ years in IT, the last 3 at Alfa-Bank as a Senior Product Designer.
          I work on products used by millions and on the processes that make
          design teams function.
        </p>
        <p>Now based in Barcelona, looking for the next stage.</p>
      </div>

      <section className="mt-12 border-t border-white/10 pt-10 sm:mt-14 sm:pt-12">
        <SectionLabel>Contact</SectionLabel>
        <ul className="mt-6 space-y-5">
          <li>
            <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Email
            </span>
            <a
              href="mailto:anka.golub17@gmail.com"
              className="mt-2 inline-block text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white sm:text-lg"
            >
              anka.golub17@gmail.com
            </a>
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/anna-golubeva-9063b9237/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white sm:text-lg"
            >
              linkedin.com/in/anna-golubeva-9063b9237
            </a>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
