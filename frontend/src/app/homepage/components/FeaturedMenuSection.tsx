'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  alt: string;
  cultural_note: string;
}

interface FeaturedMenuSectionProps {
  className?: string;
}

const FeaturedMenuSection = ({ className = '' }: FeaturedMenuSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('tapas');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = [
  { id: 'tapas', label: 'Signature Tapas', icon: 'SparklesIcon' },
  { id: 'cocktails', label: 'Craft Cocktails', icon: 'BeakerIcon' },
  { id: 'mains', label: 'Main Courses', icon: 'FireIcon' }];


  const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Himalayan Momo Trio',
    description: 'Steamed dumplings with yak, chicken, and vegetable fillings, served with three signature chutneys',
    price: '$18',
    category: 'tapas',
    image: "https://images.unsplash.com/photo-1590232390110-d2d75d2ac3da",
    alt: 'Three golden-brown steamed dumplings arranged on dark slate plate with colorful red, green, and yellow chutneys in small ceramic bowls',
    cultural_note: 'Traditional Nepalese comfort food elevated with premium ingredients'
  },
  {
    id: 2,
    name: 'Sekuwa Skewers',
    description: 'Charcoal-grilled lamb marinated in Himalayan spices, with mint yogurt and pickled vegetables',
    price: '$22',
    category: 'tapas',
    image: "https://images.unsplash.com/photo-1707531579124-4f3b8f8c35cf",
    alt: 'Grilled lamb skewers with char marks on white plate, garnished with fresh mint leaves and accompanied by white yogurt sauce',
    cultural_note: 'Mountain-style grilling technique from the Sherpa community'
  },
  {
    id: 3,
    name: 'Chatamari Flatbread',
    description: 'Nepalese rice crepe topped with spiced ground meat, egg, and fresh herbs',
    price: '$16',
    category: 'tapas',
    image: "https://images.unsplash.com/photo-1620374230612-265d5045c85b",
    alt: 'Thin crispy rice flatbread topped with minced meat, sunny-side egg, and green herbs on rustic wooden board',
    cultural_note: 'Often called "Nepalese pizza" - a beloved street food classic'
  },
  {
    id: 4,
    name: 'Everest Sunset',
    description: 'Himalayan gin, blood orange, cardamom syrup, and sparkling wine with edible gold',
    price: '$16',
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1636055607671-1dd2f48d2e86",
    alt: 'Elegant cocktail glass with orange-red gradient drink, garnished with orange slice and gold flakes, on marble bar counter',
    cultural_note: 'Inspired by the golden hour views from Everest Base Camp'
  },
  {
    id: 5,
    name: 'Kathmandu Mule',
    description: 'Khukri rum, fresh ginger, lime, and house-made masala spice blend',
    price: '$14',
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1642629045573-10ea584c72b4",
    alt: 'Copper mug filled with amber cocktail, ice cubes, lime wedge, and fresh ginger garnish with condensation on exterior',
    cultural_note: 'A DC twist on the classic using Nepal\'s national spirit'
  },
  {
    id: 6,
    name: 'Sherpa\'s Dream',
    description: 'Bourbon, yak butter tea reduction, honey, and Himalayan salt rim',
    price: '$15',
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1583873583541-dcbf3120ff05",
    alt: 'Rocks glass with amber whiskey cocktail, large ice sphere, and crystalline salt rim on dark wooden surface',
    cultural_note: 'Honoring the traditional butter tea of mountain climbers'
  },
  {
    id: 7,
    name: 'Dal Bhat Reimagined',
    description: 'Slow-cooked black lentils, saffron rice, seasonal vegetables, and house-made pickles',
    price: '$28',
    category: 'mains',
    image: "https://images.unsplash.com/photo-1682142882953-75b4ccd12386",
    alt: 'Traditional brass thali plate with compartments containing yellow rice, dark lentil curry, colorful vegetables, and pickled condiments',
    cultural_note: 'Nepal\'s national dish elevated with premium ingredients'
  },
  {
    id: 8,
    name: 'Tandoori Trout',
    description: 'Whole rainbow trout marinated in yogurt and spices, served with saffron pilaf',
    price: '$34',
    category: 'mains',
    image: "https://images.unsplash.com/photo-1687600938883-af17171fec25",
    alt: 'Whole grilled fish with reddish-orange tandoori spice coating on white oval plate, accompanied by yellow saffron rice',
    cultural_note: 'Fusion of Himalayan spices with DC\'s fresh seafood'
  },
  {
    id: 9,
    name: 'Yak Ribeye',
    description: '12oz grass-fed yak ribeye with roasted root vegetables and chimichurri',
    price: '$48',
    category: 'mains',
    image: "https://images.unsplash.com/photo-1595080574292-786f9a4f80b0",
    alt: 'Thick grilled ribeye steak with perfect char marks on black plate, surrounded by roasted carrots, potatoes, and green chimichurri sauce',
    cultural_note: 'Premium yak meat sourced from sustainable Himalayan farms'
  }];


  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    if (!isHydrated) return;
    setActiveCategory(categoryId);
  };

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} className="text-primary" />
            <span className="text-primary font-body text-sm font-medium tracking-wide">
              FEATURED MENU
            </span>
          </div>

          <h2 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            Taste the Himalayan Journey
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each dish tells a story of tradition meeting innovation, crafted with authentic ingredients and contemporary techniques
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-headline font-semibold transition-all duration-300 ${
            activeCategory === category.id ?
            'bg-primary text-primary-foreground shadow-lg shadow-primary/30' :
            'bg-background text-foreground hover:bg-muted'}`
            }>

              <Icon name={category.icon as any} size={20} />
              <span>{category.label}</span>
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) =>
          <div
            key={item.id}
            className="group bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-headline font-semibold">
                  {item.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline font-bold text-xl text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-start space-x-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-foreground italic">
                    {item.cultural_note}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu-experience"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1">

            <span>View Full Menu</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedMenuSection;