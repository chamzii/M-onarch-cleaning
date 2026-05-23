"use client";
import { motion } from "framer-motion";
import { Building2, Sparkles, Eye, Layers, CalendarCheck, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

const icons = [Building2, Sparkles, Eye, Layers, CalendarCheck, Briefcase];

export default function Services() {
  const { t } = useLang();
  const items = t("services.items") as unknown as { title: string; desc: string; detail: string }[];

  return (
    <section id="services" className="section-padding bg-snow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          titleHighlight={t("services.titleHighlight")}
          subtitle={t("services.subtitle")}
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-hover bg-white rounded-3xl p-10 border border-silver-dark group cursor-default flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-charcoal flex items-center justify-center mb-7 group-hover:bg-gold transition-colors duration-300 shrink-0">
                  <Icon size={28} className="text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-charcoal text-2xl mb-4">{item.title}</h3>
                <p className="font-body text-slate leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-8 pt-6 border-t border-silver flex items-center justify-between">
                  <span className="font-body text-xs text-gold font-semibold uppercase tracking-widest">{item.detail}</span>
                  <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gold group-hover:text-white transition-colors duration-300">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
