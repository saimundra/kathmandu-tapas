import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CulturalStoryProps {
  className?: string;
}

const CulturalStory = ({ className = '' }: CulturalStoryProps) => {
  const stories = [
  {
    id: '1',
    title: 'Himalayan Spice Journey',
    description: 'Discover the ancient spice routes that connect Nepal to our kitchen, where traditional timur pepper meets modern culinary innovation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1865fbff8-1764780773399.png",
    alt: 'Colorful array of traditional Himalayan spices in wooden bowls on rustic table',
    icon: 'SparklesIcon' as const
  },
  {
    id: '2',
    title: 'Traditional Cooking Methods',
    description: 'Our chefs honor centuries-old techniques, from tandoor roasting to slow-simmered dal, bringing authentic flavors to every dish.',
    image: "https://images.unsplash.com/photo-1640432069902-1fb90f19ed6f",
    alt: 'Chef preparing traditional Nepalese dish in clay tandoor oven with flames',
    icon: 'FireIcon' as const
  },
  {
    id: '3',
    title: 'Fusion Innovation',
    description: 'Where East meets West: our culinary team reimagines Nepalese classics with contemporary American techniques and local DC ingredients.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100c31a44-1767192565231.png",
    alt: 'Modern plated fusion dish with artistic presentation on white ceramic plate',
    icon: 'BeakerIcon' as const
  }];


  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="font-body text-sm font-medium text-primary tracking-wide">
              CULTURAL HERITAGE
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories Behind Our Cuisine
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Every dish tells a story of tradition, innovation, and the journey from the Himalayas to Washington DC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) =>
          <div
            key={story.id}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

              <div className="relative h-56 overflow-hidden bg-muted">
                <AppImage
                src={story.image}
                alt={story.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Icon name={story.icon} size={24} className="text-primary-foreground" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {story.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CulturalStory;