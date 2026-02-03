import React, { createContext, useState } from 'react';

export type BookingData = {
  service?: string;
  date?: string;
  address?: string;
};

export type BookingContextType = {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
};

// ✅ EXPORT the context
export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

// ✅ EXPORT the provider
export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bookingData, setBookingData] = useState<BookingData>({});

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

// ✅ EXPORT the hook
export const useBooking = (): BookingContextType => {
  const context = React.useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
