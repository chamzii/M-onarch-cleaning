"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories } from "@/lib/products";
import { Category } from "@/types";

const sortOptions = ["Newest", "Best Selling", "Price: Low to High", "Price: High to Low", "Highest Rated"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState("Newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => {
      if (sort === "Price: Low to High") return a.price - b.price;
      if (sort === "Price: High to Low") return b.price - a.price;
      if (sort === "Highest Rated") return b.rating - a.rating;
      if (sort === "Best Selling") return b.reviewCount - a.reviewCount;
      return 0;
    });

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        {/* Header */}
        <div className="bg-[#111111] border-b border-[#2D2D2D] py-12 text-center">
          <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-2">All Pieces</p>
          <h1 className="font-display font-bold text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>Shop</h1>
          <p className="font-body text-[#9CA3AF] text-sm mt-2">{filtered.length} styles</p>
        </div>

        <div className="container py-8">
          {/* Filters row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-xs font-body font-semibold tracking-widest uppercase transition-all cursor-pointer ${activeCategory === "all" ? "bg-[#FF1F8E] text-white" : "bg-[#1A1A1A] text-[#9CA3AF] hover:text-white"}`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug as Category)}
                  className={`px-4 py-2 text-xs font-body font-semibold tracking-widest uppercase transition-all cursor-pointer ${activeCategory === cat.slug ? "bg-[#FF1F8E] text-white" : "bg-[#1A1A1A] text-[#9CA3AF] hover:text-white"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#1A1A1A] border border-[#2D2D2D] text-white text-xs font-body uppercase tracking-wide py-2 px-3 cursor-pointer w-auto"
            >
              {sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-3xl text-[#6B7280]">No results found</p>
              <button onClick={() => setActiveCategory("all")} className="btn-primary mt-6">Clear Filter</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
