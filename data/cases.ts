export type CaseStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  tags: string[];
  stats: CaseStat[];
  content: string;
};

export const cases: CaseStudy[] = [
  {
    title: "Precious Metals Storefront",
    slug: "metals",
    image: "/Pic.jpg",
    category: "Fintech & E-Commerce",
    description:
      "Designing a new digital sales channel for precious metals from zero",
    tags: ["Product Design", "E-commerce", "Fintech"],
    stats: [
      { value: "113.6M ₽", label: "Bars revenue in 2 months" },
      { value: "102M ₽", label: "Coins revenue in 2 months" },
      { value: "9,652 g", label: "Bars sold, 40% from website" },
      { value: "733", label: "Coins sold, 40% from website" },
      { value: "2", label: "Storefronts launched" },
      { value: "2 mo", label: "From zero to production" },
    ],
    content: `Role: Lead Product Designer (solo). Team: Analyst, Backend Engineer, Frontend Engineer, QA. Timeline: September 2025 – present. Live: Precious Metals Hub (https://alfabank.ru/make-money/metall/), Coins Storefront (https://alfabank.ru/make-money/metall/coins/), Bars Storefront (https://alfabank.ru/make-money/metall/bars/)

CONTEXT
In 2022, Russia abolished the 20% VAT on retail sales of precious metal bars, making gold and silver accessible investment instruments for the mass market. By 2025, precious metals had become one of the top-performing asset classes, with major banks competing for retail market share. Alfa-Bank had the demand — but no digital channel to capture it.

PROBLEM
Without a digital storefront, all precious metals sales depended entirely on branch visits and unstructured phone inquiries. Customers had no way to browse inventory, compare products, or express clear purchase intent online. Precious metal prices update daily in line with Central Bank rates — any static content would be outdated within hours.

CONSTRAINTS
The project launched under real pressure: a new Product Owner joined in July, the team inherited the project in August, and the goal was to ship to production within the same quarter. The decision was made to launch an MVP first — built on existing design system components, without custom dev work or user testing cycles.

MY PROCESS
Discovery — researched Storybook component library, analyzed competitor storefronts, collected references, discussed technical constraints with frontend developers and the website design team.

Information architecture & UX — mapped the user journey and information architecture. Defined the core flow: landing page → product catalog → cart → lead form → success state. The key design challenge: making a cart-to-lead-form flow feel complete and trustworthy without an actual checkout.

Hypothesis-driven design — framed the cart feature around a clear product hypothesis: users who can build a structured order before submitting a request will convert at a higher rate and generate higher-quality leads. Defined success metrics upfront: conversion from catalog sessions to submitted requests, average number of items per order, share of multi-item submissions.

Delivery — produced full annotated mockups, presented to stakeholders, ran design reviews, led grooming sessions, wrote specs for implementation, reviewed the built solution before launch.

SOLUTION
The storefront consists of three connected surfaces. Category landing page introduces precious metals as an investment product and routes users to bars or coins. Product catalog supports filtering, sorting, search, and pagination across 38+ SKUs with automatic price updates via Central Bank integration. Cart + lead form flow lets users add products with quantity controls, review in a modal overlay, then submit a structured request with name, phone, and preferred city.

IMPACT
Launched 2 fully functional storefronts from zero in 2 months. Created a new digital sales channel: structured lead → telemarketing call → branch purchase. Telemarketing efficiency improved: agents receive specific product lists instead of vague verbal requests. Target: +10% conversion from catalog sessions to submitted requests.

LIVE
- Precious Metals Hub: https://alfabank.ru/make-money/metall/
- Coins Storefront: https://alfabank.ru/make-money/metall/coins/
- Bars Storefront: https://alfabank.ru/make-money/metall/bars/`,
  },
  {
    title: "Unified Design Process",
    slug: "design-process",
    image: "/Pic-1.jpg",
    category: "Systems & Leadership",
    description:
      "Building a design process framework for a team of 30+ designers",
    tags: ["Design Ops", "Systems", "Leadership"],
    stats: [
      { value: "30+", label: "designers" },
      { value: "15", label: "teams" },
      { value: "6+", label: "months" },
    ],
    content: `Role: Designer (mid-level), primary contributor. Team: 1 additional designer, guided by Lead Designer. Scope: ~30 designers, 15 product teams, CPO, PMs, POs. Status: Adopted across all teams, in use 6+ months.

CONTEXT
The Alfa-Bank website design team had grown to around 30 designers across 15 product teams. Processes hadn't scaled with the headcount — every team operated differently, workflows were undocumented, and there was no shared language between designers, product owners, and project managers.

PROBLEMS IDENTIFIED
No regular planning → constant inefficiency and chaotic work rhythm. Poor quality briefs → wasted time, missed deadlines, rework. Urgent unplanned tasks and shifting priorities → loss of focus, low output quality. Friction with marketing → missed goals, coordination overhead.

MY PROCESS
Research — studied existing process documentation from other divisions within Alfa-Bank, and analyzed how other companies structure design workflows.

Discovery — conducted individual interviews with designers and product owners across all 15 teams. Mapped current workflows, identified pain points, documented everything in Notion.

Framework design — synthesized findings into a unified process framework in Figma. The core challenge: cover all stages clearly enough for non-designers while remaining practical for designers who live in it daily.

Qualitative validation — ran structured sessions with 3–4 participants each, mixing designers, PMs, and POs. Asked them to walk through the framework and map a real task onto it.

Stakeholder alignment — presented to Head of Project Management, then defended in front of all product owners and the CPO. Feedback collected via Google Sheets, every comment processed and resolved before final approval.

WHAT WE INTRODUCED
Task type definition table — a reference document helping anyone (designers, PMs, POs) quickly identify which category a task falls into before it enters the design workflow.

High-level process tables — two versions covering standard and non-standard task types, giving teams a clear top-level view of how design work moves from brief to delivery.

Detailed stage-by-stage table — a comprehensive map of ~20 stages in a task's lifecycle, showing exactly where and how the designer participates at each step — directly, indirectly, or as a reviewer.

Jira task templates — structured brief templates for every task type used on the website. Templates are synced with Jira as auto-populated stubs, so requestors fill in context before the task reaches a designer. No more empty briefs.

Useful links library — a curated reference hub with everything designers and collaborators need: tools, guides, processes, and contacts.

Marketing-specific process diagram — a dedicated flow diagram created to align with the marketing team on design stages, addressing the specific chaos marketing requests introduced into the workflow.

OUTCOME
Framework adopted across all 15 product teams. Used as primary onboarding material for new designers. Reduced unplanned task interruptions. Active for 6+ months with no major revisions needed.`,
  },
  {
    title: "Product Basket Form",
    slug: "basket",
    image: "/Pic-2.jpg",
    category: "Fintech & Research",
    description:
      "Iterative redesign of a debit card application flow with cross-sell basket",
    tags: ["Product Design", "Fintech", "Research"],
    stats: [
      { value: "19.4%", label: "CR1 (plan was 15%) ✓" },
      { value: "81%", label: "CR2 (plan was 79%) ✓" },
      { value: "10%", label: "Users engage with basket" },
      { value: "3 min", label: "Saved per courier meeting" },
      { value: "648K", label: "Cashback package traffic" },
      { value: "24,345", label: "Cashback package orders" },
    ],
    content: `Role: Product Designer. Team: Designer, Motional Designer, Researcher, Analyst, Marketing, Editor, Frontend/Backend, QA. Timeline: September 2023 – 2025. Status: Live on production (mobile + desktop). Live: Product Basket (https://alfabank.ru/everyday/debit-cards/alfacard/)

CONTEXT
When a new customer applies for an Alfa-Bank debit card online, they go through a multi-step application form. The business wanted to use this moment to introduce additional banking products. Goal: increase product penetration, generate commission income, and reduce cross-sell costs by embedding offers into the onboarding flow.

WHAT THE BASKET DOES
Step 1: customer sees their core order and can add optional products managed via admin panel. Step 2: personalized offers pulled dynamically from backend based on customer profile, delivery type, and city. Step 3: customer reviews full order and awaits delivery. Physical products handed over at delivery. Non-physical products set up by bank employee during in-person meeting — reducing that meeting time by an average of 3 minutes.

HOW IT EVOLVED
September 2023 — business arrived with an enormous wishlist. We made an early mistake: jumped into concept development before aligning on scope or timeline. Lesson: never start designing without a confirmed scope, a realistic timeline, and a proper brief.

November 2023 — scoped-down MVP: cashback package selection. Shipped. Impact on conversion: negligible.

Early 2024 — added cashback category selector. Shipped. Still no meaningful metric movement.

Mid 2024 — team expanded with marketing, researchers, motional designer. Two design directions tested with 5 respondents each. Result: users on both variants skipped the card design and cashback selection entirely, jumping straight to form submission.

July 2024 — full basket scope with 12+ products. Each required defining: launch quarter, application step, admin vs backend configuration, eligibility, delivery type support, and courier actions. Full requirements mapping followed.

Usability test (10 respondents): unclear why users should choose a cashback package, users couldn't recall selected products, confetti on success screen obscured important text. We categorized every finding by owner — product design, business, marketing — and resolved each before launch.

Autumn 2024 — A/B test on 43% of mobile traffic. Results: no drop in conversion, 1 in 10 customers interacted with the basket, courier meeting time decreased by ~3 minutes.

January 2025 — built full-scope target version, ran another usability test, addressed remaining issues, shipped. Desktop version designed and launched shortly after.

OUTCOME
Basket live on production across mobile and desktop. No conversion loss during rollout. 10% of users actively engage with basket. ~3 minutes saved per courier/branch meeting. 3 usability tests across 2 years shaped a significantly more usable final product.

LIVE
- Product Basket (Alfa-Card application): https://alfabank.ru/everyday/debit-cards/alfacard/`,
  },
];
