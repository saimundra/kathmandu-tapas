'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1728809215393-abe444129bef",
    alt: 'Elegant restaurant interior with warm ambient lighting, wooden tables set with white linens, and traditional Nepalese decorative elements on exposed brick walls',
    title: 'Where Himalayan Soul Meets DC Sophistication',
    subtitle: 'Experience authentic Nepalese-American fusion in the heart of Washington DC'
  },
  {
    image: "https://images.unsplash.com/photo-1633244092199-44d7da003ae6",
    alt: 'Artfully plated Nepalese tapas dish with colorful vegetables, herbs, and traditional spices arranged on dark slate plate',
    title: 'Culinary Journey from Kathmandu to Capitol Hill',
    subtitle: 'Tapas-style dining that honors tradition while embracing innovation'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15c8da0d1-1767594458708.png",
    alt: 'Sophisticated cocktail bar with backlit shelves displaying premium spirits, brass fixtures, and bartender crafting Himalayan-inspired cocktails',
    title: 'Craft Cocktails Inspired by the Himalayas',
    subtitle: 'Signature drinks that blend ancient botanicals with modern mixology'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, heroSlides.length]);

  const handleSlideChange = (index: number) => {
    if (!isHydrated) return;
    setCurrentSlide(index);
  };

  return (
    <section className={`relative h-screen min-h-[600px] overflow-hidden ${className}`}>
      {heroSlides.map((slide, index) =>
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
        currentSlide === index ? 'opacity-100' : 'opacity-0'}`
        }>

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <AppImage
          src={slide.image}
          alt={slide.alt}
          className="w-full h-full object-cover"
          priority={index === 0} />

        </div>
      )}

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              <span className="text-primary-foreground font-body text-sm tracking-wide">
                Authentic Nepalese-American Fusion
              </span>
            </div>

            <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="font-body text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/reservation-system"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 flex items-center space-x-2">

                <span>Reserve Your Table</span>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

              <Link
                href="/menu-experience"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50">

                Explore Menu
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-3">
              {heroSlides.map((_, index) =>
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ?
                'w-12 bg-primary' : 'w-2 bg-white/40 hover:bg-white/60'}`
                }
                aria-label={`Go to slide ${index + 1}`} />

              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white/60" />
      </div>
    </section>);

};

export default HeroSection;