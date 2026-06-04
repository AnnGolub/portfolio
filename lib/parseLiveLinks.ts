export type LiveLink = {
  label: string;
  url: string;
};

export function parseLiveLinks(value: string): LiveLink[] {
  const parenPattern = /([^,]+?)\s*\(\s*(https?:\/\/[^)]+)\s*\)/g;
  const links: LiveLink[] = [];
  let match: RegExpExecArray | null;

  while ((match = parenPattern.exec(value)) !== null) {
    links.push({ label: match[1].trim(), url: match[2].trim() });
  }

  if (links.length > 0) return links;

  const linePattern = /^-\s*(.+?):\s*(https?:\/\/\S+)\s*$/gm;
  while ((match = linePattern.exec(value)) !== null) {
    links.push({ label: match[1].trim(), url: match[2].trim() });
  }

  if (links.length > 0) return links;

  const urls = value.match(/https?:\/\/[^\s,;)]+/g) ?? [];
  return urls.map((url) => ({
    label: url.replace(/^https?:\/\/(www\.)?/, ""),
    url,
  }));
}
