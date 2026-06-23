"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/app/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const translations = {
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    team: "Team",
    pricing: "Pricing",
    contact: "Contact",
    cta: "Start a Project",
    langLabel: "SQ",
  },
  sq: {
    home: "Ballina",
    services: "Sh\u00ebrbimet",
    portfolio: "Portfolio",
    team: "Ekipi",
    pricing: "\u00c7mimet",
    contact: "Kontakti",
    cta: "Fillo nj\u00eb Projekt",
    langLabel: "EN",
  },
};

const navLinks = ["home", "services", "portfolio", "team", "pricing", "contact"] as const;

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP scroll-triggered navbar blur
  useGSAP(() => {
    // Navbar blur on scroll
    ScrollTrigger.create({
      start: "top -60",
      end: 99999,
      onUpdate: (self) => {
        const nav = document.querySelector(".malera-nav") as HTMLElement;
        if (!nav) return;
        gsap.to(nav, {
          backgroundColor: self.isActive ? "rgba(10,10,10,0.9)" : "rgba(10,10,10,0)",
          backdropFilter: self.isActive ? "blur(24px)" : "blur(0px)",
          borderBottomColor: self.isActive ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0)",
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    // Active section highlight — only for sections that exist
    ["services", "portfolio", "team", "pricing", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          const link = document.querySelector(`[data-nav="${id}"]`);
          if (self.isActive) link?.classList.add("nav-active");
          else link?.classList.remove("nav-active");
        },
      });
    });
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="malera-nav fixed top-0 left-0 right-0 z-50 w-full"
        style={{ borderBottom: "1px solid rgba(255,255,255,0)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center"
            >
              <img
                src="/malera-transparent.png"
                alt="Malera"
                className="h-[30px] sm:h-[36px] w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((key) => (
                <button
                  key={key}
                  data-nav={key}
                  onClick={() => scrollTo(key)}
                  className="nav-link font-dm text-[13px] font-normal text-[#555555] hover:text-white transition-colors duration-150 relative tracking-[0.01em]"
                >
                  {t[key]}
                </button>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleLang}
                className="font-mono text-[11px] text-[#444444] hover:text-white transition-colors duration-200 px-2 py-1 tracking-[0.05em]"
              >
                {t.langLabel}
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="font-dm text-[12px] font-medium tracking-[0.03em] px-5 py-[10px] border border-[#2A2A2A] text-white hover:border-white hover:bg-white/5 transition-colors duration-200 rounded-[1px]"
              >
                {t.cta}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#888] hover:text-white transition-colors duration-200 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] lg:hidden"
          >
            <div className="absolute top-0 right-0 p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#888] hover:text-white transition-colors duration-200 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((key, i) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(key)}
                  className="font-dm text-[32px] font-light text-[#888] hover:text-white transition-colors duration-200"
                >
                  {t[key]}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 mt-8 pt-8 border-t border-[#1F1F1F]"
              >
                <button
                  onClick={toggleLang}
                  className="font-mono text-[11px] tracking-[0.05em] text-[#888] hover:text-white transition-colors duration-200"
                >
                  {t.langLabel}
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="font-dm text-[13px] font-medium tracking-[0.02em] px-5 py-3 border border-[#2A2A2A] text-white hover:border-white transition-colors duration-200 rounded-[1px]"
                >
                  {t.cta}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
