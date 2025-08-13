import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import FloatingDots from "@/components/FloatingDots";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingDots />
      <Header />
      <Hero />
      <AnimatedFeatures />
      <Integrations />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
