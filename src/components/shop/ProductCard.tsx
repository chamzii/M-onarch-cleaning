"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { dispatch } = useCart();
  const { toggle, has } = useWishlist();
  const [imgIdx, setImgIdx] = useState(0);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD", product, size: product.sizes[0], color: product.colors[0] });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link href={`/product/${product.slug}`} className="group block">
        {/* Image */}
        <div
          className="product-img-wrap relative bg-[#1A1A1A] overflow-hidden"
          style={{ aspectRatio: "3/4" }}
          onMouseEnter={() => product.images[1] && setImgIdx(1)}
          onMouseLeave={() => setImgIdx(0)}
        >
          <Image
            src={product.images[imgIdx]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-[#FF1F8E] text-white text-[9px] font-body font-bold tracking-widest uppercase px-2 py-1">
                New
              </span>
            )}
            {product.isSale && product.originalPrice && (
              <span className="bg-white text-[#0A0A0A] text-[9px] font-body font-bold tracking-widest uppercase px-2 py-1">
                Sale
              </span>
            )}
            {product.stockCount && product.stockCount <= 5 && (
              <span className="bg-[#0A0A0A]/80 text-white text-[9px] font-body tracking-wider uppercase px-2 py-1">
                {product.stockCount} left
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); toggle(product); }}
            className="icon-btn absolute top-3 right-3 bg-[#0A0A0A]/60 backdrop-blur-sm hover:bg-[#0A0A0A]/90 transition-all cursor-pointer"
            aria-label="Add to wishlist"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill={has(product.id) ? "#FF1F8E" : "none"}>
              <path d="M8 14s-5.5-3.5-5.5-7.5A3.5 3.5 0 018 3.5a3.5 3.5 0 015.5 3c0 4-5.5 7.5-5.5 7.5z" stroke={has(product.id) ? "#FF1F8E" : "white"} strokeWidth="1.2" />
            </svg>
          </button>

          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleQuickAdd}
              className="w-full bg-[#FF1F8E] text-white text-[11px] font-body font-bold tracking-widest uppercase py-3 hover:bg-[#D4177A] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              {added ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 7l3.5 3.5L11 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Added
                </>
              ) : "Quick Add"}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3">
          <p className="font-body font-semibold text-sm text-white leading-snug group-hover:text-[#FF1F8E] transition-colors">
            {product.name}
          </p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="font-body font-semibold text-white text-sm">£{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="font-body text-[#6B7280] text-xs line-through">£{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          {/* Stars */}
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill={s <= Math.round(product.rating) ? "#FF1F8E" : "#2D2D2D"}>
                  <path d="M5 1l1 2.5H9L6.5 5l1 2.5L5 6 2.5 7.5l1-2.5L1 3.5h3L5 1z" />
                </svg>
              ))}
            </div>
            <span className="text-[#6B7280] text-[10px] font-body">({product.reviewCount})</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
