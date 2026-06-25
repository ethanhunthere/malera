"use client";

import dynamic from "next/dynamic";

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
