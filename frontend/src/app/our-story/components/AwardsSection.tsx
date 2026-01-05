import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Award {
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface AwardsSectionProps {
  className?: string;
}

const AwardsSection = ({ className = '' }: AwardsSectionProps) => {
  const awards: Award[] = [
    {
      year: '2024',
      title: 'Best Fusion Restaurant',
      organization: 'DC Restaurant Association',
      description: 'Recognized for innovative Nepalese-American fusion cuisine and exceptional cultural dining experience'
    },
    {
      year: '2023',
      title: 'Chef of the Year',
      organization: 'Capital Food & Wine Magazine',
      description: 'Honored for culinary excellence and dedication to authentic Himalayan ingredient sourcing'
    },
    {
      year: '2022',
      title: 'Cultural Bridge Award',
      organization: 'Nepalese-American Community Association',
      description: 'Celebrated for creating meaningful connections between Nepalese heritage and DC dining scene'
    },
    {
      year: '2021',
      title: 'Rising Star Restaurant',
      organization: 'Washington Post Food Section',
      description: 'Featured as one of DC\'s most promising new dining destinations with authentic cultural storytelling'
    },
    {
      year: '2020',
      title: 'Best Cocktail Program',
      organization: 'DC Bartenders Guild',
      description: 'Awarded for innovative Himalayan-inspired cocktails and exceptional mixology craftsmanship'
    },
    {
      year: '2019',
      title: 'Community Impact Award',
      organization: 'DC Chamber of Commerce',
      description: 'Recognized for supporting local farmers and creating employment opportunities for diaspora community'
    }
  ];

  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Honored by culinary institutions, cultural organizations, and the DC community for excellence and authenticity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="TrophyIcon" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-body font-semibold text-primary mb-1">
                    {award.year}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                    {award.title}
                  </h3>
                </div>
              </div>
              <p className="font-body text-sm font-medium text-muted-foreground mb-3">
                {award.organization}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;