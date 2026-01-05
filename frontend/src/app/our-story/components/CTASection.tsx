import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-primary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience Our Story Through Flavor
          </h2>
          <p className="font-body text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join us for a culinary journey from the Himalayas to DC. Reserve your table today and become part of our continuing story of cultural fusion and culinary excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/reservation-system"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Icon name="CalendarIcon" size={24} />
              Reserve Your Table
            </Link>

            <Link
              href="/menu-experience"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:bg-primary-foreground/20"
            >
              <Icon name="DocumentTextIcon" size={24} />
              Explore Our Menu
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon name="ClockIcon" size={32} className="text-primary-foreground mx-auto mb-3" />
                <div className="font-headline text-2xl font-bold text-primary-foreground mb-1">
                  6+ Years
                </div>
                <div className="font-body text-sm text-primary-foreground/80">
                  Serving DC Community
                </div>
              </div>

              <div className="text-center">
                <Icon name="UserGroupIcon" size={32} className="text-primary-foreground mx-auto mb-3" />
                <div className="font-headline text-2xl font-bold text-primary-foreground mb-1">
                  50,000+
                </div>
                <div className="font-body text-sm text-primary-foreground/80">
                  Guests Welcomed
                </div>
              </div>

              <div className="text-center">
                <Icon name="TrophyIcon" size={32} className="text-primary-foreground mx-auto mb-3" />
                <div className="font-headline text-2xl font-bold text-primary-foreground mb-1">
                  15+ Awards
                </div>
                <div className="font-body text-sm text-primary-foreground/80">
                  Culinary Recognition
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;