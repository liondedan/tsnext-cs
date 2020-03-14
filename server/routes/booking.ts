import { Router } from 'express';
import models from '../models';
import verifyToken from '../utils/verifyToken';
const router = Router();

const fakeData = {
  adults: 1,
  arrivalDate: 1,
  booking_created: 1,
  booking_update: 1,
  bookingType: 'catz',
  children: 1,
  confirmationEmail: true,
  confirmationEmailDate: 1,
  departureDate: 1,
  deposit: 1,
  dogs: 1,
  email: 'catz',
  extraInfo: 'catz',
  firstName: 'catz',
  hookUp: 1,
  id: 1,
  infants: 1,
  lastName: 'catz',
  paymentEmail: true,
  paymentEmailDate: 1,
  pitch: 1,
  pitchType: 'catz',
  remainderPaid: 1,
  subTotal: 1,
  total: 1,
};

router.get('/', verifyToken, async ({ res }: any) => {
  //@ts-ignore
  const bookings = await models.Booking.find();
  return res.send(bookings);
});

router.get('/:bookingId', async (req, res) => {
  const booking = await models.Booking.findById(req.params.bookingId);
  return res.send(booking);
});

router.post('/', async ({ res, next }: any) => {
  try {
    const booking = new models.Booking(fakeData);
    // @ts-ignore
    const ret = await booking.save();
    console.log(ret);
    res.status(200).send(ret);
  } catch (error) {
    // Passes errors into the error handler
    console.log(error);
    return next(error);
  }
});

export default router;
