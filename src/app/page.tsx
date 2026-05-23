import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Services from "@/components/sections/Services";
import DetailClean from "@/components/sections/DetailClean";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ServicesIntro />
        <Services />
        <DetailClean />
        <Process />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
