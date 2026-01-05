'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion: string;
  dietaryRestrictions: string[];
  specialRequests: string;
}

interface GuestDetailsFormProps {
  guestDetails: GuestDetails;
  onDetailsChange: (details: GuestDetails) => void;
}

const GuestDetailsForm = ({ guestDetails, onDetailsChange }: GuestDetailsFormProps) => {
  const occasions = [
    'Regular Dining',
    'Birthday',
    'Anniversary',
    'Business Dinner',
    'Date Night',
    'Celebration',
    'Cultural Event',
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut Allergy',
    'Shellfish Allergy',
  ];

  const handleInputChange = (field: keyof GuestDetails, value: string) => {
    onDetailsChange({ ...guestDetails, [field]: value });
  };

  const handleDietaryToggle = (option: string) => {
    const current = guestDetails.dietaryRestrictions;
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    onDetailsChange({ ...guestDetails, dietaryRestrictions: updated });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h3 className="font-headline text-xl font-semibold text-foreground mb-6">
        Guest Information
      </h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-body text-sm font-medium text-foreground mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={guestDetails.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="Enter first name"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block font-body text-sm font-medium text-foreground mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={guestDetails.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="Enter last name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="EnvelopeIcon" size={20} className="text-muted-foreground" />
            </div>
            <input
              type="email"
              id="email"
              value={guestDetails.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="PhoneIcon" size={20} className="text-muted-foreground" />
            </div>
            <input
              type="tel"
              id="phone"
              value={guestDetails.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="(555) 123-4567"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="occasion" className="block font-body text-sm font-medium text-foreground mb-2">
            Occasion
          </label>
          <select
            id="occasion"
            value={guestDetails.occasion}
            onChange={(e) => handleInputChange('occasion', e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          >
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-3">
            Dietary Restrictions
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {dietaryOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleDietaryToggle(option)}
                className={`
                  px-4 py-2 rounded-md font-body text-sm font-medium transition-all duration-200 border-2
                  ${guestDetails.dietaryRestrictions.includes(option)
                    ? 'border-primary bg-primary/10 text-primary' :'border-border bg-background text-foreground hover:border-primary/50'
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="specialRequests" className="block font-body text-sm font-medium text-foreground mb-2">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            value={guestDetails.specialRequests}
            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
            placeholder="Any special requests or accommodations? (e.g., high chair, wheelchair access, specific seating preferences)"
          />
        </div>
      </div>
    </div>
  );
};

export default GuestDetailsForm;