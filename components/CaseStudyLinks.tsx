import type { LiveLink } from "@/lib/parseLiveLinks";

type CaseStudyLinksProps = {
  links: LiveLink[];
};

export function CaseStudyLinks({ links }: CaseStudyLinksProps) {
  if (links.length === 0) return null;

  const linkList = (
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
  );

  return (
    <section className="mt-12">
      {/* Mobile */}
      <div className="lg:hidden">
        <p className="text-sm font-normal leading-[18px] text-[#525252]">links</p>
        {linkList}
      </div>

      {/* Desktop: two-column */}
      <div className="hidden lg:flex lg:items-start lg:gap-6">
        <h2 className="w-[420px] shrink-0 text-[47px] font-medium leading-normal text-white">
          Links
        </h2>
        <div className="flex-1">{linkList}</div>
      </div>
    </section>
  );
}
