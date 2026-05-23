"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function WhyUs() {
  const { lang, t } = useLang();
  const cards = (t("whyUs.items") as { title: string; desc: string }[]).slice(0, 4);

  const sv = {
    heading: "Nöjdhetsgaranti",
    sub: "Vi håller oss till en högre standard. Här är vad du kan förvänta dig varje gång vi dyker upp.",
    cta: "Få din gratis offert idag",
  };
  const en = {
    heading: "Satisfaction Guaranteed",
    sub: "We hold ourselves to a higher standard. Here's what you can expect every single time we show up.",
    cta: "Get Your Free Estimate Today",
  };

  const c = lang === "sv" ? sv : en;

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {c.heading}
          </h2>
          <p className="mt-4 text-gray max-w-xl mx-auto text-lg">{c.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center px-4 py-6"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5 9-9" stroke="#5C9E28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-3">{card.title}</h3>
              <p className="text-gray text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/quote" className="btn-green px-10 py-4 text-base inline-block rounded">
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
