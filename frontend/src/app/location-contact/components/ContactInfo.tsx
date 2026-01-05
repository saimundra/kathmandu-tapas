import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  link?: string;
  description: string;
}

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '(202) 555-0147',
      link: 'tel:+12025550147',
      description: 'Call us for reservations and inquiries'
    },
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'hello@kathmandudc.com',
      link: 'mailto:hello@kathmandudc.com',
      description: 'Send us a message anytime'
    },
    {
      icon: 'MapPinIcon',
      label: 'Address',
      value: '3251 Prospect Street NW, Washington, DC 20007',
      description: 'Georgetown neighborhood'
    },
    {
      icon: 'ClockIcon',
      label: 'Hours',
      value: 'Mon-Thu: 5:00 PM - 10:00 PM\nFri-Sat: 5:00 PM - 11:00 PM\nSun: 4:00 PM - 9:00 PM',
      description: 'Kitchen closes 30 minutes before closing'
    }
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              We're here to answer your questions and make your visit memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                      <Icon name={method.icon as any} size={28} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline font-semibold text-xl text-foreground mb-2">
                      {method.label}
                    </h3>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="font-body text-base text-primary hover:text-primary/80 transition-colors duration-200 block mb-2 whitespace-pre-line"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-body text-base text-foreground mb-2 whitespace-pre-line">
                        {method.value}
                      </p>
                    )}
                    <p className="font-body text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="font-headline font-semibold text-2xl text-foreground mb-2">
                  Holiday Hours
                </h3>
                <p className="font-body text-base text-muted-foreground">
                  We observe special hours during major holidays. Please call ahead to confirm availability.
                </p>
              </div>
              <a
                href="tel:+12025550147"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Call to Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;