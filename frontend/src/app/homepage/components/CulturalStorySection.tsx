import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CulturalStorySectionProps {
  className?: string;
}

const CulturalStorySection = ({ className = '' }: CulturalStorySectionProps) => {
  const storyElements = [
  {
    icon: 'GlobeAsiaAustraliaIcon',
    title: 'Himalayan Heritage',
    description: 'Authentic recipes passed down through generations, honoring the rich culinary traditions of Nepal\'s mountain communities.'
  },
  {
    icon: 'SparklesIcon',
    title: 'Modern Innovation',
    description: 'Contemporary techniques and presentation that elevate traditional flavors for the sophisticated DC palate.'
  },
  {
    icon: 'HeartIcon',
    title: 'Cultural Bridge',
    description: 'Creating meaningful connections between Nepalese heritage and American dining culture through every dish.'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_14e846fb4-1766823101497.png"
                alt="Chef in traditional white uniform carefully plating colorful Nepalese fusion dish with tweezers in modern restaurant kitchen"
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <p className="font-headline text-white text-lg italic">
                    "Every dish tells a story of my journey from the peaks of Kathmandu to the heart of Washington DC."
                  </p>
                  <p className="font-body text-white/80 mt-2">— Chef Rajesh Thapa</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="BookOpenIcon" size={20} className="text-primary" />
              <span className="text-primary font-body text-sm font-medium tracking-wide">
                OUR STORY
              </span>
            </div>

            <h2 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-6">
              A Culinary Journey from Mountains to Capital
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Kathmandu Tapas & Cocktails was born from a vision to create a cultural bridge through cuisine. Our chef's journey from the sacred peaks of Nepal to the power corridors of DC inspired a dining experience that honors both heritage and innovation.
            </p>

            <div className="space-y-6 mb-8">
              {storyElements.map((element, index) =>
              <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={element.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-xl text-foreground mb-2">
                      {element.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/our-story"
              className="inline-flex items-center space-x-2 text-primary font-headline font-semibold text-lg hover:text-primary/80 transition-colors duration-300">

              <span>Discover Our Full Story</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default CulturalStorySection;