'use client';

import React, { useState, useEffect } from 'react';
import MenuFilters from './MenuFilters';
import MenuItem from './MenuItem';
import MenuDownload from './MenuDownload';
import Icon from '@/components/ui/AppIcon';

interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  alt: string;
  dietary: string[];
  spiceLevel: string;
  origin: string;
  ingredients: string[];
  pairing?: string;
  seasonal: boolean;
  chefRecommended: boolean;
  nutritionalInfo?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

const MenuExperienceInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietary, setActiveDietary] = useState<string[]>([]);
  const [activeSpiceLevel, setActiveSpiceLevel] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const menuItems: MenuItemData[] = [
  {
    id: '1',
    name: 'Himalayan Momo Tapas',
    description: 'Delicate steamed dumplings filled with spiced chicken and vegetables, served with traditional tomato-sesame chutney and modern herb aioli.',
    price: 14,
    category: 'tapas',
    image: "https://images.unsplash.com/photo-1683367422298-54649a48ee95",
    alt: 'Steamed Himalayan momos arranged on dark slate plate with colorful chutneys',
    dietary: ['gluten-free'],
    spiceLevel: 'mild',
    origin: 'Kathmandu Valley',
    ingredients: ['Chicken', 'Ginger', 'Garlic', 'Cilantro', 'Sesame'],
    pairing: 'Pairs beautifully with our Himalayan Gin & Tonic or a crisp Riesling',
    seasonal: false,
    chefRecommended: true,
    nutritionalInfo: {
      calories: 285,
      protein: '18g',
      carbs: '24g',
      fat: '12g'
    }
  },
  {
    id: '2',
    name: 'Yak Cheese Croquettes',
    description: 'Crispy golden croquettes made with authentic Himalayan yak cheese, served with spiced honey and pickled vegetables.',
    price: 16,
    category: 'tapas',
    image: "https://images.unsplash.com/photo-1695554292657-8c341d783f29",
    alt: 'Golden brown cheese croquettes on white plate with honey drizzle and garnish',
    dietary: ['vegetarian'],
    spiceLevel: 'mild',
    origin: 'High Himalayas',
    ingredients: ['Yak Cheese', 'Potato', 'Herbs', 'Honey', 'Pickles'],
    pairing: 'Excellent with our Everest Pale Ale or a buttery Chardonnay',
    seasonal: false,
    chefRecommended: true,
    nutritionalInfo: {
      calories: 320,
      protein: '14g',
      carbs: '28g',
      fat: '18g'
    }
  },
  {
    id: '3',
    name: 'Tandoori Cauliflower Bites',
    description: 'Roasted cauliflower florets marinated in traditional tandoori spices, finished with mint-yogurt sauce and pomegranate seeds.',
    price: 12,
    category: 'tapas',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13906c59a-1766828402690.png",
    alt: 'Charred tandoori cauliflower pieces with vibrant red spices on ceramic bowl',
    dietary: ['vegetarian', 'gluten-free'],
    spiceLevel: 'medium',
    origin: 'Fusion Creation',
    ingredients: ['Cauliflower', 'Yogurt', 'Tandoori Spices', 'Mint', 'Pomegranate'],
    pairing: 'Complements our Mango Lassi Martini or a fruity Pinot Noir',
    seasonal: true,
    chefRecommended: false,
    nutritionalInfo: {
      calories: 180,
      protein: '8g',
      carbs: '22g',
      fat: '7g'
    }
  },
  {
    id: '4',
    name: 'Sherpa Lamb Sliders',
    description: 'Tender lamb patties seasoned with cumin and coriander, topped with pickled onions and mint chutney on house-made naan buns.',
    price: 18,
    category: 'tapas',
    image: "https://images.unsplash.com/photo-1561560562-6fae1834a771",
    alt: 'Three mini lamb sliders on wooden board with garnish and sauce',
    dietary: [],
    spiceLevel: 'medium',
    origin: 'Sherpa Highlands',
    ingredients: ['Lamb', 'Cumin', 'Coriander', 'Naan', 'Mint Chutney'],
    pairing: 'Perfect with our Himalayan Red Ale or a bold Cabernet Sauvignon',
    seasonal: false,
    chefRecommended: true,
    nutritionalInfo: {
      calories: 420,
      protein: '28g',
      carbs: '32g',
      fat: '20g'
    }
  },
  {
    id: '5',
    name: 'Everest Martini',
    description: 'Premium vodka infused with Himalayan herbs, elderflower liqueur, and fresh lime, garnished with edible flowers.',
    price: 15,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1697569594053-828a124f5ba7",
    alt: 'Elegant martini glass with clear cocktail and colorful edible flower garnish',
    dietary: ['vegan', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'House Creation',
    ingredients: ['Vodka', 'Elderflower', 'Lime', 'Himalayan Herbs', 'Edible Flowers'],
    pairing: 'Aperitif perfect before any meal',
    seasonal: false,
    chefRecommended: true
  },
  {
    id: '6',
    name: 'Kathmandu Spice Old Fashioned',
    description: 'Bourbon infused with cardamom and cinnamon, sweetened with jaggery syrup, finished with orange peel and star anise.',
    price: 16,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1678862656842-1961c061751e",
    alt: 'Amber colored old fashioned cocktail in crystal glass with orange peel and ice',
    dietary: ['vegan', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'Fusion Creation',
    ingredients: ['Bourbon', 'Cardamom', 'Cinnamon', 'Jaggery', 'Orange'],
    pairing: 'Excellent digestif after rich meals',
    seasonal: false,
    chefRecommended: true
  },
  {
    id: '7',
    name: 'Himalayan Gin & Tonic',
    description: 'Small-batch gin from Nepal with house-made tonic water, juniper berries, and fresh cucumber ribbons.',
    price: 14,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1617649461562-eed2068dde2d",
    alt: 'Tall glass gin and tonic with cucumber ribbons and ice cubes',
    dietary: ['vegan', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'Traditional Reimagined',
    ingredients: ['Himalayan Gin', 'Tonic Water', 'Juniper', 'Cucumber', 'Lime'],
    pairing: 'Refreshing companion to spicy tapas',
    seasonal: false,
    chefRecommended: false
  },
  {
    id: '8',
    name: 'Mango Lassi Martini',
    description: 'Creamy mango lassi transformed into an elegant cocktail with vanilla vodka, cardamom, and saffron threads.',
    price: 15,
    category: 'cocktails',
    image: "https://images.unsplash.com/photo-1703905828110-2924e499324f",
    alt: 'Creamy orange cocktail in martini glass with saffron threads floating on top',
    dietary: ['vegetarian', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'House Creation',
    ingredients: ['Vodka', 'Mango', 'Yogurt', 'Cardamom', 'Saffron'],
    pairing: 'Dessert cocktail or spicy food companion',
    seasonal: true,
    chefRecommended: false
  },
  {
    id: '9',
    name: 'Himalayan Pinot Noir',
    description: 'Elegant red wine from high-altitude vineyards, featuring notes of cherry, earth, and subtle spice. Perfect for lamb and game.',
    price: 22,
    category: 'wine',
    image: "https://images.unsplash.com/photo-1734209427836-6d7d08b86189",
    alt: 'Red wine being poured into crystal wine glass against dark background',
    dietary: ['vegan', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'Himalayan Foothills',
    ingredients: ['Pinot Noir Grapes'],
    pairing: 'Pairs with Sherpa Lamb Sliders and rich meat dishes',
    seasonal: false,
    chefRecommended: true
  },
  {
    id: '10',
    name: 'Monastery White Blend',
    description: 'Crisp white wine blend with floral aromatics and citrus notes, aged in traditional clay vessels for unique character.',
    price: 20,
    category: 'wine',
    image: "https://images.unsplash.com/photo-1603254704039-2225f36abb20",
    alt: 'White wine in elegant glass with condensation on mountain terrace background',
    dietary: ['vegan', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'Mountain Monastery',
    ingredients: ['White Grape Blend'],
    pairing: 'Excellent with seafood and vegetarian tapas',
    seasonal: false,
    chefRecommended: false
  },
  {
    id: '11',
    name: 'Sherpa Sunrise Rosé',
    description: 'Delicate rosé with strawberry and rose petal notes, produced using traditional Himalayan winemaking techniques.',
    price: 18,
    category: 'wine',
    image: "https://images.unsplash.com/photo-1684601906962-9810b6e16cfa",
    alt: 'Pink rosé wine in stemmed glass with soft natural lighting',
    dietary: ['vegan', 'gluten-free'],
    spiceLevel: 'none',
    origin: 'Sherpa Region',
    ingredients: ['Rosé Grapes'],
    pairing: 'Versatile pairing for most tapas selections',
    seasonal: true,
    chefRecommended: false
  },
  {
    id: '12',
    name: "Chef's Tasting Journey",
    description: 'A curated selection of five signature tapas chosen by our chef, showcasing the best of Himalayan-DC fusion cuisine.',
    price: 48,
    category: 'specials',
    image: "https://images.unsplash.com/photo-1722286031172-fbaa648e3c7b",
    alt: 'Artistic arrangement of five small tasting plates with diverse colorful dishes',
    dietary: [],
    spiceLevel: 'medium',
    origin: 'Chef Selection',
    ingredients: ['Seasonal Selection', 'Chef\'s Choice', 'Premium Ingredients'],
    pairing: 'Wine pairing available for additional $25',
    seasonal: true,
    chefRecommended: true,
    nutritionalInfo: {
      calories: 850,
      protein: '45g',
      carbs: '68g',
      fat: '38g'
    }
  }];


  const handleCategoryChange = (category: string) => {
    if (!isHydrated) return;
    setActiveCategory(category);
  };

  const handleDietaryChange = (dietary: string) => {
    if (!isHydrated) return;
    setActiveDietary((prev) =>
    prev.includes(dietary) ?
    prev.filter((d) => d !== dietary) :
    [...prev, dietary]
    );
  };

  const handleSpiceLevelChange = (level: string) => {
    if (!isHydrated) return;
    setActiveSpiceLevel(level);
  };

  const handlePriceRangeChange = (range: string) => {
    if (!isHydrated) return;
    setPriceRange(range);
  };

  const handleReset = () => {
    if (!isHydrated) return;
    setActiveCategory('all');
    setActiveDietary([]);
    setActiveSpiceLevel('all');
    setPriceRange('all');
  };

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const dietaryMatch =
    activeDietary.length === 0 ||
    activeDietary.every((diet) => item.dietary.includes(diet));
    const spiceMatch =
    activeSpiceLevel === 'all' || item.spiceLevel === activeSpiceLevel;

    let priceMatch = true;
    if (priceRange === 'low') priceMatch = item.price >= 8 && item.price <= 15;
    if (priceRange === 'medium') priceMatch = item.price >= 16 && item.price <= 25;
    if (priceRange === 'high') priceMatch = item.price >= 26;

    return categoryMatch && dietaryMatch && spiceMatch && priceMatch;
  });

  if (!isHydrated) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 h-96 animate-pulse" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="bg-card border border-border rounded-lg h-96 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden w-full mb-6 flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold">

          <Icon name="AdjustmentsHorizontalIcon" size={20} />
          <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24">
              <MenuFilters
                activeCategory={activeCategory}
                activeDietary={activeDietary}
                activeSpiceLevel={activeSpiceLevel}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onDietaryChange={handleDietaryChange}
                onSpiceLevelChange={handleSpiceLevelChange}
                onPriceRangeChange={handlePriceRangeChange}
                onReset={handleReset} />

            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-headline text-2xl font-bold text-foreground">
                  {activeCategory === 'all' ? 'All Items' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
                </p>
              </div>
            </div>

            {filteredItems.length === 0 ?
            <div className="text-center py-16">
                <Icon name="FaceFrownIcon" size={64} className="text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  No Items Found
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Try adjusting your filters to see more options
                </p>
                <button
                onClick={handleReset}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:shadow-lg transition-all duration-300">

                  Reset Filters
                </button>
              </div> :

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) =>
              <MenuItem key={item.id} item={item} />
              )}
              </div>
            }

            <div className="mt-12">
              <MenuDownload />
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default MenuExperienceInteractive;