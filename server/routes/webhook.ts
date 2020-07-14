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
      console.log("Stripe Object: " + stripeObject.object)

      let metaData = {
        firstName: 'Harriet',
        email: 'jim@him.com',
        arrivalDate: '2020-07-14',
        departureDate: '2020-07-16',
        extraInfo: 'hello punkjs',
        adults: '6',
        pitchType: 'Standard Pitch',
        children: '1',
        infants: '0',
        dogs: '0',
        hookUp: '1',
        booking_created: '2020-07-14T14:16:18.799Z',
        booking_updated: '',
        bookingType: 'Coastal Stay',
        confirmationEmail: 'false',
        confirmationEmailDate: '',
        remainderPaid: '',
        deposit: '0',
        paymentEmail: 'false',
        paymentEmailDate: '',
        pitch: '1'
      }

      let bookingObj = {
        ...stripeObject.metadata,
        id: stripeObject.id,
        customerId: stripeObject.customer,
        paymentId: stripeObject.id,
        // @ts-ignore
        total: stripeObject.display_items[0].amount
      };

      console.log("Booking Object " + bookingObj);

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
