"use client";
import { motion } from "framer-motion";
import { Building2, Sparkles, Eye, Layers, CalendarCheck, Briefcase } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

const icons = [Building2, Sparkles, Eye, Layers, CalendarCheck, Briefcase];

export default function Services() {
  const { t } = useLang();
  const items = t("services.items") as unknown as { title: string; desc: string; detail: string }[];

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">{t("services.eyebrow")}</p>
          <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {t("services.title")} <span className="text-green-600">{t("services.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto text-lg">{t("services.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-lg hover:border-green-600/20 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-gray leading-relaxed flex-1">{item.desc}</p>
                <Link href="/quote" className="mt-6 inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
