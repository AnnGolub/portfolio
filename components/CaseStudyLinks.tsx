import type { LiveLink } from "@/lib/parseLiveLinks";

type CaseStudyLinksProps = {
  links: LiveLink[];
};

export function CaseStudyLinks({ links }: CaseStudyLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="mt-12">
      <p className="text-sm font-normal leading-[18px] text-[#525252]">links</p>
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
    </section>
  );
}
