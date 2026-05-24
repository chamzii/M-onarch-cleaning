"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

const svTestimonials = [
  {
    text: "Monarch Cleaning har städat vårt kontor i över sex månader. Professionellt, pålitligt och alltid noggrant. Vi kan varmt rekommendera dem.",
    name: "Anna Lindström",
    role: "VD, Lindström Konsult AB",
  },
  {
    text: "Äntligen ett städföretag som faktiskt håller vad de lovar. Kontoret är alltid skinande rent när vi kommer på måndag morgon.",
    name: "Marcus Eriksson",
    role: "Kontorschef, TechNord AB",
  },
  {
    text: "Flexibla, trevliga och otroligt noggranna. Exakt vad vi behövde för vår verksamhet i Norrtälje.",
    name: "Sofia Bergqvist",
    role: "Ekonomichef, Norrtälje Bygg",
  },
];

const enTestimonials = [
  {
    text: "Monarch Cleaning has been cleaning our office for over six months. Professional, reliable, and always thorough. We highly recommend them.",
    name: "Anna Lindström",
    role: "CEO, Lindström Consulting",
  },
  {
    text: "Finally a cleaning company that actually delivers on its promises. The office is always spotless when we arrive Monday morning.",
    name: "Marcus Eriksson",
    role: "Office Manager, TechNord AB",
  },
  {
    text: "Flexible, friendly, and incredibly thorough. Exactly what we needed for our business in Norrtälje.",
    name: "Sofia Bergqvist",
    role: "CFO, Norrtälje Bygg",
  },
];

export default function WhyUs() {
  const { lang, t } = useLang();
  const cards = (t("whyUs.items") as { title: string; desc: string }[]).slice(0, 4);
  const testimonials = lang === "sv" ? svTestimonials : enTestimonials;

  const sv = {
    testimonialsEyebrow: "Vad våra kunder säger",
    testimonialsHeading: "Hundratals nöjda kontor\ni Norrtäljeregionen",
    heading: "Nöjdhetsgaranti",
    sub: "Vi håller oss till en högre standard. Här är vad du kan förvänta dig varje gång vi dyker upp.",
    cta: "Få din gratis offert idag",
  };
  const en = {
    testimonialsEyebrow: "What our clients say",
    testimonialsHeading: "Hundreds of happy offices\nin the Norrtälje region",
    heading: "Satisfaction Guaranteed",
    sub: "We hold ourselves to a higher standard. Here's what you can expect every single time we show up.",
    cta: "Get Your Free Estimate Today",
  };

  const c = lang === "sv" ? sv : en;

  return (
    <>
      {/* Testimonials */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              {c.testimonialsEyebrow}
            </p>
            <h2
              className="font-display font-bold text-navy leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              {c.testimonialsHeading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B">
                      <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray text-sm leading-relaxed mb-5 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-display font-semibold text-navy text-sm">{testimonial.name}</p>
                  <p className="text-gray text-xs mt-0.5">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee cards */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className="font-display font-bold text-navy"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {c.heading}
            </h2>
            <p className="mt-4 text-gray max-w-xl mx-auto text-lg">{c.sub}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center px-4 py-8 bg-[#F8FAFC] rounded-2xl"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5 9-9" stroke="#0369A1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
    </>
  );
}
