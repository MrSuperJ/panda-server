const router = require('@koa/router')()
const Goods = require('../model/goods')
const mongoose = require('mongoose')

// 连接
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 监听连接状态
const db = mongoose.connection

db.on('open', function() {
  console.log('mongoose open success')
})
db.on('error', err => {
  console.log('mongoose error:', err)
})
db.on('disconnected', () => {
  console.log('mongoose disconnected')
})

router.prefix('/goods')

router.get('/', async(ctx, next) => {
  const data = await Goods.find({})
  console.log(data)
  ctx.status = 200
  ctx.body = data
})

router.get('/add', async(ctx, next) => {
  ctx.res.body = 'hello world'
  //   Goods.create({
  //     goodsId: 123123,
  //     goodsName: '第一个商品',
  //     salePrice: 1231,
  //     goodsImg: '123123'
  //   }).then(res => {
  //     console.log(res)
  //     ctx.res.body = 'hello world'
  //   })
})

router.get('/delete', async(ctx, next) => {
  Goods.deleteOne({}).then(res => {
    console.log(res)
    ctx.body = res
  })
})

module.exports = router
