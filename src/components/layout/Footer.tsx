import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: "New In", href: "/collections/new" },
    { label: "Dresses", href: "/collections/dresses" },
    { label: "Sets & Co-Ords", href: "/collections/sets" },
    { label: "Clubwear", href: "/collections/clubwear" },
    { label: "Corsets", href: "/collections/corsets" },
    { label: "Sale", href: "/collections/sale" },
  ],
  Help: [
    { label: "Sizing Guide", href: "/sizing" },
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "Track My Order", href: "/track" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  Brand: [
    { label: "About NOIRE", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Affiliates", href: "/affiliates" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.386-1.715-4.054-4.163-4.054-2.837 0-4.5 2.127-4.5 4.328 0 .857.33 1.776.741 2.279.082.1.094.186.07.288-.076.316-.244 1-.276 1.139-.044.183-.147.222-.339.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2D2D2D]">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-3xl font-bold tracking-[0.3em] text-white">
              NOIRE
            </Link>
            <p className="font-body text-[#6B7280] text-sm mt-4 leading-relaxed max-w-xs">
              Dark. Feminine. Fearless. Premium women's fashion for those who own the night.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#6B7280] hover:text-[#FF1F8E] transition-colors cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-1.5">
              <a href="mailto:hello@noire.com" className="text-[#9CA3AF] text-xs font-body hover:text-white transition-colors">
                hello@noire.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body font-semibold text-xs tracking-widest uppercase text-white mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-body text-sm text-[#6B7280] hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2D2D2D]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-xs font-body">
            © {new Date().getFullYear()} NOIRE. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Cookies"].map((t) => (
              <Link key={t} href="#" className="text-[#6B7280] text-xs hover:text-white transition-colors font-body">
                {t}
              </Link>
            ))}
          </div>
          <p className="text-[#FF1F8E] text-xs font-body tracking-widest uppercase">Dark. Feminine. Fearless.</p>
        </div>
      </div>
    </footer>
  );
}
