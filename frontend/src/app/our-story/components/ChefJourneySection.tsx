import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface JourneyMilestone {
  year: string;
  location: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface ChefJourneySectionProps {
  className?: string;
}

const ChefJourneySection = ({ className = '' }: ChefJourneySectionProps) => {
  const milestones: JourneyMilestone[] = [
  {
    year: '1995',
    location: 'Kathmandu, Nepal',
    title: 'The Beginning',
    description: 'Born into a family of traditional Nepalese cooks, Chef Rajesh Thapa learned the sacred art of spice blending and traditional cooking methods from his grandmother in the heart of Kathmandu.',
    image: "https://images.unsplash.com/photo-1587045126222-e7720f9d38b4",
    alt: 'Traditional Nepalese kitchen with copper pots hanging on stone walls and spices in wooden bowls'
  },
  {
    year: '2008',
    location: 'Culinary Institute, Mumbai',
    title: 'Formal Training',
    description: 'Pursued professional culinary education, mastering classical techniques while maintaining deep respect for Himalayan culinary traditions and ingredient integrity.',
    image: "https://images.unsplash.com/photo-1722875971151-3978381026d1",
    alt: 'Professional chef in white uniform carefully plating gourmet dish in modern kitchen'
  },
  {
    year: '2012',
    location: 'New York City',
    title: 'American Fusion',
    description: 'Worked at renowned fusion restaurants in Manhattan, learning to bridge Eastern authenticity with Western palates, creating innovative dishes that honor both traditions.',
    image: "https://images.unsplash.com/photo-1719978405783-3880ce9fe05b",
    alt: 'Busy restaurant kitchen with chefs working at multiple stations under bright lights'
  },
  {
    year: '2018',
    location: 'Washington DC',
    title: 'Kathmandu Tapas Opens',
    description: 'Established Kathmandu Tapas & Cocktails in the heart of DC, creating a cultural sanctuary that brings Himalayan soul to the nation\'s capital through elevated dining experiences.',
    image: "https://images.unsplash.com/photo-1669795551418-8983553fc5b2",
    alt: 'Elegant restaurant interior with warm lighting, wooden tables, and sophisticated decor'
  }];


  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chef Rajesh Thapa's Journey
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A culinary odyssey spanning continents, cultures, and decades of dedication to authentic fusion cuisine
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden lg:block" />

          <div className="space-y-16">
            {milestones.map((milestone, index) =>
            <div
              key={milestone.year}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
              }>

                <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className="inline-block bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-headline font-bold text-lg">
                        {milestone.year}
                      </div>
                      <Icon name="MapPinIcon" size={20} className="text-primary" />
                      <span className="font-body text-sm text-muted-foreground">{milestone.location}</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="SparklesIcon" size={32} className="text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <AppImage
                    src={milestone.image}
                    alt={milestone.alt}
                    className="w-full h-full object-cover" />

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default ChefJourneySection;