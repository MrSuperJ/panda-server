const mongoose = require('../config/mongo.js');

module.exports = mongoose.model(
  'product_details',
  new mongoose.Schema({
    banner: Array,
    overview: Object,
    comment: Object,
    description: String,
    sku: Object,
    goods: Object,
  })
);
