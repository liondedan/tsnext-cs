import express from 'express';
const nextFrame = require('next');
const url = require('url');
require('dotenv').config();

import { connectDb } from './models';
import routes from './routes';

const port: any = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = nextFrame({ dir: '.', dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Create express server and setup middleware
  const server: express.Application = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // Routing
  server.use('/users', routes.user);
  server.use('/messages', routes.message);
  server.get('/', (req: any, res: any) => {
    return nextApp.render(req, res, '/', req.query);
  });

  server.get('/api/a', ({ res }: any) => {
    res.end(JSON.stringify({ a: 1 }));
  });

  server.use('/api/contact', (req: any, res: any) => {
    if (!req.body) return res.sendStatus(400);
    res
      .status(200)
      .send('Success, Your registration has been saved to the database!');
    console.log(res);
    console.log('submitted contact form');
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
