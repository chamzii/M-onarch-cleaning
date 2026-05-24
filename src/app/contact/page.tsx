"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h1 className="font-display font-bold text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>Contact Us</h1>
            <p className="font-body text-[#9CA3AF] text-sm mt-4">We reply within 24 hours, Monday–Friday.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Email", value: "hello@noire.com" },
              { label: "Hours", value: "Mon–Fri 9am–6pm" },
              { label: "Response", value: "Within 24 hours" },
            ].map((c) => (
              <div key={c.label} className="glass p-5 text-center">
                <p className="font-body text-xs font-bold tracking-widest uppercase text-[#FF1F8E] mb-1">{c.label}</p>
                <p className="font-body text-white text-sm">{c.value}</p>
              </div>
            ))}
          </div>

          {sent ? (
            <div className="text-center py-12 border border-[#FF1F8E]/30 bg-[#FF1F8E]/5">
              <p className="font-display text-3xl text-white mb-2">Message Sent</p>
              <p className="font-body text-[#9CA3AF] text-sm">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-5 bg-[#111111] p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">First Name</span>
                  <input placeholder="Jane" required />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Last Name</span>
                  <input placeholder="Doe" required />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Email Address</span>
                <input placeholder="hello@example.com" type="email" required />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Topic</span>
                <select>
                  <option>Order Query</option>
                  <option>Returns & Exchanges</option>
                  <option>Sizing Help</option>
                  <option>Press & Collaborations</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#9CA3AF]">Message</span>
                <textarea placeholder="How can we help?" rows={5} required />
              </label>
              <button type="submit" className="btn-primary w-full py-4">Send Message</button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
