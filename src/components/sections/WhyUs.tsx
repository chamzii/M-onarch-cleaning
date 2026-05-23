"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Star, Clock4, Search, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

const icons = [ShieldCheck, Leaf, Star, Clock4, Search, MapPin];

export default function WhyUs() {
  const { t } = useLang();
  const items = t("whyUs.items") as unknown as { title: string; desc: string }[];

  return (
    <section id="why-us" className="section-padding bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">{t("whyUs.eyebrow")}</p>
          <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {t("whyUs.title")} <span className="text-green-600">{t("whyUs.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto text-lg">{t("whyUs.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-300 flex gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                  <p className="text-gray leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/quote" className="btn-green px-10 py-4 text-base">
            Get Your Free Estimate Today
          </Link>
        </div>
      </div>
    </section>
  );
}
