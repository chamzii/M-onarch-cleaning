"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Office Cleaning & Sanitizing",
    desc: "Our thorough office cleaning service ensures every desk, floor, bathroom, and common area is cleaned and sanitized consistently — every single visit.",
  },
  {
    title: "Deep Cleaning Services",
    desc: "Our intensive deep clean goes beyond the surface. We tackle built-up grime, appliances, fixtures, and hard-to-reach areas for a complete reset.",
  },
  {
    title: "Scheduled Cleaning Plans",
    desc: "Choose daily, weekly, or bi-weekly cleaning visits. We build a plan around your hours so there is zero disruption to your team and workflow.",
  },
  {
    title: "Commercial Property Cleaning",
    desc: "We proudly offer cleaning services for larger commercial spaces — coworking hubs, clinics, retail stores, and multi-tenant properties across the region.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-lg p-7 border border-gray-200 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="w-12 h-1.5 bg-green-600 rounded mb-5" />
              <h3 className="font-display font-bold text-navy text-lg mb-3 leading-snug">{s.title}</h3>
              <p className="text-gray text-sm leading-relaxed flex-1">{s.desc}</p>
              <Link href="/quote" className="mt-5 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
