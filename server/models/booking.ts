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
    required: false,
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
    required: false,
  },
  confirmationEmailDate: {
    type: Date,
    required: false,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  deposit: {
    type: Number,
    required: false,
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
    required: false,
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
    type: String,
    required: true,
  },
  infants: {
    type: Number,
    required: true,
  },
  paymentEmail: {
    type: Boolean,
    required: false,
  },
  paymentEmailDate: {
    type: Date,
    required: false,
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
    required: false,
  },
  subTotal: {
    type: Number,
    required: false,
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
