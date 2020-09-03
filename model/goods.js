const mongoose = require('mongoose')

const GoodsSchema = new mongoose.Schema({
  goodsId: Number,
  goodsName: String,
  salePrice: Number,
  goodsImg: String,
  createAt: {
    type: Date,
    default: Date.now
  }
})

const GoodsModel = mongoose.model('Goods', GoodsSchema)

module.exports = GoodsModel
