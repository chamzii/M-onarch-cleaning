"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function ServicesIntro() {
  const { lang } = useLang();

  const sv = {
    eyebrow: "Professionell städning",
    heading: "Städtjänster för kontor och företag",
    body: "Vi håller din arbetsplats ren och välkomnande — konsekvent, pålitlig, anpassad efter ditt schema.",
    stats: [
      { value: "100+", label: "Nöjda kunder" },
      { value: "5★", label: "Genomsnittligt betyg" },
      { value: "100%", label: "Nöjdhetsgaranti" },
    ],
    cta: "Se våra tjänster",
  };

  const en = {
    eyebrow: "Professional Cleaning",
    heading: "Cleaning Services for Offices & Businesses",
    body: "We keep your workplace clean and welcoming — consistent, reliable, and built around your schedule.",
    stats: [
      { value: "100+", label: "Happy clients" },
      { value: "5★", label: "Average rating" },
      { value: "100%", label: "Satisfaction guarantee" },
    ],
    cta: "See Our Services",
  };

  const c = lang === "sv" ? sv : en;

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            {c.eyebrow}
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight mb-5"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)" }}
          >
            {c.heading}
          </h2>
          <p className="text-gray leading-relaxed text-lg">{c.body}</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-10">
          {c.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display font-bold text-green-600 text-3xl leading-none mb-1">{stat.value}</p>
              <p className="text-gray text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#services"
            className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            {c.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
