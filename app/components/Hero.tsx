"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/app/context/LanguageContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ShaderHero = dynamic(() => import("./anim/ShaderHero").then((m) => m.ShaderHero), { ssr: false });

gsap.registerPlugin(useGSAP);

const translations = {
  en: {
    eyebrow: "Digital Agency · Kosovo · Est 2026",
    heading: "We just build good stuff",
    subheading: "Websites, apps and videos.\nBuilt out of Kosovo.",
    ctaPrimary: "See our work",
    ctaSecondary: "Get in touch",
    statsLine: "Kosovo · Est 2026 · AI Powered",
  },
  sq: {
    eyebrow: "Agjenci Dixhitale · Kosovë · Est 2026",
    heading: "Ndërtojmë gjëra të mira",
    subheading: "Faqe, aplikacione dhe video.\nNgritur nga Kosova.",
    ctaPrimary: "Shiko punën tonë",
    ctaSecondary: "Na kontakto",
    statsLine: "Kosovë · Est 2026 · AI Powered",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const monoRef = useRef<HTMLParagraphElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const headline = document.querySelector(".hero-headline");
    if (headline) {
      const text = headline.textContent || "";
      const words = text.split(" ");
      headline.innerHTML = words
        .map(
          (w) =>
            `<span class="hero-headline-word" style="display:inline-block;overflow:hidden;padding-bottom:0.12em;margin-bottom:-0.12em"><span style="display:inline-block">${w}</span></span>`
        )
        .join(" ");
      tl.fromTo(
        ".hero-headline-word span",
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.07,
          duration: 1.0,
          ease: "power4.out",
          onComplete: () => {
            document.querySelectorAll(".hero-headline-word").forEach((word) => {
              const el = word as HTMLElement;
              el.style.overflow = "visible";
              el.style.paddingBottom = "0";
              el.style.marginBottom = "0";
            });
          },
        },
        0.2
      );
    }

    gsap.set([".hero-eyebrow", ".hero-subtitle", ".hero-cta"], { opacity: 0, y: 16 });
    tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 }, 0.1);
    tl.to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.7 }, 0.85);
    tl.to(".hero-cta", { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 }, 0.95);

    const text = t.statsLine;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        i++;
        setTypedText(text.slice(0, i));
      } else {
        clearInterval(interval);
        let b = 0;
        const blink = setInterval(() => {
          setShowCursor((v) => !v);
          b++;
          if (b >= 6) { clearInterval(blink); setShowCursor(false); }
        }, 400);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [t.statsLine]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "#080808" }}
    >
      <ShaderHero />

      {/* Content pinned to bottom */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-16 pb-20 pt-[160px]">
        {/* Eyebrow */}
        <p className="hero-eyebrow font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] mb-8">
          {t.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="hero-headline font-fraunces font-extrabold italic text-[clamp(72px,11vw,152px)] leading-[0.92] tracking-[-0.03em] text-white max-w-[900px]"
          aria-label={t.heading}
        >
          {t.heading}
          {/* Terminal block cursor */}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "0.55em",
              height: "0.82em",
              background: "#C9A84C",
              marginLeft: "0.08em",
              verticalAlign: "text-bottom",
              animation: "blink 1.1s step-end infinite",
            }}
          />
        </h1>

        {/* Bottom row — sub left, buttons right */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 mt-12">
          <p className="hero-subtitle font-dm font-light text-[16px] sm:text-[18px] text-[#6B6B6B] leading-[1.65] max-w-[340px] whitespace-pre-line">
            {t.subheading}
          </p>
          <div className="flex flex-col gap-3 sm:items-end">
            <button
              onClick={() => scrollTo("portfolio")}
              className="hero-cta font-dm font-medium text-[13px] tracking-[0.02em] bg-white text-black px-7 py-[14px] rounded-[1px] hover:bg-[#E8E8E8] transition-colors duration-200"
            >
              {t.ctaPrimary}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hero-cta font-dm font-normal text-[13px] tracking-[0.02em] text-white border border-[#2A2A2A] px-7 py-[14px] rounded-[1px] hover:border-white transition-colors duration-200"
            >
              {t.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Mono line — absolute bottom */}
      <p
        ref={monoRef}
        className="hidden sm:block absolute bottom-8 left-16 font-mono text-[11px] text-[#2A2A2A] tracking-widest z-10"
      >
        {typedText}
        {showCursor && <span className="inline-block w-[1px] h-[12px] bg-[#2A2A2A] ml-0.5 align-middle" />}
      </p>
    </section>
  );
}

