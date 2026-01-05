'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SocialPlatform {
  name: string;
  icon: string;
  handle: string;
  url: string;
  responseTime: string;
}

interface SocialContactProps {
  className?: string;
}

const SocialContact = ({ className = '' }: SocialContactProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const socialPlatforms: SocialPlatform[] = [
    {
      name: 'Instagram',
      icon: 'CameraIcon',
      handle: '@kathmandudc',
      url: 'https://instagram.com/kathmandudc',
      responseTime: 'Response within 2 hours'
    },
    {
      name: 'Facebook',
      icon: 'UserGroupIcon',
      handle: 'Kathmandu Tapas DC',
      url: 'https://facebook.com/kathmandudc',
      responseTime: 'Response within 4 hours'
    },
    {
      name: 'Twitter',
      icon: 'ChatBubbleLeftIcon',
      handle: '@kathmandudc',
      url: 'https://twitter.com/kathmandudc',
      responseTime: 'Response within 1 hour'
    }
  ];

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Connect With Us
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Loading social channels...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Connect With Us on Social Media
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Follow our culinary journey and stay updated on special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={platform.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-headline font-semibold text-xl text-foreground mb-2">
                  {platform.name}
                </h3>
                <p className="font-body text-base text-primary mb-3">
                  {platform.handle}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {platform.responseTime}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg text-center">
            <h3 className="font-headline font-semibold text-2xl text-foreground mb-4">
              Share Your Experience
            </h3>
            <p className="font-body text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tag us in your photos and stories! We love seeing how our guests experience the fusion of Himalayan tradition and DC sophistication. Use #KathmanduDC to be featured.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-body text-sm font-medium">
                #KathmanduDC
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-body text-sm font-medium">
                #HimalayanFusion
              </span>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full font-body text-sm font-medium">
                #DCDining
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContact;