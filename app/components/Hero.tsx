export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-end pb-8 sm:pb-12 px-4 sm:px-6 pt-6 sm:pt-8 relative overflow-hidden">
      {/* ── Ambient light orbs — responsive sizes, no overflow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(1000px,90vw)] h-[min(700px,60vh)] ambient-orb ambient-orb-gold" />
      <div className="absolute top-1/5 -right-10 sm:-right-40 w-[min(600px,70vw)] h-[min(600px,70vw)] ambient-orb ambient-orb-white" />
      <div className="absolute top-1/2 -left-10 sm:-left-60 w-[min(500px,60vw)] h-[min(500px,60vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-16 right-1/4 w-[min(350px,50vw)] h-[min(350px,50vw)] ambient-orb ambient-orb-white" />
      <div className="absolute top-1/3 left-1/3 w-[min(300px,40vw)] h-[min(300px,40vw)] ambient-orb ambient-orb-warm" />

      {/* ── Floating glass shards for depth ── */}
      <div className="hidden sm:block absolute top-1/4 right-[15%] w-24 h-16 glass-shard rotate-12" />
      <div className="hidden sm:block absolute bottom-1/3 left-[10%] w-32 h-20 glass-shard -rotate-6" />
      <div className="hidden sm:block absolute top-[60%] right-[25%] w-16 h-10 glass-shard rotate-[-15deg]" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* ── Headline ── */}
        <h1 className="font-[family-name:var(--font-display)] font-extrabold leading-[0.95] tracking-[-0.02em] text-white mb-8 sm:mb-12 md:mb-16 max-w-[1100px] uppercase
          text-[13vw]
          sm:text-[11vw]
          md:text-[8vw]
          lg:text-[7vw]
          xl:text-7xl
          2xl:text-8xl">
          We just build good stuff
        </h1>

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <p className="text-sm sm:text-base lg:text-lg text-white/50 max-w-[280px] sm:max-w-[320px] leading-relaxed uppercase">
            Websites, apps and videos. Built out of Kosovo.
          </p>

          {/* ── Buttons ── */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#services"
              className="inline-flex items-center glass-btn-solid text-[#080808] text-xs sm:text-sm font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-full uppercase"
            >
              SEE OUR WORK
            </a>
            <a
              href="#contact"
              className="inline-flex items-center glass-btn text-white/90 text-xs sm:text-sm font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:text-[#C9A84C] uppercase"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* ── Bottom tagline ── */}
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/15">
          Kosovo · Est 2026 · AI Powered
        </p>
      </div>
    </section>
  );
}
