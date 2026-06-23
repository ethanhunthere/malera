"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/app/context/LanguageContext";
import { SplitReveal } from "@/app/components/anim/SplitReveal";
import { Typewriter } from "@/app/components/anim/Typewriter";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const translations = {
  en: {
    label: "What we do",
    heading: "Our services",
    subtext: "We keep our focus narrow on purpose.\nA few things we are actually good at.",
    services: [
      { number: "01", title: "Web Development", description: "Websites and web apps built from scratch.\nFast, clean and maintained after launch." },
      { number: "02", title: "Mobile Apps", description: "Android applications built with\nExpo and React Native." },
      { number: "03", title: "Video Production", description: "Video editing and content production\nfor social media and commercial use." },
      { number: "04", title: "AI Bots and Automation", description: "Custom AI tools built for specific\nbusiness needs." },
      { number: "05", title: "Brand Identity", description: "Logo, visual system and brand guidelines\nfor businesses that want to look the part." },
    ],
  },
  sq: {
    label: "Çfarë bëjmë",
    heading: "Shërbimet tona",
    subtext: "E mbajmë fokusin tonë të ngushtë qëllimisht.\nDisa gjëra ku jemi vërtetë të mirë.",
    services: [
      { number: "01", title: "Web Development", description: "Faqe dhe aplikacione web të ndërtuar nga e para.\nTë shpejta, të pastra dhe të mirëmbajtura pas lansimit." },
      { number: "02", title: "Mobile Apps", description: "Aplikacione Android të ndërtuar me\nExpo dhe React Native." },
      { number: "03", title: "Video Production", description: "Editim video dhe prodhim content\npër social media dhe përdorim komercial." },
      { number: "04", title: "AI Bots dhe Automatizim", description: "Mjete AI të ndërtuara për nevoja\nspecifike biznesi." },
      { number: "05", title: "Identitet Marke", description: "Logo, sistem vizual dhe udhëzime marke\npër biznese që duan të duken si duhet." },
    ],
  },
};

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.from(".service-row", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ".services-rows", start: "top 80%", once: true },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-32 px-6 sm:px-16"
      style={{ background: "#080808" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 self-start">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C]">
              {t.label}
            </span>
            <SplitReveal tag="h2" className="font-fraunces font-bold text-[clamp(40px,5vw,64px)] leading-[1.0] tracking-[-0.025em] text-white mt-4">
              {t.heading}
            </SplitReveal>
            <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] mt-12 whitespace-pre-line max-w-[280px]">
              {t.subtext}
            </p>
          </div>

          {/* Right — rows */}
          <div className="services-rows mt-8 lg:mt-0">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="service-row group grid items-start py-8 border-t border-[#1C1C1C] last:border-b last:border-b-[#1C1C1C] hover:bg-white/[0.015] transition-colors duration-200 cursor-default"
                style={{ gridTemplateColumns: "48px 1fr 24px", gap: "0 24px" }}
              >
                <Typewriter
                  text={s.number}
                  delay={i * 150}
                  className="font-mono text-[11px] text-[#2A2A2A] pt-[3px] transition-colors duration-200 group-hover:text-[#C9A84C]"
                />
                <div>
                  <h3 className="font-dm font-medium text-[18px] leading-[1.3] tracking-[-0.01em] text-white">
                    {s.title}
                  </h3>
                  <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] mt-2 whitespace-pre-line">
                    {s.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#2A2A2A] mt-[3px] transition-all duration-200 group-hover:text-[#C9A84C] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

