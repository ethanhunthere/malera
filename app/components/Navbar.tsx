"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = ["Services", "Pricing", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "SQ">("EN");
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Show scroll navbar when past the main header
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="relative z-30">
          <nav className="relative z-10 max-w-[1200px] mx-auto flex items-center h-12 sm:h-16 px-3 sm:px-6">
            {/* Logo — left */}
            <a href="/" className="flex-shrink-0">
              <Image
                src="/malera-transparent.png"
                alt="Malera Studio"
                width={160}
                height={40}
                className="h-6 sm:h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </a>

            {/* Center nav — absolutely centered */}
            <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="relative group inline-flex items-center h-8 px-3 xl:px-4 text-xs xl:text-sm font-medium text-white/45 hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {/* Gold underline — slides in from center */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#C9A84C] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-center" />
                    <span className="tracking-wide">{link}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto">
              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === "EN" ? "SQ" : "EN")}
                className="text-[10px] sm:text-xs font-mono text-white/50 hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                {lang === "EN" ? "EN / SQ" : "SQ / EN"}
              </button>

              {/* CTA — hidden below lg */}
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center glass-btn-solid text-[#080808] text-xs xl:text-sm font-medium px-4 xl:px-5 py-1.5 xl:py-2 rounded-full"
              >
                Start a Project
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider hover:text-white transition-colors"
                aria-label="Menu"
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 sm:gap-8 px-6 lg:hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(5,5,5,0.40) 0%, rgba(5,5,5,0.25) 100%)',
            backdropFilter: 'blur(240px) saturate(320%) brightness(1.06) contrast(0.97)',
          }}
        >
          {/* Ambient orb behind menu */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-orb ambient-orb-gold" />

          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="relative z-10 text-white text-lg sm:text-2xl font-medium hover:text-[#C9A84C] transition-all duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="relative z-10 mt-4 glass-btn-solid text-[#080808] text-sm font-medium px-6 py-3 rounded-full"
          >
            Start a Project
          </a>
        </div>
      )}
      {/* Scroll navbar — real dark glass, logo only */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-center py-2 glass-bar transition-all duration-500 ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <a href="/">
          <Image
            src="/malera-transparent.png"
            alt="Malera Studio"
            width={120}
            height={28}
            className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity"
            priority
          />
        </a>
      </div>
    </>
  );
}
