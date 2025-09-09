import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useBrand } from '@/contexts/BrandContext';
import { getBrandConfig } from '@/config/brandConfig';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import FloatingDots from "@/components/FloatingDots";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const BrandedIndex: React.FC = () => {
  const { brand } = useBrand();
  const config = getBrandConfig(brand);

  return (
    <>
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <meta name="keywords" content={config.seo.keywords.join(', ')} />
        <meta property="og:title" content={config.seo.title} />
        <meta property="og:description" content={config.seo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.seo.title} />
        <meta name="twitter:description" content={config.seo.description} />
      </Helmet>
      
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
    </>
  );
};

export default BrandedIndex;