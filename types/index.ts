export * from './meta';
import { Document } from 'mongoose';

export interface Booking extends BookingCalc {
  booking_created: Date;
  booking_update: Date | null;
  bookingType: string;
  confirmationEmail: boolean | null;
  confirmationEmailDate: Date | null;
  deposit: number;
  email: string;
  extraInfo: string | undefined;
  firstName: string;
  id: string;
  paymentEmail: boolean;
  paymentEmailDate: Date | null;
  pitch: number;
  remainderPaid: number | null;
  subTotal: number;
  total: number;
  customerId?: any;
  paymentId?: any;
}

export interface BookingCalc {
  children: number;
  departureDate: Date;
  arrivalDate: Date;
  dogs: number;
  hookUp: number;
  infants: number;
  pitchType: string;
  adults: number;
}

export interface MongoBooking extends Document {
  Booking: Booking;
}
