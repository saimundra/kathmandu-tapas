import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import LocationMap from './components/LocationMap';
import ContactInfo from './components/ContactInfo';
import AccessibilityInfo from './components/AccessibilityInfo';
import TrustSignals from './components/TrustSignals';
import CareersSection from './components/CareersSection';
import SocialContact from './components/SocialContact';
import NeighborhoodIntegration from './components/NeighborhoodIntegration';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Location & Contact - Kathmandu Tapas DC',
  description: 'Visit Kathmandu Tapas in Georgetown, Washington DC. Find directions, parking, Metro access, contact information, and career opportunities at our Himalayan fusion restaurant.',
};

export default function LocationContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ContactHero />
        <LocationMap />
        <ContactInfo />
        <AccessibilityInfo />
        <TrustSignals />
        <CareersSection />
        <SocialContact />
        <NeighborhoodIntegration />
        <Footer />
      </div>
    </main>
  );
}