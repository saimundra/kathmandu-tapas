'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TourStop {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
}

interface VirtualTourProps {
  className?: string;
}

const VirtualTour = ({ className = '' }: VirtualTourProps) => {
  const [activeStop, setActiveStop] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const tourStops: TourStop[] = [
  {
    id: 1,
    name: "Main Entrance & Reception",
    image: "https://images.unsplash.com/photo-1727723303958-4925ad8e3e0c",
    alt: "Elegant restaurant entrance with traditional Nepalese wooden doors, warm lighting, and welcoming reception area",
    description: "Your guests are greeted by our culturally-inspired entrance featuring traditional Nepalese architectural elements and warm hospitality."
  },
  {
    id: 2,
    name: "Himalayan Hall Setup",
    image: "https://images.unsplash.com/photo-1658786839292-1b9ca7bf4a53",
    alt: "Large event hall with round tables elegantly set for formal dinner, ambient lighting, and mountain-themed wall art",
    description: "Our flagship event space configured for a corporate dinner, showcasing flexible seating arrangements and sophisticated ambiance."
  },
  {
    id: 3,
    name: "Kathmandu Lounge",
    image: "https://images.unsplash.com/photo-1724650117200-8543a2d57301",
    alt: "Intimate lounge with comfortable seating, bar area, and colorful prayer flags creating cozy atmosphere",
    description: "Semi-private lounge perfect for cocktail receptions, featuring our signature bar and cultural decor elements."
  },
  {
    id: 4,
    name: "Chef's Table Experience",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f848c7e3-1764868002382.png",
    alt: "Exclusive chef's table with view into professional kitchen, intimate seating arrangement with elegant table settings",
    description: "Intimate culinary theater where guests witness the artistry of Himalayan-DC fusion cuisine preparation."
  },
  {
    id: 5,
    name: "Terrace Garden",
    image: "https://images.unsplash.com/photo-1707333514156-d42751dca70d",
    alt: "Beautiful outdoor terrace with string lights, greenery, and elegant table settings for outdoor dining",
    description: "Seasonal outdoor venue offering al fresco dining under the stars with lush greenery and ambient lighting."
  },
  {
    id: 6,
    name: "Cultural Display Area",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1746e18ee-1767594457962.png",
    alt: "Display area featuring traditional Nepalese artifacts, prayer wheels, and cultural artwork on walls",
    description: "Authentic cultural elements throughout the venue create an immersive Himalayan experience for your guests."
  }];


  const handlePrevious = () => {
    if (!isHydrated) return;
    setActiveStop((prev) => prev === 0 ? tourStops.length - 1 : prev - 1);
  };

  const handleNext = () => {
    if (!isHydrated) return;
    setActiveStop((prev) => prev === tourStops.length - 1 ? 0 : prev + 1);
  };

  const handleStopClick = (index: number) => {
    if (!isHydrated) return;
    setActiveStop(index);
  };

  if (!isHydrated) {
    return (
      <section id="virtual-tour" className={`py-20 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Virtual Venue Tour
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading tour...
            </p>
          </div>
        </div>
      </section>);

  }

  return (
    <section id="virtual-tour" className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Virtual Venue Tour
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our event spaces from the comfort of your office
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-background rounded-lg overflow-hidden shadow-xl">
            <div className="relative h-[500px] md:h-[600px]">
              <AppImage
                src={tourStops[activeStop].image}
                alt={tourStops[activeStop].alt}
                className="w-full h-full object-cover" />

              
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200 shadow-lg"
                aria-label="Previous image">

                <Icon name="ChevronLeftIcon" size={24} className="text-foreground" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200 shadow-lg"
                aria-label="Next image">

                <Icon name="ChevronRightIcon" size={24} className="text-foreground" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                  {tourStops[activeStop].name}
                </h3>
                <p className="font-body text-muted-foreground">
                  {tourStops[activeStop].description}
                </p>
              </div>
            </div>

            <div className="p-6 bg-background">
              <div className="flex flex-wrap gap-3 justify-center">
                {tourStops.map((stop, index) =>
                <button
                  key={stop.id}
                  onClick={() => handleStopClick(index)}
                  className={`px-4 py-2 rounded-md font-body text-sm font-medium transition-all duration-200 ${
                  activeStop === index ?
                  'bg-primary text-primary-foreground' :
                  'bg-muted text-foreground hover:bg-muted/80'}`
                  }>

                    {stop.name}
                  </button>
                )}
              </div>

              <div className="mt-6 text-center">
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Want to see more? Schedule an in-person tour or video walkthrough with our event coordinator.
                </p>
                <a
                  href="#inquiry-form"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">

                  Schedule Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VirtualTour;