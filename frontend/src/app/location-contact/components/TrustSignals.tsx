import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  name: string;
  image: string;
  alt: string;
  description: string;
}

interface TrustSignalsProps {
  className?: string;
}

const TrustSignals = ({ className = '' }: TrustSignalsProps) => {
  const certifications: Certification[] = [
  {
    name: 'DC Health Department',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2c1821a-1767594457964.png",
    alt: 'Official DC Health Department certification badge with blue and white colors showing A-grade rating',
    description: 'A-Grade Health Rating'
  },
  {
    name: 'DC Business License',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_198af4ae8-1765117840307.png",
    alt: 'Washington DC business license certificate with official seal and registration number',
    description: 'Licensed & Registered'
  },
  {
    name: 'Restaurant Association',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14980e8f6-1767594457018.png",
    alt: 'National Restaurant Association membership certificate with gold emblem and professional typography',
    description: 'Member Since 2022'
  },
  {
    name: 'Food Safety Certified',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6adf987-1766615174844.png",
    alt: 'ServSafe food safety certification badge with red and white colors showing certified status',
    description: 'ServSafe Certified'
  }];


  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Licensed & Certified
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Your safety and satisfaction are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) =>
            <div key={index} className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-32 mb-4 rounded-md overflow-hidden bg-muted">
                  <AppImage
                  src={cert.image}
                  alt={cert.alt}
                  className="w-full h-full object-cover" />

                </div>
                <h3 className="font-headline font-semibold text-base text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg text-center">
            <p className="font-body text-base text-muted-foreground">
              All certifications and licenses are current and displayed at our restaurant. We maintain the highest standards of food safety, cleanliness, and operational excellence as required by Washington DC regulations.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustSignals;