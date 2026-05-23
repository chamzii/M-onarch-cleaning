"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function QuotePage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", frequency: "", size: "", notes: ""
  });

  const serviceOptions = t("quote.serviceOptions") as unknown as string[];
  const frequencyOptions = t("quote.frequencyOptions") as unknown as string[];
  const sizeOptions = t("quote.sizeOptions") as unknown as string[];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass = "w-full bg-snow border border-silver focus:border-gold rounded-xl px-4 py-3.5 font-body text-charcoal placeholder:text-slate/40 outline-none transition-colors duration-200 text-sm";
  const selectClass = `${inputClass} cursor-pointer`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 font-body text-sm text-slate hover:text-gold transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-gold text-xs tracking-[0.35em] uppercase mb-4">— Free Quote —</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-4">{t("quote.title")}</h1>
            <p className="font-body text-slate mb-10">{t("quote.subtitle")}</p>

            <div className="bg-white rounded-2xl p-8 border border-silver shadow-sm">
              {sent ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-gold" />
                  </div>
                  <p className="font-display text-charcoal text-2xl font-semibold">{t("quote.success")}</p>
                  <Link href="/" className="font-body text-sm text-gold hover:text-gold-light transition-colors mt-2">
                    ← Return to home
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={t("quote.namePlaceholder")} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">Company *</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder={t("quote.companyPlaceholder")} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t("quote.emailPlaceholder")} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t("quote.phonePlaceholder")} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">{t("quote.serviceLabel")} *</label>
                    <select name="service" value={form.service} onChange={handleChange} required className={selectClass}>
                      <option value="">Select service...</option>
                      {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">{t("quote.frequencyLabel")}</label>
                      <select name="frequency" value={form.frequency} onChange={handleChange} className={selectClass}>
                        <option value="">Select frequency...</option>
                        {frequencyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">{t("quote.sizeLabel")}</label>
                      <select name="size" value={form.size} onChange={handleChange} className={selectClass}>
                        <option value="">Select size...</option>
                        {sizeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-slate block mb-2">Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} placeholder={t("quote.notesPlaceholder")} className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-gold hover:bg-gold-light text-white font-body font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,151,58,0.3)] text-sm tracking-wide">
                    {t("quote.submit")}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
