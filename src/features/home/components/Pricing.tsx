import Container from "@/src/features/layout/components/Container";

const PLANS = [
  {
    name: "Starter",
    price: "€499",
    desc: "You know what you need. A clean site, up fast, done right.",
    features: [
      "Up to 5 pages built properly from scratch",
      "Looks right on every screen and every device",
      "Search engines can find you",
      "One round of revisions before we wrap up",
      "Handed over in 5 days ready to use",
      "You own everything when we are done",
    ],
    cta: "Tell me more",
    tier: 0,
  },
  {
    name: "Pro",
    price: "€999",
    desc: "Something bigger is in motion. You need a site that grows with you.",
    features: [
      "Up to 15 pages structured to expand",
      "A CMS so you can update things yourself",
      "SEO that goes deeper than the basics",
      "Animations and interactions that feel considered",
      "Analytics set up and working from day one",
      "Two revision rounds so we get the details right",
      "Delivered in 10 days",
      "Reachable after launch if something comes up",
    ],
    cta: "Tell me more",
    tier: 1,
  },
  {
    name: "Business",
    price: "€2,499",
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

          <p className="text-white/35 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[420px] 2xl:max-w-[550px]">
            Fixed-price engagements with detailed scope documents upfront. Any changes beyond original scope are discussed and quoted separately before work continues.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {PLANS.map((plan, i) => {
            const isMid = plan.tier === 1;
            const isPremium = plan.tier === 2;
            const isEnterprise = plan.tier === 3;

            return (
            <div
              key={plan.name}
              className={`group relative rounded-2xl flex flex-col transition-all duration-700 ease-out
                animate-[pricing-card-in_0.6s_ease-out_both]
                ${isEnterprise
                  ? "bg-gradient-to-b from-white/[0.10] to-white/[0.03] ring-[1.5px] ring-[#C9A84C]/[0.25] shadow-[0_0_0_1px_rgba(201,168,76,0.10),0_12px_60px_rgba(0,0,0,0.5),0_0_120px_rgba(201,168,76,0.04),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-6 hover:bg-gradient-to-b hover:from-white/[0.14] hover:to-white/[0.05] hover:ring-[#C9A84C]/[0.40] hover:shadow-[0_0_0_1px_rgba(201,168,76,0.18),0_20px_80px_rgba(0,0,0,0.6),0_0_180px_rgba(201,168,76,0.08),inset_0_1px_0_rgba(255,255,255,0.14)] hover:scale-[1.03]"
                  : isPremium
                    ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] ring-[1.5px] ring-white/[0.18] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_60px_rgba(0,0,0,0.5),0_0_120px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] p-5 sm:p-6 hover:bg-gradient-to-b hover:from-white/[0.12] hover:to-white/[0.04] hover:ring-white/[0.30] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_20px_80px_rgba(0,0,0,0.6),0_0_180px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(255,255,255,0.14)] hover:scale-[1.03]"
                    : isMid
                      ? "bg-white/[0.05] ring-1 ring-white/[0.10] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.4)] p-5 sm:p-6 hover:bg-white/[0.07] hover:ring-white/[0.18] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_56px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.05)] hover:scale-[1.01]"
                      : "bg-white/[0.015] ring-1 ring-white/[0.03] shadow-none p-5 sm:p-6 hover:bg-white/[0.03] hover:ring-white/[0.08] hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
                }`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              {/* ── Premium/Enterprise: ambient glow behind card ── */}
              {(isPremium || isEnterprise) && (
                <div className="absolute -inset-px rounded-2xl pointer-events-none z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${isEnterprise ? 'rgba(201,168,76,0.10)' : 'rgba(255,255,255,0.12)'} 0%, transparent 55%)`,
                  }}
                />
              )}

              {/* ── Top accent ── */}
              <div className={`absolute top-0 left-4 right-4 h-px transition-all duration-700 z-10 ${
                isEnterprise
                  ? "bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent group-hover:via-[#C9A84C]/70"
                  : isPremium
                    ? "bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/50"
                    : isMid
                      ? "bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/35"
                      : "bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-white/12"
              }`} />

              {/* ── Badge ── */}
              {isEnterprise && (
                <span className="absolute top-0 right-0 bg-[#C9A84C] text-black text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg z-20">
                  Custom
                </span>
              )}
              {isPremium && (
                <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg z-20">
                  Best value
                </span>
              )}
              {isMid && (
                <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg z-20">
                  Most picked
                </span>
              )}

              {/* ── Plan name ── */}
              <p className={`relative z-10 font-[family-name:var(--font-display)] font-bold mb-3 uppercase transition-all duration-500 ${
                isEnterprise
                  ? "text-xl sm:text-2xl tracking-wide text-[#C9A84C] group-hover:tracking-[0.12em]"
                  : isPremium
                    ? "text-xl sm:text-2xl tracking-wide text-white group-hover:tracking-[0.10em]"
                    : isMid
                      ? "text-base sm:text-lg tracking-wide text-white group-hover:tracking-[0.10em]"
                      : "text-base sm:text-lg tracking-wide text-white group-hover:tracking-[0.06em]"
              }`}>
                {plan.name}
              </p>

              {/* ── Price ── */}
              <div className={`relative z-10 mb-3 transition-all duration-500 origin-left ${
                isEnterprise || isPremium ? "group-hover:scale-[1.02]" : ""
              }`}>
                <span className={`font-[family-name:var(--font-display)] font-extrabold inline-block transition-all duration-500 ${
                  isEnterprise ? "text-3xl sm:text-4xl text-[#C9A84C]" : isPremium ? "text-3xl sm:text-4xl text-white" : "text-2xl sm:text-3xl text-white"
                }`}>
                  {plan.price}
                </span>
              </div>

              {/* ── Description ── */}
              <p className={`relative z-10 text-xs sm:text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                isEnterprise
                  ? "text-white/55 group-hover:text-white/75"
                  : isPremium
                    ? "text-white/50 group-hover:text-white/70"
                    : isMid
                      ? "text-white/35 group-hover:text-white/55"
                      : "text-white/30 group-hover:text-white/45"
              }`}>
                {plan.desc}
              </p>

              {/* ── Separator ── */}
              <div className={`relative z-10 h-px w-full mb-6 transition-all duration-500 ${
                isEnterprise
                  ? "bg-gradient-to-r from-[#C9A84C]/[0.15] via-[#C9A84C]/[0.08] to-transparent group-hover:from-[#C9A84C]/[0.25] group-hover:via-[#C9A84C]/[0.14]"
                  : isPremium
                    ? "bg-gradient-to-r from-white/[0.10] via-white/[0.06] to-white/[0.02] group-hover:from-white/[0.20] group-hover:via-white/[0.12]"
                    : isMid
                      ? "bg-white/[0.06] group-hover:bg-white/[0.12]"
                      : "bg-white/[0.03] group-hover:bg-white/[0.06]"
              }`} />

              {/* ── Features ── */}
              <ul className="relative z-10 space-y-2 mb-6 flex-1">
                {plan.features.map((feat, fi) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm transition-all duration-400 ${
                      isEnterprise
                        ? "text-white/55 group-hover:text-white/75"
                        : isPremium
                          ? "text-white/50 group-hover:text-white/70"
                          : isMid
                            ? "text-white/40 group-hover:text-white/60"
                            : "text-white/35 group-hover:text-white/50"
                    }`}
                    style={{ transitionDelay: `${fi * 50}ms` }}
                  >
                    <span className={`mt-px shrink-0 transition-all duration-500 ${
                      isEnterprise ? "text-[#C9A84C]/40 group-hover:text-[#C9A84C]/60" : "text-white/15 group-hover:text-white/30"
                    }`}>
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
                  isEnterprise
                    ? "bg-[#C9A84C] text-black hover:bg-[#D4B35A] hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(201,168,76,0.25),0_0_80px_rgba(201,168,76,0.10)]"
                    : isPremium
                      ? "bg-white text-black hover:bg-white/95 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.20),0_0_80px_rgba(255,255,255,0.08)]"
                      : isMid
                        ? "bg-white text-black hover:bg-white/90 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                        : "bg-white/[0.06] text-white/65 hover:bg-white/[0.10] hover:text-white hover:scale-[1.02] ring-1 ring-white/[0.06] hover:ring-white/[0.12]"
                }`}
              >
                <span className="relative z-10">{plan.cta}</span>
                {/* Shine sweep on hover */}
                <span className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out ${
                  isEnterprise || isPremium ? "group-hover:duration-500" : ""
                }`}
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${isEnterprise ? '0.18' : isPremium ? '0.14' : '0.08'}) 40%, rgba(255,255,255,${isEnterprise ? '0.25' : isPremium ? '0.20' : '0.12'}) 50%, rgba(255,255,255,${isEnterprise ? '0.18' : isPremium ? '0.14' : '0.08'}) 60%, transparent 100%)`,
                  }}
                />
              </a>

            </div>
          )})}
        </div>
      </Container>
    </section>
  );
}
