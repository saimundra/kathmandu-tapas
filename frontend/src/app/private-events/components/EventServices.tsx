import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface EventServicesProps {
  className?: string;
}

const EventServices = ({ className = '' }: EventServicesProps) => {
  const services: Service[] = [
    {
      id: 1,
      title: "Event Coordination",
      description: "Dedicated event coordinator from planning through execution, managing timeline, vendors, and all logistics",
      icon: "ClipboardDocumentCheckIcon"
    },
    {
      id: 2,
      title: "Custom Menu Design",
      description: "Chef-crafted menus tailored to your preferences, dietary needs, and cultural requirements",
      icon: "DocumentTextIcon"
    },
    {
      id: 3,
      title: "AV & Technology",
      description: "Professional sound system, projectors, screens, microphones, and technical support staff",
      icon: "ComputerDesktopIcon"
    },
    {
      id: 4,
      title: "Cultural Entertainment",
      description: "Traditional Nepalese music, dance performances, and cultural demonstrations",
      icon: "MusicalNoteIcon"
    },
    {
      id: 5,
      title: "Decor & Ambiance",
      description: "Custom lighting, floral arrangements, cultural elements, and themed decorations",
      icon: "SparklesIcon"
    },
    {
      id: 6,
      title: "Photography Services",
      description: "Professional event photography and videography to capture your special moments",
      icon: "CameraIcon"
    },
    {
      id: 7,
      title: "Beverage Programs",
      description: "Curated wine lists, signature cocktails, premium spirits, and non-alcoholic options",
      icon: "BeakerIcon"
    },
    {
      id: 8,
      title: "Valet & Parking",
      description: "Coordinated valet service and parking arrangements for guest convenience",
      icon: "TruckIcon"
    },
    {
      id: 9,
      title: "Dietary Accommodations",
      description: "Expert handling of allergies, religious restrictions, vegan, vegetarian, and gluten-free needs",
      icon: "HeartIcon"
    },
    {
      id: 10,
      title: "Branding Options",
      description: "Custom menu cards, signage, and branded elements for corporate events",
      icon: "PencilSquareIcon"
    },
    {
      id: 11,
      title: "Off-Site Catering",
      description: "Full-service catering for events at your location with our signature cuisine",
      icon: "BuildingOfficeIcon"
    },
    {
      id: 12,
      title: "Multi-Day Events",
      description: "Comprehensive planning for conferences, retreats, and extended celebrations",
      icon: "CalendarDaysIcon"
    }
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Event Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a flawless event, from planning to execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon as any} size={24} className="text-primary" />
              </div>
              
              <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-background rounded-lg p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                Preferred Vendor Network
              </h3>
              <p className="font-body text-muted-foreground">
                Access our curated network of trusted vendors for floristry, entertainment, transportation, and more. We coordinate seamlessly with your chosen partners or recommend our preferred professionals.
              </p>
            </div>
            <a
              href="#inquiry-form"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Discuss Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventServices;