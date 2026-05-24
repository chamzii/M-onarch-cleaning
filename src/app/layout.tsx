import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "NOIRE — Dark. Feminine. Fearless.",
  description: "Premium women's fashion. Clubwear, dresses, matching sets, corsets & statement pieces. Shop the new collection.",
  keywords: "women's fashion, clubwear, bodycon dresses, matching sets, corsets, night out fashion, NOIRE",
  openGraph: {
    title: "NOIRE — Dark. Feminine. Fearless.",
    description: "Premium women's fashion. Luxury clubwear & dresses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
