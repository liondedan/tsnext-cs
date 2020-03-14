export * from './meta';
import { Document } from 'mongoose';

export interface Booking {
  adults: number;
  arrivalDate: number;
  booking_created: number;
  booking_update: number;
  bookingType: string;
  children: number;
  confirmationEmail: boolean;
  confirmationEmailDate: number;
  departureDate: number;
  deposit: number;
  dogs: number;
  email: string;
  extraInfo: string;
  firstName: string;
  hookUp: number;
  id: number;
  infants: number;
  lastName: string;
  paymentEmail: boolean;
  paymentEmailDate: number;
  pitch: number;
  pitchType: string;
  remainderPaid: number;
  subTotal: number;
  total: number;
}
export interface MongoBooking extends Document {
  Booking: Booking;
}
