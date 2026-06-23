"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export function Magnetic({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    gsap.to(ref.current, {
      x: (e.clientX - (r.left + r.width / 2)) * 0.35,
      y: (e.clientY - (r.top + r.height / 2)) * 0.35,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const leave = () =>
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.4)",
    });

  return (
    <button ref={ref} className={className} onMouseMove={move} onMouseLeave={leave} onClick={onClick}>
      {children}
    </button>
  );
}
