import { ArrowRight, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Container from "@/src/features/layout/components/Container";
import SectionHeader from "@/src/features/layout/components/SectionHeader";
import ContactForm from "@/src/features/home/components/ContactForm";

/*
╔══════════════════════════════════════════════════════════════╗
║   CONTACT  ·  100/100  ·  Editorial glass layout            ║
║                                                              ║
║   Ghost watermark behind the heading.                        ║
║   Left:  inline contact form + WhatsApp (serious channels)   ║
║   Right: Instagram, LinkedIn, Facebook (social presence)     ║
║   Vertical gold hairline between columns.                    ║
║   Form posts via AJAX, no redirect, straight to Gmail.      ║
╚══════════════════════════════════════════════════════════════╝
*/

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/malerastudio", Icon: FaFacebook, sub: "/malerastudio" },
  { label: "Instagram", href: "https://instagram.com/malera.studio", Icon: FaInstagram, sub: "@malera.studio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/malerastudio", Icon: FaLinkedin, sub: "/malerastudio" },
];

export default function Contact() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-44 min-[3000px]:py-52 min-[5000px]:py-64">
      {/* ── Ambient orbs: scale with viewport ── */}
      <div className="absolute top-[10%] left-[-5%] w-[min(600px,70vw)] h-[min(600px,70vw)] 2xl:w-[min(900px,70vw)] 2xl:h-[min(900px,70vw)] min-[3000px]:w-[min(1200px,70vw)] min-[3000px]:h-[min(1200px,70vw)] ambient-orb ambient-orb-gold" />
      <div className="absolute bottom-0 right-[-5%] w-[min(450px,55vw)] h-[min(450px,55vw)] 2xl:w-[min(700px,55vw)] 2xl:h-[min(700px,55vw)] min-[3000px]:w-[min(950px,55vw)] min-[3000px]:h-[min(950px,55vw)] ambient-orb ambient-orb-white" />

      <Container id="contact" className="relative z-10 scroll-mt-2 sm:scroll-mt-10">
        <SectionHeader
          label="CONTACT US"
          labelClassName="text-gold min-[3000px]:text-base"
          headline="LET&apos;S TALK BUSINESS"
          headlineClassName="text-white"
          headlineStyle={{ fontSize: 'clamp(1.5rem, 5vw, 7rem)' }}
          subtitle="Tell us about your project. No strings attached, just a conversation to see if we&apos;re the right fit."
          subtitleClassName="text-white/35 max-w-[380px] 2xl:max-w-[520px] min-[3000px]:max-w-[700px] min-[5000px]:max-w-[900px] min-[5000px]:text-2xl"
          className="relative z-10 mb-10 sm:mb-16 lg:mb-20 min-[3000px]:mb-28"
        />

        {/* ═══════════ Split layout: primary (left) | divider | social (right) ═══════════ */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1px_240px] lg:grid-cols-[1fr_1px_280px] xl:grid-cols-[1fr_1px_320px] 2xl:grid-cols-[1fr_1px_380px] min-[3000px]:grid-cols-[1fr_1px_520px] min-[4000px]:grid-cols-[1fr_1px_640px] min-[5000px]:grid-cols-[1fr_1px_760px] gap-0 max-w-[1200px] 2xl:max-w-[1800px] min-[3000px]:max-w-[2200px] min-[4000px]:max-w-[2600px] min-[5000px]:max-w-[3000px] mx-auto">

          {/* ── LEFT: Contact form + WhatsApp (stacked) ── */}
          <div className="flex flex-col gap-3 sm:gap-4 pr-0 md:pr-6 lg:pr-8 xl:pr-12 2xl:pr-16 min-[3000px]:pr-20 min-[5000px]:pr-28">
            {/* ── Inline contact form ── */}
            <ContactForm />

            {/* ── WhatsApp card ── */}
            <a
              href="https://wa.me/+38346814700"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.006] flex-auto"
            >
              <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-5 sm:p-6 md:p-8 xl:p-10 2xl:p-12 min-[3000px]:p-16 min-[5000px]:p-20 overflow-hidden transition-all duration-700 h-full flex items-center
                !border !border-gold/20 hover:!border-gold/45">
                {/* ── Gold corner accent (top-left) ── */}
                <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 min-[3000px]:w-12 min-[3000px]:h-12 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-gold/50 via-gold/25 to-transparent" />
                  <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-gold/50 via-gold/25 to-transparent" />
                </div>

                <div className="flex items-center gap-4 sm:gap-5 min-[3000px]:gap-8 min-[5000px]:gap-10">
                  {/* Icon ring */}
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 min-[3000px]:w-20 min-[3000px]:h-20 min-[5000px]:w-24 min-[5000px]:h-24 rounded-2xl min-[3000px]:rounded-3xl bg-gold/8 ring-1 ring-gold/15 shrink-0
                    group-hover:bg-gold/12 group-hover:ring-gold/30 group-hover:scale-105 transition-all duration-500">
                    <FaWhatsapp className="text-gold w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 min-[3000px]:w-10 min-[3000px]:h-10 min-[5000px]:w-12 min-[5000px]:h-12" fill="currentColor" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-[family-name:var(--font-display)] font-bold text-white text-sm sm:text-lg lg:text-xl 2xl:text-2xl min-[3000px]:text-4xl min-[5000px]:text-5xl group-hover:tracking-wide transition-all duration-500">
                      WhatsApp
                    </p>
                    <p className="text-white/30 text-[0.625rem] sm:text-xs lg:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl group-hover:text-white/45 transition-colors duration-500 mt-1">
                      Chat with us directly
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[3000px]:w-8 min-[3000px]:h-8 min-[5000px]:w-10 min-[5000px]:h-10 text-gold/0 group-hover:text-gold/40 transition-all duration-500 -translate-x-2 group-hover:translate-x-0 shrink-0" />
                </div>
              </div>
            </a>
          </div>

          {/* ── DIVIDER: vertical gold rule (desktop only) ── */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gold/15 md:via-gold/18 lg:via-gold/20 to-transparent" />

          {/* ── RIGHT: Instagram, LinkedIn, Facebook, glass, no fill ── */}
          <div className="mt-8 md:mt-0 md:pl-6 lg:pl-6 xl:pl-8 2xl:pl-10 min-[3000px]:pl-14 min-[5000px]:pl-18 flex flex-col gap-3 sm:gap-4 md:gap-5 min-[3000px]:gap-6">
            {SOCIALS.map(({ label, href, Icon, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/strip relative flex items-center gap-3 sm:gap-4 min-[3000px]:gap-6 pl-4 sm:pl-5 min-[3000px]:pl-7 pr-3 sm:pr-4 min-[3000px]:pr-5 py-4 sm:py-4 md:py-4 lg:py-4 min-[3000px]:py-6 md:flex-1 rounded-xl min-[3000px]:rounded-2xl overflow-hidden
                  transition-all duration-500
                  hover:translate-x-0.5 lg:hover:translate-x-1.5
                  backdrop-blur-[8px] hover:backdrop-blur-[12px]
                  bg-white/[0.05] hover:bg-white/[0.08]
                  ring-1 ring-white/[0.14] hover:ring-gold/35
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_26px_rgba(0,0,0,0.22)]"
              >
                {/* Left gold accent line */}
                <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent
                  group-hover/strip:via-gold/70 transition-all duration-500" />

                {/* Icon, bare, no container */}
                <Icon className="relative z-10 text-white/72 w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5 min-[3000px]:w-7 min-[3000px]:h-7 min-[5000px]:w-9 min-[5000px]:h-9 shrink-0
                  group-hover/strip:text-gold transition-colors duration-500"
                  fill="currentColor" />

                {/* Label + sub */}
                <div className="relative z-10 flex-1 min-w-0">
                  <p className="text-xs sm:text-xs lg:text-sm min-[3000px]:text-lg min-[5000px]:text-2xl font-semibold text-white/80 group-hover/strip:text-white transition-colors duration-500 truncate">
                    {label}
                  </p>
                  <p className="text-[0.625rem] sm:text-[0.6875rem] lg:text-xs min-[3000px]:text-base min-[5000px]:text-lg text-white/52 group-hover/strip:text-white/70 transition-colors duration-500 truncate mt-0.5">
                    {sub}
                  </p>
                </div>

                {/* Arrow: hidden until hover */}
                <ArrowRight className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 min-[3000px]:w-6 min-[3000px]:h-6 min-[5000px]:w-7 min-[5000px]:h-7 text-gold/25 group-hover/strip:text-gold/65
                  transition-all duration-500 -translate-x-2 group-hover/strip:translate-x-0 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
