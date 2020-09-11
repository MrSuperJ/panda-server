const mongoose = require('../config/mongo.js');

const CateSchema = new mongoose.Schema({
  id: Number,
  icon: String,
  name: String,
});

const CateModel = mongoose.model('Categorys', CateSchema);

module.exports = CateModel;
