"use client";

import { useEffect, useRef, useCallback } from "react";
import Container from "@/src/features/layout/components/Container";

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
    charEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "";
      el.style.filter = "";
      el.getAnimations().forEach((a) => a.cancel());
    });

    const tryAnimate = () => {
      const logoImg = document.querySelector<HTMLImageElement>('header img[alt="Malera Studio"]');
      if (!logoImg || logoImg.getBoundingClientRect().width === 0) {
        requestAnimationFrame(tryAnimate);
        return;
      }

      const logoRect = logoImg.getBoundingClientRect();
      const logoCX = logoRect.left + logoRect.width / 2;
      const logoCY = logoRect.bottom + 2;

      charEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const finalCX = rect.left + rect.width / 2;
        const finalCY = rect.top + rect.height / 2;

        const dx = logoCX - finalCX;
        const dy = logoCY - finalCY;

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
      const container = morphRef.current;
      if (!container) return;
      const o = container.querySelector<HTMLElement>('.morph-o');
      const l = container.querySelector<HTMLElement>('.morph-l');
      if (!o || !l) return;

      const ease = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
      const totalDur = 1000;   // slower cinematic
      const lDelay = 120;      // L trails after O

      // Measure how far the O/D flanking char CENTERS are from morph center
      const morphRect = container.getBoundingClientRect();
      const morphCX = morphRect.left + morphRect.width / 2;
      const leftO = container.parentElement?.querySelector<HTMLElement>('.char-gold-partial-l');
      const rightD = container.parentElement?.querySelector<HTMLElement>('.char-gold-partial-r');
      const leftORect = leftO?.getBoundingClientRect();
      const rightDRect = rightD?.getBoundingClientRect();
      // O slides LEFT: center of first O is to the left of morph center
      const leftOTarget = leftORect
        ? -(morphCX - (leftORect.left + leftORect.width / 2))
        : -morphRect.width;
      // L slides in from RIGHT edge of D.
      // scaleX(-1) flips translateX sign: scaleX(-1) translateX(+N) = visually -N (left).
      // So we negate the value to move L right → toward D.
      const rightDTarget = rightDRect
        ? -((rightDRect.left + rightDRect.width) - morphCX)
        : -morphRect.width;

      // ── Forward: O slides LEFT → first O   /   L slides in from RIGHT ← D ──
      const forward = () => {
        o.animate([
          { opacity: 1, filter: 'blur(0px)', transform: `translateX(0)`, offset: 0 },
          { opacity: 0.7, filter: 'blur(2px)', transform: `translateX(${leftOTarget * 0.6}px)`, offset: 0.4 },
          { opacity: 0, filter: 'blur(5px)', transform: `translateX(${leftOTarget}px)`, offset: 1 },
        ], { duration: totalDur, easing: ease, fill: 'both' });

        l.animate([
          { opacity: 0, filter: 'blur(5px)', transform: `scaleX(-1) translateX(${rightDTarget}px)`, offset: 0 },
          { opacity: 0.35, filter: 'blur(2px)', transform: `scaleX(-1) translateX(${rightDTarget * 0.5}px)`, offset: 0.35 },
          { opacity: 0.8, filter: 'blur(0.5px)', transform: `scaleX(-1) translateX(${rightDTarget * 0.1}px)`, offset: 0.7 },
          { opacity: 1, filter: 'blur(0px)', transform: 'scaleX(-1) translateX(0)', offset: 1 },
        ], { duration: totalDur, delay: lDelay, easing: ease, fill: 'both' });
      };

      // ── Reverse: O slides back in FROM first O  /  L slides RIGHT → into D ──
      const reverse = () => {
        o.animate([
          { opacity: 0, filter: 'blur(5px)', transform: `translateX(${leftOTarget}px)`, offset: 0 },
          { opacity: 0.5, filter: 'blur(2px)', transform: `translateX(${leftOTarget * 0.6}px)`, offset: 0.35 },
          { opacity: 1, filter: 'blur(0px)', transform: 'translateX(0)', offset: 1 },
        ], { duration: totalDur, delay: lDelay, easing: ease, fill: 'both' });

        l.animate([
          { opacity: 1, filter: 'blur(0px)', transform: 'scaleX(-1) translateX(0)', offset: 0 },
          { opacity: 0.7, filter: 'blur(1px)', transform: `scaleX(-1) translateX(${rightDTarget * 0.4}px)`, offset: 0.3 },
          { opacity: 0.3, filter: 'blur(3px)', transform: `scaleX(-1) translateX(${rightDTarget * 0.7}px)`, offset: 0.7 },
          { opacity: 0, filter: 'blur(5px)', transform: `scaleX(-1) translateX(${rightDTarget}px)`, offset: 1 },
        ], { duration: totalDur, easing: ease, fill: 'both' });
      };

      // ── Loop (no initial delay  fires immediately on each recurse) ──
      const FLStart = totalDur + lDelay;   // 1120ms  time for a fade-in/out to fully complete
      const lStay = 3000;                    // L stays fully visible 3s
      const oStay = 10000;                   // O stays fully visible 10s

      loopTimer = setTimeout(() => {
        forward();
        loopTimer = setTimeout(() => {
          reverse();
          loopTimer = setTimeout(() => {
            startMorphLoop();
          }, FLStart + oStay);
        }, FLStart + lStay);
      }, 0);

      (section as HTMLElement & { _morphLoop?: ReturnType<typeof setTimeout> })._morphLoop = loopTimer;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            hasRun.current = false;
            // Reset morph: cancel animations, clear inline styles → CSS defaults
            if (morphRef.current) {
              const o = morphRef.current.querySelector<HTMLElement>('.morph-o');
              const l = morphRef.current.querySelector<HTMLElement>('.morph-l');
              o?.getAnimations().forEach(a => a.cancel());
              l?.getAnimations().forEach(a => a.cancel());
              if (o) o.style.cssText = '';
              if (l) l.style.cssText = '';
            }
            const prev = (section as HTMLElement & { _morphLoop?: ReturnType<typeof setTimeout> })._morphLoop;
            if (prev) clearTimeout(prev);
            runAnimation();
            // Initial 10s delay  O is already visible on page load, wait before first morph
            const initTimer = setTimeout(() => {
              startMorphLoop();
            }, 10000);
            (section as HTMLElement & { _morphLoop?: ReturnType<typeof setTimeout> })._morphLoop = initTimer;
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
      className="relative overflow-x-clip bg-dot-grid pt-8 sm:pt-10 md:pt-14 lg:pt-20 2xl:pt-28 pb-12 sm:pb-14 md:pb-18 lg:pb-24 2xl:pb-32"
    >
      {/* ── Cinema-grade ambient light ── */}
      {/* Key light  large soft white from below center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(1100px,90vw)] h-[min(750px,60vh)] 2xl:w-[min(1700px,90vw)] 2xl:h-[min(1100px,60vh)] ambient-orb ambient-orb-key" />
      {/* Fill light  cool white wash from top right */}
      <div className="absolute top-0 right-0 w-[min(800px,70vw)] h-[min(800px,70vw)] 2xl:w-[min(1200px,70vw)] 2xl:h-[min(1200px,70vw)] ambient-orb ambient-orb-fill" />
      {/* Rim light  subtle warm accent from top left */}
      <div className="absolute top-1/4 -left-20 sm:-left-40 w-[min(550px,55vw)] h-[min(550px,55vw)] 2xl:w-[min(850px,55vw)] 2xl:h-[min(850px,55vw)] ambient-orb ambient-orb-rim" />

      <Container className="relative z-10 flex flex-col items-center overflow-visible">
        {/* ── Studio name (flies in from navbar logo) ── */}
        <p
          ref={studioRef}
          className="font-mono text-[0.625rem] sm:text-[0.8125rem] 2xl:text-base min-[3000px]:text-lg uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[#C9A84C] text-center mb-3 sm:mb-7 select-none"
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
        <div className="mb-5 sm:mb-10 w-full flex flex-col items-center gap-[0.02em] overflow-hidden">
          <h1
            className="font-[family-name:var(--font-display)] font-extrabold text-white text-center leading-[0.85] tracking-[-0.02em] uppercase max-w-full"
            style={{
              fontSize: 'clamp(1.7rem, 6.5vw, 6.5rem)',
              textShadow: '0 0 1px rgba(255,255,255,0.25), 0 0 6px rgba(255,255,255,0.06), 0 -1px 2px rgba(255,255,255,0.04)',
            } as React.CSSProperties}
          >
            WE JUST BUILD
          </h1>

          <h1
            className="font-[family-name:var(--font-display)] font-extrabold text-white text-center leading-[0.85] tracking-[-0.02em] uppercase max-w-full"
            style={{
              fontSize: 'clamp(1.7rem, 6.5vw, 6.5rem)',
              textShadow: '0 0 2px rgba(255,255,255,0.30), 0 0 12px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.03), 0 -1px 2px rgba(255,255,255,0.06)',
            } as React.CSSProperties}
          >
            G<span className="char-gold-partial-l">O</span>
            <span ref={morphRef} className="char-morph char-gold-morph">
              <span className="morph-o">O</span>
              <span className="morph-l">L</span>
            </span>
            <span className="char-gold-partial-r">D</span> STUFF
          </h1>
        </div>

        {/* ── Subtext + buttons ── */}
        <div className="flex flex-col items-center gap-4 sm:gap-10 mb-10 sm:mb-14 w-full max-w-[min(100%,360px)] sm:max-w-[550px] 2xl:max-w-[720px] min-[3000px]:max-w-[1000px] min-[5000px]:max-w-[1300px]">
          <p className="text-[0.75rem] sm:text-base lg:text-lg 2xl:text-xl min-[3000px]:text-3xl min-[5000px]:text-4xl text-white/35 font-light leading-relaxed text-center tracking-wide">
            Websites, apps &amp; video.<br />Built from Kosovo.
          </p>

          <div className="w-20 sm:w-28 2xl:w-36 min-[3000px]:w-56 min-[5000px]:w-72 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-center">
            {/* Primary  See our work */}
            <a
              href="#services"
              className="hero-btn-primary group inline-flex items-center justify-center gap-2 text-[0.6875rem] sm:text-base 2xl:text-lg min-[3000px]:text-2xl min-[5000px]:text-3xl font-semibold px-6 sm:px-10 2xl:px-12 min-[3000px]:px-16 min-[5000px]:px-20 py-3 sm:py-5 min-[3000px]:py-7 min-[5000px]:py-9 rounded-full tracking-[0.06em] sm:tracking-[0.08em] w-full sm:w-auto"
            >
              See our work
              <span className="hero-btn-arrow text-black/25 group-hover:text-black/50">→</span>
            </a>
            {/* Secondary  Get in touch */}
            <a
              href="#contact"
              className="hero-btn-secondary group inline-flex items-center justify-center gap-2 text-white/70 text-[0.6875rem] sm:text-base 2xl:text-lg min-[3000px]:text-2xl min-[5000px]:text-3xl font-medium px-6 sm:px-10 2xl:px-12 min-[3000px]:px-16 min-[5000px]:px-20 py-3 sm:py-5 min-[3000px]:py-7 min-[5000px]:py-9 rounded-full tracking-[0.06em] sm:tracking-[0.08em] w-full sm:w-auto"
            >
              Get in touch
              <span className="hero-btn-arrow text-white/10 group-hover:text-white/50">→</span>
            </a>
          </div>
        </div>

        {/* ── Bottom tagline ── */}
        <p className="font-mono text-[0.5625rem] sm:text-[0.75rem] 2xl:text-sm min-[3000px]:text-base uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/10 text-center mt-0">
          Pristina&nbsp;&nbsp;·&nbsp;&nbsp;Est&nbsp;2026
        </p>
      </Container>
    </section>
  );
}
