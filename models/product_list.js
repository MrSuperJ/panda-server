const mongoose = require('../config/mongo.js');

module.exports = mongoose.model(
  'product_lists',
  new mongoose.Schema({
    img: String,
    title: String,
    desc: String,
    price: Number,
    discount: Number,
    percentage: Number,
  })
);
