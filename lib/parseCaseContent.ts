export type CaseMetaItem = {
  label: string;
  value: string;
};

export type CaseSection = {
  title: string;
  body: string;
};

export type ParsedCaseContent = {
  meta: CaseMetaItem[];
  sections: CaseSection[];
};

const SECTION_HEADER = /^[A-Z][A-Z0-9\s&/–—'-]+$/;

function isSectionHeader(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.length > 0 && SECTION_HEADER.test(trimmed);
}

export function parseMetaLine(line: string): CaseMetaItem[] {
  const pattern = /(Role|Team|Timeline|Status|Live|Scope):\s*/g;
  const matches = Array.from(line.matchAll(pattern));
  if (matches.length === 0) return [];

  return matches.map((match, index) => {
    const label = match[1];
    const start = match.index! + match[0].length;
    const end = matches[index + 1]?.index ?? line.length;
    let value = line.slice(start, end).trim();
    if (value.endsWith(".")) {
      value = value.slice(0, -1).trim();
    }
    return { label, value };
  });
}

export function parseCaseContent(content: string): ParsedCaseContent {
  const blocks = content.trim().split(/\n\n+/);
  let meta: CaseMetaItem[] = [];
  let startIndex = 0;

  if (blocks[0]?.startsWith("Role:")) {
    meta = parseMetaLine(blocks[0].replace(/\n/g, " "));
    startIndex = 1;
  }

  const sections: CaseSection[] = [];

  for (let i = startIndex; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;

    const newlineIndex = block.indexOf("\n");
    const firstLine =
      newlineIndex === -1 ? block : block.slice(0, newlineIndex).trim();
    const rest =
      newlineIndex === -1 ? "" : block.slice(newlineIndex + 1).trim();

    if (isSectionHeader(firstLine)) {
      sections.push({ title: firstLine, body: rest });
    } else if (sections.length > 0) {
      const last = sections[sections.length - 1];
      last.body = last.body ? `${last.body}\n\n${block}` : block;
    }
  }

  return { meta, sections };
}

export function splitSectionParagraphs(body: string): string[] {
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}
