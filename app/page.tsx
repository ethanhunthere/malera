import PageLoader from "@/app/components/PageLoader";
import { LineNumbers } from "@/app/components/anim/LineNumbers";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Team from "@/app/components/Team";
import Pricing from "@/app/components/Pricing";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <PageLoader>
      <LineNumbers />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </PageLoader>
  );
}

