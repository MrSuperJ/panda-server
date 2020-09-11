const mongoose = require('../config/mongo.js');

const ListSchema = new mongoose.Schema({
  img: String,
  title: String,
  desc: String,
  price: Number,
  discount: Number,
});

const ListModel = mongoose.model('List', ListSchema);

module.exports = ListModel;
