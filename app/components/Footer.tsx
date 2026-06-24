const COMPANY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 sm:mt-16">
      {/* Sentinel  triggers services shards to shatter when footer comes into view */}
      <div data-shard-sentinel="services" className="w-full h-px pointer-events-none" />

      {/* ── Glass separator line ── */}
      <div className="w-full max-w-[min(92vw,600px)] sm:max-w-[min(93vw,1100px)] lg:max-w-[min(93vw,1600px)] 2xl:max-w-[min(95vw,2200px)] mx-auto px-2 sm:px-6">
        <div className="glass-divider" />
      </div>

      {/* ── Footer content ── */}
      <div className="w-full max-w-[min(92vw,600px)] sm:max-w-[min(93vw,1100px)] lg:max-w-[min(93vw,1600px)] 2xl:max-w-[min(95vw,2200px)] mx-auto px-2 sm:px-6 py-8 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-12 lg:gap-16">
          {/* ── Spacer ── */}
          <div className="hidden sm:block" />
          {/* ── About ── */}
          <div>
            <h4 className="font-mono text-[9px] sm:text-[11px] 2xl:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C9A84C] mb-4 sm:mb-5">
              About
            </h4>
            <p className="text-white/35 text-[11px] sm:text-sm 2xl:text-base leading-relaxed">
              A small creative studio building digital products, brands, and experiences. No fluff, just good work.
            </p>
          </div>

          {/* ── Company ── */}
          <div>
            <h4 className="font-mono text-[9px] sm:text-[11px] 2xl:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C9A84C] mb-4 sm:mb-5">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/35 text-[11px] sm:text-sm 2xl:text-base hover:text-white/65 transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ── */}
          <div>
            <h4 className="font-mono text-[9px] sm:text-[11px] 2xl:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C9A84C] mb-4 sm:mb-5">
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <a
                  href="mailto:hello@malera.studio"
                  className="text-white/35 text-[11px] sm:text-sm 2xl:text-base hover:text-white/65 transition-colors duration-300"
                >
                  hello@malera.studio
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/35 text-[11px] sm:text-sm 2xl:text-base hover:text-white/65 transition-colors duration-300"
                >
                  @malera.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 sm:mt-14 pt-5 sm:pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center sm:items-end sm:justify-end gap-2 sm:gap-6">
          <p className="text-white/18 text-[10px] sm:text-xs 2xl:text-sm font-mono">
            ©&nbsp;{year}&nbsp;Malera Studio. All rights reserved.
          </p>
          <p className="text-white/12 text-[11px] sm:text-xs">
            Pristina, Kosovo
          </p>
        </div>
      </div>
    </footer>
  );
}
