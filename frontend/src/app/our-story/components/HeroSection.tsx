import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative h-[70vh] min-h-[500px] overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1727946265721-c224a52ec71c"
          alt="Panoramic view of snow-capped Himalayan mountain peaks at sunrise with golden light illuminating the ridges"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            A Journey from the Himalayas to DC
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where ancient traditions meet modern sophistication, creating a cultural bridge through culinary artistry
          </p>
        </div>
      </div>
    </section>);

};

export default HeroSection;