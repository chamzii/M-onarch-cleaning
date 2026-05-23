"use client";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

export default function Coverage() {
  const { t } = useLang();
  const areas = t("coverage.areas") as unknown as string[];

  return (
    <section id="coverage" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("coverage.eyebrow")}
          title={t("coverage.title")}
          titleHighlight={t("coverage.titleHighlight")}
          subtitle={t("coverage.subtitle")}
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-snow rounded-xl px-5 py-4 border border-silver group hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                >
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span className="font-body font-medium text-charcoal text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 font-body text-slate text-sm flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              And all surrounding areas in the Norrtälje municipality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-silver shadow-sm aspect-[4/3] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d172000!2d18.65!3d59.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Monarch Cleaning coverage area"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
