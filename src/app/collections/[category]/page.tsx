"use client";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, getSaleItems, getNewArrivals } from "@/lib/products";

const categoryMeta: Record<string, { title: string; sub: string }> = {
  dresses: { title: "Dresses", sub: "From mini to midi. Every dress is a moment." },
  sets: { title: "Sets & Co-Ords", sub: "Perfectly matched. Effortlessly styled." },
  clubwear: { title: "Clubwear", sub: "Made for the night. Built to turn heads." },
  corsets: { title: "Corsets", sub: "Structure meets seduction." },
  tops: { title: "Tops & Bodysuits", sub: "Statement pieces. Endless looks." },
  heels: { title: "Heels", sub: "Elevate every outfit." },
  jumpsuits: { title: "Jumpsuits", sub: "One piece. Total look." },
  new: { title: "New In", sub: "Just dropped. Don't sleep." },
  sale: { title: "Sale", sub: "Up to 50% off. While stocks last." },
};

export default function CollectionPage() {
  const { category } = useParams<{ category: string }>();
  const meta = categoryMeta[category] ?? { title: category, sub: "" };

  const items =
    category === "sale" ? getSaleItems() :
    category === "new" ? getNewArrivals() :
    products.filter((p) => p.category === category);

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        <div className="bg-[#111111] border-b border-[#2D2D2D] py-14 text-center">
          <h1 className="font-display font-bold text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            {meta.title}
          </h1>
          <p className="font-body text-[#9CA3AF] text-sm mt-3">{meta.sub}</p>
          <p className="font-body text-[#6B7280] text-xs mt-1">{items.length} styles</p>
        </div>
        <div className="container py-10">
          {items.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="font-display text-3xl text-[#6B7280]">Coming Soon</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
