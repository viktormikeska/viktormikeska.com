export interface ExperienceEntry {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "QA & Product",
    company: "CleevioX",
    period: "2024 — Present",
    summary:
      "Testing and helping build web and mobile applications across Web3 and AI products. Also managing projects — backlog, priorities, estimations, sprint planning and releases.",
  },
  {
    role: "Product & UX Tester",
    company: "DexKit",
    period: "2023 — 2024",
    summary:
      "Tested the DexKit Web3 application, reporting bugs and usability issues, and collaborated with the development team on new features and improvements that shipped.",
  },
  {
    role: "Web3 Builder",
    company: "Cardano Blockchain",
    period: "2020 — 2023",
    summary:
      "Built two Web3 projects on Cardano blockchain end to end — owned product direction, brand identity, go-to-market strategy, managed community growth and strategic partnerships, handled all technical implementation including blockchain and web development.",
  },
  {
    role: "Ecommerce Business Owner",
    company: "Hempify.cz",
    period: "2019 — 2020",
    summary:
      "Built and ran an online store focused on selling hemp wellness products, owning the business end to end — from building and maintaining the ecommerce platform to marketing, sales, customer service, and order fulfillment.",
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2014 — 2019",
    summary:
      "Built and maintained websites — mostly blogs and affiliate projects using WordPress CMS, handling everything from setup and plugin integration to SEO.",
  },
];
