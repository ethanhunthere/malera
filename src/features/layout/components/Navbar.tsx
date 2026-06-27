"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/src/features/layout/components/Container";

const NAV_LINKS = ["Services", "Pricing", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <Container>
          <nav className="relative z-10 flex items-center h-12 sm:h-16">
            {/* Logo  left */}
            <a href="/" className="flex-shrink-0">
              <Image
                src="/malera-transparent.webp"
                alt="Malera Studio"
                width={160}
                height={40}
                className="h-6 sm:h-9 2xl:h-10 min-[3000px]:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
            </a>

            {/* Center nav  absolutely centered */}
            <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="relative group inline-flex items-center h-8 px-3 xl:px-4 text-xs xl:text-sm font-medium text-white/45 hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {/* Gold underline  slides in from center */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#C9A84C] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-center" />
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
                className="hidden lg:inline-flex items-center glass-btn-solid text-[#080808] text-xs 2xl:text-sm min-[3000px]:text-base font-medium px-3 xl:px-5 py-1.5 xl:py-2 rounded-full"
              >
                Start a Project
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

      {/* Mobile fullscreen overlay — pure transparent glass */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 flex flex-col lg:hidden overflow-hidden glass-pro rounded-none"
        >
          {/* ── Ambient depth ── */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-0 w-[min(400px,70vw)] h-[min(400px,70vw)] ambient-orb ambient-orb-gold" style={{ opacity: 0.25 }} />
            <div className="absolute bottom-0 right-0 w-[min(300px,50vw)] h-[min(300px,50vw)] ambient-orb ambient-orb-white" style={{ opacity: 0.12 }} />
          </div>

          {/* ── Top: subtle gold line ── */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

          {/* ── Nav links: centered, large, each wrapped in glass card ── */}
          <nav className="flex-1 flex flex-col justify-center px-6 sm:px-12 gap-3">
            {NAV_LINKS.map((link, i) => (
              <div
                key={link}
                className="glass-subtle rounded-2xl group"
                style={{
                  animation: `menuLinkIn 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) ${i * 0.1}s both`,
                }}
              >
                <a
                  href={`/#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-4 sm:py-5"
                >
                  <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white/75 group-hover:text-white transition-colors duration-300">
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
              Start a Project
            </a>
            <p className="text-white/10 text-[0.625rem] sm:text-[0.6875rem] font-mono tracking-[0.12em]">
              Pristina&nbsp;&nbsp;·&nbsp;&nbsp;Est&nbsp;2026
            </p>
          </div>

          {/* ── Bottom: subtle gold line ── */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
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
          <Image
            src="/malera-transparent.webp"
            alt="Malera Studio"
            width={120}
            height={28}
            className="h-4 sm:h-5 2xl:h-6 min-[3000px]:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </>
  );
}
