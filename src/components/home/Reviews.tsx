"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  { name: "Aaliyah M.", rating: 5, text: "Absolutely obsessed with my order. The quality is insane for the price. NOIRE is my new favourite brand hands down.", verified: true, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" },
  { name: "Jasmine K.", rating: 5, text: "Wore the Crystal Queen dress to a club and literally could not move without someone stopping me. 10/10.", verified: true, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=80&q=80" },
  { name: "Sofia R.", rating: 5, text: "TikTok brought me here and I'm staying forever. The Pink Venom set is everything I dreamed of.", verified: true, img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=80&q=80" },
  { name: "Destiny T.", rating: 5, text: "Fast shipping, stunning packaging, the dress fits like it was made for me. Already ordered three more pieces.", verified: true, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80" },
  { name: "Priya S.", rating: 5, text: "I've bought from Fashion Nova and PLT but NOIRE hits different. The fabrics are premium and the fit is chef's kiss.", verified: true, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&q=80" },
  { name: "Camille B.", rating: 5, text: "Every single item I've ordered has been perfect. The Dark Desire Jumpsuit sold out twice — I got the last one.", verified: true, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" },
];

export default function Reviews() {
  return (
    <section className="section bg-[#111111] overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-3">Social Proof</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            What They're Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#FF1F8E">
                  <path d="M8 1l1.5 3.5H14l-3.5 2.5 1.5 3.5L8 9 4.5 10.5 6 7 2.5 4.5H6.5L8 1z" />
                </svg>
              ))}
            </div>
            <span className="font-body font-semibold text-white text-sm">4.9</span>
            <span className="text-[#6B7280] text-sm font-body">· 50,000+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass p-6"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#FF1F8E">
                    <path d="M6 1l1 2.5H10L7.5 5l1 2.5L6 6 3.5 7.5l1-2.5L2 3.5h3L6 1z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-[#D1D5DB] text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#2D2D2D] shrink-0">
                  <Image src={r.img} alt={r.name} fill className="object-cover" sizes="36px" />
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">{r.name}</p>
                  {r.verified && (
                    <p className="text-[#FF1F8E] text-[10px] font-body font-semibold tracking-wide">✓ Verified Purchase</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
