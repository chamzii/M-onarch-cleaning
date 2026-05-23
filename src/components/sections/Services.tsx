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
    <section id="services" className="section-padding bg-white">
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover bg-white rounded-2xl p-8 border border-border group cursor-default flex flex-col shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-6 group-hover:bg-teal transition-colors duration-300 shrink-0">
                  <Icon size={22} className="text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="font-body text-gray leading-relaxed flex-1 text-base">{item.desc}</p>
                <p className="mt-5 font-body text-xs text-teal font-semibold uppercase tracking-widest">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
