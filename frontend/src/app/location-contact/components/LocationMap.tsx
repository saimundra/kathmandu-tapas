import React from 'react';

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = '' }: LocationMapProps) => {
  const latitude = 38.9072;
  const longitude = -77.0369;

  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
              Find Us on the Map
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Located in the vibrant Georgetown neighborhood, steps from M Street shopping and dining
            </p>
          </div>

          <div className="bg-background rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Kathmandu Tapas DC Location"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
              className="border-0"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17V7M15 17V7M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg text-foreground mb-2">Metro Access</h3>
              <p className="font-body text-sm text-muted-foreground">
                Foggy Bottom Station (0.4 mi)\nDupont Circle Station (0.6 mi)
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9L12 3L5 9V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V9Z" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V12H15V21" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg text-foreground mb-2">Parking Options</h3>
              <p className="font-body text-sm text-muted-foreground">
                Georgetown Park Garage (0.2 mi)\nStreet parking available after 6:30 PM
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg text-foreground mb-2">Walking Distance</h3>
              <p className="font-body text-sm text-muted-foreground">
                Georgetown Waterfront (0.3 mi)\nDumbarton Oaks (0.5 mi)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;