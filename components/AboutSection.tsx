import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/data/site";

const mobileAboutText =
  "I grew up in Saint Petersburg and trained as a ballet dancer before finding my way into product design. Turns out choreography and UX have more in common than you'd think — both are about guiding people through an experience without them noticing the work behind it. 5+ years in IT, the last 3 at Alfa-Bank as a Senior Product Designer. I work on products used by millions and on the processes that make design teams function. Now based in Barcelona, looking for the next stage.";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 max-md:!m-0 max-md:bg-background max-md:!p-0 max-md:!py-0 bg-background px-5 py-16 sm:px-8 sm:py-24"
    >
      {/* Mobile About + Contact */}
      <div className="md:hidden">
        <div className="flex max-md:!m-0 max-md:!mt-12 flex-col items-start gap-8 self-stretch px-2">
          <h2 className="w-full text-left text-[47px] font-medium leading-normal text-white">
            About
          </h2>
          <p className="text-[18px] font-normal leading-6 text-white/60">
            {mobileAboutText}
          </p>
        </div>

        <section
          id="contact"
          className="scroll-mt-24 flex max-md:!mb-0 max-md:!mt-12 max-md:!pb-12 items-start justify-center gap-4 self-stretch px-2"
        >
          <a
            href="mailto:anka.golub17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/icons/Frame 2131327003.svg"
              width={44}
              height={44}
              alt="Email"
              className="h-11 w-11 object-contain"
            />
          </a>
          <a
            href="https://t.me/golub54"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/icons/Frame 2131327006.svg"
              width={44}
              height={44}
              alt="Telegram"
              className="h-11 w-11 object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-golubeva-9063b9237/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/icons/Frame 2131327005.svg"
              width={44}
              height={44}
              alt="LinkedIn"
              className="h-11 w-11 object-contain"
            />
          </a>
        </section>
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
