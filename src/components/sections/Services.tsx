"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

const photos = [
  "https://images.unsplash.com/photo-1497366754035-f200968a0e6e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
];

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
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer"
            >
              <div className="relative w-full overflow-hidden" style={{ height: "190px" }}>
                <Image
                  src={photos[i]}
                  alt={s.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display font-bold text-navy text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link
                  href="/quote"
                  className="mt-4 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors inline-flex items-center gap-1"
                >
                  {lang === "sv" ? "Läs mer" : "Learn More"}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
