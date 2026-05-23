"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    title: "Satisfaction Guaranteed",
    desc: "If you're not fully satisfied with any area we cleaned, contact us within 24 hours and we'll return to make it right — at no extra cost.",
  },
  {
    title: "Consistent Every Visit",
    desc: "We use a proven system so you get the same thorough clean every time. No shortcuts, no surprises — just a spotless office.",
  },
  {
    title: "Vetted & Insured Team",
    desc: "Every member of our team is background-checked, trained, and fully insured. You can trust us in your space.",
  },
  {
    title: "Flexible Scheduling",
    desc: "We work around your hours — early mornings, evenings, or weekends. Your business never has to stop for cleaning.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Promise</p>
          <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            The Monarch <span className="text-green-600">Guarantee</span>
          </h2>
          <p className="mt-4 text-gray max-w-xl mx-auto text-lg">
            We hold ourselves to a higher standard. Here's what you can expect every single time we show up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-lg p-7 border-t-4 border-green-600 shadow-sm flex flex-col"
            >
              <h3 className="font-display font-bold text-navy text-lg mb-3">{card.title}</h3>
              <p className="text-gray text-sm leading-relaxed flex-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/quote" className="btn-green px-10 py-4 text-base inline-block rounded">
            Get Your Free Estimate Today
          </Link>
        </div>
      </div>
    </section>
  );
}
