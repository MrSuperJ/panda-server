const mongoose = require('../config/mongo.js');

const BannerSchema = new mongoose.Schema({
  img: String,
});

const BannerModel = mongoose.model('Banner', BannerSchema);

module.exports = BannerModel;
