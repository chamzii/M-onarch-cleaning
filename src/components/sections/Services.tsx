"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Services() {
  const { lang, t } = useLang();
  const items = (t("services.items") as { title: string; desc: string }[]).slice(0, 4);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col"
            >
              {/* Photo slot */}
              <div className="w-full bg-gray-200 rounded-t-lg flex items-center justify-center" style={{ height: "180px" }}>
                <span className="text-gray-400 text-sm font-body">
                  {lang === "sv" ? "Foto kommer snart" : "Photo coming soon"}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 pt-5 pb-6">
                <h3 className="font-display font-bold text-navy text-lg mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link href="/quote" className="mt-4 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                  {lang === "sv" ? "Läs mer →" : "Learn More →"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
