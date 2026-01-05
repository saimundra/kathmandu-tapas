import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PhilosophyPillar {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection = ({ className = '' }: PhilosophySectionProps) => {
  const pillars: PhilosophyPillar[] = [
    {
      icon: 'HeartIcon',
      title: 'Cultural Respect',
      description: 'Every dish honors the sacred traditions of Himalayan cooking while embracing modern culinary innovation, creating authentic fusion without appropriation.'
    },
    {
      icon: 'SparklesIcon',
      title: 'Ingredient Integrity',
      description: 'We source authentic Himalayan spices and herbs while partnering with local DC farmers, creating a bridge between mountain traditions and capital freshness.'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Community Connection',
      description: 'Building bridges between the Nepalese diaspora and DC food lovers, creating a cultural sanctuary where everyone feels welcomed and valued.'
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Culinary Education',
      description: 'Sharing the stories behind each ingredient, technique, and tradition, transforming every meal into a meaningful cultural expedition.'
    }
  ];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Culinary Philosophy
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by principles that honor tradition while embracing innovation, creating transformative dining experiences that transport guests from DC to the Himalayas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={pillar.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;