export default function Contact() {
  return (
    <section className="pt-10 sm:pt-28 md:pt-36 pb-12 sm:pb-24 md:pb-32 px-3 sm:px-6 relative overflow-x-clip">
      {/* ── Ambient orbs — soft white/warm, calming ── */}
      <div className="absolute top-1/3 right-0 w-[min(500px,60vw)] h-[min(500px,60vw)] ambient-orb ambient-orb-white" />
      <div className="absolute bottom-1/4 left-0 w-[min(400px,50vw)] h-[min(400px,50vw)] ambient-orb ambient-orb-warm" />

      <div id="contact" className="max-w-[700px] mx-auto relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ── Header: clean, no panel, no frame ── */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C9A84C] mb-4">
            LET&apos;S TALK
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white mb-4 leading-[0.9]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            }}
          >
            Get in<br />touch
          </h2>

          <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-[320px] mx-auto">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
        </div>

        {/* ── Contact cards in a frosted container ── */}
        <div className="relative glass-frosted rounded-2xl p-4 sm:p-6 overflow-hidden">
          <div className="flex flex-col gap-2 sm:gap-3">
          {/* Email */}
          <a
            href="mailto:hello@malera.studio"
            className="w-full max-w-[600px] group flex items-center gap-3 sm:gap-6 px-3 sm:px-6 py-4 sm:py-6 cursor-pointer rounded-2xl glass-raised glass-card-hover glass-specular glass-rim overflow-hidden"
          >
            <span className="relative z-10 font-mono text-xs sm:text-sm text-white/20 group-hover:text-[#C9A84C] group-hover:scale-110 transition-all duration-500 shrink-0">
              @
            </span>
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-500 mb-0.5">
                Email us
              </h3>
              <p className="text-xs sm:text-sm text-white/45 group-hover:text-white/60 transition-colors duration-500">
                hello@malera.studio
              </p>
            </div>
            <span className="relative z-10 font-mono text-white/10 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all duration-500 shrink-0">
              →
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[600px] group flex items-center gap-3 sm:gap-6 px-3 sm:px-6 py-4 sm:py-6 cursor-pointer rounded-2xl glass-raised glass-card-hover glass-specular glass-rim overflow-hidden"
          >
            <span className="relative z-10 font-mono text-xs sm:text-sm text-white/20 group-hover:text-[#C9A84C] group-hover:scale-110 transition-all duration-500 shrink-0">
              @
            </span>
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-500 mb-0.5">
                Instagram
              </h3>
              <p className="text-xs sm:text-sm text-white/45 group-hover:text-white/60 transition-colors duration-500">
                @malera.studio
              </p>
            </div>
            <span className="relative z-10 font-mono text-white/10 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all duration-500 shrink-0">
              →
            </span>
          </a>

          {/* Location */}
          <div className="w-full max-w-[600px] group flex items-center gap-3 sm:gap-6 px-3 sm:px-6 py-4 sm:py-6 cursor-default rounded-2xl glass-raised glass-specular overflow-hidden">
            <span className="relative z-10 font-mono text-xs sm:text-sm text-white/20 shrink-0">
              ⌂
            </span>
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-white/80 mb-0.5">
                Location
              </h3>
              <p className="text-xs sm:text-sm text-white/45">
                Pristina, Kosovo
              </p>
            </div>
          </div>
        </div>
        </div>{/* close glass-frosted */}
      </div>
    </section>
  );
}
