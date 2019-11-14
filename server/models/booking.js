import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
