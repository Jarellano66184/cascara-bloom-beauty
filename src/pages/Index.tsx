import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import CascaraBenefits from "@/components/CascaraBenefits";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <CascaraBenefits />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
