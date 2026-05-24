"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { state, total } = useCart();
  const [step, setStep] = useState<"info" | "shipping" | "payment">("info");

  const shipping = total >= 60 ? 0 : 4.99;
  const orderTotal = total + shipping;

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen py-12">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <Link href="/" className="font-display text-3xl font-bold tracking-[0.3em] text-white neon-text">NOIRE</Link>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {(["info", "shipping", "payment"] as const).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 ${step === s ? "text-white" : "text-[#6B7280]"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-body font-bold ${step === s ? "bg-[#FF1F8E] text-white" : "bg-[#2D2D2D]"}`}>{i + 1}</span>
                  <span className="font-body text-xs font-semibold tracking-widest uppercase capitalize hidden sm:block">{s}</span>
                </div>
                {i < 2 && <div className="w-8 h-px bg-[#2D2D2D]" />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); if (step === "info") setStep("shipping"); else if (step === "shipping") setStep("payment"); }}>
                {step === "info" && (
                  <>
                    <h2 className="font-display text-2xl text-white font-semibold mb-2">Contact</h2>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Email Address</span>
                      <input placeholder="hello@example.com" type="email" />
                    </label>
                    <h2 className="font-display text-2xl text-white font-semibold mt-4 mb-2">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">First Name</span>
                        <input placeholder="Jane" />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Last Name</span>
                        <input placeholder="Doe" />
                      </label>
                    </div>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Address</span>
                      <input placeholder="123 Example Street" />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Apartment, suite, etc. (optional)</span>
                      <input placeholder="Flat 2" />
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">City</span>
                        <input placeholder="London" />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Postcode</span>
                        <input placeholder="SW1A 1AA" />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Country</span>
                        <input placeholder="UK" defaultValue="UK" />
                      </label>
                    </div>
                  </>
                )}
                {step === "shipping" && (
                  <>
                    <h2 className="font-display text-2xl text-white font-semibold mb-4">Shipping Method</h2>
                    {[["Standard Delivery (3–5 days)", total >= 60 ? "FREE" : "£4.99"], ["Express Delivery (Next Day)", "£8.99"], ["Same Day (London Only)", "£14.99"]].map(([label, price]) => (
                      <label key={label} className="flex items-center justify-between p-4 bg-[#111111] border border-[#2D2D2D] cursor-pointer hover:border-[#FF1F8E] transition-colors">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="shipping" defaultChecked={label.includes("Standard")} className="accent-[#FF1F8E]" />
                          <span className="font-body text-sm text-white">{label}</span>
                        </div>
                        <span className="font-body font-semibold text-sm text-[#FF1F8E]">{price}</span>
                      </label>
                    ))}
                  </>
                )}
                {step === "payment" && (
                  <>
                    <h2 className="font-display text-2xl text-white font-semibold mb-4">Payment</h2>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Card Number</span>
                      <input placeholder="1234 5678 9012 3456" />
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Expiry</span>
                        <input placeholder="MM / YY" />
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">CVV</span>
                        <input placeholder="•••" />
                      </label>
                    </div>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Name on Card</span>
                      <input placeholder="Jane Doe" />
                    </label>
                  </>
                )}
                <button type="submit" className="btn-primary w-full py-4 mt-2">
                  {step === "payment" ? `Pay £${orderTotal.toFixed(2)}` : "Continue"}
                </button>
              </form>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-2">
              <div className="bg-[#111111] p-6">
                <h3 className="font-display text-xl text-white font-semibold mb-5">Order Summary</h3>
                <div className="space-y-4 mb-5">
                  {state.items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                      <div className="relative w-14 h-18 shrink-0 bg-[#1A1A1A]" style={{ height: "72px" }}>
                        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="56px" />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#9CA3AF] rounded-full text-[10px] font-bold flex items-center justify-center text-[#0A0A0A]">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-between gap-2">
                        <div>
                          <p className="font-body text-sm text-white leading-snug">{item.product.name}</p>
                          <p className="text-[#9CA3AF] text-xs mt-0.5">{item.size}</p>
                        </div>
                        <p className="font-body font-semibold text-white text-sm shrink-0">£{(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#2D2D2D] pt-4 space-y-2">
                  <div className="flex justify-between text-sm font-body text-[#9CA3AF]">
                    <span>Subtotal</span><span className="text-white">£{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body text-[#9CA3AF]">
                    <span>Shipping</span><span className="text-[#FF1F8E]">{shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t border-[#2D2D2D]">
                    <span className="font-body text-white">Total</span>
                    <span className="font-display text-xl text-white">£{orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
