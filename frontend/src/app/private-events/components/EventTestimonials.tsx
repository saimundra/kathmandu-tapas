import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  eventType: string;
}

interface EventTestimonialsProps {
  className?: string;
}

const EventTestimonials = ({ className = '' }: EventTestimonialsProps) => {
  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ambassador Patricia Chen",
    role: "Cultural Attaché",
    company: "Embassy of Nepal",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecab95de-1763295977730.png",
    alt: "Professional Asian woman in formal business attire smiling at camera in office setting",
    rating: 5,
    text: "Kathmandu Tapas provided an authentic and sophisticated venue for our Dashain celebration. The cultural sensitivity combined with world-class service made it perfect for hosting diplomatic guests. The team's attention to traditional details while maintaining DC elegance was exceptional.",
    eventType: "Cultural Celebration"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VP of Operations",
    company: "Capitol Consulting Group",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbc50841-1763296528923.png",
    alt: "Hispanic businessman in navy suit with confident smile in modern office environment",
    rating: 5,
    text: "We've hosted quarterly client dinners here for two years. The private dining experience consistently impresses our most discerning clients. The fusion menu provides conversation starters, and the service team anticipates every need. It's become our signature venue for VIP entertainment.",
    eventType: "Corporate Dining"
  },
  {
    id: 3,
    name: "Sarah & James Thompson",
    role: "Anniversary Celebration",
    company: "Private Event",
    image: "https://images.unsplash.com/photo-1713769519718-e13316095222",
    alt: "Happy couple in formal attire smiling together at elegant event venue",
    rating: 5,
    text: "Our 25th anniversary dinner at the Chef's Table was magical. The personalized menu told our story through flavors, and the cultural elements added depth to our celebration. The staff made us feel like royalty while maintaining the intimate atmosphere we wanted.",
    eventType: "Special Occasion"
  },
  {
    id: 4,
    name: "Dr. Rajesh Sharma",
    role: "Community Leader",
    company: "Nepalese American Association",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1ee908f-1763296006655.png",
    alt: "South Asian man in traditional formal wear with warm smile at cultural event",
    rating: 5,
    text: "As a Nepalese-American, I'm particular about cultural authenticity. Kathmandu Tapas honors our traditions while creating an accessible experience for all guests. They hosted our community's Tihar festival beautifully, respecting every ritual while providing exceptional hospitality.",
    eventType: "Cultural Event"
  },
  {
    id: 5,
    name: "Jennifer Wu",
    role: "Director of HR",
    company: "TechForward Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b38cf7d-1763301197391.png",
    alt: "Professional Asian woman in business casual attire with friendly expression in corporate setting",
    rating: 5,
    text: "Our team building event exceeded expectations. The cooking class format broke down barriers between departments, and the cultural storytelling added educational value. The space accommodated our 60-person team comfortably, and the staff handled dietary restrictions seamlessly.",
    eventType: "Team Building"
  },
  {
    id: 6,
    name: "Robert Hamilton",
    role: "Managing Partner",
    company: "Hamilton & Associates Law",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1de8d0400-1763294237371.png",
    alt: "Distinguished Caucasian businessman in charcoal suit with professional demeanor in law office",
    rating: 5,
    text: "We've used Kathmandu Tapas for multiple partner retreats and client appreciation events. The venue's sophistication matches our firm's standards, while the unique cultural elements make events memorable. The event coordinator's professionalism and attention to detail are unmatched in DC.",
    eventType: "Corporate Retreat"
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from corporate leaders, diplomats, and celebration hosts who trusted us with their important events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) =>
          <div
            key={testimonial.id}
            className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">

              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-headline text-lg font-bold text-foreground truncate">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground truncate">
                    {testimonial.role}
                  </p>
                  <p className="font-body text-xs text-muted-foreground truncate">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, index) =>
              <Icon
                key={index}
                name="StarIcon"
                variant="solid"
                size={16}
                className="text-warning" />

              )}
              </div>

              <p className="font-body text-sm text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-body text-xs font-medium">
                  {testimonial.eventType}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">
            Join our growing list of satisfied corporate and private event clients
          </p>
          <a
            href="#inquiry-form"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">

            Plan Your Event
          </a>
        </div>
      </div>
    </section>);

};

export default EventTestimonials;