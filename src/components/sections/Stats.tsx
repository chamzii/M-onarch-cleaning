"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

export default function Stats() {
  const { lang } = useLang();

  const stats = [
    { value: "100+", label: lang === "sv" ? "Nöjda kunder" : "Happy Clients" },
    { value: "7", label: lang === "sv" ? "Dagar i veckan" : "Days a Week" },
    { value: "4", label: lang === "sv" ? "Serviceorter" : "Service Areas" },
    { value: "100%", label: lang === "sv" ? "Nöjdhetsgaranti" : "Satisfaction Rate" },
  ];

  return (
    <div style={{ backgroundColor: "#1C2B1C" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display font-bold text-white text-4xl mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
