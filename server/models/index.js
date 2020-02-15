import mongoose from 'mongoose';
require('dotenv').config();

import User from './user';
import Message from './message';

const url = process.env.DB_URL;
const connectDb = () => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const models = { User, Message };

export { connectDb };

export default models;
