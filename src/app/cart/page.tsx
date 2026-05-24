"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { state, dispatch, total, itemCount } = useCart();

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        <div className="container py-12">
          <h1 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Your Cart
          </h1>
          <p className="font-body text-[#9CA3AF] text-sm mb-10">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>

          {state.items.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-3xl text-[#6B7280] mb-4">Your cart is empty</p>
              <p className="font-body text-[#9CA3AF] mb-8">Add something iconic.</p>
              <Link href="/shop" className="btn-primary">Shop Now</Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Items */}
              <div className="lg:col-span-2 space-y-6">
                {state.items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-5 bg-[#111111] p-4">
                    <Link href={`/product/${item.product.slug}`} className="relative w-24 h-32 shrink-0 overflow-hidden bg-[#1A1A1A]">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="96px" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link href={`/product/${item.product.slug}`} className="font-body font-semibold text-white hover:text-[#FF1F8E] transition-colors text-sm">
                            {item.product.name}
                          </Link>
                          <p className="text-[#9CA3AF] text-xs mt-1">Size: {item.size} · {item.color}</p>
                        </div>
                        <p className="font-display text-xl text-white shrink-0">£{(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-0 border border-[#2D2D2D]">
                          <button onClick={() => dispatch({ type: "UPDATE_QTY", productId: item.product.id, size: item.size, quantity: item.quantity - 1 })} className="px-3 py-2 text-[#9CA3AF] hover:text-white cursor-pointer text-sm">−</button>
                          <span className="px-3 text-white text-sm">{item.quantity}</span>
                          <button onClick={() => dispatch({ type: "UPDATE_QTY", productId: item.product.id, size: item.size, quantity: item.quantity + 1 })} className="px-3 py-2 text-[#9CA3AF] hover:text-white cursor-pointer text-sm">+</button>
                        </div>
                        <button onClick={() => dispatch({ type: "REMOVE", productId: item.product.id, size: item.size })} className="text-[#6B7280] hover:text-white transition-colors text-xs font-body cursor-pointer">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-[#111111] p-6 h-fit">
                <h2 className="font-display text-2xl text-white font-semibold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm font-body text-[#9CA3AF]">
                    <span>Subtotal ({itemCount} items)</span>
                    <span className="text-white">£{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body text-[#9CA3AF]">
                    <span>Shipping</span>
                    <span className="text-[#FF1F8E]">{total >= 60 ? "FREE" : "£4.99"}</span>
                  </div>
                </div>
                <div className="border-t border-[#2D2D2D] pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-body font-semibold text-white">Total</span>
                    <span className="font-display text-2xl text-white">£{(total + (total >= 60 ? 0 : 4.99)).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <input placeholder="Discount code" className="flex-1 text-xs" />
                  <button className="btn-outline px-4 py-3 text-xs shrink-0">Apply</button>
                </div>
                <Link href="/checkout" className="btn-primary w-full text-center block">Checkout</Link>
                <p className="text-[#6B7280] text-xs text-center mt-3 font-body">Secure checkout · Free returns</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
