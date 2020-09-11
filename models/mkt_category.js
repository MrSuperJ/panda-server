const mongoose = require('../config/mongo.js');

module.exports = mongoose.model(
  'mkt_categorys',
  new mongoose.Schema({
    id: Number,
    icon: String,
    name: String,
  })
);
