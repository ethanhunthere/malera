import { ArrowRight, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Container from "@/src/features/layout/components/Container";
import ContactForm from "@/src/features/home/components/ContactForm";

/*
╔══════════════════════════════════════════════════════════════╗
║   CONTACT  ·  100/100  ·  Editorial glass layout            ║
║                                                              ║
║   Ghost watermark behind the heading.                        ║
║   Left:  inline contact form + WhatsApp (serious channels)   ║
║   Right: Instagram, LinkedIn, Facebook (social presence)     ║
║   Vertical gold hairline between columns.                    ║
║   Form posts via AJAX — no redirect, straight to Gmail.      ║
╚══════════════════════════════════════════════════════════════╝
*/

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/malerastudio", Icon: FaFacebook, sub: "/malerastudio" },
  { label: "Instagram", href: "https://instagram.com/malera.studio", Icon: FaInstagram, sub: "@malera.studio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/malerastudio", Icon: FaLinkedin, sub: "/malerastudio" },
];

export default function Contact() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-44">
      {/* ── Ambient orbs — repositioned for drama ── */}
      <div className="absolute top-[10%] left-[-5%] w-[min(600px,70vw)] h-[min(600px,70vw)] 2xl:w-[min(900px,70vw)] 2xl:h-[min(900px,70vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-0 right-[-5%] w-[min(450px,55vw)] h-[min(450px,55vw)] 2xl:w-[min(700px,55vw)] 2xl:h-[min(700px,55vw)] ambient-orb ambient-orb-white" />

      <Container id="contact" className="relative z-10 scroll-mt-2 sm:scroll-mt-10">
        {/* ═══════════ Header ═══════════ */}
        <div className="relative z-10 mb-10 sm:mb-16 lg:mb-20">
          <p className="font-mono text-[0.625rem] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#C9A84C] mb-4">
            CONTACT US
          </p>

          <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] text-white leading-[0.9] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 7rem)' }}>
            LET&apos;S TALK<br />BUSINESS
          </h2>

          <p className="text-white/35 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed max-w-[380px] 2xl:max-w-[520px]">
            Tell us about your project. No strings attached, just a conversation to see if we&apos;re the right fit.
          </p>
        </div>

        {/* ═══════════ Split layout: primary (left) | divider | social (right) ═══════════ */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1px_280px] xl:grid-cols-[1fr_1px_320px] 2xl:grid-cols-[1fr_1px_380px] gap-0 max-w-[1200px] 2xl:max-w-[1400px] mx-auto">

          {/* ── LEFT: Contact form + WhatsApp (stacked) ── */}
          <div className="flex flex-col gap-3 sm:gap-4 pr-0 lg:pr-8 xl:pr-12 2xl:pr-16">
            {/* ── Inline contact form ── */}
            <ContactForm />

            {/* ── WhatsApp card ── */}
            <a
              href="https://wa.me/+38346814700"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.006] flex-auto"
            >
              <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-5 sm:p-6 md:p-8 xl:p-10 2xl:p-12 overflow-hidden transition-all duration-700 h-full flex items-center
                !border !border-[#C9A84C]/20 hover:!border-[#C9A84C]/45">
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

          {/* ── RIGHT: Instagram, LinkedIn, Facebook — glass, no fill ── */}
          <div className="mt-8 lg:mt-0 lg:pl-6 xl:pl-8 2xl:pl-10 flex flex-col gap-3 sm:gap-4 md:flex-row lg:flex-col lg:gap-3">
            {SOCIALS.map(({ label, href, Icon, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/strip relative flex items-center gap-3 sm:gap-4 pl-4 sm:pl-5 pr-2 sm:pr-3 py-3 sm:py-4 md:flex-1 lg:flex-1 rounded-xl overflow-hidden
                  transition-all duration-500
                  hover:translate-x-0.5 lg:hover:translate-x-1.5
                  backdrop-blur-[6px] hover:backdrop-blur-[10px]
                  bg-transparent hover:bg-white/[0.03]
                  ring-1 ring-white/[0.05] hover:ring-[#C9A84C]/25"
              >
                {/* Left gold accent line */}
                <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#C9A84C]/35 to-transparent
                  group-hover/strip:via-[#C9A84C]/55 transition-all duration-500" />

                {/* Icon — bare, no container */}
                <Icon className="relative z-10 text-white/40 w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5 shrink-0
                  group-hover/strip:text-[#C9A84C] transition-colors duration-500"
                  fill="currentColor" />

                {/* Label + sub */}
                <div className="relative z-10 flex-1 min-w-0">
                  <p className="text-[0.6875rem] sm:text-xs lg:text-sm font-semibold text-white/55 group-hover/strip:text-white/85 transition-colors duration-500 truncate">
                    {label}
                  </p>
                  <p className="text-[0.5625rem] sm:text-[0.625rem] lg:text-xs text-white/22 group-hover/strip:text-white/32 transition-colors duration-500 truncate mt-0.5">
                    {sub}
                  </p>
                </div>

                {/* Arrow — hidden until hover */}
                <ArrowRight className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A84C]/0 group-hover/strip:text-[#C9A84C]/45
                  transition-all duration-500 -translate-x-2 group-hover/strip:translate-x-0 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
