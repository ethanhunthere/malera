import Container from "@/src/features/layout/components/Container";

export default function Contact() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-44">
      {/* ── Ambient orbs ── */}
      <div className="absolute top-1/4 left-0 w-[min(500px,60vw)] h-[min(500px,60vw)] 2xl:w-[min(800px,60vw)] 2xl:h-[min(800px,60vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-0 right-0 w-[min(400px,50vw)] h-[min(400px,50vw)] 2xl:w-[min(650px,50vw)] 2xl:h-[min(650px,50vw)] ambient-orb ambient-orb-white" />

      <Container id="contact" className="relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ── Header ── */}
        <div className="mb-8 sm:mb-14 text-center">
          <p className="font-mono text-[0.625rem] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#C9A84C] mb-4">
            LET&apos;S TALK
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white leading-[0.9] mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 7rem)',
            }}
          >
            Ready to build<br />something great?
          </h2>

          <p className="text-white/40 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[360px] 2xl:max-w-[480px] mx-auto">
            Tell us about your project. No strings attached, just a conversation to see if we&apos;re the right fit.
          </p>
        </div>

        {/* ── Hero CTA: dominant email card ── */}
        <a
          href="mailto:hello@malera.studio"
          className="group block relative mb-4 sm:mb-6 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.01] max-w-[850px] 2xl:max-w-[1000px] mx-auto"
        >
          {/* Dark glass container */}
          <div className="relative glass-deep rounded-2xl p-4 sm:p-10 md:p-12 text-center overflow-hidden transition-all duration-700 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_80px_rgba(0,0,0,0.5),0_0_120px_rgba(201,168,76,0.08)]">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent group-hover:via-[#C9A84C]/70 transition-all duration-700" />

            {/* Icon ring */}
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded-2xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20 mb-4 sm:mb-6 group-hover:bg-[#C9A84C]/15 group-hover:ring-[#C9A84C]/35 group-hover:scale-105 transition-all duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#C9A84C] sm:w-7 sm:h-7 2xl:w-8 2xl:h-8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 4-10 8L2 4" />
              </svg>
            </div>

            <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-base sm:text-2xl md:text-3xl 2xl:text-4xl min-[3000px]:text-5xl min-[5000px]:text-6xl mb-3 group-hover:tracking-wide transition-all duration-500 break-words">
              hello@malera.studio
            </h3>

            <p className="text-white/45 text-xs sm:text-base 2xl:text-lg min-[3000px]:text-xl mb-5 sm:mb-8 max-w-[380px] 2xl:max-w-[500px] mx-auto">
              Drop us a line and we&apos;ll get back to you, usually within a day.
            </p>

            {/* CTA pill */}
            <span className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm 2xl:text-base font-semibold group-hover:bg-[#C9A84C] group-hover:text-black group-hover:gap-3 transition-all duration-500">
              Send a message
              <span className="font-mono text-lg leading-none group-hover:translate-x-0.5 transition-transform duration-500">→</span>
            </span>

            {/* Bottom subtle line */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          </div>
        </a>

        {/* ── Instagram  balanced beside the hero card ── */}
        <div className="flex justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-0.5 w-full max-w-[420px]"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:ring-white/[0.14] transition-all duration-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-[#C9A84C] transition-colors duration-500">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors duration-500 mb-0.5">
                Instagram
              </h3>
              <p className="text-xs sm:text-sm text-white/40 group-hover:text-white/55 transition-colors duration-500">
                @malera.studio
              </p>
            </div>
            <span className="font-mono text-white/10 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all duration-500 shrink-0 text-sm">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
