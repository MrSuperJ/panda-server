const mongoose = require('../config/mongo.js');

const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  nickname: String,
  avatar: String,
  age: Number,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const UsersModel = mongoose.model('User', UserSchema);

module.exports = UsersModel;
