'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface IngredientSource {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
  alt: string;
  coordinates: {lat: number;lng: number;};
}

interface IngredientSourcingSectionProps {
  className?: string;
}

const IngredientSourcingSection = ({ className = '' }: IngredientSourcingSectionProps) => {
  const [selectedSource, setSelectedSource] = useState<string>('timur');

  const sources: IngredientSource[] = [
  {
    id: 'timur',
    name: 'Timur Peppercorns',
    origin: 'Mustang Valley, Nepal',
    description: 'Hand-harvested Sichuan peppercorns from high-altitude Himalayan forests, providing the distinctive citrus-numbing sensation essential to authentic Nepalese cuisine.',
    image: "https://images.unsplash.com/photo-1670501666001-5318c7a0aabd",
    alt: 'Close-up of dried Timur peppercorns in rustic wooden bowl with mountain backdrop',
    coordinates: { lat: 28.7833, lng: 83.9833 }
  },
  {
    id: 'yarsagumba',
    name: 'Himalayan Herbs',
    origin: 'Dolpo Region, Nepal',
    description: 'Rare medicinal herbs and aromatic plants collected by local foragers from pristine high-altitude meadows, used in our signature spice blends and herbal infusions.',
    image: "https://images.unsplash.com/photo-1654151749030-9e931772e555",
    alt: 'Bundle of fresh green Himalayan herbs tied with natural twine on wooden surface',
    coordinates: { lat: 29.0833, lng: 82.8167 }
  },
  {
    id: 'buckwheat',
    name: 'Himalayan Buckwheat',
    origin: 'Jumla District, Nepal',
    description: 'Ancient grain variety grown at 8,000+ feet elevation, stone-ground into flour for our traditional dhindo and contemporary fusion dishes.',
    image: "https://images.unsplash.com/photo-1579892876489-8e4ee9c5b8de",
    alt: 'Golden buckwheat grains scattered on dark slate surface with mountain scenery',
    coordinates: { lat: 29.2747, lng: 82.1833 }
  },
  {
    id: 'local-produce',
    name: 'DC Local Produce',
    origin: 'Maryland & Virginia Farms',
    description: 'Fresh seasonal vegetables and herbs from regional farms within 100 miles of DC, creating the perfect fusion between Himalayan traditions and local terroir.',
    image: "https://images.unsplash.com/photo-1594669856727-cbe24f54f704",
    alt: 'Assorted fresh vegetables including tomatoes, peppers, and leafy greens at local farm stand',
    coordinates: { lat: 38.9072, lng: -77.0369 }
  }];


  const activeSource = sources.find((s) => s.id === selectedSource) || sources[0];

  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ingredient Sourcing Journey
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            From the peaks of the Himalayas to the farms of the Chesapeake Bay, every ingredient tells a story of authenticity, sustainability, and cultural connection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-96">
              <AppImage
                src={activeSource.image}
                alt={activeSource.alt}
                className="w-full h-full object-cover" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="MapPinIcon" size={20} className="text-primary" />
                  <span className="font-body text-sm font-medium text-primary">
                    {activeSource.origin}
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold text-foreground">
                  {activeSource.name}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {activeSource.description}
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={activeSource.name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${activeSource.coordinates.lat},${activeSource.coordinates.lng}&z=8&output=embed`}
                className="border-0" />

            </div>
            <div className="p-6">
              <h4 className="font-headline text-xl font-bold text-foreground mb-4">
                Select Ingredient Source
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {sources.map((source) =>
                <button
                  key={source.id}
                  onClick={() => setSelectedSource(source.id)}
                  className={`p-3 rounded-md font-body text-sm font-medium transition-all duration-300 ${
                  selectedSource === source.id ?
                  'bg-primary text-primary-foreground shadow-md' :
                  'bg-muted text-foreground hover:bg-primary/10'}`
                  }>

                    {source.name}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <Icon name="InformationCircleIcon" size={32} className="text-primary flex-shrink-0" />
            <div>
              <h4 className="font-headline text-xl font-bold text-foreground mb-2">
                Our Sourcing Commitment
              </h4>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                We maintain direct relationships with Himalayan foragers and local DC-area farmers, ensuring fair compensation, sustainable harvesting practices, and the highest quality ingredients. Every purchase supports traditional livelihoods in Nepal while strengthening our local food economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default IngredientSourcingSection;