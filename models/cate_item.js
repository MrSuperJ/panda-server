const mongoose = require('../config/mongo.js');

module.exports = mongoose.model(
  'cate_items',
  new mongoose.Schema({
    text: String,
  })
);
