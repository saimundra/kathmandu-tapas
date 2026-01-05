import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface AccessibilityFeature {
  icon: string;
  title: string;
  description: string;
}

interface AccessibilityInfoProps {
  className?: string;
}

const AccessibilityInfo = ({ className = '' }: AccessibilityInfoProps) => {
  const features: AccessibilityFeature[] = [
    {
      icon: 'CheckCircleIcon',
      title: 'Wheelchair Accessible',
      description: 'Ground-level entrance with wide doorways and accessible restrooms throughout'
    },
    {
      icon: 'CheckCircleIcon',
      title: 'Accessible Parking',
      description: 'Reserved accessible parking spaces available in Georgetown Park Garage'
    },
    {
      icon: 'CheckCircleIcon',
      title: 'Dietary Accommodations',
      description: 'Extensive menu options for vegetarian, vegan, gluten-free, and allergy-sensitive guests'
    },
    {
      icon: 'CheckCircleIcon',
      title: 'Service Animals Welcome',
      description: 'We welcome service animals in accordance with ADA guidelines'
    },
    {
      icon: 'CheckCircleIcon',
      title: 'Assistive Listening',
      description: 'Quiet dining areas available upon request for guests with hearing sensitivities'
    },
    {
      icon: 'CheckCircleIcon',
      title: 'Large Print Menus',
      description: 'Available upon request for guests with visual impairments'
    }
  ];

  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
              <Icon name="HeartIcon" size={32} className="text-success" />
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Accessibility & Accommodations
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing an inclusive dining experience for all our guests. Please let us know how we can make your visit more comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Icon name={feature.icon as any} size={24} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-success/10 to-primary/10 p-8 rounded-lg text-center">
            <h3 className="font-headline font-semibold text-2xl text-foreground mb-4">
              Need Special Accommodations?
            </h3>
            <p className="font-body text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Please contact us at least 24 hours in advance so we can ensure your dining experience meets your needs. Our team is here to help.
            </p>
            <a
              href="mailto:hello@kathmandudc.com"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Icon name="EnvelopeIcon" size={20} />
              <span>Email Us Your Needs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityInfo;