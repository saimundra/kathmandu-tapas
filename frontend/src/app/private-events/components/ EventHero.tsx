import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface EventHeroProps {
  className?: string;
}

const EventHero = ({ className = '' }: EventHeroProps) => {
  return (
    <section className={`relative h-[70vh] min-h-[500px] overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1533040054502-d9654e8251ac"
          alt="Elegant private dining room with long wooden table set for formal dinner, ambient lighting with traditional Nepalese decorative elements on walls"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Private Events & Cultural Celebrations
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your corporate gatherings and special occasions into unforgettable cultural experiences. From intimate celebrations to grand corporate events, our sophisticated spaces blend Himalayan authenticity with Washington DC elegance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#inquiry-form"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">

              Request Proposal
            </a>
            <a
              href="#virtual-tour"
              className="px-8 py-4 bg-card text-foreground border-2 border-border rounded-md font-headline font-semibold text-base transition-all duration-300 hover:bg-muted">

              Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default EventHero;