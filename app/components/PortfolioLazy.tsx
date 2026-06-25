"use client";

import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("./Portfolio"), { ssr: false });

export default function PortfolioLazy() {
  return <Portfolio />;
}
