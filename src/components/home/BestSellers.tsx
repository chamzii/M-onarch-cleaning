import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

export default function BestSellers() {
  const products = getFeaturedProducts();
  return (
    <section className="section bg-[#111111]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-3">Fan Favourites</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Best Sellers
          </h2>
          <p className="font-body text-[#9CA3AF] text-sm mt-3 max-w-md mx-auto">
            The pieces everyone's wearing. Selling fast — don't sleep.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/shop" className="btn-primary px-12">Shop All Best Sellers</Link>
        </div>
      </div>
    </section>
  );
}
