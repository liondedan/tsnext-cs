import { Router, Request, Response } from 'express';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
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
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

router.post('/create-checkout-session', async (req: Request, res: Response) => {
  console.log('create checkout session');
  const { locale } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    locale: locale,
    line_items: [
      {
        name: 'Pasha photo',
        images: ['https://picsum.photos/300/300?random=4'],
        description: 'Comfortable cotton t-shirt',
        quantity: 2,
        currency: 'gbp',
        amount: 1009, // Keep the amount on the server to prevent customers from manipulating on client
      },
    ],
    success_url: `http://localhost:3000/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/canceled.html`,
  });

  res.send({
    sessionId: session.id,
  });
});

// Webhook handler for asynchronous events.
router.post('/webhook', async (req: Request, res: Response) => {
  console.log('webook done');
  // @ts-ignore
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        // @ts-ignore
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
});

export default router;
