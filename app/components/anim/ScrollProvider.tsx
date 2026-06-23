"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Safety net: refresh all triggers after fonts/images settle
    const safety = setTimeout(() => ScrollTrigger.refresh(), 2500);
    return () => clearTimeout(safety);
  }, []);

  return <>{children}</>;
}
