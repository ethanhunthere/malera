"use client";

import dynamic from "next/dynamic";

const Pricing = dynamic(() => import("./Pricing"), { ssr: false });

export default function PricingLazy() {
  return <Pricing />;
}
