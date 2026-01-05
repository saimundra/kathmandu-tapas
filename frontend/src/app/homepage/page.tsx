import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CulturalStorySection from './components/CulturalStorySection';
import FeaturedMenuSection from './components/FeaturedMenuSection';
import ExperienceGallerySection from './components/ExperienceGallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ReservationCTASection from './components/ReservationCTASection';
import NewsletterSection from './components/NewsletterSection';
import FooterSection from './components/FooterSection';

export const metadata: Metadata = {
  title: 'Kathmandu Tapas & Cocktails - Authentic Nepalese-American Fusion in DC',
  description: 'Experience where Himalayan soul meets DC sophistication. Premium Nepalese-American fusion restaurant featuring tapas-style dining, craft cocktails, and cultural storytelling in Washington DC.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CulturalStorySection />
      <FeaturedMenuSection />
      <ExperienceGallerySection />
      <TestimonialsSection />
      <ReservationCTASection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}