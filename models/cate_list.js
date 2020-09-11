const mongoose = require('../config/mongo.js');

module.exports = mongoose.model(
  'cate_lists',
  new mongoose.Schema({
    banner: String,
    listItem: Array,
  })
);
