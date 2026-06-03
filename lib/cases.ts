import { cases, type CaseStudy } from "@/data/cases";

export function getAllCases(): CaseStudy[] {
  return cases;
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
