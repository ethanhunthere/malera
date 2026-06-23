"use client";
import { useEffect, useState } from "react";

export function LineNumbers() {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      setLit(Math.round(progress * 98));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="hidden lg:flex"
      style={{
        position: "fixed",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        flexDirection: "column",
        gap: 1,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 99 }, (_, i) => (
        <span
          key={i}
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "7px",
            lineHeight: 1,
            color: i <= lit ? "#C9A84C" : "#1A1A1A",
            transition: "color 0.1s",
            letterSpacing: "0.05em",
          }}
        >
          {String(i + 1).padStart(3, "0")}
        </span>
      ))}
    </div>
  );
}
