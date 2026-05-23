"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const { t } = useLang();

  const stats = [
    { value: t("hero.stat1"), label: t("hero.stat1Label") },
    { value: t("hero.stat2"), label: t("hero.stat2Label") },
    { value: t("hero.stat3"), label: t("hero.stat3Label") },
    { value: t("hero.stat4"), label: t("hero.stat4Label") },
  ];

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0a0a14]" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-15 mix-blend-luminosity" />
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-gold/6 blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-body text-sm text-white/70 tracking-widest uppercase">{t("hero.eyebrow")}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold text-white leading-[1.08] tracking-tight"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          {t("hero.title")}
          <br />
          <span className="text-gold">{t("hero.titleHighlight")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 font-body text-xl md:text-2xl text-white/55 max-w-3xl mx-auto leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/quote"
            className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-white font-body font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(184,151,58,0.4)] hover:scale-105">
            {t("hero.cta1")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#contact"
            className="flex items-center gap-3 border border-white/25 text-white font-body font-semibold px-10 py-5 rounded-2xl text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300">
            <Phone size={18} />
            {t("hero.cta2")}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm px-8 py-7 text-center">
              <p className="font-display font-bold text-gold text-4xl md:text-5xl">{s.value}</p>
              <p className="font-body text-white/50 text-sm mt-2 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
