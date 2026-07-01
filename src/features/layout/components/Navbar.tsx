"use client";

import { useState, useEffect } from "react";
import Container from "@/src/features/layout/components/Container";

const NAV_LINKS = ["Services", "Work", "Pricing", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
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
        <Container>
          <nav className="relative z-10 flex items-center h-12 sm:h-16">
            {/* Logo left, plain img for instant rendering, no JS decode delay */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/malera-transparent.webp"
                alt="Malera Studio"
                width={160}
                height={40}
                className="h-6 sm:h-9 2xl:h-10 min-[3000px]:h-14 min-[5000px]:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
                fetchPriority="high"
              />
            </a>

            {/* Center nav  absolutely centered */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 min-[3000px]:gap-4 min-[5000px]:gap-6 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="relative group inline-flex items-center h-8 px-3 xl:px-4 text-xs xl:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl font-medium text-white/45 hover:text-gold transition-colors duration-300"
                  >
                    {/* Gold underline  slides in from center */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-center" />
                    <span className="tracking-wide">{link}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-1.5 sm:gap-4 ml-auto">
              {/* CTA  hidden below lg */}
              <a
                href="/#contact"
                className="hidden lg:inline-flex items-center glass-btn-solid text-[#080808] text-[0.65rem] 2xl:text-sm min-[3000px]:text-xl min-[5000px]:text-2xl font-medium px-4 xl:px-5 min-[3000px]:px-8 min-[5000px]:px-10 py-1.5 xl:py-2 min-[3000px]:py-3 min-[5000px]:py-4 rounded-full whitespace-nowrap"
              >
                BUILD WITH MALERA
              </a>

              {/* Hamburger  mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8 group"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <span className={`block h-[2px] w-5 rounded-full bg-white/70 group-hover:bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`} />
                <span className={`block h-[2px] w-5 rounded-full bg-white/70 group-hover:bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`} />
                <span className={`block h-[2px] w-5 rounded-full bg-white/70 group-hover:bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile fullscreen overlay, premium glass */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 flex flex-col lg:hidden overflow-hidden glass-overlay rounded-none"
        >
          {/* ── Ambient depth ── */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-[min(450px,75vw)] h-[min(450px,75vw)] ambient-orb ambient-orb-gold" style={{ opacity: 0.18 }} />
            <div className="absolute bottom-0 right-0 w-[min(350px,55vw)] h-[min(350px,55vw)] ambient-orb ambient-orb-white" style={{ opacity: 0.08 }} />
          </div>

          {/* ── Top: subtle gold line ── */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {/* ── Nav links: glass tiles with gold edge glow ── */}
          <nav className="flex-1 flex flex-col justify-center px-5 sm:px-10 gap-3">
            {NAV_LINKS.map((link, i) => (
              <div
                key={link}
                className="glass-subtle rounded-2xl group relative"
                style={{
                  animation: `menuLinkIn 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) ${i * 0.1}s both`,
                  borderColor: 'rgba(201,168,76,0.07)',
                }}
              >
                <a
                  href={`/#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-4 sm:py-5"
                >
                  <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white/70 group-hover:text-white transition-colors duration-300">
                    {link}
                  </span>
                </a>
              </div>
            ))}
          </nav>

          {/* ── Bottom: CTA + subtle info ── */}
          <div
            className="pb-10 sm:pb-14 flex flex-col items-center gap-5 px-8"
            style={{
              animation: 'menuLinkIn 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) 0.35s both',
            }}
          >
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="glass-btn-solid text-[#080808] text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full tracking-[0.04em]"
            >
              BUILD WITH MALERA
            </a>
            <p className="text-white/10 text-[0.625rem] sm:text-[0.6875rem] font-mono tracking-[0.12em]">
              Pristina&nbsp;&nbsp;·&nbsp;&nbsp;Est&nbsp;2026
            </p>
          </div>

          {/* ── Bottom: subtle gold line ── */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>
      )}
      {/* Scroll navbar  real dark glass, logo only */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-center py-2 glass-bar transition-all duration-500 ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <a href="/">
          <img
            src="/malera-transparent.webp"
            alt="Malera Studio"
            width={120}
            height={28}
            className="h-4 sm:h-5 2xl:h-6 min-[3000px]:h-10 min-[5000px]:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </>
  );
}
