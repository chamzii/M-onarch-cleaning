"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Get a Free Estimate",
    desc: "Fill out our quick form or give us a call. We'll assess your space and provide a clear, no-obligation quote.",
  },
  {
    number: "02",
    title: "We Create Your Plan",
    desc: "We build a customized cleaning plan around your schedule — daily, weekly, or bi-weekly. Zero disruption to your team.",
  },
  {
    number: "03",
    title: "Meet Your Cleaning Team",
    desc: "Your dedicated Monarch team arrives on time, fully equipped, and ready to deliver a thorough, consistent clean.",
  },
  {
    number: "04",
    title: "Enjoy Your Clean Office",
    desc: "Come in to a spotless workspace every time. We handle the cleaning so you can focus on what matters most.",
  },
];

export default function Process() {
  return (
    <>
      {/* Dark green CTA banner */}
      <div className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
              Save Time. Save Money.<br />Save Yourself the Hassle.
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-lg">
              Professional office cleaning you can count on — every visit, every time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-white text-green-700 font-bold px-8 py-4 rounded text-base hover:bg-green-50 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+46XXXXXXXXX"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded text-base hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Simple Process</p>
            <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              How It <span className="text-green-600">Works</span>
            </h2>
            <p className="mt-4 text-gray max-w-xl mx-auto text-lg">
              Getting started is easy. We make the whole process simple from your first call to your cleanest office ever.
            </p>
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
