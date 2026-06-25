const PLANS = [
  {
    name: "Essential",
    price: "€1,500",
    desc: "You know what you need and just want it built right. Clean, fast, without the back-and-forth marathons.",
    features: [
      "A landing page or small site, up to 5 pages",
      "Looks great on every screen",
      "Search engines will actually find you",
      "Two rounds of tweaks, because details matter",
      "In your hands within a week",
    ],
    cta: "Tell me more",
    tier: 0,
  },
  {
    name: "Business",
    price: "€4,500",
    desc: "Something bigger is brewing. You need a site that grows alongside you, built to keep up for years.",
    features: [
      "Up to 15 pages, built to expand",
      "A CMS so you can update things yourself",
      "SEO that goes deeper than ticking boxes",
      "Motion and interaction that feels intentional",
      "Analytics wired up from day one",
      "Three revision rounds, plus a couple of weeks to polish",
    ],
    cta: "Tell me more",
    tier: 1,
  },
  {
    name: "Build It Together",
    price: "LET'S TALK",
    desc: "You're building a platform, a SaaS, or something that doesn't fit a template. We figure out scope and pricing together.",
    features: [
      "As many pages as you need",
      "Full-stack, front to back",
      "AI where it actually makes sense",
      "Dashboards, tools, internal systems",
      "Someone you can call when things get real",
      "We stick around after launch",
    ],
    cta: "Let's figure it out",
    tier: 2,
  },
];

