import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FlashSaleBanner from "@/components/home/FlashSaleBanner";
import NewDrops from "@/components/home/NewDrops";
import BestSellers from "@/components/home/BestSellers";
import CollectionBanners from "@/components/home/CollectionBanners";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";
import NewsletterPopup from "@/components/layout/NewsletterPopup";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FlashSaleBanner />
        <NewDrops />
        <BestSellers />
        <CollectionBanners />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
      <NewsletterPopup />
    </>
  );
}
