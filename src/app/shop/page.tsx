"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories } from "@/lib/products";
import { Category } from "@/types";

const sortOptions = ["Newest", "Best Selling", "Price: Low to High", "Price: High to Low", "Highest Rated"];
const allSizes = ["XS", "S", "M", "L", "XL", "35", "36", "37", "38", "39", "40", "41"];
const allColors = ["Black", "White", "Hot Pink", "Nude", "Silver", "Gold", "Champagne", "Rose Gold", "Deep Plum", "Neon Green"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState("Newest");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(200);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSize = (s: string) =>
    setSelectedSizes((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const toggleColor = (c: string) =>
    setSelectedColors((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  const clearAll = () => {
    setActiveCategory("all");
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceMin(0);
    setPriceMax(200);
  };

  const activeFilterCount =
    (activeCategory !== "all" ? 1 : 0) +
    selectedSizes.length +
    selectedColors.length +
    (priceMin > 0 || priceMax < 200 ? 1 : 0);

  const filtered = useMemo(() => products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) => p.price >= priceMin && p.price <= priceMax)
    .filter((p) => selectedSizes.length === 0 || selectedSizes.some((s) => p.sizes.includes(s)))
    .filter((p) => selectedColors.length === 0 || selectedColors.some((c) => p.colors.includes(c)))
    .sort((a, b) => {
      if (sort === "Price: Low to High") return a.price - b.price;
      if (sort === "Price: High to Low") return b.price - a.price;
      if (sort === "Highest Rated") return b.rating - a.rating;
      if (sort === "Best Selling") return b.reviewCount - a.reviewCount;
      return 0;
    }), [activeCategory, priceMin, priceMax, selectedSizes, selectedColors, sort]);

  const SidebarContent = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#FF1F8E] mb-4">Category</p>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex items-center justify-between py-2 text-sm font-body transition-colors cursor-pointer ${activeCategory === "all" ? "text-white font-semibold" : "text-[#9CA3AF] hover:text-white"}`}
          >
            <span>All Pieces</span>
            <span className="text-xs text-[#6B7280]">{products.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug as Category)}
              className={`flex items-center justify-between py-2 text-sm font-body transition-colors cursor-pointer ${activeCategory === cat.slug ? "text-white font-semibold" : "text-[#9CA3AF] hover:text-white"}`}
            >
              <span>{cat.label}</span>
              <span className="text-xs text-[#6B7280]">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#FF1F8E] mb-4">Price</p>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex flex-col gap-1 flex-1">
            <span className="text-[10px] font-body text-[#6B7280] uppercase tracking-widest">Min</span>
            <input
              type="number"
              value={priceMin}
              onChange={(e) => setPriceMin(Math.min(Number(e.target.value), priceMax))}
              className="text-xs py-2 px-3"
              min={0}
              max={200}
            />
          </div>
          <span className="text-[#6B7280] mt-5">—</span>
          <div className="flex flex-col gap-1 flex-1">
            <span className="text-[10px] font-body text-[#6B7280] uppercase tracking-widest">Max</span>
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(Math.max(Number(e.target.value), priceMin))}
              className="text-xs py-2 px-3"
              min={0}
              max={500}
            />
          </div>
        </div>
        <p className="font-body text-xs text-[#6B7280]">£{priceMin} – £{priceMax}</p>
      </div>

      {/* Size */}
      <div>
        <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#FF1F8E] mb-4">Size</p>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => (
            <button
              key={s}
              onClick={() => toggleSize(s)}
              className={`px-3 py-1.5 text-xs font-body font-semibold border transition-all cursor-pointer ${selectedSizes.includes(s) ? "border-[#FF1F8E] bg-[#FF1F8E]/10 text-white" : "border-[#2D2D2D] text-[#9CA3AF] hover:border-white hover:text-white"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Colour */}
      <div>
        <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#FF1F8E] mb-4">Colour</p>
        <div className="flex flex-col gap-2">
          {allColors.map((c) => (
            <button
              key={c}
              onClick={() => toggleColor(c)}
              className={`flex items-center gap-3 text-sm font-body transition-colors cursor-pointer ${selectedColors.includes(c) ? "text-white" : "text-[#9CA3AF] hover:text-white"}`}
            >
              <span className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-all ${selectedColors.includes(c) ? "border-[#FF1F8E] bg-[#FF1F8E]" : "border-[#2D2D2D]"}`}>
                {selectedColors.includes(c) && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </span>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {activeFilterCount > 0 && (
        <button onClick={clearAll} className="btn-ghost text-xs text-left cursor-pointer">
          Clear all filters ({activeFilterCount})
        </button>
      )}
    </div>
  );

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
          {/* Mobile filter bar */}
          <div className="flex items-center justify-between gap-4 mb-6 lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] border border-[#2D2D2D] text-xs font-body font-semibold tracking-widest uppercase text-white cursor-pointer hover:border-[#FF1F8E] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Filter
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-[#FF1F8E] rounded-full text-[10px] font-bold flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#1A1A1A] border border-[#2D2D2D] text-white text-xs font-body uppercase tracking-wide py-2.5 px-3 cursor-pointer flex-1"
            >
              {sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex gap-10">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <p className="font-display text-lg font-bold text-white">Filters</p>
                  {activeFilterCount > 0 && (
                    <button onClick={clearAll} className="text-xs font-body text-[#FF1F8E] hover:text-[#FF8EC7] transition-colors cursor-pointer">
                      Clear ({activeFilterCount})
                    </button>
                  )}
                </div>
                <SidebarContent />
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1 min-w-0">
              {/* Desktop sort bar */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="font-body text-sm text-[#9CA3AF]">
                  {filtered.length} {filtered.length === 1 ? "style" : "styles"}
                  {activeCategory !== "all" && <span className="text-white"> in {categories.find(c => c.slug === activeCategory)?.label ?? activeCategory}</span>}
                </p>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-[#1A1A1A] border border-[#2D2D2D] text-white text-xs font-body uppercase tracking-wide py-2 px-3 cursor-pointer w-auto"
                >
                  {sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <p className="font-display text-3xl text-[#6B7280] mb-4">No styles found</p>
                  <p className="font-body text-[#9CA3AF] text-sm mb-8">Try adjusting your filters.</p>
                  <button onClick={clearAll} className="btn-primary cursor-pointer">Clear All Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#111111] z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#2D2D2D]">
                <p className="font-display text-xl font-bold text-white">Filters</p>
                <button onClick={() => setMobileFiltersOpen(false)} className="icon-btn text-[#9CA3AF] hover:text-white transition-colors cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <SidebarContent />
              </div>
              <div className="sticky bottom-0 p-4 bg-[#111111] border-t border-[#2D2D2D]">
                <button onClick={() => setMobileFiltersOpen(false)} className="btn-primary w-full py-4 cursor-pointer">
                  View {filtered.length} {filtered.length === 1 ? "style" : "styles"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
