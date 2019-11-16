import express, { Request, Response, NextFunction } from 'express';
const nextFrame = require('next');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
require('dotenv').config();
import models, { connectDb } from './models';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
//
// Multi-process to utilize all CPU cores.
if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker: any, code: any, signal: any) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const nextApp = nextFrame({ dir: '.', dev });
  const nextHandler = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    // Create express server and setup middleware
    const server: express.Application = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    if (!dev) {
      // Enforce SSL & HSTS in production
      server.use(function(req: Request, res: Response, next: NextFunction) {
        var proto = req.headers['x-forwarded-proto'];
        if (proto === 'https') {
          res.set({
            'Strict-Transport-Security': 'max-age=31557600', // one-year
          });

          return next();
        }
        res.redirect('https://' + req.headers.host + req.url);
      });
    }

    // Routing
    server.use('/users', routes.user);
    server.use('/messages', routes.message);
    server.get('/', (req: any, res: any) => {
      return nextApp.render(req, res, '/', req.query);
    });
    server.get('/api/a', ({ res }: any) => {
      res.end(JSON.stringify({ a: 1 }));
    });
    // Default catch-all renders Next app
    server.get('*', (req: any, res: any) => {
      // res.set({
      //   'Cache-Control': 'public, max-age=3600'
      // });
      const parsedUrl = url.parse(req.url, true);
      nextHandler(req, res, parsedUrl);
    });

    // Connect to DB and seed with fake data
    const eraseDatabaseOnSync = true;
    connectDb().then(async () => {
      if (eraseDatabaseOnSync) {
        await Promise.all([
          models.User.deleteMany({}),
          models.Message.deleteMany({}),
        ]);
        createUsersWithMessages();
      }
    });

    const port: any = process.env.PORT || 3000;
    // server.listen(port => {
    //   console.log(`Listening on http://localhost:${port}`);
    // });
    server.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`server started at http://localhost:${port}`);
    });
  });
}

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });
  const user2 = new models.User({
    username: 'ddavids',
  });
  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });
  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });
  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });
  await message1.save();
  await message2.save();
  await message3.save();
  await user1.save();
  await user2.save();
};
