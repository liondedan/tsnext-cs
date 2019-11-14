const mongoose = require('mongoose')
const express = require('express');
const next = require('next');
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

import models, { connectDb } from './models';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Multi-process to utilize all CPU cores.
if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const nextApp = next({ dir: '.', dev });
  const nextHandler = nextApp.getRequestHandler();

  nextApp.prepare()
    .then(() => {
      const server = express();
      server.use(express.json());
      server.use(express.urlencoded({ extended: true }));
      server.use(async (req, res, next) => {
        req.context = {
            models,
            me: await models.User.findByLogin('rwieruch'),
          };
          next();
      });

      if (!dev) {
        // Enforce SSL & HSTS in production
        server.use(function(req, res, next) {
          var proto = req.headers["x-forwarded-proto"];
          if (proto === "https") {
            res.set({
              'Strict-Transport-Security': 'max-age=31557600' // one-year
            });
            return next();
          }
          res.redirect("https://" + req.headers.host + req.url);
        });
      }

        server.use('/users', routes.user);
        server.use('/messages', routes.message);

      const eraseDatabaseOnSync = true;

      connectDb().then(async () => {
        if (eraseDatabaseOnSync) {

        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
          ]);

          createUsersWithMessages();
        }



        server.get('/', (req, res) => {
          return nextApp.render(req, res, '/', req.query)
        })

        server.get('/api/a', (req, res) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ a: 1 }));
        })

        // Default catch-all renders Next app
        server.get('*', (req, res) => {
          // res.set({
          //   'Cache-Control': 'public, max-age=3600'
          // });
          const parsedUrl = url.parse(req.url, true);
          nextHandler(req, res, parsedUrl);
        });
      })

      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Listening on http://localhost:${port}`);
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
