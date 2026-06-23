"use client";
import { useEffect, useRef } from "react";

const CODE_FRAGMENTS = [
  // JavaScript / TypeScript
  "const", "let", "async", "=>", "await", "return", "export",
  "import", "useState", "useEffect", "interface", "type",
  "Promise<T>", ".then()", ".map()", "null", "undefined",
  "console.log", "===", "!==", "...spread", "const fn =",
  "(props)", "?.", "??", "typeof", "instanceof",
  // React / JSX
  "<div>", "</div>", "<Component", "/>", "onClick={}",
  "className=", "useRef()", "useCallback", "React.FC",
  "children:", "props.", "useState(false)", "key={i}",
  // CSS / Tailwind
  "flex", "grid", "z-index:", "opacity:", "transform:",
  "transition:", "#C9A84C", "rgba(0,0,0,0)", "clamp(",
  "rem", "vh", "vw", "@media", "hover:", "focus:",
  // Python
  "def ", "return", "import", "class", "self.",
  "if __name__", "lambda", "print()", "range()",
  // SQL
  "SELECT", "FROM", "WHERE", "JOIN", "INSERT",
  // Rust
  "fn main()", "let mut", "::new()", "impl", "pub fn",
  // Generic
  "{ }", "[ ]", "()", "=>", "//", "/*", "*/",
  "0x", "null", "true", "false", "404", "200",
  // Malera branded
  "malera()", "build()", "ship()", "create()",
];

interface Particle {
  x: number;
  y: number;
  text: string;
  opacity: number;
  size: number;
  speed: number;
  angle: number;
  wobble: number;
  wobbleSpeed: number;
  life: number;
  lifeSpeed: number;
  color: "gold" | "white";
}

export function CodeWind() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const particles = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const isMobile = window.innerWidth < 768;
    const TARGET_COUNT = isMobile ? 60 : 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    if (!isMobile) window.addEventListener("mousemove", onMove, { passive: true });

    const spawnParticle = (): Particle => {
      const isGold = Math.random() > 0.72;
      const fromLeft = Math.random() > 0.3;
      return {
        x: fromLeft ? -50 : Math.random() * window.innerWidth,
        y: fromLeft ? Math.random() * window.innerHeight : -20,
        text: CODE_FRAGMENTS[Math.floor(Math.random() * CODE_FRAGMENTS.length)],
        opacity: 0,
        size: Math.random() * 5 + 9,
        speed: Math.random() * 0.4 + 0.15,
        angle: (Math.random() * 20 - 10) * (Math.PI / 180),
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.008 + 0.003,
        life: 0,
        lifeSpeed: Math.random() * 0.003 + 0.001,
        color: isGold ? "gold" : "white",
      };
    };

    // Pre-populate screen
    for (let i = 0; i < Math.round(TARGET_COUNT * 0.9); i++) {
      const p = spawnParticle();
      p.x = Math.random() * window.innerWidth;
      p.y = Math.random() * window.innerHeight;
      p.life = Math.random();
      particles.current.push(p);
    }

    const opacityScale = isMobile ? 0.6 : 1.0;
    let frameStart = 0;
    let adaptiveCount = TARGET_COUNT;

    const tick = (time: number) => {
      animRef.current = requestAnimationFrame(tick);

      // Adaptive quality: if frame takes >32ms halve count
      const elapsed = time - frameStart;
      frameStart = time;
      if (elapsed > 32 && adaptiveCount > 80) adaptiveCount = Math.round(adaptiveCount * 0.8);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      while (particles.current.length < adaptiveCount) {
        particles.current.push(spawnParticle());
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;

      particles.current = particles.current.filter((p) => {
        p.life += p.lifeSpeed;
        const lifeCurve = Math.sin(p.life * Math.PI);
        const baseOpacity = p.color === "gold" ? 0.18 : 0.10;
        p.opacity = lifeCurve * baseOpacity * opacityScale;

        const dx = p.x / canvas.width - mx;
        const dy = p.y / canvas.height - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulsion = !isMobile && dist < 0.15 ? (0.15 - dist) * 2 : 0;

        const windX = Math.cos(p.angle) * p.speed;
        const windY = Math.sin(p.angle + 0.3) * p.speed * 0.4;

        p.wobble += p.wobbleSpeed;
        const wobbleOffset = Math.sin(p.wobble) * 0.3;

        p.x += windX + wobbleOffset + dx * repulsion * 0.8;
        p.y += windY + dy * repulsion * 0.8;

        if (p.opacity > 0.001) {
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.font = `${p.size}px "Geist Mono", "Courier New", monospace`;
          ctx.fillStyle = p.color === "gold" ? "#C9A84C" : "#ffffff";
          ctx.fillText(p.text, p.x, p.y);
          ctx.restore();
        }

        return (
          p.life < Math.PI &&
          p.x < canvas.width + 100 &&
          p.y < canvas.height + 50
        );
      });
    };

    animRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      if (!isMobile) window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  );
}
