import type { LiveLink } from "@/lib/parseLiveLinks";

type CaseStudyLinksProps = {
  links: LiveLink[];
};

export function CaseStudyLinks({ links }: CaseStudyLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="mt-12 lg:mt-[128px]">
      {/* Mobile */}
      <div className="lg:hidden">
        <p className="text-sm font-normal leading-[18px] text-[#525252]">links</p>
        <div>
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base font-normal leading-6 text-white underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop: two-column */}
      <div className="hidden lg:flex lg:items-center lg:gap-6">
        <h2 className="w-[636px] shrink-0 text-[47px] font-medium leading-normal text-white">
          Links
        </h2>
        <div className="flex w-[636px] shrink-0 flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[24px] font-normal leading-normal text-white underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
