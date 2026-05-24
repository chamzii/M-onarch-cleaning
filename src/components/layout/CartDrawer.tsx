"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { state, dispatch, total, itemCount } = useCart();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            onClick={() => dispatch({ type: "CLOSE" })}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#111111] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#2D2D2D]">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-wide">Your Cart</h2>
                <p className="text-[#9CA3AF] text-xs font-body mt-0.5">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
              </div>
              <button
                onClick={() => dispatch({ type: "CLOSE" })}
                className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="font-display text-2xl text-[#9CA3AF] mb-2">Your cart is empty</p>
                  <p className="text-[#6B7280] text-sm mb-6">Add something gorgeous.</p>
                  <button
                    onClick={() => dispatch({ type: "CLOSE" })}
                    className="btn-primary"
                  >
                    Shop Now
                  </button>
                </div>
              ) : (
                state.items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                    <div className="relative w-20 h-28 shrink-0 overflow-hidden bg-[#1A1A1A]">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-semibold text-sm text-white leading-snug">{item.product.name}</p>
                      <p className="text-[#9CA3AF] text-xs mt-1">Size: {item.size}</p>
                      <p className="text-[#FF1F8E] font-semibold text-sm mt-1">£{item.product.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-2 border border-[#2D2D2D]">
                          <button
                            onClick={() => dispatch({ type: "UPDATE_QTY", productId: item.product.id, size: item.size, quantity: item.quantity - 1 })}
                            className="px-2 py-1 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer text-sm"
                          >-</button>
                          <span className="text-white text-sm px-1">{item.quantity}</span>
                          <button
                            onClick={() => dispatch({ type: "UPDATE_QTY", productId: item.product.id, size: item.size, quantity: item.quantity + 1 })}
                            className="px-2 py-1 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer text-sm"
                          >+</button>
                        </div>
                        <button
                          onClick={() => dispatch({ type: "REMOVE", productId: item.product.id, size: item.size })}
                          className="text-[#6B7280] hover:text-white transition-colors cursor-pointer text-xs"
                        >Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#2D2D2D]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#9CA3AF] text-sm">Subtotal</span>
                  <span className="font-display text-2xl">£{total.toFixed(2)}</span>
                </div>
                <p className="text-[#6B7280] text-xs mb-4">Shipping & taxes calculated at checkout</p>
                <Link
                  href="/checkout"
                  onClick={() => dispatch({ type: "CLOSE" })}
                  className="btn-primary w-full text-center block"
                >
                  Checkout — £{total.toFixed(2)}
                </Link>
                <Link
                  href="/cart"
                  onClick={() => dispatch({ type: "CLOSE" })}
                  className="btn-outline w-full text-center block mt-3"
                >
                  View Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
