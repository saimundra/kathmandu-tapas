import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ExperienceGallerySectionProps {
  className?: string;
}

const ExperienceGallerySection = ({ className = '' }: ExperienceGallerySectionProps) => {
  const galleryImages = [
  {
    id: 1,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1af2f4493-1765206003301.png",
    alt: 'Intimate restaurant dining room with exposed brick walls, warm Edison bulb lighting, and couples enjoying dinner at candlelit tables',
    title: 'Intimate Ambiance',
    description: 'Perfect for romantic evenings'
  },
  {
    id: 2,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16277b650-1764676860917.png",
    alt: 'Colorful array of Nepalese tapas dishes arranged on dark wooden table with traditional brass serving bowls and fresh herbs',
    title: 'Artful Presentation',
    description: 'Every dish is a masterpiece'
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1715443263970-f01f432d0e22",
    alt: 'Modern bar area with backlit shelves displaying premium spirits, brass fixtures, and bartender mixing cocktails',
    title: 'Craft Cocktail Bar',
    description: 'Himalayan-inspired mixology'
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1683562849285-06a9f9f1004a",
    alt: 'Private dining room with long wooden table set for twelve guests, traditional Nepalese artwork on walls, and ambient lighting',
    title: 'Private Events',
    description: 'Exclusive spaces for celebrations'
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1722875971151-3978381026d1",
    alt: 'Chef in white uniform garnishing plate with tweezers in modern open kitchen with stainless steel equipment',
    title: 'Open Kitchen',
    description: 'Watch culinary artistry unfold'
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1700603340208-ef5e8927d41c",
    alt: 'Outdoor patio seating area with string lights overhead, wooden tables with cushioned chairs, and potted plants',
    title: 'Outdoor Patio',
    description: 'Al fresco dining experience'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="CameraIcon" size={20} className="text-primary" />
            <span className="text-primary font-body text-sm font-medium tracking-wide">
              EXPERIENCE GALLERY
            </span>
          </div>

          <h2 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            Immerse Yourself in Our World
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate dining spaces to vibrant cocktail culture, discover the atmosphere that makes Kathmandu Tapas unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) =>
          <div
            key={item.id}
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

              <AppImage
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-headline font-bold text-2xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-6">
            Follow us on Instagram for daily inspiration and behind-the-scenes moments
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1">

              <Icon name="CameraIcon" size={20} />
              <span>@kathmandutapasdc</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default ExperienceGallerySection;