"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Star, Clock4, Search, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

const icons = [ShieldCheck, Leaf, Star, Clock4, Search, MapPin];

export default function WhyUs() {
  const { t } = useLang();
  const items = t("whyUs.items") as unknown as { title: string; desc: string }[];

  return (
    <section id="why-us" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #B8973A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-gold/5 blur-[100px]" />

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
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-7 rounded-2xl border border-white/8 hover:border-gold/30 bg-white/3 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-300">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
