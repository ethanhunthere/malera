"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CODE_SYMBOLS = [
  "0", "1", "{", "}", "(", ")", "[", "]", "/", "<", ">", ";", ":", ".",
];

function randomTriangle(): string {
  // Real broken glass forms random triangles — 3 points scattered around the bounding box
  const a = `${10 + Math.random() * 80}% ${Math.random() * 20}%`;
  const b = `${80 + Math.random() * 20}% ${60 + Math.random() * 40}%`;
  const c = `${Math.random() * 40}% ${70 + Math.random() * 30}%`;
  return `polygon(${a}, ${b}, ${c})`;
}

interface Fragment {
  id: number;
  x: number;
  y: number;
  size: number;
  clipPath: string;
  gradientAngle: number;
  symbol: string | null;
  driftX: number;
  driftY: number;
  rotation: number;
  duration: number;
  delay: number;
}

function buildFragments(
  _baseId: number,
  cx: number,
  cy: number,
  w: number,
  h: number,
): Fragment[] {
  // 4-6 jagged triangles per original shard — like real broken glass
  const count = 4 + Math.floor(Math.random() * 3);
  const frags: Fragment[] = [];
  for (let i = 0; i < count; i++) {
    const size = 12 + Math.random() * 24;
    // Real glass tumbles — wide rotation range
    const rot = (Math.random() - 0.5) * 720;
    const dx = (Math.random() - 0.5) * 340;
    const dy = 200 + Math.random() * 600;
    frags.push({
      id: 0,
      x: cx + (Math.random() - 0.5) * w * 1.1,
      y: cy + (Math.random() - 0.5) * h * 1.1,
      size,
      clipPath: randomTriangle(),
      gradientAngle: Math.floor(Math.random() * 360),
      symbol: Math.random() < 0.25 ? CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)] : null,
      driftX: dx,
      driftY: dy,
      rotation: rot,
      duration: 3500 + Math.random() * 4500,
      delay: Math.random() * 500,
    });
  }
  return frags;
}

export default function ShatteringShards() {
  const [fragments, setFragments] = useState<Fragment[]>([]);
  const shatteredRef = useRef(new Set<string>());
  const idCounter = useRef(0);

  const shatterSection = useCallback((section: "hero" | "services") => {
    if (shatteredRef.current.has(section)) return;
    shatteredRef.current.add(section);

    const selector = `[data-shard-section="${section}"]`;
    const shards = document.querySelectorAll(selector);
    if (shards.length === 0) return;

    const newFrags: Fragment[] = [];
    shards.forEach((el, idx) => {
      el.classList.add("shard-shattered");
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const frags = buildFragments(idx, cx, cy, rect.width, rect.height);
      frags.forEach((f) => { f.id = idCounter.current++; });
      newFrags.push(...frags);
    });

    setFragments((prev) => [...prev, ...newFrags]);

    const maxT = Math.max(...newFrags.map((f) => f.duration + f.delay));
    setTimeout(() => {
      setFragments((prev) =>
        prev.filter((f) => !newFrags.some((nf) => nf.id === f.id)),
      );
    }, maxT + 600);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      shatterSection("hero");
      shatterSection("services");
    }, 600);
    return () => clearTimeout(t);
  }, [shatterSection]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden="true"
    >
      {fragments.map((f) => (
        <div
          key={f.id}
          className="absolute glass-fragment"
          style={{
            left: f.x,
            top: f.y,
            width: f.size,
            height: f.size,
            clipPath: f.clipPath,
            background: `linear-gradient(${f.gradientAngle}deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 30%, transparent 55%, rgba(255,255,255,0.10) 100%)`,
            animation: `glass-tumble ${f.duration}ms ${f.delay}ms cubic-bezier(0.12, 0, 0.4, 1) forwards`,
            ["--burst-x" as string]: `${-f.driftX * 0.15}px`,
            ["--burst-y" as string]: `${-f.driftY * 0.08}px`,
            ["--drift-x" as string]: `${f.driftX}px`,
            ["--drift-y" as string]: `${f.driftY}px`,
            ["--spin" as string]: `${f.rotation}deg`,
          } as React.CSSProperties}
        >
          {f.symbol && <span className="glass-etch">{f.symbol}</span>}
        </div>
      ))}
    </div>
  );
}
