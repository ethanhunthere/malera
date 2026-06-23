"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const studioRef = useRef<HTMLParagraphElement>(null);
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay so page has settled, then animate
          timeoutId = setTimeout(() => {
            hasRun.current = false; // allow re-trigger
            runAnimation();
          }, 1000);
        } else {
          clearTimeout(timeoutId);
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
      className="flex flex-col items-center justify-start pt-14 sm:pt-20 pb-4 sm:pb-12 px-3 sm:px-6 relative overflow-x-clip"
    >
      {/* ── Ambient light orbs ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(1000px,90vw)] h-[min(700px,60vh)] ambient-orb ambient-orb-gold" />
      <div className="absolute top-1/5 -right-10 sm:-right-40 w-[min(600px,70vw)] h-[min(600px,70vw)] ambient-orb ambient-orb-white" />
      <div className="absolute top-1/2 -left-10 sm:-left-60 w-[min(500px,60vw)] h-[min(500px,60vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-16 right-1/4 w-[min(350px,50vw)] h-[min(350px,50vw)] ambient-orb ambient-orb-white" />
      <div className="absolute top-1/3 left-1/3 w-[min(300px,40vw)] h-[min(300px,40vw)] ambient-orb ambient-orb-warm" />

      {/* ── Floating glass shards ── */}
      <div data-shard-section="hero" className="hidden sm:block absolute top-1/4 right-[15%] w-24 h-16 glass-shard rotate-12" />
      <div data-shard-section="hero" className="hidden sm:block absolute bottom-1/3 left-[10%] w-32 h-20 glass-shard -rotate-6" />
      <div data-shard-section="hero" className="hidden sm:block absolute top-[60%] right-[25%] w-16 h-10 glass-shard rotate-[-15deg]" />

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
        <div className="mb-6 sm:mb-8 w-full overflow-hidden">
          {/* Line 1: WE JUST BUILD */}
          <h1 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white text-center uppercase leading-[0.9] max-w-full"
            style={{
              fontSize: 'clamp(2.75rem, 11vw, 7rem)',
              textShadow: '0 0 2px rgba(255,255,255,0.25), 0 0 16px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.03)',
            }}
          >
            We just build
          </h1>

          {/* Line 2: GOOD STUFF */}
          <h1 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white text-center uppercase leading-[0.9] max-w-full"
            style={{
              fontSize: 'clamp(2.75rem, 11vw, 7rem)',
              textShadow: '0 0 2px rgba(255,255,255,0.25), 0 0 16px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.03)',
            }}
          >
            Good stuff
          </h1>
        </div>

        {/* ── Subtext + buttons ── */}
        <div className="flex flex-col items-center gap-4 sm:gap-8 mb-6 sm:mb-16 w-full max-w-[500px]">
          {/* Subtext */}
          <p className="text-xs sm:text-sm lg:text-base text-white/50 leading-relaxed text-center uppercase tracking-wide max-w-[280px] sm:max-w-none">
            Websites, apps and videos.<br />Built out of Kosovo.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-1.5 glass-btn-solid text-[#080808] text-[11px] sm:text-sm font-semibold px-4 sm:px-7 py-2 sm:py-3.5 rounded-full uppercase tracking-wider w-full sm:w-auto"
            >
              See our work
              <span className="font-mono text-[#080808]/40">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 glass-btn text-white/90 text-[11px] sm:text-sm font-semibold px-4 sm:px-7 py-2 sm:py-3.5 rounded-full uppercase tracking-wider hover:text-[#C9A84C] w-full sm:w-auto"
            >
              Get in touch
              <span className="font-mono text-white/20 group-hover:text-[#C9A84C]/60">→</span>
            </a>
          </div>
        </div>

        {/* ── Bottom tagline ── */}
        <p className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.3em] text-white/15 text-center">
          Kosovo · Est 2026 · AI Powered
        </p>
      </div>
    </section>
  );
}
