import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ModelsShowcase } from '@/components/landing/ModelsShowcase';
import { ProductPreview } from '@/components/landing/ProductPreview';
import { WhyEchoGPT } from '@/components/landing/WhyEchoGPT';
import { PricingSection } from '@/components/landing/PricingSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CTABanner } from '@/components/landing/CTABanner';

export const metadata = {
  title: 'EchoGPT — Unified Multi-AI Ecosystem (Web App & Chrome Extension)',
  description: 'Redesigned EchoGPT platform. Access GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and DeepSeek R1 in one high-performance workspace and Chrome extension.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ModelsShowcase />
        <ProductPreview />
        <WhyEchoGPT />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
