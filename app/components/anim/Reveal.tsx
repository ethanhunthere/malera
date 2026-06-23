"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Reveal({
  children,
  y = 40,
  blur = false,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  y?: number;
  blur?: boolean;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !ref.current) return;
      gsap.from(ref.current, {
        opacity: 0,
        y,
        filter: blur ? "blur(8px)" : "blur(0px)",
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
