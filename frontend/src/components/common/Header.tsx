'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Reserve', path: '/reservation-system' },
    { label: 'Menu', path: '/menu-experience' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Private Events', path: '/private-events' },
  ];

  const moreItems = [
    { label: 'Location & Contact', path: '/location-contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActivePath = (path: string) => pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-card shadow-md' : 'bg-card'
        } ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:scale-105"
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
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl text-foreground leading-tight">
                  Kathmandu Tapas
                </span>
                <span className="font-body text-xs text-muted-foreground tracking-wide">
                  DC CULTURAL DINING
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-md font-body font-medium text-sm transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="relative group">
                <button className="px-4 py-2 rounded-md font-body font-medium text-sm text-foreground hover:text-primary hover:bg-muted transition-all duration-300 flex items-center space-x-1">
                  <span>More</span>
                  <Icon name="ChevronDownIcon" size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 bg-popover rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                  <div className="py-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-4 py-2 font-body text-sm transition-colors duration-200 ${
                          isActivePath(item.path)
                            ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/reservation-system"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Reserve Table
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background"
            onClick={toggleMobileMenu}
          />
          <div className="absolute top-20 left-0 right-0 bottom-0 bg-card overflow-y-auto">
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {[...navigationItems, ...moreItems].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={toggleMobileMenu}
                  className={`block px-4 py-3 rounded-md font-body font-medium text-base transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  href="/reservation-system"
                  onClick={toggleMobileMenu}
                  className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Reserve Table
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;