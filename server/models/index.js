import mongoose from 'mongoose';

import User from './user';
import Booking from './booking';
import Message from './message';

const DB_URL = "mongodb://localhost:27017/node-express-mongodb-server"

const connectDb = () => {
  return mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
};

const models = { User, Booking, Message };

export { connectDb };

export default models;
