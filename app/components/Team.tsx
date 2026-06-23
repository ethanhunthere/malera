"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { SplitReveal } from "@/app/components/anim/SplitReveal";

const translations = {
  en: {
    label: "The team",
    heading: "Who we are",
    subtext: "We keep it small on purpose.",
    members: [
      {
        role: "AI Architect and CEO",
        name: "",
        description: "Leads every project from start to finish.\nStrategy, AI integration, and final quality control.",
      },
      {
        role: "Full Stack Developer",
        name: "",
        description: "Builds the actual product. Clean code,\nno shortcuts, everything working as it should.",
      },
      {
        role: "Video Editor",
        name: "",
        description: "Turns raw footage into something\nworth watching.",
      },
    ],
  },
  sq: {
    label: "Ekipi",
    heading: "Kush jemi",
    subtext: "E mbajmë të vogël me qëllim.",
    members: [
      {
        role: "AI Architect dhe CEO",
        name: "",
        description: "Udhëheq çdo projekt nga fillimi deri në fund.\nStrategji, integrim AI dhe kontroll final.",
      },
      {
        role: "Zhvillues Full Stack",
        name: "",
        description: "Ndërton produktin real. Kod i pastër,\npa shkurtore, gjithçka funksionon si duhet.",
      },
      {
        role: "Video Editor",
        name: "",
        description: "Kthehet imazhet e papërpunuara në diçka\nqë ia vlen ta shohësh.",
      },
    ],
  },
};

export default function Team() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="team" className="py-32 px-6 sm:px-16" style={{ background: "#080808" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C]">
            {t.label}
          </span>
          <SplitReveal tag="h2" className="font-fraunces font-bold text-[clamp(40px,5vw,72px)] leading-[1.0] tracking-[-0.025em] text-white mt-4">
            {t.heading}
          </SplitReveal>
          <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] mt-4 max-w-[400px]">
            {t.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {t.members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pt-12 border-t border-[#1C1C1C] md:pr-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] block mb-4">
                {member.role}
              </span>
              {member.name && (
                <p className="font-dm font-medium text-[22px] text-white mb-3">{member.name}</p>
              )}
              <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] whitespace-pre-line">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

