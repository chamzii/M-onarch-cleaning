"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Process() {
  const { t } = useLang();
  const steps = t("process.steps") as unknown as { number: string; title: string; desc: string }[];

  return (
    <>
      {/* Dark green CTA banner — like TCA's "Save Time. Save Money." */}
      <div className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl">Save Time. Save Money.<br />Save Yourself the Hassle.</h2>
            <p className="mt-3 text-white/75 text-lg max-w-xl">
              Professional office cleaning you can count on — every visit, every time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/quote" className="btn-green bg-white text-green-700 hover:bg-green-100 px-8 py-4 text-base font-bold rounded-lg transition-colors">
              Get Free Estimate
            </Link>
            <a href="tel:+46XXXXXXXXX" className="btn-outline px-8 py-4 text-base">
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section id="process" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">{t("process.eyebrow")}</p>
            <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {t("process.title")} <span className="text-green-600">{t("process.titleHighlight")}</span>
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto text-lg">{t("process.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display font-bold text-white text-xl">{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-3">{step.title}</h3>
                <p className="text-gray leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
