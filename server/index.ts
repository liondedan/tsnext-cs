import express from 'express';
const cookieParser = require('cookie-parser');
const nextFrame = require('next');
const url = require('url');
const forceDomain = require('forcedomain');
require('dotenv').config();
import { connectDb } from './models';
import routes from './routes';
import sgMail from '@sendgrid/mail';
import basicContact from './emailTpl/basicContact';
sgMail.setApiKey(process.env.SG_MAIL || '');
const port: any = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = nextFrame({ dir: '.', dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server: express.Application = express();
  server.use(
    forceDomain({
      hostname: 'www.coastalstay.co.uk',
      protocol: 'https',
    })
  );
  server.use(express.json());
  server.use(cookieParser());
  server.use(express.urlencoded({ extended: true }));

  // Routing
  server.use('/users', routes.user);
  server.use('/messages', routes.message);
  server.use('/api/auth', routes.auth);

  server.get('/', (req: any, res: any) => {
    return nextApp.render(req, res, '/', req.query);
  });

  server.get('/api/a', ({ res }: any) => {
    res.end(JSON.stringify({ a: 1 }));
  });

  server.use('/api/contact', (req: any, res: any) => {
    const emailHtml = basicContact(req.body);
    console.log(req.body);
    const msg = {
      to: 'info@coastalstay.co.uk',
      from: 'info@coastalstay.co.uk',
      subject: 'Coastal Stay: Reserve your booking',
      text: 'Coastal Stay: Reserve your booking',
      html: emailHtml,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.status(200);
        res.send('Oh uh, something went wrong');
      })
      .catch((error: any) => {
        console.log(error);
        res.status(404);
        res.send('There was an error sending the email', error);
      });
  });

  // Default catch-all renders Next app
  server.get('*', (req: any, res: any) => {
    const parsedUrl = url.parse(req.url, true);
    nextHandler(req, res, parsedUrl);
  });

  // Connect to DB and seed with fake data
  connectDb().then(async () => {
    server.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`server started at http://localhost:${port}`);
    });
  });
});
