"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

const tiles = [
  { emoji: "🏢", label: "Office Areas" },
  { emoji: "🍽️", label: "Break Rooms" },
  { emoji: "🪑", label: "Common Areas" },
  { emoji: "🪟", label: "Meeting Rooms" },
];

export default function Hero() {
  useLang();
  return (
    <section className="flex flex-col" style={{ marginTop: "73px" }}>
      {/* Hero image */}
      <div
        className="relative min-h-[520px] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Enjoy Your Freshly Cleaned Office
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-xl max-w-2xl mx-auto"
          >
            Professional office cleaning that leaves you stress-free
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/quote" className="btn-green text-base px-8 py-4">
              Get A Free Estimate
            </Link>
            <a href="tel:+46XXXXXXXXX" className="btn-outline text-base px-8 py-4">
              Call Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* 4 area tiles */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {tiles.map((tile, i) => (
              <motion.a
                key={tile.label}
                href="#services"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex flex-col items-center gap-3 py-8 px-6 hover:bg-green-50 transition-colors group"
              >
                <span className="text-4xl">{tile.emoji}</span>
                <span className="font-body font-semibold text-navy text-sm group-hover:text-green-600 transition-colors">{tile.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
