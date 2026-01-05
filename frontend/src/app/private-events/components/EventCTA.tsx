import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface EventCTAProps {
  className?: string;
}

const EventCTA = ({ className = '' }: EventCTAProps) => {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <AppImage
              src="https://images.unsplash.com/photo-1660511057210-f7fba78d2741"
              alt="Elegant event setup with beautifully arranged tables, ambient lighting, and cultural decorative elements creating sophisticated atmosphere"
              className="w-full h-full object-cover opacity-20" />

          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Ready to Create an Unforgettable Event?
              </h2>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Let us transform your vision into reality. From intimate celebrations to grand corporate gatherings, our team brings Himalayan authenticity and DC sophistication to every event.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2">

                  <span>Request Proposal</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </a>
                
                <a
                  href="tel:+12025550123"
                  className="w-full sm:w-auto px-8 py-4 bg-card text-foreground border-2 border-border rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:bg-muted flex items-center justify-center gap-2">

                  <Icon name="PhoneIcon" size={20} />
                  <span>(202) 555-TAPAS</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="UserGroupIcon" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                    500+ Events
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Successfully hosted since opening
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="StarIcon" variant="solid" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                    4.9/5 Rating
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    From corporate and private clients
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="ClockIcon" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                    24-Hour Response
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Guaranteed proposal turnaround
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default EventCTA;