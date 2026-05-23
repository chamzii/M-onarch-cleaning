"use client";
import { motion } from "framer-motion";
import { Building2, Sparkles, Eye, Layers, CalendarCheck, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

const icons = [Building2, Sparkles, Eye, Layers, CalendarCheck, Briefcase];

export default function Services() {
  const { t } = useLang();
  const items = t("services.items") as unknown as { title: string; desc: string }[];

  return (
    <section id="services" className="section-padding bg-snow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          titleHighlight={t("services.titleHighlight")}
          subtitle={t("services.subtitle")}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-hover bg-white rounded-2xl p-8 border border-silver-dark group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
                <p className="font-body text-slate text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 w-8 h-px bg-gold/40 group-hover:w-16 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
