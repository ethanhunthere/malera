"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = ["Home", "Services", "Portfolio", "Team", "Pricing", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "SQ">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#080808]/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/malera.png"
              alt="Malera Studio"
              width={100}
              height={28}
              className="h-7 w-auto"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </a>

          {/* Center nav — hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "EN" ? "SQ" : "EN")}
              className="text-xs font-mono text-white/50 hover:text-white transition-colors uppercase tracking-wider"
            >
              {lang === "EN" ? "EN / SQ" : "SQ / EN"}
            </button>

            {/* CTA — hidden on mobile */}
            <a
              href="#contact"
              className="hidden md:inline-block bg-white text-[#080808] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#C9A84C] transition-colors"
            >
              Start a Project
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-sm font-medium uppercase tracking-wider"
              aria-label="Menu"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-medium hover:text-[#C9A84C] transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-white text-[#080808] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#C9A84C] transition-colors"
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
