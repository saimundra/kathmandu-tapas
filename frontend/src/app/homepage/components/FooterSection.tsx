'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const navigationLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Reserve', path: '/reservation-system' },
    { label: 'Menu', path: '/menu-experience' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Private Events', path: '/private-events' },
    { label: 'Location & Contact', path: '/location-contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'CameraIcon', url: 'https://instagram.com' },
    { name: 'Facebook', icon: 'UserGroupIcon', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'ChatBubbleLeftRightIcon', url: 'https://twitter.com' },
  ];

  return (
    <footer className={`bg-card border-t border-border ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4L6 16V32L24 44L42 32V16L24 4Z"
                  fill="var(--color-primary)"
                  opacity="0.1"
                />
                <path
                  d="M24 8L10 17V31L24 40L38 31V17L24 8Z"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="24" cy="24" r="6" fill="var(--color-primary)" />
              </svg>
              <div>
                <h3 className="font-headline font-bold text-lg text-foreground">
                  Kathmandu Tapas
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  DC Cultural Dining
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Where Himalayan soul meets DC sophistication. Experience authentic Nepalese-American fusion in the heart of Washington.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon name="MapPinIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-foreground">
                  1234 Connecticut Ave NW\nWashington, DC 20036
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-foreground">
                  (202) 555-0123
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-foreground">
                  info@kathmandutapas.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Mon - Thu</span>
                <span className="text-foreground">5PM - 10PM</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Fri - Sat</span>
                <span className="text-foreground">5PM - 11PM</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground">4PM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
              {isHydrated ? `© ${currentYear}` : '© 2026'} Kathmandu Tapas & Cocktails. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;