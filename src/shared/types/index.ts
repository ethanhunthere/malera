/**
 * Shared TypeScript types for the Malera Studio project.
 */

/** Navigation link definition */
export interface NavLink {
  label: string;
  href: string;
}

/** Service offering card */
export interface Service {
  num: string;
  title: string;
  desc: string;
}

/** Portfolio project */
export interface Project {
  id: string;
  title: string;
  url: string;
  category: string;
  year: string;
  accent: string;
  hero: string;
  description: string;
  tags: string[];
}

/** Pricing plan */
export interface Plan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  tier: number;
}

/** Company link (footer) */
export interface CompanyLink {
  label: string;
  href: string;
}
