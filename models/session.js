const mongoose = require('../config/mongo.js');

const SessionSchema = new mongoose.Schema({
  img: String,
  title: String,
  tagnum: Number,
  discount: Number,
  time: {
    type: Number,
    default: Date.now,
  },
});

const SessionModel = mongoose.model('Session', SessionSchema);

module.exports = SessionModel;
