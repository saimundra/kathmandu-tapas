'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Reserve Table', path: '/reservation-system' },
    { label: 'Menu', path: '/menu-experience' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Private Events', path: '/private-events' },
  ];

  const contactInfo = [
    { icon: 'PhoneIcon', text: '(202) 555-0147', link: 'tel:+12025550147' },
    { icon: 'EnvelopeIcon', text: 'hello@kathmandudc.com', link: 'mailto:hello@kathmandudc.com' },
    { icon: 'MapPinIcon', text: '3251 Prospect St NW, Washington, DC 20007', link: null },
  ];

  if (!isHydrated) {
    return (
      <footer className={`bg-foreground text-primary-foreground py-12 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-body text-sm opacity-80">Loading...</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`bg-foreground text-primary-foreground py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
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
                    opacity="0.2"
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
                  <span className="font-headline font-bold text-xl leading-tight block">
                    Kathmandu Tapas
                  </span>
                  <span className="font-body text-xs opacity-80 tracking-wide">
                    DC CULTURAL DINING
                  </span>
                </div>
              </div>
              <p className="font-body text-sm opacity-80 leading-relaxed">
                Where Himalayan soul meets DC sophistication. Experience authentic fusion crafted with respect.
              </p>
            </div>

            <div>
              <h3 className="font-headline font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="font-body text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name={info.icon as any} size={20} className="flex-shrink-0 mt-0.5 opacity-80" />
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-body text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="font-body text-sm opacity-80">{info.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-body text-sm opacity-80">
                &copy; {currentYear} Kathmandu Tapas DC. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://instagram.com/kathmandudc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Icon name="CameraIcon" size={20} />
                </a>
                <a
                  href="https://facebook.com/kathmandudc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Icon name="UserGroupIcon" size={20} />
                </a>
                <a
                  href="https://twitter.com/kathmandudc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Icon name="ChatBubbleLeftIcon" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;