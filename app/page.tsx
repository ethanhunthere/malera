import Navbar from "@/src/features/layout/components/Navbar";
import Hero from "@/src/features/home/components/Hero";
import Services from "@/src/features/home/components/Services";
import Footer from "@/src/features/layout/components/Footer";
import GlassDivider from "@/src/features/layout/components/GlassDivider";
import { Portfolio, Pricing, Contact } from "@/src/features/home/dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GlassDivider />
      <Services />
      <GlassDivider />
      <Portfolio />
      <GlassDivider />
      <Pricing />
      <GlassDivider />
      <Contact />
      <Footer />
    </>
  );
}
