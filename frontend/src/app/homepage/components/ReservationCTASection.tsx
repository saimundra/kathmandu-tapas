import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ReservationCTASectionProps {
  className?: string;
}

const ReservationCTASection = ({ className = '' }: ReservationCTASectionProps) => {
  const features = [
  {
    icon: 'CalendarDaysIcon',
    title: 'Easy Booking',
    description: 'Reserve your table in seconds with our streamlined system'
  },
  {
    icon: 'ClockIcon',
    title: 'Flexible Times',
    description: 'Lunch, dinner, and late-night dining options available'
  },
  {
    icon: 'SparklesIcon',
    title: 'Special Requests',
    description: 'Dietary preferences and celebration arrangements welcomed'
  },
  {
    icon: 'GiftIcon',
    title: 'Exclusive Perks',
    description: 'Join our loyalty program for special benefits and invitations'
  }];


  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1f587d908-1765261181204.png"
          alt="Elegant restaurant interior with warm lighting, set tables with white linens, and traditional Nepalese decorative elements creating inviting atmosphere"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              <span className="text-primary-foreground font-body text-sm font-medium tracking-wide">
                RESERVE YOUR EXPERIENCE
              </span>
            </div>

            <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6">
              Begin Your Himalayan Journey Tonight
            </h2>

            <p className="font-body text-xl text-white/90 mb-8 leading-relaxed">
              Whether it's an intimate dinner for two, a corporate celebration, or a cultural gathering, we're ready to create an unforgettable experience for you.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) =>
              <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/30">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-white/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation-system"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1">

                <Icon name="CalendarDaysIcon" size={20} />
                <span>Reserve Now</span>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

              <Link
                href="/private-events"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-md font-headline font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50">

                <Icon name="BuildingOfficeIcon" size={20} />
                <span>Private Events</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="font-headline font-bold text-2xl text-white mb-6">
                  Hours of Operation
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-body text-white/80">Monday - Thursday</span>
                    <span className="font-headline font-semibold text-white">5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-body text-white/80">Friday - Saturday</span>
                    <span className="font-headline font-semibold text-white">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-body text-white/80">Sunday</span>
                    <span className="font-headline font-semibold text-white">4:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-white/80">Happy Hour</span>
                    <span className="font-headline font-semibold text-white">5:00 PM - 7:00 PM</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/20 rounded-lg border border-primary/30">
                  <div className="flex items-start space-x-3">
                    <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-white/90">
                      Reservations recommended for dinner service. Walk-ins welcome at the bar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ReservationCTASection;