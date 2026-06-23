export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-12 px-6">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Eyebrow */}
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
          DIGITAL AGENCY · KOSOVO · EST 2026
        </p>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-display)] text-[12vw] md:text-[9vw] leading-none text-white mb-12 md:mb-16 max-w-[1100px]">
          We just build good stuff
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          {/* Subtext */}
          <p className="text-base md:text-lg text-white/40 max-w-[320px] leading-relaxed">
            Websites, apps and videos. Built out of Kosovo.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center bg-white text-[#080808] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#C9A84C] transition-colors"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/10">
          Kosovo · Est 2026 · AI Powered
        </p>
      </div>
    </section>
  );
}
