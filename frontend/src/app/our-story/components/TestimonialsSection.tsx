'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
  alt: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    name: 'Suman Gurung',
    role: 'President',
    organization: 'Nepalese-American Community Association',
    quote: 'Kathmandu Tapas has become more than just a restaurant—it\'s a cultural home for our community. Chef Rajesh honors our traditions while creating something entirely new and exciting. Every visit feels like a celebration of our heritage.',
    image: "https://images.unsplash.com/photo-1697886224032-93d3085f46f7",
    alt: 'Middle-aged Nepalese man in traditional daura suruwal smiling warmly at camera'
  },
  {
    name: 'Emily Richardson',
    role: 'Food Critic',
    organization: 'Washington Post',
    quote: 'In a city filled with international cuisine, Kathmandu Tapas stands out for its authentic storytelling and culinary excellence. This isn\'t fusion for fusion\'s sake—it\'s a thoughtful bridge between cultures that respects both traditions.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e71e268-1763298836552.png",
    alt: 'Professional woman with blonde hair in elegant black blazer smiling confidently'
  },
  {
    name: 'Ambassador Kiran Shrestha',
    role: 'Cultural Attaché',
    organization: 'Embassy of Nepal',
    quote: 'We regularly host diplomatic dinners at Kathmandu Tapas because Chef Rajesh understands the importance of cultural representation. The food is impeccable, and the atmosphere perfectly balances tradition with sophistication.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd75a392-1767066099579.png",
    alt: 'Distinguished South Asian diplomat in formal suit with diplomatic pin'
  },
  {
    name: 'Marcus Thompson',
    role: 'Executive Chef',
    organization: 'DC Culinary Institute',
    quote: 'What Chef Rajesh has created is remarkable—a restaurant that educates while it entertains. His commitment to ingredient integrity and cultural authenticity sets a new standard for fusion cuisine in our city.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_169e77c15-1763300560095.png",
    alt: 'African American chef in professional whites with confident expression'
  }];


  const handlePrevious = () => {
    setActiveIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Voices from Our Community
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from cultural leaders, food critics, and community members about their experiences at Kathmandu Tapas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <AppImage
                  src={activeTestimonial.image}
                  alt={activeTestimonial.alt}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card to-transparent" />
              </div>

              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary mb-6" />
                <blockquote className="font-body text-lg text-foreground leading-relaxed mb-6">
                  "{activeTestimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-headline text-xl font-bold text-foreground">
                    {activeTestimonial.name}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {activeTestimonial.role}, {activeTestimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-card shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeftIcon" size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-primary w-8' : 'bg-muted'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-card shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Next testimonial">

              <Icon name="ChevronRightIcon" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;