import mongoose from 'mongoose';
require('dotenv').config();

import User from './user';
import Message from './message';

const url = 'mongodb://admin_dan:danonly06@ds061611.mlab.com:61611/heroku_pzk57mmp'

// const url = process.env.DB_URL
console.log(url)

const connectDb = () => {
  return mongoose.connect(url, { useNewUrlParser: true});
};

const models = { User, Message };

export { connectDb };

export default models;
