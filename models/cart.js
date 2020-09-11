const mongoose = require('../config/mongo.js');

const CartSchema = new mongoose.Schema({
  thumb: String,
  title: String,
  tag: String,
  tags: Array,
  price: Number,
  originPrice: Number,
  num: Number,
});

const CartModel = mongoose.model('Cart', CartSchema);

module.exports = CartModel;
