'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MenuDownloadProps {
  className?: string;
}

const MenuDownload = ({ className = '' }: MenuDownloadProps) => {
  const handleDownload = () => {
    alert('Menu PDF download would start here. This is a demo implementation.');
  };

  const handleShare = (platform: string) => {
    alert(`Sharing to ${platform} would happen here. This is a demo implementation.`);
  };

  return (
    <div className={`bg-gradient-to-br from-primary/10 via-accent/5 to-background border border-border rounded-lg p-6 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
            Take Our Menu With You
          </h3>
          <p className="font-body text-muted-foreground">
            Download our complete menu or share your favorite dishes with friends and family.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Icon name="ArrowDownTrayIcon" size={20} />
            <span>Download Menu PDF</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleShare('Facebook')}
              className="w-12 h-12 bg-accent/10 text-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex items-center justify-center"
              aria-label="Share on Facebook"
            >
              <Icon name="ShareIcon" size={20} />
            </button>
            <button
              onClick={() => handleShare('Twitter')}
              className="w-12 h-12 bg-accent/10 text-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex items-center justify-center"
              aria-label="Share on Twitter"
            >
              <Icon name="ShareIcon" size={20} />
            </button>
            <button
              onClick={() => handleShare('Instagram')}
              className="w-12 h-12 bg-accent/10 text-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex items-center justify-center"
              aria-label="Share on Instagram"
            >
              <Icon name="ShareIcon" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDownload;