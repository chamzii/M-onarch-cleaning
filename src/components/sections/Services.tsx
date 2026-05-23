"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Services() {
  const { lang, t } = useLang();
  const items = (t("services.items") as { title: string; desc: string }[]).slice(0, 4);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-lg p-7 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="w-12 h-1.5 bg-green-600 rounded mb-5" />
              <h3 className="font-display font-bold text-navy text-lg mb-3 leading-snug">{s.title}</h3>
              <p className="text-gray text-sm leading-relaxed flex-1">{s.desc}</p>
              <Link href="/quote" className="mt-5 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                {lang === "sv" ? "Läs mer →" : "Learn More →"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
