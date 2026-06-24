"use client";

import { useEffect, useRef, useState } from "react";

// ── Dark glass shard ── jagged polygon, almost black, single specular edge ──
interface Shard {
  id: number;
  x: number; // viewport-relative left
  y: number; // viewport-relative top
  w: number;
  h: number;
  clipPath: string; // polygon() with 4-7 vertices
  gradientAngle: number; // direction of the subtle specular sheen
  // physics
  vx: number; // horizontal drift velocity (px/s)
  vy: number; // initial vertical velocity (px/s) — burst upward, gravity pulls down
  rotation: number; // total spin over lifetime (deg)
  duration: number; // fall duration in ms
  delay: number; // stagger delay in ms
}

// ── Generate a jagged polygon for a given bounding box ──
function jaggedPolygon(w: number, h: number): string {
  const verts = 4 + Math.floor(Math.random() * 4); // 4-7 vertices
  const points: string[] = [];
  for (let i = 0; i < verts; i++) {
    // Distribute vertices around the perimeter with random inset
    const t = i / verts;
    const edgeTolerance = 0.18; // how far from edge center
    let px: number, py: number;
    if (t < 0.25) {
      px = Math.random() * w;
      py = -edgeTolerance * h + Math.random() * edgeTolerance * 2 * h;
    } else if (t < 0.5) {
      px = w - edgeTolerance * w + Math.random() * edgeTolerance * 2 * w;
      py = Math.random() * h;
    } else if (t < 0.75) {
      px = Math.random() * w;
      py = h - edgeTolerance * h + Math.random() * edgeTolerance * 2 * h;
    } else {
      px = -edgeTolerance * w + Math.random() * edgeTolerance * 2 * w;
      py = Math.random() * h;
    }
    points.push(`${(px / w) * 100}% ${(py / h) * 100}%`);
  }
  return `polygon(${points.join(", ")})`;
}

// ── Dark glass gradient — almost black, one subtle specular highlight ──
function darkGlassGradient(angle: number): string {
  // Dark tinted glass: deep charcoal body, single barely-visible white reflection streak
  return `linear-gradient(${angle}deg,
    rgba(18,18,22,0.92) 0%,
    rgba(15,15,18,0.94) 15%,
    rgba(22,22,28,0.88) 28%,
    rgba(40,40,50,0.70) 32%,
    rgba(60,60,72,0.55) 33%,
    rgba(22,22,28,0.88) 35%,
    rgba(12,12,15,0.96) 50%,
    rgba(10,10,12,0.97) 100%
  )`;
}

export default function ShatteringShards() {
  const [shards, setShards] = useState<Shard[]>([]);
  const [shattered, setShattered] = useState(false);
  const idCounter = useRef(0);

  useEffect(() => {
    // Build small shards covering the entire viewport — like shattered safety glass
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const built: Shard[] = [];

    // Dense grid of tiny fragments — real broken glass has many small pieces
    const shardBaseSize = 28; // small shards
    const cols = Math.ceil(vw / shardBaseSize);
    const rows = Math.ceil(vh / shardBaseSize);
    const cellW = vw / cols;
    const cellH = vh / rows;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Jitter within cell for organic fracture pattern
        const jitterW = cellW * 0.4;
        const jitterH = cellH * 0.4;

        const shardW = cellW + jitterW + Math.random() * jitterW * 0.6;
        const shardH = cellH + jitterH + Math.random() * jitterH * 0.6;
        const shardX = col * cellW - jitterW * 0.3 + Math.random() * jitterW * 0.3;
        const shardY = row * cellH - jitterH * 0.3 + Math.random() * jitterH * 0.3;

        // Impact point: center of viewport
        const cx = vw * 0.5;
        const cy = vh * 0.45;
        const shardCX = shardX + shardW / 2;
        const shardCY = shardY + shardH / 2;

        // Burst direction: away from impact center
        const dx = shardCX - cx;
        const dy = shardCY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const burstPower = 140 + Math.random() * 280;

        const vx = (dx / dist) * burstPower + (Math.random() - 0.5) * 100;
        const vy = (dy / dist) * burstPower * 0.5 - 80 - Math.random() * 180;

        const rotation = (Math.random() - 0.5) * 480;
        const duration = 1400 + Math.random() * 2000;
        const delay = Math.random() * 300;

        built.push({
          id: idCounter.current++,
          x: shardX,
          y: shardY,
          w: shardW,
          h: shardH,
          clipPath: jaggedPolygon(shardW, shardH),
          gradientAngle: 120 + Math.random() * 120, // top-left or top-right sheen
          vx,
          vy,
          rotation,
          duration,
          delay,
        });
      }
    }

    setShards(built);

    // Shatter after a moment — glass breaks
    const breakTimer = setTimeout(() => {
      setShattered(true);
    }, 800);

    // Clean up shards after longest animation completes
    const maxDuration = Math.max(...built.map((s) => s.duration + s.delay));
    const cleanupTimer = setTimeout(() => {
      setShards([]);
    }, 800 + maxDuration + 400);

    return () => {
      clearTimeout(breakTimer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{ pointerEvents: shattered ? "none" : "auto" }}
      aria-hidden="true"
    >
      {shards.map((s) => {
        const isShattered = shattered;
        return (
          <div
            key={s.id}
            className="dark-glass-shard"
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: s.w,
              height: s.h,
              clipPath: s.clipPath,
              background: darkGlassGradient(s.gradientAngle),
              willChange: isShattered ? "transform, opacity" : "auto",
              ...(isShattered
                ? {
                    animation: `dark-glass-fall ${s.duration}ms ${s.delay}ms cubic-bezier(0.22, 0, 0.55, 1) forwards`,
                    ["--vx" as string]: `${s.vx}px`,
                    ["--vy" as string]: `${s.vy}px`,
                    ["--rot" as string]: `${s.rotation}deg`,
                  }
                : {}),
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}

