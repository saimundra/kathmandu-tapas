import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Icon name="MapPinIcon" size={40} className="text-primary" />
          </div>
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Visit Us in the Heart of DC
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the fusion of Himalayan tradition and Washington sophistication at our Georgetown location. We're easily accessible by Metro, with ample parking options nearby.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;