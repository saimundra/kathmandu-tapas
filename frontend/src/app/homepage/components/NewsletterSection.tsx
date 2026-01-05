'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection = ({ className = '' }: NewsletterSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;

    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isHydrated) return;
    setEmail(e.target.value);
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="EnvelopeIcon" size={20} className="text-primary" />
            <span className="text-primary font-body text-sm font-medium tracking-wide">
              STAY CONNECTED
            </span>
          </div>

          <h2 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            Join Our Cultural Community
          </h2>

          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive exclusive invitations to cultural events, seasonal menu updates, special offers, and stories from the Himalayas to your inbox
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Icon
                    name="EnvelopeIcon"
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-background border-2 border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Icon name="PaperAirplaneIcon" size={20} />
                </button>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="max-w-xl mx-auto p-6 bg-success/10 border-2 border-success/30 rounded-lg">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="CheckCircleIcon" size={32} className="text-success" />
                <p className="font-headline font-semibold text-lg text-success">
                  Thank you for subscribing! Check your inbox for a welcome gift.
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-xl">
              <Icon name="CalendarDaysIcon" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                Cultural Events
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Exclusive invitations to cooking classes, wine tastings, and Nepalese celebrations
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl">
              <Icon name="SparklesIcon" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                Seasonal Menus
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Be the first to know about new dishes and limited-time offerings
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl">
              <Icon name="GiftIcon" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
                Special Offers
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Subscriber-only discounts and birthday celebration perks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;