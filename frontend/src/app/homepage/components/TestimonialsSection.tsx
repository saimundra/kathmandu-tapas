'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  date: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Food Critic, Washington Post',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12474730f-1763296027036.png",
    alt: 'Professional woman with shoulder-length brown hair wearing navy blazer, smiling at camera in office setting',
    rating: 5,
    text: 'Kathmandu Tapas is a revelation in DC\'s dining scene. The way they honor Nepalese traditions while creating something entirely new is nothing short of masterful. Every dish tells a story, and the cocktails are pure artistry.',
    date: 'December 2025'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Executive',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed9501a6-1763292467465.png",
    alt: 'Asian businessman in dark suit and tie with short black hair, professional headshot with neutral background',
    rating: 5,
    text: 'We\'ve hosted multiple client dinners here, and it never disappoints. The private dining room is perfect for business meetings, and the food always impresses. The cultural authenticity combined with sophisticated service makes it our go-to venue.',
    date: 'November 2025'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Nepalese Community Leader',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_172aaee42-1763294318389.png",
    alt: 'South Asian woman with long dark hair wearing traditional jewelry and warm smile, professional portrait',
    rating: 5,
    text: 'As someone from Nepal, I was skeptical at first, but Chef Rajesh has created something truly special. He respects our culinary heritage while making it accessible to everyone. It\'s become our community\'s gathering place for celebrations.',
    date: 'January 2026'
  },
  {
    id: 4,
    name: 'James Rodriguez',
    role: 'Anniversary Celebration',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f96e3774-1763296398369.png",
    alt: 'Hispanic man with short dark hair and beard wearing casual button-down shirt, friendly smile in outdoor setting',
    rating: 5,
    text: 'We celebrated our 10th anniversary here, and it was magical. The staff went above and beyond to make it special. The food was incredible, the ambiance was perfect, and the whole experience felt like a journey to another world.',
    date: 'October 2025'
  }];


  const handlePrevious = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-primary" />
            <span className="text-primary font-body text-sm font-medium tracking-wide">
              GUEST EXPERIENCES
            </span>
          </div>

          <h2 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            What Our Guests Say
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From food critics to families, hear why Kathmandu Tapas has become DC's beloved cultural dining destination
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <Icon
              name="ChatBubbleLeftIcon"
              size={64}
              className="text-primary/10 absolute top-8 left-8" />


            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover" />

                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) =>
                <Icon
                  key={index}
                  name="StarIcon"
                  size={20}
                  variant="solid"
                  className="text-primary" />

                )}
              </div>

              <p className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
                "{currentTestimonial.text}"
              </p>

              <p className="font-body text-sm text-muted-foreground">
                {currentTestimonial.date}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Previous testimonial">

                <Icon name="ChevronLeftIcon" size={24} />
              </button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) =>
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'}`
                  } />

                )}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Next testimonial">

                <Icon name="ChevronRightIcon" size={24} />
              </button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="StarIcon" size={32} variant="solid" className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-3xl text-foreground mb-2">4.9/5</h3>
              <p className="font-body text-muted-foreground">Average Rating</p>
            </div>

            <div className="text-center p-6 bg-background rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="UserGroupIcon" size={32} className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-3xl text-foreground mb-2">2,500+</h3>
              <p className="font-body text-muted-foreground">Happy Guests</p>
            </div>

            <div className="text-center p-6 bg-background rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="TrophyIcon" size={32} className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-3xl text-foreground mb-2">12+</h3>
              <p className="font-body text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;