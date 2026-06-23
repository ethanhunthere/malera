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
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column — sticky */}
          <div className="md:sticky md:top-24 md:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
              CAPABILITIES
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
              Our services
            </h2>
            <p className="text-white/40 text-base leading-relaxed max-w-[280px]">
              End-to-end digital solutions from a team that cares about craft.
            </p>
          </div>

          {/* Right column — service rows */}
          <div>
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className={`group flex items-start gap-6 py-6 cursor-pointer ${
                  i < SERVICES.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                {/* Number */}
                <span className="font-mono text-sm text-white/20 group-hover:text-[#C9A84C] transition-colors shrink-0 pt-0.5">
                  {svc.num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-white mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow */}
                <span className="font-mono text-white/15 group-hover:text-[#C9A84C] transition-colors shrink-0 pt-0.5">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
