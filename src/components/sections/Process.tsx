"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLang();
  const steps = t("process.steps") as unknown as { number: string; title: string; desc: string }[];

  return (
    <section id="process" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(184,151,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,151,58,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          titleHighlight={t("process.titleHighlight")}
          subtitle={t("process.subtitle")}
          light
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0px)] w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0 pointer-events-none" style={{ width: "calc(100% - 2.5rem)", left: "calc(100% - 1rem)" }} />
              )}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-gold/30 hover:bg-white/8 transition-all duration-300 h-full">
                <span className="font-display font-bold text-6xl text-gold/20 leading-none block mb-6">{step.number}</span>
                <h3 className="font-display font-bold text-white text-xl mb-4">{step.title}</h3>
                <p className="font-body text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
