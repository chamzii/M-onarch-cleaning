"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { getProductBySlug, products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const { dispatch } = useCart();
  const { toggle, has } = useWishlist();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({ type: "ADD", product, size: selectedSize, color: selectedColor });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: "details", label: "Product Details", content: product.details.join(" · ") },
    { key: "shipping", label: "Shipping & Delivery", content: "Standard: 3–5 business days. Express: next day. Free over £60. International available." },
    { key: "returns", label: "Returns & Exchanges", content: "Free returns within 30 days. Item must be unworn with original tags. Exchange or full refund guaranteed." },
    { key: "sizing", label: "Size & Fit", content: "Model is 5'9\" and wears size S. Recommend sizing up if between sizes." },
  ];

  const trustBadges = [
    { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 6l6-4 6 4v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.3"/><path d="M6 14V9h4v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, label: "Free Returns" },
    { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="5" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/><path d="M2 8h12M5 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, label: "Secure Checkout" },
    { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 10h10l2-4H3L1 3H0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="5" cy="13" r="1" fill="currentColor"/><circle cx="11" cy="13" r="1" fill="currentColor"/></svg>, label: "Free over £60" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        {/* Breadcrumb */}
        <motion.div {...fadeUp(0)} className="container py-4">
          <div className="flex gap-2 text-xs font-body text-[#6B7280]">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-white transition-colors duration-200">Shop</Link>
            <span>/</span>
            <Link href={`/collections/${product.category}`} className="hover:text-white transition-colors duration-200 capitalize">{product.category}</Link>
            <span>/</span>
            <span className="text-[#9CA3AF]">{product.name}</span>
          </div>
        </motion.div>

        <div className="container pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

            {/* ── Image Gallery ── */}
            <motion.div {...fadeUp(0.05)} className="flex gap-3">
              {/* Thumbnails — vertical on desktop */}
              {product.images.length > 1 && (
                <div className="hidden lg:flex flex-col gap-2 shrink-0">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-16 h-20 overflow-hidden cursor-pointer transition-all duration-200 ${activeImg === i ? "ring-2 ring-[#FF1F8E] opacity-100" : "opacity-40 hover:opacity-80"}`}
                    >
                      <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}

              {/* Main image */}
              <div className="flex-1">
                <div className="relative overflow-hidden bg-[#111111] aspect-[3/4] lg:aspect-auto lg:h-[62vh] lg:max-h-[580px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImg}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={product.images[activeImg]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.isNew && <span className="bg-[#FF1F8E] text-white text-[9px] font-body font-bold tracking-widest uppercase px-2.5 py-1">New In</span>}
                    {product.isSale && product.originalPrice && <span className="bg-white text-[#0A0A0A] text-[9px] font-body font-bold tracking-widest uppercase px-2.5 py-1">Sale</span>}
                    {product.stockCount && product.stockCount <= 5 && <span className="bg-[#0A0A0A]/80 text-white text-[9px] font-body tracking-wider uppercase px-2.5 py-1">{product.stockCount} left</span>}
                  </div>
                </div>

                {/* Mobile thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 mt-2 lg:hidden">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`relative w-16 h-20 overflow-hidden cursor-pointer transition-all duration-200 ${activeImg === i ? "ring-2 ring-[#FF1F8E]" : "opacity-50 hover:opacity-80"}`}
                      >
                        <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="64px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* ── Product Info ── */}
            <div className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto lg:pr-1 space-y-6">

              {/* Header */}
              <motion.div {...fadeUp(0.1)}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-[#FF1F8E] text-[10px] font-bold tracking-[0.25em] uppercase mb-2 capitalize">{product.category}</p>
                    <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}>
                      {product.name}
                    </h1>
                  </div>
                  <button
                    onClick={() => toggle(product)}
                    className="icon-btn shrink-0 bg-[#1A1A1A] hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer group"
                    aria-label="Wishlist"
                  >
                    <motion.svg
                      width="18" height="18" viewBox="0 0 18 18"
                      fill={has(product.id) ? "#FF1F8E" : "none"}
                      animate={{ scale: has(product.id) ? [1, 1.3, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M9 15.5S2 11 2 6.5A3.5 3.5 0 019 4a3.5 3.5 0 017 2.5C16 11 9 15.5 9 15.5z" stroke={has(product.id) ? "#FF1F8E" : "#9CA3AF"} strokeWidth="1.4" />
                    </motion.svg>
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(product.rating) ? "#FF1F8E" : "#2D2D2D"}>
                        <path d="M6 1l1.2 2.9H10L7.6 5.6l1 2.9L6 7 3.4 8.5l1-2.9L2 4.1h2.8L6 1z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-body text-xs text-[#9CA3AF]">{product.rating} · {product.reviewCount} reviews</span>
                </div>
              </motion.div>

              {/* Price */}
              <motion.div {...fadeUp(0.15)} className="flex items-baseline gap-3 py-4 border-y border-[#2D2D2D]">
                <span className="font-display text-4xl font-bold text-white">£{product.price.toFixed(2)}</span>
                {product.originalPrice && <>
                  <span className="font-body text-base text-[#6B7280] line-through">£{product.originalPrice.toFixed(2)}</span>
                  <span className="text-xs font-body font-bold text-[#FF1F8E] bg-[#FF1F8E]/10 px-2 py-0.5">
                    Save £{(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>}
              </motion.div>

              {/* Colour */}
              {product.colors.length > 1 && (
                <motion.div {...fadeUp(0.2)}>
                  <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#6B7280] mb-3">
                    Colour: <span className="text-white">{selectedColor}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <motion.button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 text-xs font-body font-semibold tracking-wide uppercase border transition-all duration-200 cursor-pointer ${selectedColor === c ? "border-[#FF1F8E] bg-[#FF1F8E]/10 text-white" : "border-[#2D2D2D] text-[#9CA3AF] hover:border-[#6B7280] hover:text-white"}`}
                      >
                        {c}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Size */}
              <motion.div {...fadeUp(0.22)}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#6B7280]">
                    Size: <span className="text-white">{selectedSize}</span>
                  </p>
                  <button onClick={() => setSizeGuideOpen(true)} className="font-body text-xs text-[#FF1F8E] hover:text-[#FF8EC7] transition-colors cursor-pointer underline underline-offset-2">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <motion.button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      whileTap={{ scale: 0.93 }}
                      className={`min-w-[50px] py-2.5 text-sm font-body font-semibold border transition-all duration-200 cursor-pointer ${selectedSize === s ? "border-[#FF1F8E] bg-[#FF1F8E]/10 text-white shadow-[0_0_12px_rgba(255,31,142,0.2)]" : "border-[#2D2D2D] text-[#9CA3AF] hover:border-[#6B7280] hover:text-white"}`}
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div {...fadeUp(0.26)} className="flex flex-col gap-3">
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {added ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7.5l3.5 3.5L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Added to Cart
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        Add to Cart
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                <Link href="/checkout" className="btn-outline w-full py-4 text-sm text-center block hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-200">
                  Buy It Now
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div {...fadeUp(0.3)} className="flex items-center justify-between py-4 border-y border-[#1A1A1A]">
                {trustBadges.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 text-[#6B7280]">
                    {b.icon}
                    <span className="font-body text-[10px] tracking-wide">{b.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p {...fadeUp(0.33)} className="font-body text-[#B0B7C3] text-sm leading-relaxed">
                {product.description}
              </motion.p>

              {/* Accordions */}
              <motion.div {...fadeUp(0.36)} className="divide-y divide-[#1A1A1A]">
                {accordions.map((acc) => (
                  <div key={acc.key}>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                      className="flex items-center justify-between w-full py-4 cursor-pointer group"
                    >
                      <span className="font-body font-semibold text-sm text-[#9CA3AF] group-hover:text-white transition-colors duration-200">{acc.label}</span>
                      <motion.svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        animate={{ rotate: openAccordion === acc.key ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#6B7280] shrink-0"
                      >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </motion.svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {openAccordion === acc.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="font-body text-sm text-[#6B7280] leading-relaxed pb-4">{acc.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-24 pt-16 border-t border-[#1A1A1A]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl font-bold text-white">Complete The Look</h2>
                <Link href={`/collections/${product.category}`} className="btn-ghost text-xs">View All</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#111111]/95 backdrop-blur-md border-t border-[#2D2D2D] p-3 lg:hidden z-30">
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full py-3.5 flex items-center justify-center gap-2"
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span key="added" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7.5l3.5 3.5L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Added to Cart
              </motion.span>
            ) : (
              <motion.span key="add" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                Add to Cart — £{product.price.toFixed(2)}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {sizeGuideOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm" onClick={() => setSizeGuideOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 bg-[#111111] border border-[#2D2D2D] p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-white">Size Guide</h3>
                <button onClick={() => setSizeGuideOpen(false)} className="icon-btn text-[#6B7280] hover:text-white transition-colors cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
              <p className="font-body text-xs text-[#6B7280] mb-5">All measurements in centimetres. Model is 5&apos;9&quot; and wears size S.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body">
                  <thead>
                    <tr className="border-b border-[#2D2D2D]">
                      {["Size","UK","Bust","Waist","Hips"].map((h) => (
                        <th key={h} className="text-left py-2 pr-6 text-[#FF1F8E] font-bold tracking-widest uppercase text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[["XS","6","80","60","86"],["S","8","84","64","90"],["M","10","88","68","94"],["L","12","94","74","100"],["XL","14","100","80","106"]].map(([size,...vals]) => (
                      <tr key={size} className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                        <td className="py-3 pr-6 text-white font-semibold">{size}</td>
                        {vals.map((v, i) => <td key={i} className="py-3 pr-6 text-[#9CA3AF]">{v}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
