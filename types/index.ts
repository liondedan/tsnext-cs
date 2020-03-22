export * from './meta';
import { Document } from 'mongoose';

export interface Booking {
  adults: number;
  arrivalDate: Date;
  booking_created: Date;
  booking_update: Date;
  bookingType: string;
  children: number;
  confirmationEmail: boolean;
  confirmationEmailDate: Date;
  departureDate: Date;
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
  paymentEmailDate: Date;
  pitch: number;
  pitchType: string;
  remainderPaid: number;
  subTotal: number;
  total: number;
}
export interface MongoBooking extends Document {
  Booking: Booking;
}
