const router = require('@koa/router')();
const Product = require('../models/product');

router.prefix('/product');

router.post('/list', async (ctx, next) => {
  const { pageSize, pageNo } = ctx.request.body;
  const data = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (pageNo - 1));

  ctx.body = {
    code: 200,
    entry: data,
  };
});

module.exports = router;
