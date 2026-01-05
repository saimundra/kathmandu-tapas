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

interface CommunitySectionProps {
  className?: string;
}

const CommunitySection = ({ className = '' }: CommunitySectionProps) => {
  const partnerships: Partnership[] = [
  {
    name: 'DC Farmers Market Collective',
    type: 'Local Sourcing Partner',
    description: 'Weekly collaboration with local farmers to source fresh, seasonal ingredients that complement our Himalayan spices and traditional recipes.',
    image: "https://images.unsplash.com/photo-1600255995404-3a57ba1f4e76",
    alt: 'Colorful outdoor farmers market with fresh vegetables and fruits displayed in wooden crates'
  },
  {
    name: 'Nepalese Cultural Center',
    type: 'Cultural Organization',
    description: 'Hosting monthly cultural events, cooking demonstrations, and traditional festival celebrations that connect the diaspora community.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_151ba9a64-1767119429385.png",
    alt: 'Group of people in traditional Nepalese clothing celebrating cultural festival with colorful decorations'
  },
  {
    name: 'DC Food Bank Alliance',
    type: 'Charity Partner',
    description: 'Monthly donation of meals and hosting fundraising dinners to support food security initiatives across Washington DC neighborhoods.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ace9546b-1765571512028.png",
    alt: 'Volunteers organizing food donations in cardboard boxes at community food bank'
  },
  {
    name: 'Georgetown Business Association',
    type: 'Neighborhood Partner',
    description: 'Active member supporting local business initiatives, neighborhood events, and collaborative marketing efforts in the Georgetown district.',
    image: "https://images.unsplash.com/photo-1511744763439-bc9a282de70b",
    alt: 'Historic Georgetown street with brick buildings and local businesses'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community & Partnerships
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Building meaningful connections with local organizations, cultural institutions, and community partners to create positive impact beyond our dining room
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((partner, index) =>
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={partner.image}
                alt={partner.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
                  <span className="font-body text-sm font-medium text-primary">
                    {partner.type}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                  {partner.name}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <Icon name="HandRaisedIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
            Join Our Community
          </h3>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for new partnerships and community collaborations. If you share our values of cultural respect, culinary excellence, and community impact, we'd love to connect.
          </p>
          <a
            href="mailto:partnerships@kathmandutapas.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">

            <Icon name="EnvelopeIcon" size={20} />
            Contact Us About Partnerships
          </a>
        </div>
      </div>
    </section>);

};

export default CommunitySection;