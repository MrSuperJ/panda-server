const mongoose = require('../config/mongo.js');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const UsersModel = mongoose.model('Users', UserSchema);

module.exports = UsersModel;
