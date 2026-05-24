import Link from "next/link";
import { getNewArrivals } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

export default function NewDrops() {
  const products = getNewArrivals();
  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-2">Just Landed</p>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              New Drops
            </h2>
          </div>
          <Link href="/collections/new" className="btn-ghost hidden sm:flex items-center gap-2">
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-10 sm:hidden">
          <Link href="/collections/new" className="btn-outline px-8">View All New In</Link>
        </div>
      </div>
    </section>
  );
}
