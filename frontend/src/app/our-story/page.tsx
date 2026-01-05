import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ChefJourneySection from './components/ChefJourneySection';
import PhilosophySection from './components/PhilosophySection';
import AwardsSection from './components/AwardsSection';
import CommunitySection from './components/CommunitySection';
import IngredientSourcingSection from './components/IngredientSourcingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Our Story - Kathmandu Tapas DC',
  description: 'Discover the journey of Chef Rajesh Thapa from the Himalayas to Washington DC, creating authentic Nepalese-American fusion cuisine that bridges cultures through culinary excellence and cultural respect.',
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        <HeroSection />
        <ChefJourneySection />
        <PhilosophySection />
        <AwardsSection />
        <CommunitySection />
        <IngredientSourcingSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}