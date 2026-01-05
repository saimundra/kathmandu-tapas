'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PartySizeSelectorProps {
  partySize: number;
  onPartySizeChange: (size: number) => void;
}

const PartySizeSelector = ({ partySize, onPartySizeChange }: PartySizeSelectorProps) => {
  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="UserGroupIcon" size={24} className="text-primary" />
        <h3 className="font-headline text-xl font-semibold text-foreground">
          Party Size
        </h3>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {partySizes.map((size) => (
          <button
            key={size}
            onClick={() => onPartySizeChange(size)}
            className={`
              aspect-square rounded-lg font-body text-lg font-semibold transition-all duration-200 border-2
              ${partySize === size
                ? 'border-primary bg-primary text-primary-foreground shadow-md'
                : 'border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center space-x-2 text-sm text-muted-foreground">
        <Icon name="InformationCircleIcon" size={18} />
        <p className="font-body">
          For parties larger than 8, please contact us directly at (202) 555-0123
        </p>
      </div>
    </div>
  );
};

export default PartySizeSelector;