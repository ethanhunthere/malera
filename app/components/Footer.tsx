const COMPANY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 sm:mt-16 flex flex-col items-center">
      {/* Sentinel – triggers services shards to shatter when footer comes into view */}
      <div data-shard-sentinel="services" className="w-full h-px pointer-events-none" />

      {/* ── Glass separator line ── */}
      <div className="w-full max-w-[min(92vw,600px)] sm:max-w-[min(93vw,1100px)] lg:max-w-[min(93vw,1600px)] 2xl:max-w-[min(95vw,2200px)] px-6">
        <div className="glass-divider" />
      </div>

      {/* ── Footer content ── */}
      <div className="w-full max-w-[min(92vw,600px)] sm:max-w-[min(93vw,1100px)] lg:max-w-[min(93vw,1600px)] 2xl:max-w-[min(95vw,2200px)] px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 text-center sm:text-left">
          {/* ── About ── */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] mb-5">
              About
            </h4>
            <div className="space-y-0.5 text-white/35 text-sm leading-relaxed">
              <p>A small creative studio</p>
              <p>building digital products,</p>
              <p>brands, and experiences.</p>
              <p>No fluff, just good work.</p>
            </div>
          </div>

          {/* ── Company ── */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/35 text-sm hover:text-white/65 transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@malera.studio"
                  className="text-white/35 text-sm hover:text-white/65 transition-colors duration-300"
                >
                  hello@malera.studio
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/35 text-sm hover:text-white/65 transition-colors duration-300"
                >
                  @malera.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-white/18 text-xs font-mono">
            ©&nbsp;{year}&nbsp;Malera Studio. All rights reserved.
          </p>
          <p className="text-white/12 text-xs">
            Pristina, Kosovo
          </p>
        </div>
      </div>
    </footer>
  );
}
