'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import PartySizeSelector from './PartySizeSelector';
import ReservationCalendar from './ReservationCalendar';
import TableSelection from './TableSelection';
import GuestDetailsForm from './GuestDetailsForm';
import ReservationSummary from './ReservationSummary';

interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion: string;
  dietaryRestrictions: string[];
  specialRequests: string;
}

const ReservationInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [partySize, setPartySize] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occasion: 'Regular Dining',
    dietaryRestrictions: [],
    specialRequests: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded-lg w-1/3" />
              <div className="h-64 bg-muted rounded-lg" />
              <div className="h-96 bg-muted rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Party Size', icon: 'UserGroupIcon' },
    { number: 2, title: 'Date & Time', icon: 'CalendarIcon' },
    { number: 3, title: 'Select Table', icon: 'MapPinIcon' },
    { number: 4, title: 'Guest Details', icon: 'UserIcon' },
  ];

  const canProceedToStep = (step: number): boolean => {
    switch (step) {
      case 2:
        return partySize > 0;
      case 3:
        return selectedDate !== null && selectedTime !== null;
      case 4:
        return selectedTable !== null;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep < 4 && canProceedToStep(currentStep + 1)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (
      guestDetails.firstName &&
      guestDetails.lastName &&
      guestDetails.email &&
      guestDetails.phone
    ) {
      setShowConfirmation(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewReservation = () => {
    setCurrentStep(1);
    setPartySize(2);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedTable(null);
    setGuestDetails({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      occasion: 'Regular Dining',
      dietaryRestrictions: [],
      specialRequests: '',
    });
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6">
                <Icon name="CheckCircleIcon" size={48} className="text-success" variant="solid" />
              </div>

              <h2 className="font-headline text-3xl font-bold text-foreground mb-4">
                Reservation Confirmed!
              </h2>

              <p className="font-body text-lg text-muted-foreground mb-8">
                Thank you, {guestDetails.firstName}! Your reservation has been successfully confirmed.
              </p>

              <div className="bg-muted rounded-lg p-6 mb-8 text-left">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
                  Reservation Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Confirmation #:</span>
                    <span className="font-body font-semibold text-foreground">KT-2026-{Math.floor(Math.random() * 10000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Party Size:</span>
                    <span className="font-body font-semibold text-foreground">{partySize} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Date:</span>
                    <span className="font-body font-semibold text-foreground">
                      {selectedDate?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Time:</span>
                    <span className="font-body font-semibold text-foreground">{selectedTime}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="EnvelopeIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="font-body text-sm text-foreground text-left">
                    A confirmation email has been sent to <strong>{guestDetails.email}</strong> with all the details and a calendar invite.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleNewReservation}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Make Another Reservation
                </button>
                <a
                  href="/menu-experience"
                  className="px-6 py-3 bg-muted text-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:bg-muted/80"
                >
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Reserve Your Table
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the fusion of Himalayan traditions and DC sophistication. Book your cultural culinary journey today.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center font-headline font-semibold transition-all duration-300
                        ${currentStep >= step.number
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                        }
                      `}
                    >
                      {currentStep > step.number ? (
                        <Icon name="CheckIcon" size={24} />
                      ) : (
                        <Icon name={step.icon as any} size={24} />
                      )}
                    </div>
                    <span className="font-body text-sm font-medium text-foreground mt-2 hidden md:block">
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`
                        flex-1 h-1 mx-2 transition-all duration-300
                        ${currentStep > step.number ? 'bg-primary' : 'bg-muted'}
                      `}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {currentStep === 1 && (
                <PartySizeSelector
                  partySize={partySize}
                  onPartySizeChange={setPartySize}
                />
              )}

              {currentStep === 2 && (
                <ReservationCalendar
                  onDateSelect={setSelectedDate}
                  onTimeSelect={setSelectedTime}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              )}

              {currentStep === 3 && (
                <TableSelection
                  partySize={partySize}
                  onTableSelect={setSelectedTable}
                  selectedTable={selectedTable}
                />
              )}

              {currentStep === 4 && (
                <GuestDetailsForm
                  guestDetails={guestDetails}
                  onDetailsChange={setGuestDetails}
                />
              )}

              <div className="flex items-center justify-between pt-6">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="px-6 py-3 bg-muted text-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Icon name="ChevronLeftIcon" size={20} />
                  <span>Back</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceedToStep(currentStep + 1)}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <span>Continue</span>
                    <Icon name="ChevronRightIcon" size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={
                      !guestDetails.firstName ||
                      !guestDetails.lastName ||
                      !guestDetails.email ||
                      !guestDetails.phone
                    }
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Icon name="CheckIcon" size={20} />
                    <span>Confirm Reservation</span>
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ReservationSummary
                  partySize={partySize}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  selectedTable={selectedTable}
                  guestName={
                    guestDetails.firstName && guestDetails.lastName
                      ? `${guestDetails.firstName} ${guestDetails.lastName}`
                      : ''
                  }
                  occasion={guestDetails.occasion}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInteractive;