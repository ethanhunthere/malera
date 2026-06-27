import Container from "@/src/features/layout/components/Container";

/*
╔══════════════════════════════════════════════════════════════╗
║   CONTACT  ·  Malera glass design                           ║
║                                                              ║
║   Layered transparency with gold whispers.                   ║
║   Email card anchors the section; social cards sit below     ║
║   in a clean row, each one a small glass tile.               ║
║   Minimal, serious, confident.                               ║
╚══════════════════════════════════════════════════════════════╝
*/

/* ── Accurate stroke icons for each platform ── */
const SOCIALS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/+38346814700",
    /* Speech bubble with phone handset */
    icon: (
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.8 3.8L3 21" />
    ),
    sub: "Chat with us",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/malera.studio",
    /* Camera outline in rounded rect */
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </>
    ),
    sub: "@malera.studio",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/malerastudio",
    /* Rounded square with "in" letterforms */
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M8 8v8M8 12h4M12 8v8M18 8v5a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3" />
      </>
    ),
    sub: "/malerastudio",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/malerastudio",
    /* Circle with "f" */
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M15 7h-3a2 2 0 0 0-2 2v2H8v3h2v6h3v-6h2l.5-3H13V9h2" />
      </>
    ),
    sub: "/malerastudio",
  },
];

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
            CONTACT US
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white leading-[0.9] mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 7rem)',
            }}
          >
            Let&apos;s talk<br />business
          </h2>

          <p className="text-white/40 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[360px] 2xl:max-w-[480px] mx-auto">
            Tell us about your project. No strings attached, just a conversation to see if we&apos;re the right fit.
          </p>
        </div>

        {/* ── Email card — dominant glass tile ── */}
        <a
          href="mailto:hello@malera.studio"
          className="group block relative mb-6 sm:mb-10 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.01] max-w-[850px] 2xl:max-w-[1000px] mx-auto"
        >
          <div className="relative rounded-2xl p-5 sm:p-10 md:p-12 text-center overflow-hidden transition-all duration-700
            glass-card-gold glass-card-gold-hover">
            {/* Top gold accent */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent group-hover:via-[#C9A84C]/70 transition-all duration-700" />

            {/* Email icon ring */}
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

        {/* ── Social grid — glass tiles, 2×2 on mobile, 4 across on desktop ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-[850px] 2xl:max-w-[1000px] mx-auto mb-6 sm:mb-8">
          {SOCIALS.map(({ label, href, icon, sub }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
            >
              <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-3 sm:p-5 text-center transition-all duration-500
                group-hover:shadow-[0_0_0_1px_rgba(201,168,76,0.18),0_0_24px_rgba(201,168,76,0.04)]">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 2xl:w-12 2xl:h-12 rounded-xl bg-white/[0.03] ring-1 ring-white/[0.05] mb-2 sm:mb-3 group-hover:bg-white/[0.06] group-hover:ring-[#C9A84C]/25 transition-all duration-500">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/35 sm:w-5 sm:h-5 group-hover:text-[#C9A84C] transition-colors duration-500"
                  >
                    {icon}
                  </svg>
                </div>

                {/* Label */}
                <p className="text-[0.625rem] sm:text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors duration-500">
                  {label}
                </p>

                {/* Subtitle */}
                <p className="text-[0.5625rem] sm:text-[0.625rem] text-white/18 group-hover:text-white/25 transition-colors duration-500 mt-0.5 truncate">
                  {sub}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Response time note ── */}
        <p className="text-center font-mono text-[0.625rem] sm:text-[0.6875rem] text-white/12 tracking-[0.1em]">
          We usually respond within a few hours.
        </p>
      </Container>
    </section>
  );
}
