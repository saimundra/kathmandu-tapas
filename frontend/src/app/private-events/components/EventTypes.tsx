import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EventType {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface EventTypesProps {
  className?: string;
}

const EventTypes = ({ className = '' }: EventTypesProps) => {
  const eventTypes: EventType[] = [
    {
      id: 1,
      title: "Corporate Events",
      description: "Impress clients and motivate teams with sophisticated business gatherings",
      icon: "BriefcaseIcon",
      features: [
        "Client Dinners & Entertainment",
        "Team Building Celebrations",
        "Product Launch Receptions",
        "Board Meetings with Dining",
        "Holiday Parties",
        "Networking Events"
      ]
    },
    {
      id: 2,
      title: "Cultural Celebrations",
      description: "Honor traditions with authentic Nepalese cultural event hosting",
      icon: "SparklesIcon",
      features: [
        "Dashain & Tihar Festivals",
        "Cultural Community Gatherings",
        "Traditional Ceremonies",
        "Heritage Celebrations",
        "Cross-Cultural Events",
        "Festival Dinners"
      ]
    },
    {
      id: 3,
      title: "Special Occasions",
      description: "Create unforgettable memories for life's milestone moments",
      icon: "HeartIcon",
      features: [
        "Wedding Receptions",
        "Anniversary Celebrations",
        "Birthday Parties",
        "Engagement Dinners",
        "Graduation Celebrations",
        "Family Reunions"
      ]
    },
    {
      id: 4,
      title: "Culinary Experiences",
      description: "Interactive dining events that educate and entertain",
      icon: "AcademicCapIcon",
      features: [
        "Chef's Table Dinners",
        "Cooking Classes",
        "Wine Tasting Events",
        "Cocktail Workshops",
        "Cultural Food Tours",
        "Pairing Dinners"
      ]
    }
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Types We Host
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From corporate excellence to cultural authenticity, we specialize in creating memorable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventTypes.map((type) => (
            <div
              key={type.id}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={type.icon as any} size={28} className="text-primary" />
              </div>
              
              <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                {type.title}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground mb-4">
                {type.description}
              </p>

              <ul className="space-y-2">
                {type.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="CheckIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;