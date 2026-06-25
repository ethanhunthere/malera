import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PortfolioLazy from "./components/PortfolioLazy";
import PricingLazy from "./components/PricingLazy";
import ContactLazy from "./components/ContactLazy";
import FooterLazy from "./components/FooterLazy";
import GlassDivider from "./components/GlassDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GlassDivider />
      <Services />
      <GlassDivider />
      <PortfolioLazy />
      <GlassDivider />
      <PricingLazy />
      <GlassDivider />
      <ContactLazy />
      <FooterLazy />
    </>
  );
}
