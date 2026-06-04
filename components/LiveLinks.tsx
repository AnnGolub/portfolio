import { parseLiveLinks } from "@/lib/parseLiveLinks";

type LiveLinksProps = {
  value: string;
  className?: string;
};

export function LiveLinks({ value, className = "" }: LiveLinksProps) {
  const links = parseLiveLinks(value);

  if (links.length === 0) {
    return <span className={className}>{value}</span>;
  }

  return (
    <ul className={`space-y-2 ${className}`}>
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
