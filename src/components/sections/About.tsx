"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section-padding bg-silver relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-charcoal to-[#2a2a45] flex items-center justify-center">
              <span className="font-display text-[280px] font-semibold leading-none select-none"
                style={{ color: "rgba(184,151,58,0.08)" }}>M</span>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-4">
                  <span className="font-display text-gold text-5xl font-semibold">M</span>
                </div>
                <p className="font-display text-white tracking-[0.25em] text-2xl font-semibold">MONARCH</p>
                <p className="font-body text-gold/70 tracking-[0.3em] text-xs uppercase mt-1">CLEANING</p>
              </div>
              <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-gold/30 rounded-tl-lg" />
              <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-gold/30 rounded-tr-lg" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-gold/30 rounded-bl-lg" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-gold/30 rounded-br-lg" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-5 shadow-xl border border-silver">
              <p className="font-display text-4xl font-semibold text-gold">{t("about.stat1")}</p>
              <p className="font-body text-xs text-slate uppercase tracking-widest mt-1">{t("about.stat1Label")}</p>
            </div>
            <div className="absolute -top-6 -left-6 bg-charcoal rounded-2xl px-6 py-5 shadow-xl">
              <p className="font-display text-4xl font-semibold text-gold">{t("about.stat2")}</p>
              <p className="font-body text-xs text-white/50 uppercase tracking-widest mt-1">{t("about.stat2Label")}</p>
            </div>
          </motion.div>

          {/* Right: text */}
          <div>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              titleHighlight={t("about.titleHighlight")}
              centered={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 space-y-5 font-body text-slate leading-relaxed"
            >
              <p className="text-lg">{t("about.body1")}</p>
              <p>{t("about.body2")}</p>
              <p>{t("about.body3")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/quote"
                className="group inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors duration-200">
                Get a free quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
