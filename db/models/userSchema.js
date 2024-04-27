import { Schema, model } from 'mongoose';

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
});

const User = model('User', userSchema);

export default User;
