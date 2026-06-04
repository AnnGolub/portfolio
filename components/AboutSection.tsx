import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-surface-3 px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl lg:max-w-[44rem]">
        <SectionLabel>About</SectionLabel>

        <div className="mt-8 space-y-6 text-base leading-[1.85] text-white/70 sm:mt-10 sm:text-lg sm:leading-[1.9]">
          <p>
            I grew up in Saint Petersburg and trained as a ballet dancer before
            finding my way into product design. Turns out choreography and UX
            have more in common than you&apos;d think — both are about guiding
            people through an experience without them noticing the work behind
            it.
          </p>
          <p>
            5+ years in IT, the last 3 at Alfa-Bank as a Senior Product
            Designer. I work on products used by millions and on the processes
            that make design teams function.
          </p>
          <p>Now based in Barcelona, looking for the next stage.</p>
        </div>

        <div
          id="contact"
          className="scroll-mt-24 mt-12 border-t border-white/10 pt-10 sm:mt-14 sm:pt-12"
        >
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
        </div>

        <p className="sr-only">{site.name}</p>
      </div>
    </section>
  );
}
