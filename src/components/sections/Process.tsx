"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Process() {
  const { lang, t } = useLang();
  const steps = t("process.steps") as { number: string; title: string; desc: string }[];

  const sv = {
    banner: {
      heading: "Spara tid. Spara pengar.\nSpara dig krånglet.",
      sub: "Professionell kontorsstädning du kan lita på — varje besök, varje gång.",
      cta1: "Få gratis offert",
      cta2: "Ring oss",
    },
    eyebrow: "Enkel process",
    title: "Hur det",
    highlight: "fungerar",
    sub: "Att komma igång är enkelt. Vi gör hela processen smidig från ditt första samtal till ditt renaste kontor någonsin.",
  };

  const en = {
    banner: {
      heading: "Save Time. Save Money.\nSave Yourself the Hassle.",
      sub: "Professional office cleaning you can count on — every visit, every time.",
      cta1: "Get Free Estimate",
      cta2: "Call Us",
    },
    eyebrow: "Simple Process",
    title: "How It",
    highlight: "Works",
    sub: "Getting started is easy. We make the whole process simple from your first call to your cleanest office ever.",
  };

  const c = lang === "sv" ? sv : en;

  return (
    <>
      {/* Dark green CTA banner */}
      <div className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
              {c.banner.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg">{c.banner.sub}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-white text-green-700 font-bold px-8 py-4 rounded text-base hover:bg-green-50 transition-colors"
            >
              {c.banner.cta1}
            </Link>
            <a
              href="tel:+46XXXXXXXXX"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded text-base hover:bg-white/10 transition-colors"
            >
              {c.banner.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">{c.eyebrow}</p>
            <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {c.title} <span className="text-green-600">{c.highlight}</span>
            </h2>
            <p className="mt-4 text-gray max-w-xl mx-auto text-lg">{c.sub}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center px-2"
              >
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display font-bold text-white text-lg">{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-3">{step.title}</h3>
                <p className="text-gray leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
