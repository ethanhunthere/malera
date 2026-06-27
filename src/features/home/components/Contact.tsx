import { ArrowRight, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Container from "@/src/features/layout/components/Container";

/*
╔══════════════════════════════════════════════════════════════╗
║   CONTACT  ·  100/100  ·  Editorial glass layout            ║
║                                                              ║
║   Ghost watermark behind the heading.                        ║
║   Left:  email + WhatsApp (serious contact channels)         ║
║   Right: Instagram, LinkedIn, Facebook (social presence)     ║
║   Vertical gold hairline between columns.                    ║
║   Right side matches left height exactly.                    ║
╚══════════════════════════════════════════════════════════════╝
*/

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/malera.studio", Icon: FaInstagram, sub: "@malera.studio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/malerastudio", Icon: FaLinkedin, sub: "/malerastudio" },
  { label: "Facebook", href: "https://facebook.com/malerastudio", Icon: FaFacebook, sub: "/malerastudio" },
];

export default function Contact() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-44">
      {/* ── Ambient orbs — repositioned for drama ── */}
      <div className="absolute top-[10%] left-[-5%] w-[min(600px,70vw)] h-[min(600px,70vw)] 2xl:w-[min(900px,70vw)] 2xl:h-[min(900px,70vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-0 right-[-5%] w-[min(450px,55vw)] h-[min(450px,55vw)] 2xl:w-[min(700px,55vw)] 2xl:h-[min(700px,55vw)] ambient-orb ambient-orb-white" />

      <Container id="contact" className="relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ═══════════ Ghost watermark ═══════════ */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
          style={{ marginTop: 'clamp(-2rem, -3vw, -1rem)' }}>
          <p className="font-[family-name:var(--font-display)] font-extrabold text-[clamp(5rem,18vw,20rem)] leading-none tracking-[-0.05em] text-white/[0.015] whitespace-nowrap"
            aria-hidden="true">
            CONTACT
          </p>
        </div>

        {/* ═══════════ Header ═══════════ */}
        <div className="relative z-10 mb-10 sm:mb-16 lg:mb-20">
          <p className="font-mono text-[0.625rem] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#C9A84C] mb-4">
            CONTACT US
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white leading-[0.9] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 7rem)' }}>
            Let&apos;s talk<br />business
          </h2>

          <p className="text-white/35 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[380px] 2xl:max-w-[520px]">
            Tell us about your project. No strings attached, just a conversation to see if we&apos;re the right fit.
          </p>
        </div>

        {/* ═══════════ Split layout: primary (left) | divider | social (right) ═══════════ */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1px_380px] xl:grid-cols-[1fr_1px_440px] 2xl:grid-cols-[1fr_1px_520px] gap-0 max-w-[1200px] 2xl:max-w-[1400px] mx-auto">

          {/* ── LEFT: Email + WhatsApp (stacked) ── */}
          <div className="flex flex-col gap-3 sm:gap-4 pr-0 lg:pr-8 xl:pr-12 2xl:pr-16">
            {/* ── Email card ── */}
            <a
              href="mailto:hello@malera.studio"
              className="group block relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.006] flex-1"
            >
              <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-6 sm:p-8 md:p-10 xl:p-12 2xl:p-14 overflow-hidden transition-all duration-700 h-full flex flex-col">
                {/* ── Gold corner accent (top-left) ── */}
                <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 overflow-hidden opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#C9A84C]/60 via-[#C9A84C]/30 to-transparent" />
                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#C9A84C]/60 via-[#C9A84C]/30 to-transparent" />
                </div>

                {/* ── Email icon ring ── */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 rounded-2xl bg-[#C9A84C]/8 ring-1 ring-[#C9A84C]/15 mb-5 sm:mb-8 group-hover:bg-[#C9A84C]/12 group-hover:ring-[#C9A84C]/30 group-hover:scale-105 transition-all duration-500">
                  <Mail className="text-[#C9A84C] w-5 h-5 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8" strokeWidth={1.5} />
                </div>

                {/* ── Email address ── */}
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-2xl md:text-3xl 2xl:text-4xl min-[3000px]:text-5xl mb-3 sm:mb-4 group-hover:tracking-wide transition-all duration-500 break-words">
                  hello@malera.studio
                </h3>

                {/* ── Description ── */}
                <p className="text-white/35 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed mb-6 sm:mb-8 flex-1">
                  Drop us a line and we&apos;ll get back to you, usually within a day. No forms, no robots — just a real person on the other end.
                </p>

                {/* ── CTA button ── */}
                <span className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm 2xl:text-base font-semibold self-start
                  group-hover:bg-[#C9A84C] group-hover:text-black group-hover:gap-3 group-hover:shadow-[0_4px_32px_rgba(201,168,76,0.3)]
                  transition-all duration-500">
                  Send a message
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-500" />
                </span>
              </div>
            </a>

            {/* ── WhatsApp card ── */}
            <a
              href="https://wa.me/+38346814700"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.006]"
            >
              <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-5 sm:p-6 md:p-8 xl:p-10 2xl:p-12 overflow-hidden transition-all duration-700">
                {/* ── Gold corner accent (top-left) ── */}
                <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#C9A84C]/50 via-[#C9A84C]/25 to-transparent" />
                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#C9A84C]/50 via-[#C9A84C]/25 to-transparent" />
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
                  {/* Icon ring */}
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-2xl bg-[#C9A84C]/8 ring-1 ring-[#C9A84C]/15 shrink-0
                    group-hover:bg-[#C9A84C]/12 group-hover:ring-[#C9A84C]/30 group-hover:scale-105 transition-all duration-500">
                    <FaWhatsapp className="text-[#C9A84C] w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7" fill="currentColor" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-[family-name:var(--font-display)] font-bold text-white text-sm sm:text-lg lg:text-xl 2xl:text-2xl group-hover:tracking-wide transition-all duration-500">
                      WhatsApp
                    </p>
                    <p className="text-white/30 text-[0.625rem] sm:text-xs lg:text-sm 2xl:text-base group-hover:text-white/45 transition-colors duration-500 mt-1">
                      Chat with us directly
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]/0 group-hover:text-[#C9A84C]/40 transition-all duration-500 -translate-x-2 group-hover:translate-x-0 shrink-0" />
                </div>
              </div>
            </a>
          </div>

          {/* ── DIVIDER: vertical gold rule (desktop only) ── */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />

          {/* ── RIGHT: Instagram, LinkedIn, Facebook — matches left height ── */}
          <div className="mt-8 lg:mt-0 lg:pl-8 xl:pl-12 2xl:pl-16 flex flex-col gap-2 sm:gap-3 lg:gap-0">
            {SOCIALS.map(({ label, href, Icon, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/strip relative flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 lg:flex-1 rounded-xl overflow-hidden
                  transition-all duration-500
                  hover:translate-x-0.5 lg:hover:translate-x-1.5
                  bg-white/[0.02] hover:bg-white/[0.04]
                  ring-1 ring-white/[0.04] hover:ring-[#C9A84C]/15"
              >
                {/* Left gold accent line */}
                <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent
                  group-hover/strip:via-[#C9A84C]/45 transition-all duration-500" />

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] ring-1 ring-white/[0.04]
                  group-hover/strip:bg-[#C9A84C]/8 group-hover/strip:ring-[#C9A84C]/20 transition-all duration-500">
                  <Icon className="text-white/30 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/strip:text-[#C9A84C] transition-colors duration-500"
                    fill="currentColor" />
                </div>

                {/* Label + sub */}
                <div className="relative z-10 flex-1 min-w-0">
                  <p className="text-[0.6875rem] sm:text-xs lg:text-sm font-medium text-white/45 group-hover/strip:text-white/75 transition-colors duration-500 truncate">
                    {label}
                  </p>
                  <p className="text-[0.5625rem] sm:text-[0.625rem] lg:text-xs text-white/15 group-hover/strip:text-white/22 transition-colors duration-500 truncate mt-0.5">
                    {sub}
                  </p>
                </div>

                {/* Arrow — hidden until hover */}
                <ArrowRight className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A84C]/0 group-hover/strip:text-[#C9A84C]/40
                  transition-all duration-500 -translate-x-2 group-hover/strip:translate-x-0 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
