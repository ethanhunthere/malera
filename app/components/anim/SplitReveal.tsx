"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function SplitReveal({
  children,
  className = "",
  tag = "h2",
  stagger = 0.06,
  scrub = false,
}: {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
  scrub?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !ref.current) return;
      let split: SplitText;
      document.fonts.ready.then(() => {
        split = SplitText.create(ref.current!, { type: "lines,words", mask: "lines" });
        split.lines.forEach((line) => {
          const mask = line.parentElement;
          if (mask) {
            mask.style.paddingBottom = "0.2em";
            mask.style.marginBottom = "-0.2em";
            mask.style.overflow = "hidden";
          }
        });
        gsap.from(split.words, {
          yPercent: 110,
          duration: 0.9,
          ease: "power4.out",
          stagger,
          onComplete: () => {
            split.lines.forEach((line) => {
              const mask = line.parentElement;
              if (mask) {
                mask.style.overflow = "visible";
                mask.style.paddingBottom = "0";
                mask.style.marginBottom = "0";
              }
            });
          },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            ...(scrub ? { end: "top 45%", scrub: 1 } : { once: true }),
          },
        });
      });
      return () => {
        if (split) split.revert();
      };
    },
    { scope: ref }
  );

  const props = { ref, className, "aria-label": children };
  if (tag === "h1") return <h1 {...props}>{children}</h1>;
  if (tag === "h3") return <h3 {...props}>{children}</h3>;
  if (tag === "p") return <p {...props}>{children}</p>;
  return <h2 {...props}>{children}</h2>;
}
