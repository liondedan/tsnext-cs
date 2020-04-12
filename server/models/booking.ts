import * as mongoose from 'mongoose';
// import mongoose from 'mongoose';
// import { MongoBooking } from '../../types';
import { Booking } from '../../types';

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  adults: {
    type: Number,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  booking_created: {
    type: Date,
    required: true,
  },
  booking_update: {
    type: Date,
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
    type: Date,
    required: true,
  },
  departureDate: {
    type: Date,
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
    type: Date,
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

export default mongoose.model<Booking & mongoose.Document>(
  'Booking',
  BookingSchema
);

// export default mongoose.model<MongoBooking>('Booking', BookingSchema);
