"use client";

import { useEffect } from "react";

export default function ComingSoon() {
  // Lock body scroll so no background scroll is possible
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] overflow-hidden">
      {/* Ambient depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full bg-gold opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[min(400px,60vw)] h-[min(400px,60vw)] rounded-full bg-white opacity-[0.03] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-6 text-center">
        {/* Logo */}
        <img
          src="/malera-transparent.webp"
          alt="Malera Studio"
          width={240}
          height={60}
          className="h-8 sm:h-10 w-auto opacity-80"
        />

        {/* Coming Soon text */}
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-body)] text-5xl sm:text-7xl md:text-8xl font-semibold text-white tracking-[-0.02em] leading-[0.95]">
            IS LOADING
          </h1>
          <p className="text-white/30 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            We&rsquo;re putting the final touches on something great.
            <br />
            Stay tuned.
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Footer */}
        <p className="text-white/10 text-xs font-mono tracking-[0.15em]">
          MALERA STUDIO &nbsp;·&nbsp; ESTR. 2026
        </p>
      </div>
    </div>
  );
}
