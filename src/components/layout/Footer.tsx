import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    "Kontorsstädning",
    "Storstädning",
    "Schemalagda städplaner",
    "Kommersiella fastigheter",
  ];

  const company = [
    { label: "Våra tjänster", href: "#services" },
    { label: "Om oss", href: "#about" },
    { label: "Varför anlita oss?", href: "#why-us" },
    { label: "Hur det fungerar", href: "#process" },
    { label: "Gratis offert", href: "/quote" },
  ];

  const areas = ["Norrtälje", "Hallstavik", "Rimbo", "Herräng", "Älmsta", "Väddö"];

  return (
    <footer style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-green-600 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-white text-lg">M</span>
              </div>
              <span className="font-display font-bold text-white text-xl">Monarch Cleaning</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Professionell kontorsstädning i Norrtäljeregionen. Pålitlig, miljövänlig och anpassad efter ditt schema.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={14} className="text-green-400 shrink-0" />
                +46 XXX XXX XXX
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Mail size={14} className="text-green-400 shrink-0" />
                info@monarchcleaning.se
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-green-400 shrink-0 mt-0.5" />
                Norrtäljeregionen, Sverige
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Tjänster</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Företaget</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Serviceområde</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {areas.map((a) => (
                <span key={a} className="text-white/60 text-xs bg-white/5 px-3 py-1 rounded-full">
                  {a}
                </span>
              ))}
            </div>
            <Link href="/quote" className="btn-green text-sm px-6 py-3 rounded inline-block">
              Gratis offert
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {year} Monarch Cleaning. Alla rättigheter förbehållna.</p>
          <p className="text-white/20 text-xs">Herräng · Hallstavik · Rimbo · Norrtälje</p>
        </div>
      </div>
    </footer>
  );
}
