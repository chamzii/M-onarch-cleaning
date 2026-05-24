"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-md mx-auto px-6">
          <div className="text-center mb-10">
            <Link href="/" className="font-display text-4xl font-bold tracking-[0.3em] text-white">NOIRE</Link>
            <p className="font-body text-[#9CA3AF] text-sm mt-3">
              {mode === "login" ? "Welcome back" : "Join the inner circle"}
            </p>
          </div>

          <div className="flex mb-8 border border-[#2D2D2D]">
            {(["login", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-3 font-body font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer ${mode === m ? "bg-[#FF1F8E] text-white" : "text-[#9CA3AF] hover:text-white"}`}
              >
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && <input placeholder="Full Name" type="text" />}
            <input placeholder="Email Address" type="email" />
            <input placeholder="Password" type="password" />
            {mode === "signup" && <input placeholder="Confirm Password" type="password" />}
            {mode === "login" && (
              <div className="text-right">
                <a href="#" className="font-body text-xs text-[#9CA3AF] hover:text-[#FF1F8E] transition-colors">Forgot password?</a>
              </div>
            )}
            <button type="submit" className="btn-primary w-full py-4 mt-2">
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {mode === "signup" && (
            <p className="font-body text-[#6B7280] text-xs text-center mt-4 leading-relaxed">
              By creating an account you agree to our{" "}
              <a href="#" className="text-[#9CA3AF] hover:text-white">Terms</a> &{" "}
              <a href="#" className="text-[#9CA3AF] hover:text-white">Privacy Policy</a>
            </p>
          )}

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#2D2D2D]" /></div>
            <div className="relative text-center"><span className="bg-[#0A0A0A] px-4 text-[#6B7280] text-xs font-body">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((provider) => (
              <button key={provider} className="btn-outline py-3 text-xs">
                {provider}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
