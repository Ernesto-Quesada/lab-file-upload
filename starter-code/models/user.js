const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  email:    String,
  password: String,
  photoAddress: { type: String },
},
{
    timestamps: true
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;
