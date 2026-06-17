import type { CaseStat } from "@/data/cases";
import { parseCaseContent } from "@/lib/parseCaseContent";
import { parseLiveLinks } from "@/lib/parseLiveLinks";

export function getCaseStudyLiveLinks(content: string) {
  const { meta, sections } = parseCaseContent(content);
  const links = [];

  const liveMeta = meta.find((item) => item.label === "Live");
  if (liveMeta) {
    links.push(...parseLiveLinks(liveMeta.value));
  }

  const liveSection = sections.find((section) => section.title === "LIVE");
  if (liveSection) {
    links.push(...parseLiveLinks(liveSection.body));
  }

  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}

export function getCaseStudyDisplayStats(slug: string, stats: CaseStat[]) {
  if (slug === "metals") {
    return stats.slice(0, 4);
  }
  return stats;
}
