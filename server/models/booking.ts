import mongoose from 'mongoose';
import { MongoBooking } from '../../types';

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  adults: {
    type: Number,
    required: true,
  },
  arrivalDate: {
    type: Number,
    required: true,
  },
  booking_created: {
    type: Number,
    required: true,
  },
  booking_update: {
    type: Number,
    required: true,
  },
  bookingType: {
    type: String,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },
  confirmationEmail: {
    type: Boolean,
    required: true,
  },
  confirmationEmailDate: {
    type: Number,
    required: true,
  },
  departureDate: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
  dogs: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  extraInfo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  hookUp: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  infants: {
    type: Number,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  paymentEmail: {
    type: Boolean,
    required: true,
  },
  paymentEmailDate: {
    type: Number,
    required: true,
  },
  pitch: {
    type: Number,
    required: true,
  },
  pitchType: {
    type: String,
    required: true,
  },
  remainderPaid: {
    type: Number,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<MongoBooking>('Booking', BookingSchema);
