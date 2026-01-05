'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Table {
  id: string;
  name: string;
  capacity: number;
  location: string;
  features: string[];
  available: boolean;
}

interface TableSelectionProps {
  partySize: number;
  onTableSelect: (tableId: string) => void;
  selectedTable: string | null;
}

const TableSelection = ({ partySize, onTableSelect, selectedTable }: TableSelectionProps) => {
  const tables: Table[] = [
    {
      id: 'T1',
      name: 'Himalayan View',
      capacity: 2,
      location: 'Window seat with street view',
      features: ['Intimate', 'Natural light', 'Romantic'],
      available: true,
    },
    {
      id: 'T2',
      name: 'Annapurna Corner',
      capacity: 4,
      location: 'Corner booth with privacy',
      features: ['Private', 'Comfortable seating', 'Family-friendly'],
      available: true,
    },
    {
      id: 'T3',
      name: 'Everest Suite',
      capacity: 6,
      location: 'Semi-private dining area',
      features: ['Spacious', 'Group dining', 'Premium location'],
      available: true,
    },
    {
      id: 'T4',
      name: 'Kathmandu Central',
      capacity: 4,
      location: 'Center dining room',
      features: ['Vibrant atmosphere', 'Social setting'],
      available: true,
    },
    {
      id: 'T5',
      name: 'Sherpa Lounge',
      capacity: 8,
      location: 'Private dining room',
      features: ['Exclusive', 'Business meetings', 'Celebrations'],
      available: false,
    },
    {
      id: 'T6',
      name: 'Prayer Wheel Bar',
      capacity: 2,
      location: 'Bar seating with cocktail view',
      features: ['Interactive', 'Mixology experience', 'Casual'],
      available: true,
    },
  ];

  const filteredTables = tables.filter((table) => table.capacity >= partySize);

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline text-xl font-semibold text-foreground">
          Select Your Table
        </h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="UserGroupIcon" size={18} />
          <span className="font-body">Party of {partySize}</span>
        </div>
      </div>

      {filteredTables.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="ExclamationTriangleIcon" size={48} className="mx-auto mb-4 text-warning" />
          <p className="font-body text-foreground mb-2">
            No tables available for party size of {partySize}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Please adjust your party size or contact us for special arrangements
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTables.map((table) => (
            <button
              key={table.id}
              onClick={() => table.available && onTableSelect(table.id)}
              disabled={!table.available}
              className={`
                text-left p-4 rounded-lg border-2 transition-all duration-200
                ${!table.available ? 'border-muted bg-muted/50 cursor-not-allowed opacity-60' : ''}
                ${table.available && selectedTable !== table.id ? 'border-border hover:border-primary/50 bg-background' : ''}
                ${selectedTable === table.id ? 'border-primary bg-primary/5' : ''}
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-headline text-lg font-semibold text-foreground mb-1">
                    {table.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="UserGroupIcon" size={16} />
                    <span className="font-body">Up to {table.capacity} guests</span>
                  </div>
                </div>
                {selectedTable === table.id && (
                  <div className="flex-shrink-0">
                    <Icon name="CheckCircleIcon" size={24} className="text-primary" variant="solid" />
                  </div>
                )}
              </div>

              <div className="flex items-start space-x-2 mb-3">
                <Icon name="MapPinIcon" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">{table.location}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {table.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-muted rounded-md font-body text-xs text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {!table.available && (
                <div className="mt-3 flex items-center space-x-2 text-sm text-warning">
                  <Icon name="ClockIcon" size={16} />
                  <span className="font-body">Currently unavailable</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableSelection;