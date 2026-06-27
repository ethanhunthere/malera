"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () => import("./components/AnimatedBackground"),
  {
    ssr: false,
    loading: () => <BackgroundPlaceholder />,
  }
);

/* ── Golden cursor trail — fires instantly while Three.js downloads ──
   Disabled on touch devices (useless without a mouse cursor).  On desktop
   the resize handler is debounced to 150 ms so pinch / trackpad zoom
   doesn't flood the canvas with reallocations. */
function GoldenTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // ── Skip entirely on touch-only devices ──
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GOLD = "#C9A84C";
    const TRAIL_CAP = 120;
    const PARTICLE_RADIUS = 2.2;
    const FADE_MS = 1400;

    interface Particle {
      x: number;
      y: number;
      born: number;
      radius: number;
      opacity: number;
    }

    const trail: Particle[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let raf = 0;
    let frameCount = 0;
    let baseAlpha = 0;

    const doResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Debounced resize — zoom fires hundreds of events, we only need one
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 150);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Fade in the trail over ~400ms so it doesn't flash on page load
    const fadeInStart = performance.now();
    const FADE_IN_MS = 500;

    const tick = (now: number) => {
      frameCount++;

      // Fade in base alpha
      baseAlpha = Math.min(1, (now - fadeInStart) / FADE_IN_MS);

      // Spawn particles when mouse is on screen
      if (mouseX > 0 && mouseY > 0 && frameCount % 1 === 0) {
        // Cluster of 2-4 tiny particles per frame for organic feel
        const count = Math.random() < 0.3 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const spread = 1.5;
          trail.push({
            x: mouseX + (Math.random() - 0.5) * spread,
            y: mouseY + (Math.random() - 0.5) * spread,
            born: now,
            radius: PARTICLE_RADIUS + Math.random() * 2.5,
            opacity: 0.5 + Math.random() * 0.5,
          });
        }
      }

      // Cull old + render
      ctx.clearRect(0, 0, canvas.width / (Math.min(window.devicePixelRatio || 1, 2)), canvas.height / (Math.min(window.devicePixelRatio || 1, 2)));

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        const age = now - p.born;
        if (age > FADE_MS) {
          trail.splice(i, 1);
          continue;
        }
        const life = 1 - age / FADE_MS;
        // Ease-out for snappier feel
        const easedLife = 1 - Math.pow(1 - life, 2.5);
        const alpha = easedLife * p.opacity * baseAlpha;

        // Glow pass (large, very faint)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${alpha * 0.08})`;
        ctx.fill();

        // Core pass
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    doResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}

function BackgroundPlaceholder() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Black base + ambient light gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255,255,255,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(220,225,240,0.03) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 20% 30%, rgba(240,235,225,0.025) 0%, transparent 50%),
            #030303
          `,
        }}
      />
      {/* Golden cursor trail — interactive, instant */}
      <GoldenTrail />
    </div>
  );
}

export default AnimatedBackground;
