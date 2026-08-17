export interface ExperienceEntry {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  location: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "QA & Product",
    company: "CleevioX",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Testing and helping to build web and mobile applications, with a focus on product quality and user experience — across Web3 and AI products.",
  },
  {
    role: "Product & UX Tester",
    company: "DexKit",
    period: "2023 — 2024",
    location: "Remote",
    summary:
      "Tested the DexKit Web3 application, reporting bugs and usability issues, and collaborated with the development team on new features and improvements that shipped.",
  },
  {
    role: "Web3 Builder",
    company: "Cardano Blockchain",
    period: "2020 — 2023",
    location: "Remote",
    summary:
      "Built two Web3 projects on Cardano — a native token and an NFT collection. Designed and developed the project websites, handled the blockchain side of things, built the brand identity, and ran community, social media, and strategic partnerships within a fully decentralized ecosystem.",
  },
  {
    role: "Ecommerce Business Owner",
    company: "Hempify.cz",
    period: "2019 — 2020",
    location: "Remote",
    summary:
      "Built and ran an online store focused on selling hemp wellness products, owning the business end to end — from building and maintaining the ecommerce platform to marketing, sales, customer service, and order fulfillment.",
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2014 — 2019",
    location: "Remote",
    summary:
      "Built and maintained websites — mostly blogs and affiliate projects using WordPress CMS, handling everything from setup and plugin integration to SEO.",
  },
];
