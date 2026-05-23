"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass = "w-full bg-snow border border-silver focus:border-gold rounded-xl px-4 py-3.5 font-body text-charcoal placeholder:text-slate/40 outline-none transition-colors duration-200 text-sm";

  return (
    <section id="contact" className="section-padding bg-snow relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          titleHighlight={t("contact.titleHighlight")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <a href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
              className="group flex items-center gap-5 bg-white rounded-2xl p-6 border border-silver hover:border-gold/30 card-hover transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Phone size={22} className="text-gold" />
              </div>
              <div>
                <p className="font-body text-slate text-xs uppercase tracking-widest mb-1">Phone</p>
                <p className="font-display text-charcoal text-2xl font-semibold">{t("contact.phone")}</p>
              </div>
            </a>
            <a href={`mailto:${t("contact.email")}`}
              className="group flex items-center gap-5 bg-white rounded-2xl p-6 border border-silver hover:border-gold/30 card-hover transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Mail size={22} className="text-gold" />
              </div>
              <div>
                <p className="font-body text-slate text-xs uppercase tracking-widest mb-1">Email</p>
                <p className="font-display text-charcoal text-2xl font-semibold">{t("contact.email")}</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-silver">
              {sent ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-56 gap-4 text-center">
                  <CheckCircle size={44} className="text-gold" />
                  <p className="font-display text-charcoal text-2xl font-semibold">{t("contact.success")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={t("contact.namePlaceholder")} className={inputClass} />
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder={t("contact.companyPlaceholder")} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t("contact.emailPlaceholder")} className={inputClass} />
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t("contact.phonePlaceholder")} className={inputClass} />
                  </div>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder={t("contact.messagePlaceholder")} className={`${inputClass} resize-none`} />
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-white font-body font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,151,58,0.3)]">
                    <Send size={16} />
                    {t("contact.submit")}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
