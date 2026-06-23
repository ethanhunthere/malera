"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const onHover = () => gsap.to(ringRef.current, { scale: 1.6, duration: 0.25 });
    const onLeave = () => gsap.to(ringRef.current, { scale: 1, duration: 0.25 });

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    gsap.ticker.add(() => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.x - 12}px, ${pos.current.y - 12}px)`;
      }
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        borderRadius: "50%",
        border: "1px solid #C9A84C",
        pointerEvents: "none",
        zIndex: 9998,
        mixBlendMode: "difference" as React.CSSProperties["mixBlendMode"],
        willChange: "transform",
      }}
    />
  );
}
