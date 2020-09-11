const mongoose = require('../config/mongo.js');

const ProductSchema = new mongoose.Schema({
  img: String,
  title: String,
  desc: String,
  price: Number,
  discount: Number,
  percentage: Number,
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
