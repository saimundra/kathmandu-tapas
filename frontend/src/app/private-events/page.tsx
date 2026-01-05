import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EventHero from './components/EventHero';
import EventSpaces from './components/EventSpaces';
import EventTypes from './components/EventTypes';
import EventPackages from './components/EventPackages';
import VirtualTour from './components/VirtualTour';
import EventServices from './components/EventServices';
import EventTestimonials from './components/EventTestimonials';
import EventInquiryForm from './components/EventInquiryForm';
import EventFAQ from './components/EventFAQ';
import EventCTA from './components/EventCTA';

export const metadata: Metadata = {
  title: 'Private Events & Cultural Celebrations - Kathmandu Tapas DC',
  description: 'Transform your corporate gatherings and special occasions into unforgettable cultural experiences. From intimate celebrations to grand corporate events, our sophisticated spaces blend Himalayan authenticity with Washington DC elegance.',
};

export default function PrivateEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <EventHero />
        <EventSpaces />
        <EventTypes />
        <EventPackages />
        <VirtualTour />
        <EventServices />
        <EventTestimonials />
        <EventInquiryForm />
        <EventFAQ />
        <EventCTA />
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-body text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Kathmandu Tapas & Cocktails. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground mt-2">
              Where Himalayan Soul Meets DC Sophistication
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}