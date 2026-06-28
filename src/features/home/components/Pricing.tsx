import Container from "@/src/features/layout/components/Container";

const PLANS = [
  {
    name: "Starter",
    price: "$299",
    desc: "You know what you need. A clean site, up fast, done right.",
    features: [
      "Up to 5 pages built properly from scratch",
      "Looks right on every screen and every device",
      "Search engines can find you",
      "One round of revisions before we wrap up",
      "You own everything when we are done",
    ],
    cta: "Tell me more",
    tier: 0,
  },
  {
    name: "Pro",
    price: "$699",
    desc: "Something bigger is in motion. You need a site that grows with you.",
    features: [
      "Up to 15 pages structured to expand",
      "A CMS so you can update things yourself",
      "SEO that goes deeper than the basics",
      "Animations and interactions that feel considered",
      "Analytics set up and working from day one",
      "Two revision rounds so we get the details right",
      "Reachable after launch if something comes up",
    ],
    cta: "Tell me more",
    tier: 1,
  },
  {
    name: "Business",
    price: "$1,499",
    desc: "You are building something real. A product that needs to work. We treat it like one.",
    features: [
      "Web app or e-commerce built for actual use",
      "Front end and back end handled by us",
      "AI features integrated where they genuinely help",
      "Admin dashboards and internal tools if needed",
      "Payment systems APIs and third-party integrations",
      "Three revision rounds across the full build",
      "We stay after launch",
      "Full documentation so your team can take over",
    ],
    cta: "Tell me more",
    tier: 2,
  },
  {
    name: "Enterprise",
    price: "LET'S TALK",
    desc: "A platform a SaaS or a mobile app that deserves its own conversation. We sit down figure out the scope together and agree on a number that works for both sides.",
    features: [
      "Android and iOS mobile apps",
      "Complex platforms and SaaS products",
      "Custom AI bots trained on your business",
      "Automation that saves your team real time",
      "Ongoing development after delivery",
      "A team you can call when things get serious",
      "We treat your product like we built it for ourselves",
    ],
    cta: "Let's figure it out",
    tier: 3,
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-44">
      {/* ── Ambient orbs  cool, minimal white only ── */}
      <div className="absolute top-1/4 right-0 w-[min(500px,60vw)] h-[min(500px,60vw)] 2xl:w-[min(800px,60vw)] 2xl:h-[min(800px,60vw)] ambient-orb ambient-orb-white" />
      <div className="absolute bottom-0 left-0 w-[min(350px,40vw)] h-[min(350px,40vw)] 2xl:w-[min(600px,40vw)] 2xl:h-[min(600px,40vw)] ambient-orb ambient-orb-white" style={{ opacity: 0.5 }} />

      <Container id="pricing" className="relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ── Header  minimal, no glass, no gold ── */}
        <div className="mb-8 sm:mb-14">
          <p className="font-mono text-[0.625rem] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/30 mb-4">
            PRICING
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white mb-4 leading-[0.9]"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 7rem)',
            }}
          >
            A PRICE THAT MAKES SENSE
          </h2>

          <p className="text-white/35 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[420px] 2xl:max-w-[550px] min-[3000px]:max-w-[700px]">
            Fixed-price engagements with detailed scope documents upfront. Any changes beyond original scope are discussed and quoted separately before work continues.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4">
          {PLANS.map((plan, i) => {
            const tier = plan.tier; // 0=Starter, 1=Pro, 2=Business, 3=Enterprise

            // ── Intensity scale ──
            const ringClass = [
              "ring-1 ring-white/[0.04]",                                          // 25%
              "ring-1 ring-white/[0.08]",                                          // 50%
              "ring-1 ring-white/[0.16]",                                          // 75%
              "ring-1 ring-white/[0.22]",                                          // 100%
            ][tier];

            const shadowClass = [
              "",                                                                    // 25%: none
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",                     // 50%: whisper
              "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.3)]", // 75%
              "shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_8px_32px_rgba(0,0,0,0.4)]", // 100%
            ][tier];

            const nameClass = [
              "text-sm sm:text-base tracking-wide font-medium text-white/60",          // 25%: understated
              "text-base sm:text-lg tracking-wide font-semibold text-white/75",        // 50%
              "text-lg sm:text-xl tracking-wide font-bold text-white/90",              // 75%
              "text-xl sm:text-2xl tracking-wide font-bold text-white",                // 100%
            ][tier];

            const priceSizeClass = [
              "text-2xl sm:text-3xl",   // 25%
              "text-2xl sm:text-3xl",   // 50%
              "text-2xl sm:text-3xl",   // 75%
              "text-3xl sm:text-4xl",   // 100%
            ][tier];

            const priceWeightClass = [
              "font-light",       // 25%: light
              "font-medium",       // 50%
              "font-bold",         // 75%
              "font-extrabold",    // 100%
            ][tier];

            const descClass = [
              "text-white/25 group-hover:text-white/35",
              "text-white/35 group-hover:text-white/50",
              "text-white/45 group-hover:text-white/60",
              "text-white/55 group-hover:text-white/70",
            ][tier];

            const separatorClass = [
              "bg-white/[0.03] group-hover:bg-white/[0.05]",
              "bg-white/[0.05] group-hover:bg-white/[0.08]",
              "bg-white/[0.08] group-hover:bg-white/[0.14]",
              "bg-white/[0.12] group-hover:bg-white/[0.18]",
            ][tier];

            const featureClass = [
              "text-white/30 group-hover:text-white/40",
              "text-white/35 group-hover:text-white/50",
              "text-white/45 group-hover:text-white/60",
              "text-white/55 group-hover:text-white/70",
            ][tier];

            const bulletClass = [
              "text-white/10 group-hover:text-white/18",
              "text-white/12 group-hover:text-white/22",
              "text-white/18 group-hover:text-white/32",
              "text-white/28 group-hover:text-white/45",
            ][tier];

            const topAccentClass = [
              "h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent group-hover:via-white/[0.08]",
              "h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent group-hover:via-white/[0.16]",
              "h-[1.5px] bg-gradient-to-r from-transparent via-white/[0.20] to-transparent group-hover:via-white/[0.30]",
              "h-[2px] bg-gradient-to-r from-transparent via-white/35 to-transparent group-hover:via-white/50",
            ][tier];

            const ctaClass = [
              "bg-transparent ring-1 ring-white/[0.08] text-white/45 hover:bg-white/[0.04] hover:ring-white/[0.14] hover:text-white/65 hover:scale-[1.01]",
              "bg-white/[0.05] ring-1 ring-white/[0.10] text-white/60 hover:bg-white/[0.08] hover:ring-white/[0.18] hover:text-white/85 hover:scale-[1.02]",
              "bg-[#C9A84C] text-black hover:bg-[#D4B35A] hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)]",
              "bg-[#C9A84C] text-black hover:bg-[#DDBE6B] hover:scale-[1.03] hover:shadow-[0_4px_36px_rgba(201,168,76,0.35),0_0_80px_rgba(201,168,76,0.12)]",
            ][tier];

            const shineOpacity = ["0.05", "0.06", "0.08", "0.12"][tier];
            const shinePeak    = ["0.08", "0.10", "0.14", "0.20"][tier];

            const badgeLabel = ["Early stage", "Most popular", "Best value", "Custom"][tier];
            const badgeClass = [
              "bg-white/[0.05] text-[0.5rem] font-normal uppercase tracking-wider px-2 py-0.5 rounded-bl",
              "bg-white/90 text-black text-[0.5625rem] font-medium uppercase tracking-wider px-2 py-0.5 rounded-bl",
              "bg-white text-black text-[0.625rem] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-bl",
              "bg-white text-black text-[0.6875rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-bl",
            ][tier];

            const hoverScale = [
              "",
              "hover:scale-[1.005]",
              "hover:scale-[1.01]",
              "hover:scale-[1.015]",
            ][tier];

            return (
            <div
              key={plan.name}
              className={`group relative rounded-lg flex flex-col transition-all duration-500 ease-out
                animate-[pricing-card-in_0.6s_ease-out_both]
                ${plan.tier === 3 ? "bg-gradient-to-b from-white/[0.12] to-white/[0.04]" : plan.tier === 2 ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02]" : plan.tier === 1 ? "bg-white/[0.05]" : "bg-white/[0.015]"}
                ${ringClass} ${shadowClass} p-5 sm:p-6 ${hoverScale}`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              {/* ── Top accent ── */}
              <div className={`absolute top-0 left-4 right-4 transition-all duration-500 z-10 ${topAccentClass}`} />

              {/* ── Badge ── */}
              {badgeLabel && (
                <span className={`absolute top-0 right-0 z-20 ${badgeClass}`}>
                  {badgeLabel}
                </span>
              )}

              {/* ── Plan name ── */}
              <p className={`relative z-10 font-[family-name:var(--font-display)] mb-3 uppercase transition-all duration-500 ${nameClass} group-hover:tracking-[0.08em]`}
                style={{}}>
                {plan.name}
              </p>

              {/* ── Price ── */}
              <div className="relative z-10 mb-3 transition-all duration-500 origin-left group-hover:scale-[1.01]">
                <span className={`font-[family-name:var(--font-display)] inline-block transition-all duration-500 text-white ${priceSizeClass} ${priceWeightClass} 2xl:text-4xl min-[3000px]:text-6xl min-[5000px]:text-7xl`}>
                  {plan.price}
                </span>
              </div>

              {/* ── Description ── */}
              <p className={`relative z-10 text-xs sm:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl leading-relaxed mb-6 transition-colors duration-500 ${descClass}`}>
                {plan.desc}
              </p>

              {/* ── Separator ── */}
              <div className={`relative z-10 h-px w-full mb-6 transition-all duration-500 ${separatorClass}`} />

              {/* ── Features ── */}
              <ul className="relative z-10 space-y-2 2xl:space-y-3 min-[3000px]:space-y-5 min-[5000px]:space-y-6 mb-6 flex-1">
                {plan.features.map((feat, fi) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl transition-all duration-400 ${featureClass}`}
                    style={{ transitionDelay: `${fi * 50}ms` }}
                  >
                    <span className={`mt-px shrink-0 transition-all duration-500 ${bulletClass}`}>
                      &bull;
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* ── CTA Button ── */}
              <a
                href="#contact"
                className={`relative z-10 block text-center text-xs sm:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl font-semibold uppercase tracking-wider py-2.5 px-4 2xl:py-3.5 2xl:px-6 min-[3000px]:py-5 min-[3000px]:px-8 min-[5000px]:py-6 min-[5000px]:px-10 rounded-full transition-all duration-500 overflow-hidden ${ctaClass}`}
              >
                <span className="relative z-10">{plan.cta}</span>
                {/* Shine sweep on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${shineOpacity}) 40%, rgba(255,255,255,${shinePeak}) 50%, rgba(255,255,255,${shineOpacity}) 60%, transparent 100%)`,
                  }}
                />
              </a>

              {/* ── Detail link ── */}
              <a
                href={["/starterdetails", "/prodetails", "/businessdetails", "/enterprisedetails"][tier]}
                className="relative z-10 block text-center font-mono text-[0.6875rem] 2xl:text-sm min-[3000px]:text-lg min-[5000px]:text-xl text-white/40 hover:text-white/80 transition-colors duration-200 mt-2 hover:underline"
              >
                See what&apos;s included
              </a>

            </div>
          )})}
        </div>
      </Container>
    </section>
  );
}
