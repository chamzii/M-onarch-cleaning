"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Hero() {
  const { t } = useLang();

  const bullets = [
    t("hero.bullet1"),
    t("hero.bullet2"),
    t("hero.bullet3"),
  ];

  const stats = [
    { value: t("hero.stat1"), label: t("hero.stat1Label") },
    { value: t("hero.stat2"), label: t("hero.stat2Label") },
    { value: t("hero.stat3"), label: t("hero.stat3Label") },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #0ABFA3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal/8 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="font-body text-sm text-teal font-medium">{t("hero.eyebrow")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            {t("hero.title")}<br />
            <span className="text-teal">{t("hero.titleHighlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-body text-lg text-white/60 leading-relaxed max-w-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 space-y-3"
          >
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 font-body text-white/70">
                <CheckCircle size={18} className="text-teal shrink-0" />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/quote"
              className="group inline-flex items-center justify-center gap-2.5 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-200 shadow-lg shadow-teal/20">
              {t("hero.cta1")}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-body font-medium px-8 py-4 rounded-xl text-lg hover:border-white/40 hover:text-white transition-all duration-200">
              {t("hero.cta2")}
            </a>
          </motion.div>
        </div>

        {/* Right: stats card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex flex-col gap-5"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
            <p className="font-body text-white/50 text-sm uppercase tracking-widest mb-8">Trusted across the region</p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-bold text-teal text-4xl">{s.value}</p>
                  <p className="font-body text-white/50 text-xs mt-2 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-body text-white/40 text-sm leading-relaxed">
                Professional office cleaning for businesses across Herräng, Hallstavik, Rimbo and Norrtälje.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
