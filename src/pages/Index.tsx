import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemsSolved from "@/components/landing/ProblemsSolved";
import Benefits from "@/components/landing/Benefits";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Guarantee from "@/components/landing/Guarantee";
import CTA from "@/components/landing/CTA";
import UniqueAdvantages from "@/components/landing/UniqueAdvantages";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemsSolved />
        <Benefits />
        <Pricing />
        <FAQ />
        <Guarantee />
        <CTA />
        <UniqueAdvantages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
