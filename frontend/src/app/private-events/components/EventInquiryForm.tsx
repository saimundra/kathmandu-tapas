'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  eventType: string;
  eventDate: string;
  guestCount: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
}

interface EventInquiryFormProps {
  className?: string;
}

const EventInquiryForm = ({ className = '' }: EventInquiryFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    eventType: '',
    eventDate: '',
    guestCount: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isHydrated) return;
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        eventType: '',
        eventDate: '',
        guestCount: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <section id="inquiry-form" className={`py-20 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request Event Proposal
            </h2>
            <p className="font-body text-lg text-muted-foreground">Loading form...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry-form" className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request Event Proposal
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Share your vision with us, and we'll create a customized proposal for your event
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-success/10 border-2 border-success rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckIcon" size={32} className="text-success-foreground" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="font-body text-muted-foreground">
                Your event inquiry has been received. Our event coordinator will contact you within 24 hours to discuss your vision and provide a detailed proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="eventType" className="block font-body text-sm font-medium text-foreground mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select event type</option>
                    <option value="corporate-dinner">Corporate Dinner</option>
                    <option value="team-building">Team Building</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="cultural-celebration">Cultural Celebration</option>
                    <option value="wedding-reception">Wedding Reception</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="chefs-table">Chef's Table Experience</option>
                    <option value="cooking-class">Cooking Class</option>
                    <option value="wine-tasting">Wine Tasting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block font-body text-sm font-medium text-foreground mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block font-body text-sm font-medium text-foreground mb-2">
                    Expected Guest Count *
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select guest count</option>
                    <option value="10-20">10-20 guests</option>
                    <option value="20-40">20-40 guests</option>
                    <option value="40-60">40-60 guests</option>
                    <option value="60-80">60-80 guests</option>
                    <option value="80-100">80-100 guests</option>
                    <option value="100+">100+ guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block font-body text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-20000">$10,000 - $20,000</option>
                    <option value="20000-50000">$20,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(202) 555-0123"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-body text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                  Event Details & Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your event vision, dietary requirements, cultural elements you'd like to include, AV needs, or any special requests..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-body text-sm text-muted-foreground">
                  * Required fields. We'll respond within 24 hours.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Icon name="PaperAirplaneIcon" size={20} />
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="PhoneIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-headline text-lg font-bold text-foreground mb-1">Call Us</h4>
              <p className="font-body text-sm text-muted-foreground">(202) 555-TAPAS</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="EnvelopeIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-headline text-lg font-bold text-foreground mb-1">Email Us</h4>
              <p className="font-body text-sm text-muted-foreground">events@kathmandutapas.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="ClockIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-headline text-lg font-bold text-foreground mb-1">Response Time</h4>
              <p className="font-body text-sm text-muted-foreground">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInquiryForm;