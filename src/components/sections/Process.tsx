"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLang();
  const steps = t("process.steps") as unknown as { number: string; title: string; desc: string }[];

  return (
    <section id="process" className="section-padding bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          titleHighlight={t("process.titleHighlight")}
          subtitle={t("process.subtitle")}
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm relative"
            >
              <span className="font-display font-bold text-5xl text-teal/15 leading-none block mb-5">{step.number}</span>
              <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center mb-5">
                <span className="font-body font-bold text-white text-sm">{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-3">{step.title}</h3>
              <p className="font-body text-gray leading-relaxed text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
