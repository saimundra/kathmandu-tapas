'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
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

interface MenuItemProps {
  item: MenuItemData;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian':
        return 'LeafIcon';
      case 'vegan':
        return 'SparklesIcon';
      case 'gluten-free':
        return 'ShieldCheckIcon';
      default:
        return 'CheckCircleIcon';
    }
  };

  const getSpiceColor = (level: string) => {
    switch (level) {
      case 'mild':
        return 'text-success';
      case 'medium':
        return 'text-warning';
      case 'hot':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="PhotoIcon" size={48} className="text-muted-foreground/30" />
          </div>
        )}
        <AppImage
          src={item.image}
          alt={item.alt}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.seasonal && (
            <span className="px-2 py-1 bg-success text-success-foreground text-xs font-body font-semibold rounded-full shadow-md">
              Seasonal
            </span>
          )}
          {item.chefRecommended && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full shadow-md flex items-center space-x-1">
              <Icon name="StarIcon" size={12} variant="solid" />
              <span>Chef's Pick</span>
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {item.dietary.map((diet) => (
            <div
              key={diet}
              className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
              title={diet}
            >
              <Icon name={getDietaryIcon(diet) as any} size={16} className="text-primary" />
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute bottom-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors duration-200"
          aria-label="View details"
        >
          <Icon name={showDetails ? 'XMarkIcon' : 'InformationCircleIcon'} size={20} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-headline text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
              {item.name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="MapPinIcon" size={14} />
              <span className="font-body">{item.origin}</span>
              {item.spiceLevel !== 'none' && (
                <>
                  <span>•</span>
                  <Icon name="FireIcon" size={14} className={getSpiceColor(item.spiceLevel)} />
                  <span className={`font-body capitalize ${getSpiceColor(item.spiceLevel)}`}>
                    {item.spiceLevel}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="text-right">
            <p className="font-headline text-2xl font-bold text-primary">
              ${item.price}
            </p>
          </div>
        </div>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {item.description}
        </p>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-border space-y-4 animate-in fade-in duration-300">
            <div>
              <h4 className="font-body text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
                <Icon name="SparklesIcon" size={16} className="text-primary" />
                <span>Key Ingredients</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-foreground text-xs font-body rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {item.pairing && (
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Icon name="GlobeAltIcon" size={16} className="text-accent" />
                  <span>Perfect Pairing</span>
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {item.pairing}
                </p>
              </div>
            )}

            {item.nutritionalInfo && (
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Icon name="ChartBarIcon" size={16} className="text-success" />
                  <span>Nutritional Info</span>
                </h4>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-muted rounded-md p-2">
                    <p className="font-body text-xs text-muted-foreground">Calories</p>
                    <p className="font-headline text-sm font-semibold text-foreground">
                      {item.nutritionalInfo.calories}
                    </p>
                  </div>
                  <div className="bg-muted rounded-md p-2">
                    <p className="font-body text-xs text-muted-foreground">Protein</p>
                    <p className="font-headline text-sm font-semibold text-foreground">
                      {item.nutritionalInfo.protein}
                    </p>
                  </div>
                  <div className="bg-muted rounded-md p-2">
                    <p className="font-body text-xs text-muted-foreground">Carbs</p>
                    <p className="font-headline text-sm font-semibold text-foreground">
                      {item.nutritionalInfo.carbs}
                    </p>
                  </div>
                  <div className="bg-muted rounded-md p-2">
                    <p className="font-body text-xs text-muted-foreground">Fat</p>
                    <p className="font-headline text-sm font-semibold text-foreground">
                      {item.nutritionalInfo.fat}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mt-4 px-4 py-2.5 bg-primary/10 text-primary rounded-md font-body font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
          <Icon name={showDetails ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} />
        </button>
      </div>
    </div>
  );
};

export default MenuItem;