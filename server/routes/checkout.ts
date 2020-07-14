import { Router, Request, Response } from 'express';
import Stripe from 'stripe';

//@ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-03-02',
});

require('dotenv').config();
const router = Router();

// const domainURL = process.env.development
//   ? 'localhost:3000'
//   : 'www.coastalstay.co.uk';

router.get('/config', (_req: Request, res: Response) => {
  res.send({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    basePrice: process.env.BASE_PRICE,
    currency: process.env.CURRENCY,
  });
});

// Fetch the Checkout Session to display the JSON result on the success page
router.get('/checkout-session', async (req, res) => {
  console.log('got te chekcout sessioins');
  const { sessionId } = req.query;
  console.log(req.query);
  console.log(req.query.sessionId);
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  console.log(session);
  res.send(session);
});

router.post('/create-checkout-session', async (req: Request, res: Response) => {
  const { locale, price, booking } = req.body;
  // console.log(req, 'req body');
  // console.log(price, 'price');
  // console.log(booking, 'booking');
  // console.log(locale, 'locale');
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    locale: locale,
    metadata: booking,
    line_items: [
      {
        name: 'Coastal Stay Camping',
        images: ['https://picsum.photos/300/300?random=4'],
        description: 'Pembrokeshire Camping Pitch',
        quantity: 1,
        currency: 'gbp',
        amount: price * 100, // Keep the amount on the server to prevent customers from manipulating on client
      },
    ],
    success_url: `http://${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://${process.env.APP_URL}/canceled`,
  });

  console.log(session);

  res.send({
    sessionId: session.id,
  });
});

export default router;
