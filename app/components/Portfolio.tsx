"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { SplitReveal } from "@/app/components/anim/SplitReveal";
import { motion } from "framer-motion";

const translations = {
  en: {
    label: "Our work",
    heading: "Selected work",
    projects: [
      { title: "NOVRIX", url: "novrix.io", tag: "Web App · Crypto", description: "Crypto intelligence terminal with whale\ntracking and sentiment analysis." },
      { title: "Barber Brothers", url: "barberbrothers.style", tag: "Web · Branding", description: "Website for a barbershop in Kosovo." },
      { title: "Radio Fontana", url: "radiofontana.org", tag: "Web · Android · iOS", description: "Website and mobile app for a\nKosovo radio station." },
    ],
  },
  sq: {
    label: "Punët tona",
    heading: "Punë e zgjedhur",
    projects: [
      { title: "NOVRIX", url: "novrix.io", tag: "Web App · Crypto", description: "Terminal inteligjence crypto me gjurmim\nbalenash dhe analizë sentimenti." },
      { title: "Barber Brothers", url: "barberbrothers.style", tag: "Web · Branding", description: "Faqe për një barbershop në Kosovë." },
      { title: "Radio Fontana", url: "radiofontana.org", tag: "Web · Android · iOS", description: "Faqe dhe aplikacion mobil për\nnjë stacion radio në Kosovë." },
    ],
  },
};

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="portfolio" className="py-32 px-6 sm:px-16" style={{ background: "#0F0F0F" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C]">
            {t.label}
          </span>
          <SplitReveal tag="h2" className="font-fraunces font-bold text-[clamp(40px,5vw,72px)] leading-[1.0] tracking-[-0.025em] text-white mt-4">
            {t.heading}
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1C1C1C]">
          {t.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="portfolio-card group bg-[#0F0F0F] border border-[#1C1C1C] hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image area */}
              <div className="card-image relative aspect-[16/10] bg-[#141414] overflow-hidden">
                <div className="absolute inset-0 bg-[#141414] group-hover:scale-[1.03] transition-transform duration-[600ms]" />
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-[#222222]">
                  {project.url}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C9A84C]">
                    {project.tag}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-[#333333] group-hover:text-[#C9A84C] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-200"
                  />
                </div>
                <h3 className="font-dm font-medium text-[17px] text-white mt-3">{project.title}</h3>
                <p className="font-dm font-light text-[13px] text-[#555555] leading-[1.6] mt-2 whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

