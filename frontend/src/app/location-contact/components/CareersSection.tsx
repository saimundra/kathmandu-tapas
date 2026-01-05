'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Position {
  id: number;
  title: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
}

interface CareersSectionProps {
  className?: string;
}

const CareersSection = ({ className = '' }: CareersSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const positions: Position[] = [
    {
      id: 1,
      title: 'Cultural Ambassador Server',
      department: 'Front of House',
      type: 'Full-Time',
      description: 'Join our team as a cultural ambassador who bridges Himalayan hospitality with DC sophistication. Share stories of our cuisine while delivering exceptional service.',
      requirements: [
        '2+ years fine dining experience',
        'Passion for cultural storytelling',
        'Knowledge of Nepalese cuisine (training provided)',
        'Excellent communication skills'
      ]
    },
    {
      id: 2,
      title: 'Sous Chef - Fusion Cuisine',
      department: 'Kitchen',
      type: 'Full-Time',
      description: 'Work alongside our executive chef to create innovative Nepalese-American fusion dishes. Bring your culinary creativity to our Himalayan-inspired kitchen.',
      requirements: [
        '5+ years professional kitchen experience',
        'Culinary degree or equivalent',
        'Experience with Asian cuisines preferred',
        'Leadership and mentoring skills'
      ]
    },
    {
      id: 3,
      title: 'Mixologist - Himalayan Cocktails',
      department: 'Bar',
      type: 'Full-Time',
      description: 'Craft signature cocktails inspired by Himalayan ingredients and traditions. Create memorable drink experiences that complement our fusion cuisine.',
      requirements: [
        '3+ years bartending experience',
        'Mixology certification preferred',
        'Creative approach to cocktail development',
        'Knowledge of spirits and flavor profiles'
      ]
    },
    {
      id: 4,
      title: 'Event Coordinator',
      department: 'Management',
      type: 'Full-Time',
      description: 'Manage private events and corporate gatherings, ensuring each celebration reflects our cultural values and hospitality standards.',
      requirements: [
        '3+ years event planning experience',
        'Strong organizational skills',
        'Experience with corporate events',
        'Excellent client communication'
      ]
    }
  ];

  const handlePositionClick = (id: number) => {
    if (!isHydrated) return;
    setSelectedPosition(selectedPosition === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Join Our Cultural Team
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Loading career opportunities...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="UserGroupIcon" size={32} className="text-primary" />
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Join Our Cultural Team
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We're seeking passionate individuals who can represent both Nepalese heritage and DC sophistication. Become part of our cultural bridge.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {positions.map((position) => (
              <div key={position.id} className="bg-background rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => handlePositionClick(position.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4 text-left">
                    <div>
                      <h3 className="font-headline font-semibold text-xl text-foreground mb-1">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className="font-body text-sm text-muted-foreground">
                          {position.department}
                        </span>
                        <span className="font-body text-sm text-primary">
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`text-muted-foreground transition-transform duration-300 ${
                      selectedPosition === position.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {selectedPosition === position.id && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="font-body text-base text-foreground mb-4">
                      {position.description}
                    </p>
                    <h4 className="font-headline font-semibold text-lg text-foreground mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-muted-foreground">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="mailto:careers@kathmandudc.com"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                      <Icon name="PaperAirplaneIcon" size={20} />
                      <span>Apply for This Position</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg text-center">
            <h3 className="font-headline font-semibold text-2xl text-foreground mb-4">
              Don't See Your Role?
            </h3>
            <p className="font-body text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for cultural hospitality. Send us your resume and tell us how you'd contribute to our team.
            </p>
            <a
              href="mailto:careers@kathmandudc.com"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Icon name="EnvelopeIcon" size={20} />
              <span>Send General Application</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;