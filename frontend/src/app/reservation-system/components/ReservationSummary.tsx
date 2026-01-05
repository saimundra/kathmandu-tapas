'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ReservationSummaryProps {
  partySize: number;
  selectedDate: Date | null;
  selectedTime: string | null;
  selectedTable: string | null;
  guestName: string;
  occasion: string;
}

const ReservationSummary = ({
  partySize,
  selectedDate,
  selectedTime,
  selectedTable,
  guestName,
  occasion,
}: ReservationSummaryProps) => {
  const formatDate = (date: Date | null) => {
    if (!date) return 'Not selected';
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const tableNames: { [key: string]: string } = {
    T1: 'Himalayan View',
    T2: 'Annapurna Corner',
    T3: 'Everest Suite',
    T4: 'Kathmandu Central',
    T5: 'Sherpa Lounge',
    T6: 'Prayer Wheel Bar',
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border-2 border-primary/20">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary rounded-lg">
          <Icon name="CalendarIcon" size={24} className="text-primary-foreground" />
        </div>
        <h3 className="font-headline text-xl font-semibold text-foreground">
          Reservation Summary
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Icon name="UserGroupIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Party Size</p>
            <p className="font-body font-semibold text-foreground">
              {partySize} {partySize === 1 ? 'Guest' : 'Guests'}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="CalendarDaysIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Date</p>
            <p className="font-body font-semibold text-foreground">{formatDate(selectedDate)}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="ClockIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Time</p>
            <p className="font-body font-semibold text-foreground">
              {selectedTime || 'Not selected'}
            </p>
          </div>
        </div>

        {selectedTable && (
          <div className="flex items-start space-x-3">
            <Icon name="MapPinIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-body text-sm text-muted-foreground">Table</p>
              <p className="font-body font-semibold text-foreground">
                {tableNames[selectedTable] || selectedTable}
              </p>
            </div>
          </div>
        )}

        {guestName && (
          <div className="flex items-start space-x-3">
            <Icon name="UserIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-body text-sm text-muted-foreground">Guest Name</p>
              <p className="font-body font-semibold text-foreground">{guestName}</p>
            </div>
          </div>
        )}

        {occasion && occasion !== 'Regular Dining' && (
          <div className="flex items-start space-x-3">
            <Icon name="SparklesIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-body text-sm text-muted-foreground">Occasion</p>
              <p className="font-body font-semibold text-foreground">{occasion}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <Icon name="InformationCircleIcon" size={18} className="flex-shrink-0 mt-0.5" />
          <p className="font-body">
            Please arrive 10 minutes before your reservation time. We will hold your table for 15 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;