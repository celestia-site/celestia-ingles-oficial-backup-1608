import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
