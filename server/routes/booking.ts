import { Router, Request, Response, NextFunction } from 'express';
import models from '../models';
// import verifyToken from '../utils/verifyToken';
const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const bookings = await models.Booking.find();
  return res.send(bookings);
});

router.get('/:bookingId', async (req: Request, res: Response) => {
  const booking = await models.Booking.findById(req.params.bookingId);
  return res.send(booking);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = new models.Booking(req.body);
    const ret = await booking.save();
    res.status(200).send(ret);
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

router.delete('/:bookingId', async (req: Request, res: Response) => {
  const booking = await models.Booking.findById(req.params.bookingId);
  let result = null;
  if (booking) {
    result = await booking.remove();
  }
  return res.send(result);
});

router.put('/:bookingId', async (req: Request, res: Response) => {
  await models.Booking.findByIdAndUpdate(
    req.params.bookingId,
    req.body,
    { new: true },
    (err: any, booking: any) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(booking);
    }
  );
});

export default router;
