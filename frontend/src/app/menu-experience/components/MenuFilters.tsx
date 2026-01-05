'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MenuFiltersProps {
  activeCategory: string;
  activeDietary: string[];
  activeSpiceLevel: string;
  priceRange: string;
  onCategoryChange: (category: string) => void;
  onDietaryChange: (dietary: string) => void;
  onSpiceLevelChange: (level: string) => void;
  onPriceRangeChange: (range: string) => void;
  onReset: () => void;
}

const MenuFilters = ({
  activeCategory,
  activeDietary,
  activeSpiceLevel,
  priceRange,
  onCategoryChange,
  onDietaryChange,
  onSpiceLevelChange,
  onPriceRangeChange,
  onReset,
}: MenuFiltersProps) => {
  const categories = [
    { id: 'all', label: 'All Items', icon: 'Squares2X2Icon' },
    { id: 'tapas', label: 'Tapas', icon: 'SparklesIcon' },
    { id: 'cocktails', label: 'Cocktails', icon: 'BeakerIcon' },
    { id: 'wine', label: 'Wine', icon: 'GlobeAltIcon' },
    { id: 'specials', label: "Chef\'s Specials", icon: 'StarIcon' },
  ];

  const dietaryOptions = [
    { id: 'vegetarian', label: 'Vegetarian', icon: 'LeafIcon' as const },
    { id: 'vegan', label: 'Vegan', icon: 'SparklesIcon' as const },
    { id: 'gluten-free', label: 'Gluten-Free', icon: 'ShieldCheckIcon' as const },
  ];

  const spiceLevels = [
    { id: 'all', label: 'All Levels', icon: 'FireIcon' },
    { id: 'mild', label: 'Mild', icon: 'FireIcon' },
    { id: 'medium', label: 'Medium', icon: 'FireIcon' },
    { id: 'hot', label: 'Hot', icon: 'FireIcon' },
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'low', label: '$8 - $15' },
    { id: 'medium', label: '$16 - $25' },
    { id: 'high', label: '$26+' },
  ];

  const hasActiveFilters = activeCategory !== 'all' || activeDietary.length > 0 || activeSpiceLevel !== 'all' || priceRange !== 'all';

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-headline text-xl font-semibold text-foreground">
          Filter Menu
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm font-body font-medium text-primary hover:bg-primary/10 rounded-md transition-colors duration-200"
          >
            <Icon name="XMarkIcon" size={16} />
            <span>Reset</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-3">
            Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-md font-body text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name={category.icon as any} size={16} />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-3">
            Dietary Preferences
          </label>
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => onDietaryChange(option.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                  activeDietary.includes(option.id)
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Spice Level
            </label>
            <div className="space-y-2">
              {spiceLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => onSpiceLevelChange(level.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md font-body text-sm transition-all duration-200 ${
                    activeSpiceLevel === level.id
                      ? 'bg-error/10 text-error border border-error' :'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon name={level.icon as any} size={16} />
                  <span>{level.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Price Range
            </label>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => onPriceRangeChange(range.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md font-body text-sm transition-all duration-200 ${
                    priceRange === range.id
                      ? 'bg-primary/10 text-primary border border-primary' :'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  <span>{range.label}</span>
                  {priceRange === range.id && (
                    <Icon name="CheckIcon" size={16} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;