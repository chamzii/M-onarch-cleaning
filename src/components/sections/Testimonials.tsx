"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLang();
  const items = t("testimonials.items") as unknown as { name: string; company: string; quote: string; rating: number }[];

  return (
    <section id="testimonials" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          titleHighlight={t("testimonials.titleHighlight")}
          light
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col hover:border-gold/30 hover:bg-white/8 transition-all duration-300"
            >
              <Quote size={28} className="text-gold/50 mb-4" />
              <p className="font-body text-white/70 text-sm leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-body font-semibold text-white text-sm">{item.name}</p>
                <p className="font-body text-white/40 text-xs mt-0.5">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
