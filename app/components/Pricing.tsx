"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { SplitReveal } from "@/app/components/anim/SplitReveal";

const translations = {
  en: {
    label: "Pricing",
    heading: "What we charge",
    subtext: "No hidden fees. You know what you are paying before we start.",
    getStarted: "Get started",
    contactUs: "Talk to us",
    period: "/project",
    plans: [
      {
        name: "Starter",
        price: "€299",
        description: "Five pages, mobile ready, five days.",
        features: ["Website up to 5 pages", "Mobile responsive", "Basic SEO setup", "Delivered in 5 days"],
        popular: false,
      },
      {
        name: "Pro",
        price: "€699",
        description: "Full website with admin panel, ten days.",
        features: ["Full website with admin panel", "SEO and analytics setup", "Social media kit included", "Delivered in 10 days"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "from €1500",
        description: "Apps, AI tools and video. Scoped per project.",
        features: ["Web app or Android app", "AI bot integration", "Video production", "Dedicated support"],
        popular: false,
      },
    ],
  },
  sq: {
    label: "Çmimet",
    heading: "Çfarë kërkojmë",
    subtext: "Pa tarifa të fshehura. E dini çfarë paguani para se të fillojmë.",
    getStarted: "Fillo",
    contactUs: "Na shkruaj",
    period: "/projekt",
    plans: [
      {
        name: "Starter",
        price: "€299",
        description: "Faqe me pesë faqe. Gati për mobil. Dorëzuar në pesë ditë.",
        features: ["Faqe deri në 5 faqe", "Responsive për mobil", "SEO bazik", "Dorëzuar në 5 ditë"],
        popular: false,
      },
      {
        name: "Pro",
        price: "€699",
        description: "Faqe e plotë me panel administrimi. SEO i përfshirë.",
        features: ["Faqe e plotë me panel", "SEO dhe analitikë", "Kit social media", "Dorëzuar në 10 ditë"],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "nga €1500",
        description: "Aplikacione, mjete AI dhe video. Çmim sipas projektit.",
        features: ["Aplikacion web ose Android", "Integrim AI bot", "Prodhim video", "Mbështetje e dedikuar"],
        popular: false,
      },
    ],
  },
};

function PricingCard({
  name,
  price,
  description,
  features,
  popular,
  index,
  getStartedLabel,
  contactUsLabel,
  periodLabel,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  index: number;
  getStartedLabel: string;
  contactUsLabel: string;
  periodLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`p-10 ${popular ? "bg-[#141414] border border-[#1C1C1C] border-t-2 border-t-[#C9A84C]" : "bg-[#0F0F0F] border border-[#1C1C1C]"}`}
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-[#555555] mb-6">{name}</p>
      <div className="mb-2">
        <span className="font-fraunces font-light italic text-[56px] leading-none text-white">{price}</span>
        <span className="font-dm font-light text-[14px] text-[#333333] ml-2">{periodLabel}</span>
      </div>
      <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] mt-4 mb-8">
        {description}
      </p>
      <div className="border-t border-[#1C1C1C] my-8" />
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 font-dm font-light text-[14px] text-[#666666] leading-[1.6]">
            <span className="text-[#C9A84C] shrink-0">→</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`font-dm w-full py-4 text-[13px] font-medium tracking-[0.03em] transition-colors duration-200 ${
          popular
            ? "bg-white text-black hover:bg-[#E8E8E8]"
            : "border border-[#2A2A2A] text-white hover:border-white"
        }`}
      >
        {index === 2 ? contactUsLabel : getStartedLabel}
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="pricing" className="py-32 px-6 sm:px-16" style={{ background: "#0F0F0F" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C]">
            {t.label}
          </span>
          <SplitReveal tag="h2" className="font-fraunces font-bold text-[clamp(40px,5vw,72px)] leading-[1.0] tracking-[-0.025em] text-white mt-4">
            {t.heading}
          </SplitReveal>
          <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] mt-4 max-w-[480px]">
            {t.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1C1C1C]">
          {t.plans.map((plan, i) => (
            <PricingCard
              key={i}
              {...plan}
              index={i}
              getStartedLabel={t.getStarted}
              contactUsLabel={t.contactUs}
              periodLabel={t.period}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

