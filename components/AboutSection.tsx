import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/data/site";

const aboutItems = [
  "I grew up in Saint Petersburg and trained as a ballet dancer before finding my way into product design",
  "Turns out choreography and UX have more in common than you'd think — both are about guiding people through an experience without them noticing the work behind it.",
  "5+ years in IT, the last 3 at Alfa-Bank as a Senior Product Designer",
  "I work on products used by millions and on the processes that make design teams function",
  "Now based in Barcelona, looking for the next stage",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 max-md:bg-[#181819] bg-surface-3 max-md:px-0 max-md:py-0 px-5 py-16 sm:px-8 sm:py-24"
    >
      {/* Mobile About */}
      <div className="md:hidden">
        <h2 className="font-helvetica-neue mt-12 px-2 text-[47px] font-extrabold leading-none text-white">
          About
        </h2>

        <div className="mt-6">
          {aboutItems.map((text, index) => (
            <div key={index} className={index > 0 ? "mt-6" : undefined}>
              <p className="font-helvetica-neue px-2 text-[28px] font-bold leading-none text-white">
                {index + 1}
              </p>
              <p className="font-helvetica-neue mt-2 px-2 text-[18px] font-normal leading-6 text-white/60">
                {text}
              </p>
              {index < aboutItems.length - 1 && (
                <div
                  className="mx-2 mt-6 h-px bg-white/60"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop About */}
      <div className="mx-auto hidden max-w-6xl md:block lg:max-w-[44rem]">
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
      </div>

      {/* Mobile Contact */}
      <section
        id="contact"
        className="scroll-mt-24 mt-12 pb-12 md:hidden"
      >
        <h2 className="font-helvetica-neue px-2 text-[47px] font-extrabold leading-none text-white">
          Contact
        </h2>

        <div className="mt-6">
          <p className="font-helvetica-neue px-2 text-2xl font-bold leading-none text-white">
            email
          </p>
          <a
            href={`mailto:${site.email}`}
            className="font-helvetica-neue mt-2 block px-2 text-[18px] font-normal leading-6 text-white/60 transition-opacity hover:opacity-80"
          >
            {site.email}
          </a>

          <div className="mx-2 mt-6 h-px bg-white/60" aria-hidden />

          <div className="mt-6">
            <p className="font-helvetica-neue px-2 text-2xl font-bold leading-none text-white">
              linkedin
            </p>
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-helvetica-neue mt-2 block break-all px-2 text-[18px] font-normal leading-6 text-white/60 transition-opacity hover:opacity-80"
            >
              {site.linkedIn}
            </a>
          </div>
        </div>
      </section>

      {/* Desktop Contact */}
      <div className="scroll-mt-24 mx-auto mt-12 hidden max-w-6xl border-t border-white/10 pt-10 sm:mt-14 sm:pt-12 md:block lg:max-w-[44rem]">
        <SectionLabel>Contact</SectionLabel>
        <ul className="mt-6 space-y-5">
          <li>
            <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Email
            </span>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white sm:text-lg"
            >
              {site.email}
            </a>
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              LinkedIn
            </span>
            <a
              href={site.linkedIn}
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
    </section>
  );
}
