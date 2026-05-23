import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Monarch Cleaning — Kontorsstädning Norrtälje & Herräng",
  description: "Premium kontorsstädning i Norrtälje, Herräng, Hallstavik och Rimbo. Pålitlig, miljövänlig och professionell. | Professional office cleaning services in Norrtälje and Herräng, Sweden.",
  keywords: "kontorsstädning Norrtälje, städfirma Herräng, office cleaning Hallstavik, commercial cleaning Rimbo, kontorsstädning Sverige",
  openGraph: {
    title: "Monarch Cleaning — Premium Office Cleaning",
    description: "Professional office cleaning from Herräng to Norrtälje. Reliable, eco-friendly, and premium quality.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
