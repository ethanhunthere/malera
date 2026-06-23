const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    desc: "Custom websites and web applications built with modern frameworks. Fast, accessible, and SEO-optimized.",
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences.",
  },
  {
    num: "03",
    title: "Video Production",
    desc: "Professional video production from concept to final cut. Brand films, commercials, and social content.",
  },
  {
    num: "04",
    title: "AI Bots & Automation",
    desc: "Intelligent automation solutions and AI-powered chatbots that streamline your business workflows.",
  },
  {
    num: "05",
    title: "Brand Identity",
    desc: "Complete brand identity design including logos, typography, color systems, and brand guidelines.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-28 sm:pt-40 md:pt-52 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
      {/* ── Ambient orbs — responsive, contained ── */}
      <div className="absolute top-1/4 left-0 w-[min(700px,80vw)] h-[min(700px,80vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-1/4 right-0 w-[min(500px,60vw)] h-[min(500px,60vw)] ambient-orb ambient-orb-white" />
      <div className="absolute top-2/3 left-1/3 w-[min(350px,50vw)] h-[min(350px,50vw)] ambient-orb ambient-orb-warm" />

      {/* ── Floating shards ── */}
      <div className="hidden sm:block absolute top-[15%] right-[8%] w-20 h-14 glass-shard rotate-[20deg]" />
      <div className="hidden sm:block absolute bottom-[20%] left-[5%] w-28 h-16 glass-shard -rotate-[8deg]" />

      <div className="max-w-[900px] mx-auto relative z-10">
        {/* ── Showcase panel ── */}
        <div className="mb-12 sm:mb-16">
          <div className="relative glass-ultra rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden mx-auto max-w-[600px]">
              {/* Gold rim border — chrome-edge-gold effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none z-10" style={{
                border: '1px solid transparent',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.06) 30%, transparent 50%, rgba(201,168,76,0.04) 70%, rgba(201,168,76,0.14) 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }} />

              {/* Specular top-left flash */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none z-10" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 20%, transparent 50%, transparent 100%)',
              }} />

              {/* Gold accent line at top */}
              <div className="relative z-20 mb-5 sm:mb-6 flex items-center gap-3">
                <div className="h-[1px] flex-1" style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 50%, rgba(201,168,76,0.8) 100%)',
                }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shadow-[0_0_10px_rgba(201,168,76,0.6),0_0_24px_rgba(201,168,76,0.25)]" />
              </div>

              {/* Label */}
              <p className="relative z-20 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C9A84C] mb-4 sm:mb-5 text-glow">
                CAPABILITIES
              </p>

              {/* Headline — massive and commanding */}
              <h2 className="relative z-20 font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white mb-4 sm:mb-6 leading-[0.9]"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  textShadow: '0 0 2px rgba(255,255,255,0.25), 0 0 16px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.03)',
                }}
              >
                Our<br />services
              </h2>

              {/* Description — more visible */}
              <p className="relative z-20 text-white/60 text-sm sm:text-base leading-relaxed max-w-[280px]">
                End-to-end digital solutions from a team that cares about craft.
              </p>

              {/* Bottom gold accent dot */}
              <div className="relative z-20 mt-6 sm:mt-8 flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#C9A84C]/40" />
                <div className="w-1 h-1 rounded-full bg-[#C9A84C]/25" />
                <div className="w-1 h-1 rounded-full bg-[#C9A84C]/10" />
                <div className="h-[1px] flex-1" style={{
                  background: 'linear-gradient(90deg, rgba(201,168,76,0.3) 0%, transparent 100%)',
                }} />
              </div>
            </div>
          </div>

        {/* ── Service cards — centered ── */}
        <div className="flex flex-col gap-2 sm:gap-3 items-center">
            {SERVICES.map((svc) => (
              <div
                key={svc.num}
                className="w-full max-w-[600px] group flex items-start gap-4 sm:gap-6 px-4 sm:px-6 py-5 sm:py-6 cursor-pointer rounded-2xl glass-raised glass-card-hover glass-specular glass-rim"
              >
                {/* Number */}
                <span className="relative z-10 font-mono text-xs sm:text-sm text-white/20 group-hover:text-[#C9A84C] group-hover:scale-110 transition-all duration-500 shrink-0 pt-0.5">
                  {svc.num}
                </span>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-500 mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/45 group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow */}
                <span className="relative z-10 hidden sm:inline font-mono text-white/10 group-hover:text-[#C9A84C] group-hover:translate-x-2 transition-all duration-500 shrink-0 pt-0.5">
                  →
                </span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
