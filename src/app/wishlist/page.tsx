"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        <div className="container py-12">
          <h1 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Wishlist
          </h1>
          <p className="font-body text-[#9CA3AF] text-sm mb-10">{items.length} saved item{items.length !== 1 ? "s" : ""}</p>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-3xl text-[#6B7280] mb-4">Your wishlist is empty</p>
              <p className="font-body text-[#9CA3AF] mb-8">Save the pieces you love.</p>
              <Link href="/shop" className="btn-primary">Discover Pieces</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
