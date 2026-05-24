"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { getProductBySlug, products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");
  const [added, setAdded] = useState(false);

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
    { key: "shipping", label: "Shipping & Delivery", content: "Standard delivery: 3–5 business days. Express: Next day. Free on orders over £60. International shipping available." },
    { key: "returns", label: "Returns & Exchanges", content: "Free returns within 30 days. Item must be unworn with original tags. Exchange or full refund guaranteed." },
    { key: "sizing", label: "Size & Fit", content: "Model is 5'9\" and wears size S. We recommend sizing up if between sizes. Check our full size guide for measurements." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex gap-2 text-xs font-body text-[#6B7280]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>

        <div className="container pb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Images */}
            <div>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">
                <Image
                  src={product.images[activeImg]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.stockCount && product.stockCount <= 5 && (
                  <div className="absolute top-4 left-4 bg-[#FF1F8E] text-white text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1.5">
                    Only {product.stockCount} left
                  </div>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-20 aspect-[3/4] overflow-hidden cursor-pointer ${activeImg === i ? "ring-2 ring-[#FF1F8E]" : "opacity-60 hover:opacity-100"}`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="font-body text-[#9CA3AF] text-xs tracking-widest uppercase mb-2 capitalize">{product.category}</p>
                  <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                    {product.name}
                  </h1>
                </div>
                <button
                  onClick={() => toggle(product)}
                  className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#1A1A1A] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                  aria-label="Wishlist"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill={has(product.id) ? "#FF1F8E" : "none"}>
                    <path d="M9 15.5S2 11 2 6.5A3.5 3.5 0 019 4a3.5 3.5 0 017 2.5C16 11 9 15.5 9 15.5z" stroke={has(product.id) ? "#FF1F8E" : "#9CA3AF"} strokeWidth="1.4" />
                  </svg>
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="13" height="13" viewBox="0 0 13 13" fill={s <= Math.round(product.rating) ? "#FF1F8E" : "#2D2D2D"}>
                      <path d="M6.5 1l1.2 3H11L8.4 5.8l1.1 3-2.9-1.7-2.9 1.7 1.1-3L2 4h3.3L6.5 1z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-sm text-[#9CA3AF]">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-3xl font-semibold text-white">£{product.price}</span>
                {product.originalPrice && (
                  <span className="font-body text-lg text-[#6B7280] line-through">£{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-[#FF1F8E]/10 text-[#FF1F8E] text-xs font-body font-bold px-2 py-1">
                    Save £{product.originalPrice - product.price}
                  </span>
                )}
              </div>

              {/* Color */}
              {product.colors.length > 1 && (
                <div className="mb-5">
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF] mb-2">Colour: <span className="text-white">{selectedColor}</span></p>
                  <div className="flex gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`px-3 py-1.5 text-xs font-body font-semibold tracking-wide uppercase border transition-all cursor-pointer ${selectedColor === c ? "border-[#FF1F8E] text-[#FF1F8E]" : "border-[#2D2D2D] text-[#9CA3AF] hover:border-white hover:text-white"}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Size: <span className="text-white">{selectedSize}</span></p>
                  <button className="font-body text-xs text-[#FF1F8E] hover:text-[#FF8EC7] transition-colors cursor-pointer">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[48px] py-2.5 text-sm font-body font-semibold border transition-all cursor-pointer ${selectedSize === s ? "border-[#FF1F8E] bg-[#FF1F8E]/10 text-white" : "border-[#2D2D2D] text-[#9CA3AF] hover:border-white hover:text-white"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 mb-8">
                <button onClick={handleAddToCart} className="btn-primary w-full py-4 text-sm">
                  {added ? "✓ Added to Cart" : "Add to Cart"}
                </button>
                <Link href="/checkout" className="btn-outline w-full py-4 text-sm text-center">
                  Buy It Now
                </Link>
              </div>

              <p className="font-body text-[#6B7280] text-xs text-center mb-8">
                Free shipping over £60 · Free returns · Secure checkout
              </p>

              {/* Description */}
              <p className="font-body text-[#D1D5DB] text-sm leading-relaxed mb-6">{product.description}</p>

              {/* Accordions */}
              <div className="divide-y divide-[#2D2D2D]">
                {accordions.map((acc) => (
                  <div key={acc.key}>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                      className="flex items-center justify-between w-full py-4 cursor-pointer"
                    >
                      <span className="font-body font-semibold text-sm tracking-wide text-white">{acc.label}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`text-[#9CA3AF] transition-transform ${openAccordion === acc.key ? "rotate-180" : ""}`}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    {openAccordion === acc.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-4"
                      >
                        <p className="font-body text-sm text-[#9CA3AF] leading-relaxed">{acc.content}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-3xl font-bold text-white mb-8">Complete The Look</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-[#2D2D2D] p-4 lg:hidden z-30">
        <button onClick={handleAddToCart} className="btn-primary w-full py-4">
          {added ? "✓ Added to Cart" : `Add to Cart — £${product.price}`}
        </button>
      </div>
    </>
  );
}
