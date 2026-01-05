'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface EventFAQProps {
  className?: string;
}

const EventFAQ = ({ className = '' }: EventFAQProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How far in advance should I book my event?",
      answer: "We recommend booking 3-6 months in advance for large events (60+ guests) and 4-8 weeks for smaller gatherings. However, we can often accommodate last-minute requests depending on availability. Peak seasons (holidays, spring) book faster, so earlier is always better."
    },
    {
      id: 2,
      question: "What is your cancellation and deposit policy?",
      answer: "We require a 25% deposit to secure your date, which is non-refundable but can be applied to a rescheduled date within 12 months. Cancellations made 30+ days before the event receive a 50% refund of remaining balance. Within 30 days, no refund is provided, but we work with you to find alternative solutions."
    },
    {
      id: 3,
      question: "Can you accommodate dietary restrictions and allergies?",
      answer: "Absolutely. Our culinary team specializes in accommodating all dietary needs including vegetarian, vegan, gluten-free, kosher, halal, and specific allergies. We require final dietary counts 7 days before your event and can create custom menu items to ensure every guest enjoys the experience."
    },
    {
      id: 4,
      question: "Do you offer full venue buyouts?",
      answer: "Yes, we offer complete venue buyouts for events requiring exclusive use. Minimum guest counts and spending requirements apply based on day of week and season. Buyouts include all event spaces, dedicated staff, and priority access to our full service offerings."
    },
    {
      id: 5,
      question: "What AV equipment and technology do you provide?",
      answer: "All private spaces include complimentary wireless microphones, projector/screen setup, and sound system. We can arrange additional equipment like video conferencing, stage lighting, and professional recording services through our preferred vendors at competitive rates."
    },
    {
      id: 6,
      question: "Can we bring our own decorations or hire outside vendors?",
      answer: "You're welcome to bring decorations that complement our cultural aesthetic. Outside vendors (florists, photographers, entertainment) must be approved in advance and provide proof of insurance. We have preferred vendor relationships that ensure seamless coordination and often better pricing."
    },
    {
      id: 7,
      question: "What is included in your event packages?",
      answer: "All packages include dedicated event coordinator, setup/cleanup, standard tableware and linens, basic AV equipment, and service staff. Food, beverages, enhanced decor, entertainment, and specialized services are customized based on your needs and budget."
    },
    {
      id: 8,
      question: "Do you provide off-site catering services?",
      answer: "Yes, we offer full-service catering for events at your location within the DC metro area. This includes food preparation, delivery, setup, service staff, and cleanup. Minimum guest counts and travel fees apply based on distance and event complexity."
    },
    {
      id: 9,
      question: "Can you incorporate specific cultural traditions or ceremonies?",
      answer: "This is our specialty. Whether it's a traditional Nepalese ceremony, religious ritual, or cultural celebration from any background, our team works closely with you to honor traditions authentically while ensuring all guests feel included and comfortable."
    },
    {
      id: 10,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and corporate checks. Payment schedules are flexible: deposit at booking, 50% two weeks before event, and final balance due day-of. Corporate accounts with NET-30 terms are available for established clients."
    },
    {
      id: 11,
      question: "Is parking available for event guests?",
      answer: "We coordinate with nearby parking facilities to provide discounted rates for your guests. Valet service can be arranged for an additional fee. We're also accessible via Metro (Dupont Circle station) and can provide detailed parking/transit information for your invitations."
    },
    {
      id: 12,
      question: "What happens if we exceed our guest count?",
      answer: "We build 10% flexibility into all bookings. If you exceed this, we'll do our best to accommodate with advance notice (minimum 72 hours). Additional charges apply for extra guests, and space constraints may require adjustments to room configuration or service style."
    }
  ];

  const handleToggle = (id: number) => {
    if (!isHydrated) return;
    setOpenId(openId === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about planning your event at Kathmandu Tapas
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-background rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted transition-colors duration-200"
              >
                <span className="font-headline text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">
            Still have questions? Our event team is here to help.
          </p>
          <a
            href="#inquiry-form"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Contact Event Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventFAQ;