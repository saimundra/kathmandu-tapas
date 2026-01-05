'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  time: string;
  available: boolean;
  tables: number;
}

interface ReservationCalendarProps {
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
}

const ReservationCalendar = ({
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedTime,
}: ReservationCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1));

  const timeSlots: TimeSlot[] = [
    { time: '5:00 PM', available: true, tables: 3 },
    { time: '5:30 PM', available: true, tables: 2 },
    { time: '6:00 PM', available: true, tables: 5 },
    { time: '6:30 PM', available: true, tables: 4 },
    { time: '7:00 PM', available: true, tables: 2 },
    { time: '7:30 PM', available: false, tables: 0 },
    { time: '8:00 PM', available: true, tables: 3 },
    { time: '8:30 PM', available: true, tables: 6 },
    { time: '9:00 PM', available: true, tables: 4 },
    { time: '9:30 PM', available: true, tables: 2 },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect(selected);
  };

  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isPastDate = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date(2026, 0, 5);
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline text-xl font-semibold text-foreground">
            Select Date
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={previousMonth}
              className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Previous month"
            >
              <Icon name="ChevronLeftIcon" size={20} />
            </button>
            <span className="font-body font-medium text-foreground min-w-[140px] text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button
              onClick={nextMonth}
              className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
              aria-label="Next month"
            >
              <Icon name="ChevronRightIcon" size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center font-body text-sm font-medium text-muted-foreground py-2"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isSelected = isSelectedDate(day);
            const isPast = isPastDate(day);

            return (
              <button
                key={day}
                onClick={() => !isPast && handleDateClick(day)}
                disabled={isPast}
                className={`
                  aspect-square rounded-md font-body text-sm transition-all duration-200
                  ${isPast ? 'text-muted-foreground/40 cursor-not-allowed' : 'hover:bg-muted cursor-pointer'}
                  ${isSelected ? 'bg-primary text-primary-foreground font-semibold' : 'text-foreground'}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
            Available Times
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && onTimeSelect(slot.time)}
                disabled={!slot.available}
                className={`
                  px-4 py-3 rounded-md font-body text-sm font-medium transition-all duration-200
                  ${!slot.available ? 'bg-muted text-muted-foreground cursor-not-allowed' : ''}
                  ${slot.available && selectedTime !== slot.time ? 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary' : ''}
                  ${selectedTime === slot.time ? 'bg-primary text-primary-foreground' : ''}
                `}
              >
                <div>{slot.time}</div>
                {slot.available && (
                  <div className="text-xs mt-1 opacity-70">
                    {slot.tables} tables
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationCalendar;