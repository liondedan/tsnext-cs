import mongoose from 'mongoose';
require('dotenv').config();

import User from './user';
import Message from './message';
import Person from './person';
import Booking from './booking';

// const url =
//   'mongodb://admin_dan:danonly06@ds061611.mlab.com:61611/heroku_pzk57mmp';

const url = process.env.MONGODB_URI;

const connectDb = () => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const models = { User, Message, Person, Booking };

export { connectDb };

export default models;
