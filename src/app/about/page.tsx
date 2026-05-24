import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A]">
        {/* Hero */}
        <div className="relative h-[60vh] flex items-end overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80"
            alt="NOIRE Story"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="relative container pb-16">
            <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h1 className="font-display font-bold text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Born in the Dark.<br />Built for the Night.
            </h1>
          </div>
        </div>

        {/* Story */}
        <div className="container py-20 max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl text-white leading-relaxed italic mb-6">
            "NOIRE was built for women who refuse to go unnoticed."
          </p>
          <p className="font-body text-[#9CA3AF] text-base leading-loose mb-6">
            Founded in London, NOIRE is a premium women's fashion brand created for those who live boldly and dress fearlessly. We design for the after-dark — the nights out, the moments that matter, the outfits that become memories.
          </p>
          <p className="font-body text-[#9CA3AF] text-base leading-loose mb-10">
            Every piece is crafted with intention. Premium fabrics, deliberate silhouettes, and a commitment to fit that flatters every body. From the dancefloor to the dinner table, NOIRE belongs everywhere confidence does.
          </p>
          <Link href="/shop" className="btn-primary">Explore The Collection</Link>
        </div>

        {/* Values */}
        <div className="bg-[#111111] py-20">
          <div className="container text-center mb-12">
            <h2 className="font-display font-bold text-white text-4xl">What We Stand For</h2>
          </div>
          <div className="container grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Premium Quality", body: "Every fabric is chosen for feel, fit, and durability. We never compromise on what touches your skin." },
              { title: "Body Confidence", body: "Designed to flatter every silhouette. From XS to XL, every NOIRE piece is made to make you feel incredible." },
              { title: "Fearless Femininity", body: "Fashion is expression. We celebrate women who dress for themselves — bold, beautiful, unapologetic." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-1 h-12 bg-[#FF1F8E] mx-auto mb-5" />
                <h3 className="font-display text-xl text-white font-semibold mb-3">{v.title}</h3>
                <p className="font-body text-[#9CA3AF] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
