import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface EventSpace {
  id: number;
  name: string;
  capacity: {
    seated: number;
    standing: number;
  };
  features: string[];
  image: string;
  alt: string;
  description: string;
}

interface EventSpacesProps {
  className?: string;
}

const EventSpaces = ({ className = '' }: EventSpacesProps) => {
  const spaces: EventSpace[] = [
  {
    id: 1,
    name: "Himalayan Hall",
    capacity: { seated: 80, standing: 120 },
    features: ["Full AV System", "Private Bar", "Mountain View Decor", "Customizable Layout"],
    image: "https://images.unsplash.com/photo-1613696839793-e2fd0b4ce4f0",
    alt: "Spacious event hall with elegant wooden tables, ambient lighting, and traditional Himalayan artwork on exposed brick walls",
    description: "Our flagship event space perfect for corporate dinners, cultural celebrations, and grand receptions."
  },
  {
    id: 2,
    name: "Kathmandu Lounge",
    capacity: { seated: 40, standing: 60 },
    features: ["Intimate Setting", "Cocktail Bar", "Prayer Flag Decor", "Sound System"],
    image: "https://images.unsplash.com/photo-1549691520-c1963b31a013",
    alt: "Cozy lounge area with comfortable seating, warm lighting, and colorful prayer flags creating intimate atmosphere",
    description: "Semi-private lounge ideal for cocktail receptions, team celebrations, and networking events."
  },
  {
    id: 3,
    name: "Chef's Table Room",
    capacity: { seated: 16, standing: 20 },
    features: ["Kitchen View", "Interactive Experience", "Custom Menu", "Wine Pairing"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f848c7e3-1764868002382.png",
    alt: "Exclusive chef's table with view into open kitchen, intimate seating for small group with elegant place settings",
    description: "Exclusive culinary experience for intimate gatherings and VIP client entertainment."
  },
  {
    id: 4,
    name: "Terrace Garden",
    capacity: { seated: 50, standing: 75 },
    features: ["Outdoor Setting", "String Lights", "Garden Ambiance", "Weather Backup"],
    image: "https://images.unsplash.com/photo-1707333514156-d42751dca70d",
    alt: "Beautiful outdoor terrace with string lights overhead, greenery, and elegant table settings for al fresco dining",
    description: "Seasonal outdoor space perfect for summer celebrations and cultural festivals."
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Event Spaces
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Versatile venues designed to accommodate everything from intimate gatherings to grand celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spaces.map((space) =>
          <div
            key={space.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={space.image}
                alt={space.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              </div>
              
              <div className="p-6">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                  {space.name}
                </h3>
                
                <p className="font-body text-muted-foreground mb-4">
                  {space.description}
                </p>

                <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Icon name="UserGroupIcon" size={20} className="text-primary" />
                    <span className="font-body text-sm text-foreground">
                      <span className="font-semibold">{space.capacity.seated}</span> Seated
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="UsersIcon" size={20} className="text-primary" />
                    <span className="font-body text-sm text-foreground">
                      <span className="font-semibold">{space.capacity.standing}</span> Standing
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {space.features.map((feature, index) =>
                <div key={index} className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{feature}</span>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default EventSpaces;