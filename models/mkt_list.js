const mongoose = require('../config/mongo.js');

module.exports = mongoose.model(
  'mkt_lists',
  new mongoose.Schema({
    img: String,
    title: String,
    desc: String,
    price: Number,
    discount: Number,
  })
);
