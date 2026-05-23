"use client";
import { motion } from "framer-motion";
import { Building2, Sparkles, Layers, CalendarCheck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

const tiles = [
  { icon: Building2, label: "Office Cleaning" },
  { icon: Sparkles, label: "Deep Cleaning" },
  { icon: Layers, label: "Floor Care" },
  { icon: CalendarCheck, label: "Scheduled Plans" },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative flex flex-col" style={{ marginTop: "105px" }}>
      {/* Hero image area */}
      <div className="relative min-h-[580px] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(20,40,20,0.62), rgba(20,40,20,0.62)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              {t("hero.title")} <span style={{ color: "#7DC442" }}>{t("hero.titleHighlight")}</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-green text-base px-8 py-4">
                {t("hero.cta1")}
              </Link>
              <a href="tel:+46XXXXXXXXX" className="btn-outline text-base px-8 py-4">
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4 service tiles */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {tiles.map((tile, i) => (
              <motion.a
                key={tile.label}
                href="#services"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex flex-col items-center gap-3 py-8 px-4 border-r border-border last:border-r-0 hover:bg-green-100 transition-colors duration-200 group"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
                  <tile.icon size={24} className="text-green-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="font-body font-semibold text-navy text-sm text-center">{tile.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
