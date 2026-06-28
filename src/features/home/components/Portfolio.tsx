"use client";

import { useState, useEffect, useRef } from "react";
import GlassDivider from "@/src/features/layout/components/GlassDivider";
import Container from "@/src/features/layout/components/Container";

/* Inline icons to avoid lucide-react dep */
const AlertIcon = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#C9A84C]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const ExternalIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PROJECTS = [
  {
    id: "01",
    title: "NOVRIX.IO",
    url: "https://novrix.io",
    category: "On-Chain Intelligence",
    year: "2025",
    accent: "rgba(99,102,241,0.3)",
    hero: "Trinity of Intelligence",
    description:
      "A crypto-native intelligence terminal that distills on-chain data into actionable signal. Three core modules, Sentiment, Metrilytics, and Whale Tracking, surface market psychology, protocol-level metrics, and capital flows so you trade with evidence, not noise. Built for clarity in a market that punishes weak assumptions.",
    tags: ["Next.js", "Cloudflare", "On-Chain Data", "Real-Time"],
  },
  {
    id: "02",
    title: "RADIOFONTANA.ORG",
    url: "https://radiofontana.org",
    category: "Digital Radio & News",
    year: "2025",
    accent: "rgba(52,211,153,0.3)",
    hero: "Sound Without Borders",
    description:
      "Albania's 98.8 FM, broadcasting live from Istog, Kosovo. A full-spectrum digital radio platform with 24/7 live streaming, real-time news across politics, sport, technology, showbiz, health, and business, plus weather, curated highlights, and a growing social footprint across Facebook, Instagram, YouTube, and TikTok.",
    tags: ["Streaming", "Web Audio", "Node.js", "Cloudflare"],
  },
  {
    id: "03",
    title: "BARBERBROTHERS.STYLE",
    url: "https://barberbrothers.style",
    category: "Booking & Brand",
    year: "2025",
    accent: "rgba(251,191,36,0.3)",
    hero: "Precision Cuts, No Waiting",
    description:
      "A premium barbershop in Fushë Kosovë built around one promise: real appointments, no phone calls. Four independent barbers run their own booking slots through a streamlined online system. Bilingual Albanian-English, with a philosophy of discipline in the process and elegance in the result.",
    tags: ["Next.js", "Stripe", "Booking API", "CMS"],
  },
];

export default function Portfolio() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-44">
      {/* ── Ambient orbs ── */}
      <div className="absolute top-1/3 left-0 w-[min(400px,50vw)] h-[min(400px,50vw)] ambient-orb ambient-orb-white" style={{ opacity: 0.4 }} />
      <div className="absolute bottom-1/4 right-0 w-[min(300px,40vw)] h-[min(300px,40vw)] ambient-orb" style={{ opacity: 0.25 }} />

      <Container id="work" className="relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ── Header ── */}
        <div className="mb-8 sm:mb-14">
          <p className="font-mono text-[0.625rem] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#C9A84C]/35 mb-4">
            WORK
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white/65 mb-4 leading-[0.9]"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 6rem)',
              textShadow: '0 0 120px rgba(201,168,76,0.08), 0 0 40px rgba(201,168,76,0.04)',
            }}
          >
            WHAT WE&apos;VE BUILT
          </h2>

          <p className="text-white/28 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[550px] 2xl:max-w-[700px]">
            Live previews of our latest work. Click a card to visit the full site.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:gap-10 2xl:gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={project.id}>
              {idx > 0 && <GlassDivider />}
              <SiteCard project={project} idx={idx} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Single site card  embedded iframe + rich description
   ───────────────────────────────────────────── */
function SiteCard({ project, idx }: { project: typeof PROJECTS[0]; idx: number }) {
  const [reveal, setReveal] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const iframeDone = useRef(false);
  const minTimeDone = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadTimestamp = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load the iframe when the card approaches the viewport
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    // Minimum 3-second loading window so sites can fully fetch
    timerRef.current = setTimeout(() => {
      minTimeDone.current = true;
      if (iframeDone.current && !iframeFailed) setReveal(true);
    }, 3000);

    // After 5s of no successful load (or CSP block), show fallback
    fallbackRef.current = setTimeout(() => {
      // If onLoad fired instantly (<500ms), it's likely a CSP block, not a real page load
      const loadWasInstant = loadTimestamp.current > 0 && loadTimestamp.current < 500;
      if (!iframeDone.current || (loadWasInstant && minTimeDone.current)) {
        setIframeFailed(true);
      }
      if (!iframeFailed && !iframeDone.current) {
        iframeDone.current = true;
        setReveal(true);
      }
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fallbackRef.current) clearTimeout(fallbackRef.current);
    };
  }, [shouldLoad, iframeFailed]);

  const handleLoad = () => {
    loadTimestamp.current = Date.now();
    iframeDone.current = true;
    if (minTimeDone.current && !iframeFailed) setReveal(true);
  };

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden
        glass-card-gold glass-card-gold-hover
        animate-[pricing-card-in_0.6s_ease-out_both]"
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      {/* ── Preview window ── */}
      <div className="relative w-full aspect-[5/6] sm:aspect-[2/1] lg:aspect-[2/1] 2xl:aspect-[2.5/1] min-[3000px]:aspect-[2/1] overflow-hidden bg-black/60">
        {/* ── Gold spinning indicator ── */}
        <div className={`absolute inset-0 z-[4] flex flex-col items-center justify-center gap-3 transition-opacity duration-700 ${reveal ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <svg className="animate-spin h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="13" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="60 80" strokeDashoffset="20" strokeOpacity="0.5" />
          </svg>
          <span className="font-mono text-[0.5625rem] sm:text-[0.625rem] tracking-[0.12em] text-white/25">
            LOADING LIVE PREVIEW
          </span>
        </div>

        {/* ── Live iframe ── */}
        {iframeFailed ? (
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-4 bg-black/70 px-6 text-center">
            <AlertIcon />
            <p className="text-white/35 text-[0.6875rem] sm:text-sm leading-relaxed max-w-[320px]">
              This site&apos;s security policy prevents embedding a live preview.
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.625rem] sm:text-[0.6875rem] tracking-[0.12em] text-[#C9A84C]/80
                border border-[#C9A84C]/40 rounded-full px-5 py-2
                hover:text-[#C9A84C] hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/[0.08]
                transition-all duration-300"
            >
              OPEN IN NEW TAB <ExternalIcon />
            </a>
          </div>
        ) : shouldLoad ? (
          <iframe
            src={project.url}
            title={project.title}
            loading="lazy"
            className={`absolute inset-0 w-full h-full border-none z-[2] transition-opacity duration-700 ${reveal ? 'opacity-100' : 'opacity-0'}`}
            scrolling="yes"
            onLoad={handleLoad}
          />
        ) : null}

        {/* ── Glass rim ── */}
        <div className="absolute inset-0 pointer-events-none z-[3]
          ring-1 ring-inset ring-white/[0.06]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.15)]" />
      </div>

      {/* ── Info panel ── */}
      <div className="relative px-5 sm:px-6 py-6 sm:py-5 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 lg:gap-8">
        {/* ── Left: title + hero ── */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[0.5625rem] sm:text-[0.625rem] tracking-[0.08em] text-white/55">
              {project.category}
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-sm sm:text-base lg:text-lg font-bold tracking-[-0.02em] text-white/90
            group-hover:text-white transition-colors duration-500 mb-0.5">
            {project.title}
          </h3>
          <p className="text-[0.625rem] sm:text-[0.6875rem] text-[#C9A84C]/55 font-mono tracking-[0.06em] italic mb-2">
            {project.hero}
          </p>
          <p className="text-[0.6875rem] sm:text-xs leading-relaxed text-white/[0.40] group-hover:text-white/[0.55] transition-colors duration-500 max-w-[55ch]">
            {project.description}
          </p>
        </div>

        {/* ── Right: visit ── */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-3 sm:pt-3 shrink-0">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.625rem] sm:text-[0.6875rem] tracking-[0.15em] text-[#C9A84C]/70
              border border-[#C9A84C]/35 rounded-full px-4 py-1.5
              hover:text-[#C9A84C] hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/[0.06]
              transition-all duration-300
              group-hover:border-[#C9A84C]/45"
          >
            VISIT SITE ↗
          </a>
        </div>
      </div>

      {/* ── Gold accent divider between preview and info ── */}
      <div className="absolute left-4 right-4 top-[calc(100%-var(--info-height,0px))] pointer-events-none
        h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* ── Hover gold accent glow ── */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: `inset 0 1px 0 0 rgba(201,168,76,0.08), 0 0 50px ${project.accent}`,
        }}
      />
    </div>
  );
}