export default function Pricing() {
  return (
    <section className="pt-8 sm:pt-28 md:pt-36 pb-10 sm:pb-24 md:pb-32 px-2 sm:px-6 relative overflow-x-clip">
      {/* ── Ambient orbs  cool, minimal white only ── */}
      <div className="absolute top-1/4 right-0 w-[min(500px,60vw)] h-[min(500px,60vw)] 2xl:w-[min(800px,60vw)] 2xl:h-[min(800px,60vw)] ambient-orb ambient-orb-white" />
      <div className="absolute bottom-0 left-0 w-[min(350px,40vw)] h-[min(350px,40vw)] 2xl:w-[min(600px,40vw)] 2xl:h-[min(600px,40vw)] ambient-orb ambient-orb-white" style={{ opacity: 0.5 }} />

      <div id="pricing" className="w-full max-w-[min(92vw,900px)] 2xl:max-w-[min(85vw,1400px)] min-[3000px]:max-w-[min(80vw,2000px)] mx-auto relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ── Header  minimal, no glass, no gold ── */}
        <div className="mb-8 sm:mb-14">
          <p className="font-mono text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/30 mb-4">
            PRICING
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white mb-4 leading-[0.9]"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 7rem)',
            }}
          >
            A PRICE THAT MAKES SENSE
          </h2>

          <p className="text-white/35 text-xs sm:text-base 2xl:text-lg leading-relaxed max-w-[420px] 2xl:max-w-[550px]">
            Fixed-price engagements with detailed scope documents upfront. Any changes beyond original scope are discussed and quoted separately before work continues.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
          {PLANS.map((plan, i) => {
            const isBusiness = plan.tier === 1;
            const isCustom = plan.tier === 2;

            return (
            <div
              key={plan.name}
              className={`group relative rounded-2xl flex flex-col transition-all duration-700 ease-out
                animate-[pricing-card-in_0.6s_ease-out_both]
                ${isCustom
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] ring-[1.5px] ring-white/[0.18] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_60px_rgba(0,0,0,0.5),0_0_120px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-6 hover:bg-gradient-to-b hover:from-white/[0.12] hover:to-white/[0.04] hover:ring-white/[0.30] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_20px_80px_rgba(0,0,0,0.6),0_0_180px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(255,255,255,0.14)] hover:scale-[1.03]"
                  : isBusiness
                    ? "bg-white/[0.05] ring-1 ring-white/[0.10] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.4)] p-5 sm:p-6 hover:bg-white/[0.07] hover:ring-white/[0.18] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_56px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.05)] hover:scale-[1.01]"
                    : "bg-white/[0.015] ring-1 ring-white/[0.03] shadow-none p-5 sm:p-6 hover:bg-white/[0.03] hover:ring-white/[0.08] hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
                }`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              {/* ── Tier 2: ambient glow behind card ── */}
              {isCustom && (
                <div className="absolute -inset-px rounded-2xl pointer-events-none z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 55%)',
                  }}
                />
              )}

              {/* ── Top accent ── */}
              <div className={`absolute top-0 left-4 right-4 h-px transition-all duration-700 z-10 ${
                isCustom
                  ? "bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/50"
                  : isBusiness
                    ? "bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/35"
                    : "bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-white/12"
              }`} />

              {/* ── Badge ── */}
              {isCustom && (
                <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg z-20">
                  Best value
                </span>
              )}
              {isBusiness && (
                <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg z-20">
                  Most picked
                </span>
              )}

              {/* ── Plan name ── */}
              <p className={`relative z-10 font-[family-name:var(--font-display)] font-bold text-white mb-3 uppercase transition-all duration-500 ${
                isCustom
                  ? "text-xl sm:text-2xl tracking-wide group-hover:tracking-[0.10em]"
                  : isBusiness
                    ? "text-base sm:text-lg tracking-wide group-hover:tracking-[0.10em]"
                    : "text-base sm:text-lg tracking-wide group-hover:tracking-[0.06em]"
              }`}>
                {plan.name}
              </p>

              {/* ── Price ── */}
              <div className={`relative z-10 mb-3 transition-all duration-500 origin-left ${
                isCustom ? "group-hover:scale-[1.02]" : isBusiness ? "group-hover:scale-[1.02]" : ""
              }`}>
                <span className={`font-[family-name:var(--font-display)] font-extrabold inline-block transition-all duration-500 text-white ${
                  isCustom ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
                }`}>
                  {plan.price}
                </span>
              </div>

              {/* ── Description ── */}
              <p className={`relative z-10 text-xs sm:text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                isCustom
                  ? "text-white/50 group-hover:text-white/70"
                  : isBusiness
                    ? "text-white/35 group-hover:text-white/55"
                    : "text-white/30 group-hover:text-white/45"
              }`}>
                {plan.desc}
              </p>

              {/* ── Separator ── */}
              <div className={`relative z-10 h-px w-full mb-6 transition-all duration-500 ${
                isCustom
                  ? "bg-gradient-to-r from-white/[0.10] via-white/[0.06] to-white/[0.02] group-hover:from-white/[0.20] group-hover:via-white/[0.12]"
                  : isBusiness
                    ? "bg-white/[0.06] group-hover:bg-white/[0.12]"
                    : "bg-white/[0.03] group-hover:bg-white/[0.06]"
              }`} />

              {/* ── Features ── */}
              <ul className="relative z-10 space-y-2 mb-6 flex-1">
                {plan.features.map((feat, fi) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm transition-all duration-400 ${
                      isCustom
                        ? "text-white/50 group-hover:text-white/70"
                        : isBusiness
                          ? "text-white/40 group-hover:text-white/60"
                          : "text-white/35 group-hover:text-white/50"
                    }`}
                    style={{ transitionDelay: `${fi * 50}ms` }}
                  >
                    <span className="mt-px shrink-0 transition-all duration-500 text-white/15 group-hover:text-white/30">
                      &bull;
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* ── CTA Button ── */}
              <a
                href="#contact"
                className={`relative z-10 block text-center text-xs sm:text-sm font-semibold uppercase tracking-wider py-2.5 px-4 rounded-full transition-all duration-500 overflow-hidden ${
                  isCustom
                    ? "bg-white text-black hover:bg-white/95 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.20),0_0_80px_rgba(255,255,255,0.08)]"
                    : isBusiness
                      ? "bg-white text-black hover:bg-white/90 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                      : "bg-white/[0.06] text-white/65 hover:bg-white/[0.10] hover:text-white hover:scale-[1.02] ring-1 ring-white/[0.06] hover:ring-white/[0.12]"
                }`}
              >
                <span className="relative z-10">{plan.cta}</span>
                {/* Shine sweep on hover */}
                <span className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out ${
                  isCustom ? "group-hover:duration-500" : ""
                }`}
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${isCustom ? '0.14' : '0.08'}) 40%, rgba(255,255,255,${isCustom ? '0.20' : '0.12'}) 50%, rgba(255,255,255,${isCustom ? '0.14' : '0.08'}) 60%, transparent 100%)`,
                  }}
                />
              </a>

            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
