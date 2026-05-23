import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const services = ["Office Cleaning", "Deep Cleaning", "Window Cleaning", "Floor Care", "Daily & Weekly", "Commercial Property"];
  const company = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#contact" },
    { label: "Get Free Quote", href: "/quote" },
  ];
  const areas = ["Norrtälje", "Hallstavik", "Rimbo", "Herräng", "Älmsta", "Väddö"];

  return (
    <footer className="bg-charcoal border-t border-white/5 relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-gold/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <span className="font-display text-gold text-xl font-semibold">M</span>
              </div>
              <div>
                <span className="font-display text-white font-semibold tracking-[0.15em] text-sm block">MONARCH</span>
                <span className="font-body text-gold/60 text-[9px] tracking-[0.3em] uppercase">CLEANING</span>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed">
              Premium office cleaning across the Norrtälje region. Reliable, eco-friendly, professional.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/40 hover:bg-gold/10 transition-all duration-200">
                  <Icon size={15} className="text-white/40 hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-white text-xs uppercase tracking-widest mb-5 font-semibold">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white text-xs uppercase tracking-widest mb-5 font-semibold">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white text-xs uppercase tracking-widest mb-5 font-semibold">Service Area</h4>
            <div className="flex flex-wrap gap-2 mb-7">
              {areas.map((a) => (
                <span key={a} className="font-body text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full">{a}</span>
              ))}
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-body text-sm text-white/40">
                <Phone size={13} className="text-gold shrink-0" />
                +46 XXX XXX XXX
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-white/40">
                <Mail size={13} className="text-gold shrink-0" />
                info@monarchcleaning.se
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-white/40">
                <MapPin size={13} className="text-gold shrink-0 mt-0.5" />
                Norrtälje Region, Sweden
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/25 text-xs">© {year} Monarch Cleaning. All rights reserved.</p>
          <p className="font-body text-white/20 text-xs">Herräng · Hallstavik · Rimbo · Norrtälje</p>
        </div>
      </div>
    </footer>
  );
}
