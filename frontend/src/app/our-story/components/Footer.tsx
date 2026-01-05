'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Reserve', path: '/reservation-system' },
    { label: 'Menu', path: '/menu-experience' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Private Events', path: '/private-events' },
    { label: 'Location & Contact', path: '/location-contact' },
  ];

  const socialLinks = [
    { icon: 'GlobeAltIcon', label: 'Website', url: '#' },
    { icon: 'EnvelopeIcon', label: 'Email', url: 'mailto:info@kathmandutapas.com' },
  ];

  return (
    <footer className={`bg-card border-t border-border ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/homepage" className="inline-flex items-center space-x-3 mb-4">
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
                <path
                  d="M24 18V30M18 24H30"
                  stroke="var(--color-primary-foreground)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-lg text-foreground leading-tight">
                  Kathmandu Tapas
                </span>
                <span className="font-body text-xs text-muted-foreground tracking-wide">
                  DC CULTURAL DINING
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
              Where Himalayan soul meets DC sophistication. Experience authentic Nepalese-American fusion cuisine in the heart of Washington DC.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-base font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-base font-bold text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-body text-sm text-muted-foreground">
                1234 Georgetown Pike
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Washington, DC 20007
              </p>
              <p className="font-body text-sm text-muted-foreground">
                (202) 555-0123
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Kathmandu Tapas & Cocktails. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;