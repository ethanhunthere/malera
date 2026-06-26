"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Container from "@/src/features/layout/components/Container";

const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    desc: "Custom websites and web applications built with modern frameworks. Fast, accessible, and SEO-optimized.",
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences.",
  },
  {
    num: "03",
    title: "Video Production",
    desc: "Professional video production from concept to final cut. Brand films, commercials, and social content.",
  },
  {
    num: "04",
    title: "AI Bots & Automation",
    desc: "Intelligent automation solutions and AI-powered chatbots that streamline your business workflows.",
  },

];

/* ── Geometry (pixels relative to container) ── */
interface CableGeo {
  panelBottom: number;
  panelLeft: number;
  panelRight: number;
  cards: { top: number; bottom: number; left: number; right: number }[];
}

/* ── NeuralNetwork: multi-layer perceptron connecting panel → cards → each other ── */
function NeuralNetwork({
  geo,
  hoveredIdx,
  containerWidth,
}: {
  geo: CableGeo | null;
  hoveredIdx: number | null;
  containerWidth: number;
}) {
  if (!geo || geo.cards.length === 0) return null;

  const trunkX = geo.panelLeft + (geo.panelRight - geo.panelLeft) / 2;
  const trunkTop = geo.panelBottom + 4;
  const trunkBottom = geo.cards[geo.cards.length - 1].bottom + 4;
  const n = geo.cards.length;

  /* ── Inter-card bezier curve (right edge → right edge, arcing outward) ── */
  const interCurve = (from: number, to: number) => {
    const fa = geo.cards[from];
    const fb = geo.cards[to];
    const fy = (fa.top + fa.bottom) / 2;
    const ty = (fb.top + fb.bottom) / 2;
    const fx = fa.right + 2;
    const tx = fb.right + 2;
    const dist = Math.abs(to - from);
    const arc = 28 + dist * 34;
    return `M ${fx} ${fy} C ${fx + arc} ${fy}, ${tx + arc} ${ty}, ${tx} ${ty}`;
  };

  /* ── Build all (from, to) pairs ── */
  const meshPairs: { from: number; to: number; dist: number }[] = [];
  for (let d = 1; d < n; d++) {
    for (let f = 0; f + d < n; f++) {
      meshPairs.push({ from: f, to: f + d, dist: d });
    }
  }

  /* ── Connection style by distance ── */
  const meshStyle = (dist: number, active: boolean) => {
    const tiers: { stroke: string; width: number; dash: string }[] = [
      { stroke: "rgba(201,168,76,0.12)", width: 0.4, dash: "4 6" },
      { stroke: "rgba(201,168,76,0.08)", width: 0.28, dash: "3 7" },
      { stroke: "rgba(201,168,76,0.04)", width: 0.2, dash: "2 9" },
      { stroke: "rgba(201,168,76,0.02)", width: 0.15, dash: "1.5 12" },
    ];
    const t = tiers[Math.min(dist - 1, 3)];
    return {
      stroke: active ? "rgba(201,168,76,0.22)" : t.stroke,
      width: active ? t.width * 1.5 : t.width,
      dash: active ? "5 5" : t.dash,
    };
  };

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-0 overflow-visible"
      width={containerWidth}
      height={trunkBottom + 20}
      viewBox={`0 0 ${containerWidth} ${trunkBottom + 20}`}
    >
      <defs>
        <filter id="nn-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Signal propagation wave gradient */}
        <linearGradient id="sig-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(201,168,76,0)">
            <animate attributeName="offset" values="-0.2;1.2" dur="2.8s" repeatCount="indefinite" />
          </stop>
          <stop offset="10%" stopColor="rgba(201,168,76,0.08)">
            <animate attributeName="offset" values="-0.1;1.3" dur="2.8s" repeatCount="indefinite" />
          </stop>
          <stop offset="20%" stopColor="rgba(201,168,76,0.02)">
            <animate attributeName="offset" values="0;1.4" dur="2.8s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="rgba(201,168,76,0)">
            <animate attributeName="offset" values="0.1;1.5" dur="2.8s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      {/* ════════════════════════════════════════════════════════
          LAYER 0  Panel source neurons (input layer)
          ════════════════════════════════════════════════════════ */}
      {Array.from({ length: 7 }, (_, i) => {
        const sx = geo.panelLeft + 15 + (geo.panelRight - geo.panelLeft - 30) * (i / 6);
        const sy = geo.panelBottom;
        const active = hoveredIdx !== null;
        return (
          <g key={`src-${i}`}>
            {/* Axon dropping from panel toward backbone */}
            <line
              x1={sx} y1={sy} x2={trunkX - 12 + (sx - trunkX) * 0.22} y2={trunkTop + 20}
              stroke="rgba(201,168,76,0.02)" strokeWidth="0.3"
              strokeDasharray="0.8 4"
            />
            {/* Source node at panel edge */}
            <circle
              cx={sx} cy={sy}
              r={active ? 1.3 : 0.9}
              fill={active ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.05)"}
              filter="url(#nn-glow)"
              style={{ transition: 'all 0.6s ease' }}
            />
          </g>
        );
      })}
      {/* Panel bottom glow bar */}
      <line
        x1={geo.panelLeft + 12} y1={geo.panelBottom}
        x2={geo.panelRight - 12} y2={geo.panelBottom}
        stroke="rgba(201,168,76,0.025)" strokeWidth="0.5"
        strokeDasharray="1.5 4"
      />

      {/* ════════════════════════════════════════════════════════
          LAYER 0.5  Panel → card fan-out (direct ownership links)
          ════════════════════════════════════════════════════════ */}
      {geo.cards.map((card, i) => {
        const cardX = card.left + 4;
        const cardCY = (card.top + card.bottom) / 2;
        const panelCX = geo.panelLeft + (geo.panelRight - geo.panelLeft) / 2;
        const sx = panelCX + (cardX - panelCX) * 0.25;
        const sy = geo.panelBottom;
        const active = hoveredIdx === i;
        const dx = cardX - sx;
        const dy = cardCY - sy;
        const midX = sx + dx * 0.45;
        const midY = sy + dy * 0.4;

        return (
          <g key={`panel-link-${i}`}>
            {/* Main fan-out curve */}
            <path
              d={`M ${sx} ${sy} C ${sx + dx * 0.3} ${sy + dy * 0.5}, ${cardX - dx * 0.25} ${cardCY - dy * 0.35}, ${cardX} ${cardCY}`}
              fill="none"
              stroke={active ? "rgba(201,168,76,0.22)" : "rgba(201,168,76,0.04)"}
              strokeWidth={active ? 0.6 : 0.28}
              strokeDasharray={active ? "3 3" : "2 8"}
              strokeLinecap="round"
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Ghost fan-out (offset) */}
            <path
              d={`M ${sx} ${sy} C ${sx + dx * 0.3} ${sy + dy * 0.5}, ${cardX - dx * 0.25} ${cardCY - dy * 0.35}, ${cardX} ${cardCY}`}
              fill="none"
              stroke={active ? "rgba(201,168,76,0.04)" : "rgba(201,168,76,0.008)"}
              strokeWidth={active ? 1.4 : 0.4}
              strokeDasharray={active ? "1 10" : "0.5 14"}
              transform="translate(1.5, 1.5)"
              strokeLinecap="round"
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Signal wave on active */}
            {active && (
              <path
                d={`M ${sx} ${sy} C ${sx + dx * 0.3} ${sy + dy * 0.5}, ${cardX - dx * 0.25} ${cardCY - dy * 0.35}, ${cardX} ${cardCY}`}
                fill="none"
                stroke="url(#sig-wave)" strokeWidth="1.0"
                strokeLinecap="round"
              />
            )}
            {/* Midpoint relay neuron */}
            <circle
              cx={midX} cy={midY}
              r={active ? 1.8 : 0.8}
              fill={active ? "rgba(201,168,76,0.22)" : "rgba(201,168,76,0.04)"}
              filter={active ? "url(#nn-glow)" : undefined}
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Tiny dendrite stubs at midpoint */}
            <line x1={midX} y1={midY} x2={midX + 6} y2={midY - 4}
              stroke={active ? "rgba(201,168,76,0.08)" : "rgba(201,168,76,0.015)"}
              strokeWidth="0.25" style={{ transition: 'all 0.5s ease' }} />
            <line x1={midX} y1={midY} x2={midX - 4} y2={midY + 5}
              stroke={active ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.01)"}
              strokeWidth="0.25" style={{ transition: 'all 0.5s ease' }} />
            {/* Source neuron at panel edge */}
            <circle
              cx={sx} cy={sy}
              r={active ? 1.5 : 0.9}
              fill={active ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.06)"}
              filter="url(#nn-glow)"
              style={{ transition: 'all 0.5s ease' }}
            />
            <circle
              cx={sx} cy={sy}
              r={active ? 0.7 : 0.4}
              fill={active ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.15)"}
              style={{ transition: 'all 0.5s ease' }}
            />
          </g>
        );
      })}

      {/* ════════════════════════════════════════════════════════
          LAYER 1  Data backbone (hidden layer trunk)
          ════════════════════════════════════════════════════════ */}
      <line
        x1={trunkX} y1={trunkTop} x2={trunkX} y2={trunkBottom}
        stroke="rgba(201,168,76,0.04)" strokeWidth="0.5"
        strokeDasharray="2 7"
      />
      <line
        x1={trunkX - 3} y1={trunkTop + 10} x2={trunkX - 3} y2={trunkBottom - 10}
        stroke="rgba(201,168,76,0.015)" strokeWidth="0.3"
        strokeDasharray="1 14"
      />

      {/* ── Trunk neurons (hidden layer nodes) ── */}
      {geo.cards.map((card, i) => {
        const cy = (card.top + card.bottom) / 2;
        const active = hoveredIdx === i;
        return (
          <g key={`neuron-trunk-${i}`}>
            {/* Neuron body */}
            <circle
              cx={trunkX} cy={cy}
              r={active ? 3.5 : 2.2}
              fill={active ? "rgba(201,168,76,0.28)" : "rgba(201,168,76,0.08)"}
              filter="url(#nn-glow)"
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Core */}
            <circle
              cx={trunkX} cy={cy}
              r={active ? 1.3 : 0.8}
              fill={active ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)"}
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Binary label */}
            <text
              x={trunkX + 9} y={cy + 1.3}
              fill={active ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.05)"}
              fontSize="5.5" fontFamily="monospace" fontWeight="bold"
              style={{ transition: 'fill 0.5s ease' }}
            >
              {i % 2 === 0 ? '1' : '0'}
            </text>
            {/* Subtle breathing label glow (not a dot, just text opacity) */}
            {!active && (
              <text
                x={trunkX + 9} y={cy + 1.3}
                fill="rgba(201,168,76,0.07)" fontSize="5.5"
                fontFamily="monospace" fontWeight="bold" opacity="0"
              >
                {i % 2 === 0 ? '1' : '0'}
                <animate attributeName="opacity" values="0;0.6;0" dur={`${3 + i * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
              </text>
            )}
          </g>
        );
      })}

      {/* Lateral inter-neuron backbone links */}
      {geo.cards.slice(0, -1).map((card, i) => {
        const y1 = (card.top + card.bottom) / 2;
        const y2 = (geo.cards[i + 1].top + geo.cards[i + 1].bottom) / 2;
        return (
          <line key={`lat-${i}`}
            x1={trunkX - 7} y1={y1 + 4} x2={trunkX - 7} y2={y2 - 4}
            stroke="rgba(201,168,76,0.025)" strokeWidth="0.3"
            strokeDasharray="1 4"
          />
        );
      })}

      {/* ════════════════════════════════════════════════════════
          LAYER 2  Synaptic branches: backbone → card inputs
          ════════════════════════════════════════════════════════ */}
      {geo.cards.map((card, i) => {
        const cy = (card.top + card.bottom) / 2;
        const cardX = card.left + 4;
        const active = hoveredIdx === i;
        const span = cardX - trunkX;
        const m1x = trunkX + span * 0.38;
        const m2x = trunkX + span * 0.7;

        return (
          <g key={`synapse-${i}`}>
            {/* Branch line */}
            <path
              d={`M ${trunkX} ${cy} C ${trunkX + span * 0.5} ${cy - 7}, ${cardX - span * 0.3} ${cy - 4}, ${cardX} ${cy}`}
              fill="none"
              stroke={active ? "rgba(201,168,76,0.22)" : "rgba(201,168,76,0.04)"}
              strokeWidth={active ? 0.7 : 0.3}
              strokeDasharray={active ? "3 3" : "1 6"}
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Secondary ghost branch (slight offset) */}
            <path
              d={`M ${trunkX} ${cy} C ${trunkX + span * 0.5} ${cy - 7}, ${cardX - span * 0.3} ${cy - 4}, ${cardX} ${cy}`}
              fill="none"
              stroke={active ? "rgba(201,168,76,0.04)" : "rgba(201,168,76,0.01)"}
              strokeWidth={active ? 1.4 : 0.5}
              strokeDasharray={active ? "1 8" : "0.5 12"}
              transform="translate(1.2, 1.2)"
              style={{ transition: 'all 0.5s ease' }}
            />

            {/* Midpoint interneurons (staggered) */}
            {[{ x: m1x, y: cy - 7 }, { x: m2x, y: cy + 6 }].map((mn, mi) => (
              <g key={`mid-${i}-${mi}`}>
                <line x1={mn.x} y1={mn.y} x2={mn.x + 7} y2={mn.y - 5}
                  stroke="rgba(201,168,76,0.02)" strokeWidth="0.25" />
                <line x1={mn.x} y1={mn.y} x2={mn.x - 5} y2={mn.y + 4}
                  stroke="rgba(201,168,76,0.015)" strokeWidth="0.25" />
                <circle
                  cx={mn.x} cy={mn.y}
                  r={active ? 1.8 : 0.9}
                  fill={active ? "rgba(201,168,76,0.18)" : "rgba(201,168,76,0.05)"}
                  filter={active ? "url(#nn-glow)" : undefined}
                  style={{ transition: 'all 0.5s ease' }}
                />
              </g>
            ))}

            {/* Card left-edge input port (subtle vertical line, not a dot) */}
            <line
              x1={cardX - 1} y1={cy - 9} x2={cardX - 1} y2={cy + 9}
              stroke={active ? "rgba(201,168,76,0.18)" : "rgba(201,168,76,0.03)"}
              strokeWidth={active ? 1.2 : 0.4}
              strokeLinecap="round"
              style={{ transition: 'all 0.5s ease' }}
            />
          </g>
        );
      })}

      {/* ════════════════════════════════════════════════════════
          LAYER 3  Inter-card mesh (output layer cross-talk)
          ════════════════════════════════════════════════════════ */}
      {meshPairs.map(({ from, to, dist }) => {
        const active = hoveredIdx === from || hoveredIdx === to;
        const s = meshStyle(dist, active);
        const curve = interCurve(from, to);
        const fromCard = geo.cards[from];
        const toCard = geo.cards[to];
        const fromY = (fromCard.top + fromCard.bottom) / 2;
        const toY = (toCard.top + toCard.bottom) / 2;

        return (
          <g key={`mesh-${from}-${to}`}>
            {/* Main connection curve */}
            <path
              d={curve} fill="none"
              stroke={s.stroke} strokeWidth={s.width}
              strokeDasharray={s.dash}
              strokeLinecap="round"
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Signal wave overlay on active connections */}
            {active && (
              <path
                d={curve} fill="none"
                stroke="url(#sig-wave)" strokeWidth={s.width * 1.8}
                strokeLinecap="round"
              />
            )}
            {/* Tiny node at start point */}
            <circle
              cx={fromCard.right + 2} cy={fromY}
              r={active ? 1.0 : 0.5}
              fill={active ? "rgba(201,168,76,0.20)" : "rgba(201,168,76,0.05)"}
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Tiny node at end point */}
            <circle
              cx={toCard.right + 2} cy={toY}
              r={active ? 1.0 : 0.5}
              fill={active ? "rgba(201,168,76,0.20)" : "rgba(201,168,76,0.05)"}
              style={{ transition: 'all 0.5s ease' }}
            />
          </g>
        );
      })}

      {/* ════════════════════════════════════════════════════════
          Top origin node (before first branch)
          ════════════════════════════════════════════════════════ */}
      <circle cx={trunkX} cy={trunkTop} r="3.5" fill="none"
        stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" />
      <circle cx={trunkX} cy={trunkTop} r="1.6" fill="rgba(201,168,76,0.16)"
        filter="url(#nn-glow)" />
    </svg>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [geo, setGeo] = useState<CableGeo | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure positions
  const measure = useCallback(() => {
    const container = containerRef.current;
    const panel = panelRef.current;
    if (!container || !panel) return;

    const cRect = container.getBoundingClientRect();
    const pRect = panel.getBoundingClientRect();

    const cards: CableGeo["cards"] = [];
    for (let i = 0; i < SERVICES.length; i++) {
      const el = cardRefs.current[i];
      if (el) {
        const r = el.getBoundingClientRect();
        cards.push({
          top: r.top - cRect.top,
          bottom: r.bottom - cRect.top,
          left: r.left - cRect.left,
          right: r.right - cRect.left,
        });
      }
    }

    setContainerWidth(cRect.width);
    setGeo({
      panelBottom: pRect.bottom - cRect.top,
      panelLeft: pRect.left - cRect.left,
      panelRight: pRect.right - cRect.left,
      cards,
    });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    // Also re-measure on scroll (Lenis smooth scroll)
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", measure);
    };
  }, [measure]);

  return (
    <section className="relative overflow-x-clip py-10 sm:py-12 md:py-16 lg:py-20 2xl:py-24">
      {/* ── Ambient orbs  responsive, contained ── */}
      <div className="absolute top-1/4 left-0 w-[min(700px,80vw)] h-[min(700px,80vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-1/4 right-0 w-[min(500px,60vw)] h-[min(500px,60vw)] ambient-orb ambient-orb-white" />
      <div className="absolute top-2/3 left-1/3 w-[min(350px,50vw)] h-[min(350px,50vw)] ambient-orb ambient-orb-warm" />

      <Container id="services" className="relative z-10 scroll-mt-2 sm:scroll-mt-10" ref={containerRef}>
        {/* ── Neural network SVG (behind cards, above orbs) ── */}
        <NeuralNetwork geo={geo} hoveredIdx={hoveredIdx} containerWidth={containerWidth} />

        {/* ── Parent showcase panel ── */}
        <div className="mb-10 sm:mb-16 relative" ref={panelRef}>
          <div className="relative z-10 rounded-3xl overflow-hidden mx-auto
            bg-transparent
            shadow-[0_0_0_1px_rgba(0,0,0,0.25),0_4px_20px_rgba(0,0,0,0.18),0_0_40px_rgba(201,168,76,0.03)]
            backdrop-blur-[4px]"
          >
            {/* Premium gradient border — top only, no bottom */}
            <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(201,168,76,0.28) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.22) 100%)',
              }}
            />
            {/* Parent-only top sheen */}
            <div className="absolute inset-x-[15%] top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
              <div className="flex-1 min-w-0">
                {/* Headline */}
                <h2 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.02em] text-white/90 leading-[0.95]"
                  style={{
                    fontSize: 'clamp(1.6rem, 5vw, 6rem)',
                  }}
                >
                  Our Core Services
                </h2>
              </div>

              {/* Description */}
              <p className="lg:max-w-[320px] 2xl:max-w-[400px] text-white/40 text-sm sm:text-base 2xl:text-lg leading-relaxed lg:text-right">
                End-to-end digital solutions from a team that cares about craft.
              </p>
            </div>
          </div>

          {/* ── Left gold edge — extends below panel, animated flowing gradient ── */}
          <div
            className="absolute left-0 w-[1.5px] pointer-events-none z-20 edge-flow-left"
            style={{ top: '12%', bottom: '-20%' }}
          />

          {/* ── Right gold edge — extends below panel, animated flowing gradient ── */}
          <div
            className="absolute right-0 w-[1.5px] pointer-events-none z-20 edge-flow-right"
            style={{ top: '12%', bottom: '-20%' }}
          />
        </div>

        {/* ── Service cards ── */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center">
          {SERVICES.map((svc, idx) => {
            const binary = ["1", "10", "11", "100", "101"][idx];
            return (
            <div
              key={svc.num}
              ref={(el) => { cardRefs.current[idx] = el; }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="w-full max-w-full sm:max-w-[90%] lg:max-w-[85%] 2xl:max-w-[80%] group relative z-10 flex items-center gap-3 sm:gap-5 px-3 sm:px-6 py-3 sm:py-5 cursor-pointer rounded-2xl glass-card-gold glass-card-gold-hover"
            >
              {/* Content */}
              <div className="relative z-10 flex-1 min-w-0">
                <h3 className="text-[12px] sm:text-[15px] 2xl:text-lg font-medium text-white/90 group-hover:text-white uppercase tracking-[0.04em] transition-colors duration-[600ms] mb-1 sm:mb-1.5">
                  {svc.title}
                </h3>
                <p className="text-[11px] sm:text-[13px] 2xl:text-base text-white/50 group-hover:text-white/70 leading-relaxed transition-colors duration-[600ms]">
                  {svc.desc}
                </p>
              </div>

              {/* Binary number  right side, nearly invisible */}
              <span className="relative z-0 font-mono text-[12px] sm:text-sm font-light text-white/[0.05] group-hover:text-[#C9A84C]/[0.12] transition-all duration-600 shrink-0 select-none">
                {binary}
              </span>
            </div>
            );
          })}
        </div>
      </Container>

      {/* Sentinel  triggers hero shards to shatter near end of services */}
      <div data-shard-sentinel="hero" className="w-full h-px pointer-events-none" />
    </section>
  );
}
