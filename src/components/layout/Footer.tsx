import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const services = ["Office Cleaning", "Deep Cleaning", "Scheduled Plans", "Commercial Property"];
const company = [
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why Hire Us?", href: "#why-us" },
  { label: "How It Works", href: "#process" },
  { label: "Free Estimate", href: "/quote" },
];
const areas = ["Norrtälje", "Hallstavik", "Rimbo", "Herräng", "Älmsta", "Väddö"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1C2B1C" }}>
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
            <p className="text-white/50 text-sm leading-relaxed">
              Professional office cleaning across the Norrtälje region. Reliable, consistent, and always on time.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={14} className="text-green-500 shrink-0" />
                +46 XXX XXX XXX
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Mail size={14} className="text-green-500 shrink-0" />
                info@monarchcleaning.se
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-green-500 shrink-0 mt-0.5" />
                Norrtälje Region, Sweden
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-green-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-white/50 text-sm hover:text-green-400 transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Service Area</h4>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="text-white/50 text-xs border border-white/15 px-3 py-1 rounded-full">
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/quote" className="btn-green text-sm px-6 py-3 rounded inline-block">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {year} Monarch Cleaning. All rights reserved.</p>
          <p className="text-white/20 text-xs">Herräng · Hallstavik · Rimbo · Norrtälje</p>
        </div>
      </div>
    </footer>
  );
}
