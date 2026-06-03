export type CaseStudy = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  content: string;
};

export const cases: CaseStudy[] = [
  {
    title: "Precious Metals Storefront",
    slug: "metals",
    description:
      "Designing a new digital sales channel for precious metals from zero",
    tags: ["Product Design", "E-commerce", "Fintech"],
    content:
      "Case study content placeholder. Document the problem, your role, research, key design decisions, and outcomes for the precious metals storefront.",
  },
  {
    title: "Unified Design Process",
    slug: "design-process",
    description:
      "Building a design process framework for a team of 30+ designers",
    tags: ["Design Ops", "Systems", "Leadership"],
    content:
      "Case study content placeholder. Describe how you defined rituals, tooling, and documentation for a design organization at scale.",
  },
  {
    title: "Product Basket",
    slug: "basket",
    description:
      "Iterative redesign of a debit card application flow with cross-sell basket",
    tags: ["Product Design", "Fintech", "Research"],
    content:
      "Case study content placeholder. Walk through discovery, iteration, and validation for the debit card application and cross-sell basket experience.",
  },
];
