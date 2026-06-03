import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Bio and contact for ${site.name}, senior product designer.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-6 sm:pt-16 sm:pb-28">
      <header>
        <h1 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
          About
        </h1>
      </header>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:mt-10 sm:text-lg sm:leading-relaxed">
        <p>
          I&apos;m a senior product designer at Alfa-Bank, working on fintech
          products used by millions of customers—from new digital sales channels
          to core banking flows.
        </p>
        <p>
          Alongside product work, I build design operations: frameworks and
          rituals that help large design teams ship with consistency. I&apos;m
          currently exploring what comes next.
        </p>
      </div>

      <section className="mt-14 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
        <h2 className="text-sm font-medium text-white/40">Contact</h2>
        <ul className="mt-4 space-y-3 text-base sm:text-lg">
          <li>
            <a
              href="mailto:hello@annagolubeva.com"
              className="text-white/80 transition-colors hover:text-white"
            >
              hello@annagolubeva.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
