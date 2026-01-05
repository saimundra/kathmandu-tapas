import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Package {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface EventPackagesProps {
  className?: string;
}

const EventPackages = ({ className = '' }: EventPackagesProps) => {
  const packages: Package[] = [
    {
      id: 1,
      name: "Cultural Tapas",
      price: "$65",
      description: "Perfect for cocktail receptions and networking events",
      features: [
        "Selection of 8 Tapas Plates",
        "2 Signature Cocktails per Guest",
        "Cultural Decor Setup",
        "2-Hour Event Duration",
        "Basic AV Equipment",
        "Dedicated Server Staff"
      ]
    },
    {
      id: 2,
      name: "Himalayan Feast",
      price: "$95",
      description: "Comprehensive dining experience for seated celebrations",
      features: [
        "3-Course Fusion Menu",
        "Wine Pairing Options",
        "Premium Bar Service",
        "Cultural Entertainment",
        "Full AV System Access",
        "Event Coordinator",
        "Custom Menu Cards",
        "4-Hour Event Duration"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Executive Experience",
      price: "$145",
      description: "Premium service for VIP corporate entertainment",
      features: [
        "Chef's Tasting Menu (5 Courses)",
        "Premium Wine & Spirits",
        "Private Room Exclusive Use",
        "Live Cultural Performance",
        "Professional Photography",
        "Personalized Service",
        "Custom Branding Options",
        "6-Hour Event Duration",
        "Valet Parking Coordination"
      ]
    },
    {
      id: 4,
      name: "Custom Celebration",
      price: "Custom",
      description: "Fully tailored experience for unique occasions",
      features: [
        "Bespoke Menu Creation",
        "Unlimited Duration Options",
        "Full Venue Buyout Available",
        "Cultural Ceremony Integration",
        "Multi-Day Event Planning",
        "Catering Off-Site Options",
        "Dedicated Event Team",
        "Unlimited Customization"
      ]
    }
  ];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event Packages
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully curated packages designed to simplify your planning while delivering exceptional experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full font-headline text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-headline text-4xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  {pkg.price !== "Custom" && (
                    <span className="font-body text-sm text-muted-foreground">per person</span>
                  )}
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#inquiry-form"
                className={`block w-full py-3 rounded-md font-headline font-semibold text-center transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-sm text-muted-foreground">
            All packages include setup, cleanup, and standard tableware. Prices subject to 20% service charge and applicable taxes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventPackages;