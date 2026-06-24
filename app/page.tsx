import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlassDivider from "./components/GlassDivider";

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
