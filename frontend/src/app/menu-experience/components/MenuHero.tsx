import React from 'react';

interface MenuHeroProps {
  className?: string;
}

const MenuHero = ({ className = '' }: MenuHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="font-body text-sm font-medium text-primary tracking-wide">
              CULINARY JOURNEY
            </span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Himalayan Flavors Meet<br />DC Sophistication
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of Nepalese-inspired tapas, signature cocktails, and fusion creations that honor tradition while celebrating innovation.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default MenuHero;