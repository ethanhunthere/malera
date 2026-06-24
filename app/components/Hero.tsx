"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const studioRef = useRef<HTMLParagraphElement>(null);
  const morphRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);
  const studioText = "MALERA STUDIO";

  const runAnimation = useCallback(() => {
    const container = studioRef.current;
    if (!container || hasRun.current) return;
    hasRun.current = true;

    const charEls = container.querySelectorAll<HTMLElement>(".char-fly");
    // Start all invisible
    charEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "";
      el.style.filter = "";
      el.getAnimations().forEach((a) => a.cancel());
    });

    // Retry loop until logo is laid out
    const tryAnimate = () => {
      const logoImg = document.querySelector<HTMLImageElement>('header img[alt="Malera Studio"]');
      if (!logoImg || logoImg.getBoundingClientRect().width === 0) {
        requestAnimationFrame(tryAnimate);
        return;
      }

      const logoRect = logoImg.getBoundingClientRect();
      const logoCX = logoRect.left + logoRect.width / 2;
      // Start from just below the logo (bottom edge + 2px gap)
      const logoCY = logoRect.bottom + 2;

      charEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const finalCX = rect.left + rect.width / 2;
        const finalCY = rect.top + rect.height / 2;

        // Direction from final position back to logo
        const dx = logoCX - finalCX;
        const dy = logoCY - finalCY;

        // Chars start from logo X (far left), just below the logo vertically
        const farX = dx * 4;
        const farY = dy * 6;

        el.animate(
          [
            {
              opacity: 1,
              transform: `translate(${farX}px, ${farY}px) scale(2.2)`,
              filter: "blur(0px)",
              offset: 0,
            },
            {
              opacity: 0.9,
              transform: `translate(${farX * 0.6}px, ${farY * 0.6}px) scale(1.6)`,
              filter: "blur(0px)",
              offset: 0.3,
            },
            {
              opacity: 0.85,
              transform: `translate(${farX * 0.15}px, ${farY * 0.15}px) scale(0.95)`,
              filter: "blur(1px)",
              offset: 0.6,
            },
            {
              opacity: 1,
              transform: "translate(0, 0) scale(1)",
              filter: "blur(0px)",
              offset: 1,
            },
          ],
          {
            duration: 1200,
            delay: i * 180,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          }
        );
      });
    };

    requestAnimationFrame(tryAnimate);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let loopTimer: ReturnType<typeof setTimeout> | null = null;

    const startMorphLoop = () => {
      // Phase 1 — 10s of "O", then morph to L
      const toL = setTimeout(() => {
        if (morphRef.current) morphRef.current.classList.add("morph-active");
        // Phase 2 — 5s of "L", then morph back to O & restart
        loopTimer = setTimeout(() => {
          if (morphRef.current) morphRef.current.classList.remove("morph-active");
          startMorphLoop();
        }, 5000);
      }, 10000);
      loopTimer = toL;
      (section as HTMLElement & { _morphLoop?: ReturnType<typeof setTimeout> })._morphLoop = loopTimer;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            hasRun.current = false;
            if (morphRef.current) morphRef.current.classList.remove("morph-active");
            // Clear any running loop
            const prev = (section as HTMLElement & { _morphLoop?: ReturnType<typeof setTimeout> })._morphLoop;
            if (prev) clearTimeout(prev);
            runAnimation();
            startMorphLoop();
          }, 1000);
        } else {
          clearTimeout(timeoutId);
          const prev = (section as HTMLElement & { _morphLoop?: ReturnType<typeof setTimeout> })._morphLoop;
          if (prev) clearTimeout(prev);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [runAnimation]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-start pt-14 sm:pt-20 pb-4 sm:pb-12 px-3 sm:px-6 relative overflow-x-clip bg-dot-grid"
    >
      {/* ── Cinema-grade ambient light ── */}
      {/* Key light — large soft white from below center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(900px,85vw)] h-[min(600px,55vh)] ambient-orb ambient-orb-key" />
      {/* Fill light — cool white wash from top right */}
      <div className="absolute top-0 right-0 w-[min(650px,65vw)] h-[min(650px,65vw)] ambient-orb ambient-orb-fill" />
      {/* Rim light — subtle warm accent from top left */}
      <div className="absolute top-1/4 -left-20 sm:-left-40 w-[min(450px,50vw)] h-[min(450px,50vw)] ambient-orb ambient-orb-rim" />

      <div className="max-w-[900px] mx-auto w-full relative z-10 flex flex-col items-center overflow-visible">
        {/* ── Studio name (flies in from navbar logo) ── */}
        <p
          ref={studioRef}
          className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C9A84C] text-center mb-3 sm:mb-5 select-none"
          aria-label={studioText}
        >
          {studioText.split("").map((char, i) => (
            <span
              key={i}
              className="char-fly inline-block"
              style={{ opacity: 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        {/* ── Headline ── */}
        <div className="mb-7 sm:mb-10 w-full overflow-hidden">
          {/* Line 1: WE JUST BUILD */}
          <h1 className="font-[family-name:var(--font-display)] font-extrabold tracking-[0.02em] text-white text-center uppercase leading-[0.85] max-w-full premium-text"
            style={{
              fontSize: 'clamp(2.75rem, 11vw, 7rem)',
            }}
          >
            We just build
          </h1>

          {/* Line 2: GO(O→L)D STUFF */}
          <h1 className="font-[family-name:var(--font-display)] font-extrabold tracking-[0.02em] text-white text-center uppercase leading-[0.85] max-w-full premium-text"
            style={{
              fontSize: 'clamp(2.75rem, 11vw, 7rem)',
            }}
          >
            GO
            <span ref={morphRef} className="char-morph inline relative">
              <span className="morph-o inline">O</span>
              <span className="morph-l inline absolute left-0 w-full text-center opacity-0">L</span>
            </span>
            D STUFF
          </h1>
        </div>

        {/* ── Subtext + buttons ── */}
        <div className="flex flex-col items-center gap-4 sm:gap-8 mb-6 sm:mb-16 w-full max-w-[500px]">
          {/* Subtext */}
          <p className="text-xs sm:text-sm lg:text-base text-white/40 font-light leading-relaxed text-center uppercase tracking-[0.15em] max-w-[300px] sm:max-w-none">
            Websites, apps and videos.<br />Built out of Kosovo.
          </p>

          {/* ── Decorative separator ── */}
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 glass-btn-solid text-[#080808] text-[11px] sm:text-sm font-semibold px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full uppercase tracking-[0.12em] w-full sm:w-auto transition-all duration-500"
            >
              See our work
              <span className="font-mono text-[#080808]/30 text-sm">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 glass-btn text-white/85 text-[11px] sm:text-sm font-medium px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full uppercase tracking-[0.12em] hover:text-white w-full sm:w-auto"
            >
              Get in touch
              <span className="font-mono text-white/20 group-hover:text-white/50 text-sm transition-colors duration-500">→</span>
            </a>
          </div>
        </div>

        {/* ── Bottom tagline ── */}
        <p className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/12 text-center mt-0">
          Kosovo&nbsp;&nbsp;·&nbsp;&nbsp;Est&nbsp;2026&nbsp;&nbsp;·&nbsp;&nbsp;AI&nbsp;Powered
        </p>
      </div>
    </section>
  );
}
