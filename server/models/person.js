import mongoose from 'mongoose';
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: String,
  password: String,
});

const Person = mongoose.model('Person', PersonSchema);
export default Person;
