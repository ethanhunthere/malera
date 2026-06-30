"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loaded home section components.
 * Each is wrapped in next/dynamic with ssr:false since they
 * contain client-only interactions (animations, canvas, forms).
 */
export const Portfolio = dynamic(
  () => import("./components/Portfolio"),
  { ssr: false }
);

export const Pricing = dynamic(
  () => import("./components/Pricing"),
  { ssr: false }
);

export const Contact = dynamic(
  () => import("./components/Contact"),
  { ssr: false }
);
