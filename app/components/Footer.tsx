"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

function HexCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let val = 0x7f3a2b;
    const id = setInterval(() => {
      val = (val + Math.floor(Math.random() * 0xff)) & 0xffffff;
      if (ref.current) {
        ref.current.textContent = "0x" + val.toString(16).toUpperCase().padStart(6, "0");
      }
    }, 120);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      ref={ref}
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: "10px",
        color: "#2A2A2A",
        letterSpacing: "0.05em",
      }}
    />
  );
}

const translations = {
  en: { services: "Services", portfolio: "Portfolio", team: "Team", pricing: "Pricing", contact: "Contact" },
  sq: { services: "Shërbimet", portfolio: "Portfolio", team: "Ekipi", pricing: "Çmimet", contact: "Kontakti" },
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const scrollTo = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };
  const links = [
    { label: t.services, id: "services" },
    { label: t.portfolio, id: "portfolio" },
    { label: t.team, id: "team" },
    { label: t.pricing, id: "pricing" },
    { label: t.contact, id: "contact" },
  ];

  return (
    <footer className="border-t border-[#1C1C1C]" style={{ background: "#080808" }}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <img src="/malera-transparent.png" alt="Malera" className="h-6 w-auto object-contain opacity-50" />

        {/* Nav links */}
        <div className="flex items-center gap-6 sm:gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-dm font-light text-[12px] text-[#333333] hover:text-white transition-colors duration-150"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: copyright + hex counter */}
        <div className="flex items-center gap-4">
          <p className="font-mono text-[11px] text-[#2A2A2A]">© 2026 Malera Studio</p>
          <HexCounter />
        </div>
      </div>
    </footer>
  );
}

