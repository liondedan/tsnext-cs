import { Router, Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import models from '../models';

//@ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-03-02',
});

require('dotenv').config();
const router = Router();

router.get('/config', (_req: Request, res: Response) => {
  res.send({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    basePrice: process.env.BASE_PRICE,
    currency: process.env.CURRENCY,
  });
});

router.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  (req: Request, res: Response, next: NextFunction) => {
    const sig = req.headers['stripe-signature'];

    let event: Stripe.Event;
    console.log(req.body);

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // Cast event data to Stripe object
    if (event.type === 'checkout.session.completed') {
      const stripeObject: Stripe.PaymentIntent = event.data
        .object as Stripe.PaymentIntent;
      console.log(`💰 Checkout Session Complete: ${stripeObject.status}`);
      console.log(' BEFORE DA EVENT DATA');
      console.log(event.data, ' event data');
      // console.log(req.body, ' req body');

      // let metaData = stripeObject.metadata;

      console.log(stripeObject, " stripe obj")

      let metaData = {
        firstName: 'Daniel',
        id: 123,
        email: 'info@thinkdan.co.uk',
        arrivalDate: '2020-04-30',
        departureDate: '2020-05-01',
        extraInfo: '',
        adults: '1',
        pitchType: 'Standard Pitch',
        children: '0',
        infants: '0',
        dogs: '0',
        hookUp: '0',
        booking_created: '2020-04-30T11:20:13.386Z',
        booking_updated: null,
        bookingType: 'Coastal Stay',
        confirmationEmail: 'false',
        confirmationEmailDate: null,
        remainderPaid: null,
        deposit: '0',
        paymentEmail: false,
        paymentEmailDate: null,
        pitch: '1',
        total: 10,
        subTotal: 223,
      };

      let bookingObj = {
        ...metaData,
        customerId: stripeObject.customer,
        paymentId: stripeObject.id,
      };

      console.log(bookingObj);

      console.log('We heree boooyzz');
      // Add booking to DB
      try {
        // const booking = new models.Booking(req.body);
        const booking = new models.Booking(bookingObj);
        booking.save().then(booking => {
          console.log('Booking MADDE' + booking);
        });
      } catch (error) {
        console.log(error);
        return next(error);
      }
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

        // Return a response to acknowledge receipt of the event
        res.json({ received: true });
  }
);

export default router;
