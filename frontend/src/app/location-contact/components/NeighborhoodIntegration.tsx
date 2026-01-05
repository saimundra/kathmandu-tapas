import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partnership {
  name: string;
  type: string;
  description: string;
  image: string;
  alt: string;
}

interface NeighborhoodIntegrationProps {
  className?: string;
}

const NeighborhoodIntegration = ({ className = '' }: NeighborhoodIntegrationProps) => {
  const partnerships: Partnership[] = [
  {
    name: 'Georgetown BID',
    type: 'Business Association',
    description: 'Active member supporting local business initiatives and community events',
    image: "https://images.unsplash.com/photo-1693992702378-011aedeb8f10",
    alt: 'Modern Georgetown business district with historic brick buildings and tree-lined streets'
  },
  {
    name: 'DC Food Policy Council',
    type: 'Culinary Partnership',
    description: 'Collaborating on sustainable food practices and cultural cuisine education',
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c",
    alt: 'Fresh organic vegetables and herbs displayed at farmers market with vibrant colors'
  },
  {
    name: 'Nepalese Community Center',
    type: 'Cultural Organization',
    description: 'Supporting cultural events and providing authentic Himalayan experiences',
    image: "https://images.unsplash.com/photo-1562944761-e3150b7ef640",
    alt: 'Traditional Nepalese prayer flags in red, blue, yellow, green and white colors against mountain backdrop'
  }];


  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Icon name="BuildingOffice2Icon" size={32} className="text-accent" />
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Community Partnerships
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to be an active member of the Georgetown community and Washington DC's cultural landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partnerships.map((partnership, index) =>
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative w-full h-48 overflow-hidden">
                  <AppImage
                  src={partnership.image}
                  alt={partnership.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-body text-xs font-medium mb-3">
                    {partnership.type}
                  </div>
                  <h3 className="font-headline font-semibold text-xl text-foreground mb-3">
                    {partnership.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {partnership.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-headline font-semibold text-2xl text-foreground mb-4">
                  Charity & Community Events
                </h3>
                <p className="font-body text-base text-muted-foreground mb-6">
                  We regularly host fundraising events and donate a portion of proceeds to local charities. Our private dining space is available for non-profit organizations at special rates.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Monthly charity dinner series</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Cultural celebration hosting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">Local food bank partnerships</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <a
                  href="mailto:events@kathmandudc.com"
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">

                  <Icon name="HeartIcon" size={20} />
                  <span>Partner With Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default NeighborhoodIntegration;