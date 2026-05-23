import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Coverage from "@/components/sections/Coverage";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
