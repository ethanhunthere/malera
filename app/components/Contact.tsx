"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { SplitReveal } from "@/app/components/anim/SplitReveal";

const translations = {
  en: {
    label: "Contact",
    heading: "Get in touch",
    subtext: "We read every message ourselves.\nYou will hear back within 24 hours.",
    email: "hello@malera.studio",
    location: "Kosovo 🇽🇰",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    serviceLabel: "What do you need?",
    serviceOptions: ["Pick a service", "Web Development", "Mobile Apps", "Video Production", "AI Solutions", "Something else"],
    messagePlaceholder: "Tell us about your project",
    submitButton: "Send",
    successMessage: "Got it. We will be in touch.",
    responseNote: "Or reach us at hello@malera.studio",
  },
  sq: {
    label: "Kontakti",
    heading: "Na kontaktoni",
    subtext: "Lexojmë çdo mesazh vetë.\nDo të dëgjoni nga ne brenda 24 orëve.",
    email: "hello@malera.studio",
    location: "Kosovë 🇽🇰",
    namePlaceholder: "Emri",
    emailPlaceholder: "Email-i",
    serviceLabel: "Çfarë ju nevojitet?",
    serviceOptions: ["Zgjidh një shërbim", "Web Development", "Mobile Apps", "Video Production", "AI Solutions", "Diçka tjetër"],
    messagePlaceholder: "Na tregoni për projektin tuaj",
    submitButton: "Dërgo",
    successMessage: "E morëm. Do t'ju kontaktojmë.",
    responseNote: "Ose na shkruani në hello@malera.studio",
  },
};

const inputClass = "w-full bg-transparent border-0 border-b border-[#1C1C1C] pb-4 pt-2 font-dm font-light text-[15px] text-white placeholder-[#2A2A2A] outline-none focus:border-b-[#C9A84C] transition-colors duration-200 mb-2";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-16" style={{ background: "#080808" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9A84C]">
            {t.label}
          </span>
          <SplitReveal tag="h2" className="font-fraunces font-bold text-[clamp(40px,5vw,72px)] leading-[1.0] tracking-[-0.025em] text-white mt-4">
            {t.heading}
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-dm font-light text-[14px] text-[#555555] leading-[1.7] max-w-[300px] whitespace-pre-line">
              {t.subtext}
            </p>
            <div className="mt-12">
              <a
                href="mailto:hello@malera.studio"
                className="font-dm font-normal text-[16px] text-white hover:text-[#C9A84C] transition-colors duration-200 block"
              >
                {t.email}
              </a>
              <p className="font-dm font-light text-[14px] text-[#555555] mt-3">{t.location}</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t.namePlaceholder} className={inputClass} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t.emailPlaceholder} className={inputClass} />
              <select name="service" value={formData.service} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                {t.serviceOptions.map((opt, i) => (
                  <option key={i} value={i === 0 ? "" : opt} disabled={i === 0} className="bg-[#0F0F0F] text-white">{opt}</option>
                ))}
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder={t.messagePlaceholder} className={`${inputClass} resize-none`} />
              <button
                type="submit"
                className="font-dm font-semibold text-[13px] uppercase tracking-[0.05em] w-full py-4 mt-8 bg-[#C9A84C] text-black hover:bg-[#E2C97E] transition-colors duration-200"
              >
                {t.submitButton}
              </button>
              <p className="font-mono text-[11px] text-[#333333] mt-4 text-center">{t.responseNote}</p>
              {submitted && (
                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="font-dm text-[14px] text-[#C9A84C] text-center mt-4">
                  {t.successMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

