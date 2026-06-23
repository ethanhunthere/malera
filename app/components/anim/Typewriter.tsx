"use client";
import { useEffect, useRef, useState } from "react";

export function Typewriter({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("_");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          setTimeout(() => setStarted(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplay("_");
    const interval = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplay(text.slice(0, i) + (i < text.length ? "_" : ""));
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
