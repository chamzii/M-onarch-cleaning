"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Star, Clock4, Search, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

const icons = [ShieldCheck, Leaf, Star, Clock4, Search, MapPin];

export default function WhyUs() {
  const { t } = useLang();
  const items = t("whyUs.items") as unknown as { title: string; desc: string }[];

  return (
    <section id="why-us" className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/6 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow={t("whyUs.eyebrow")}
          title={t("whyUs.title")}
          titleHighlight={t("whyUs.titleHighlight")}
          subtitle={t("whyUs.subtitle")}
          light
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-8 hover:border-teal/30 hover:bg-white/8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/15 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-teal" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="font-body text-white/55 leading-relaxed text-base">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link href="/quote"
            className="inline-flex items-center gap-2.5 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-10 py-4 rounded-xl text-lg transition-colors duration-200 shadow-lg shadow-teal/20">
            {t("hero.cta1")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
