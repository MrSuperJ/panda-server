const router = require('@koa/router')();
const Cart = require('../models/cart');

router.prefix('/cart');

router.get('/list', async (ctx, next) => {
  // const { pageSize, pageNo } = ctx.request.body;
  // const data = await Cart.find({})
  //   .limit(pageSize)
  //   .skip(pageSize * (pageNo - 1));
  const data = await Cart.find({});

  ctx.body = {
    code: 200,
    entry: data,
  };
});

module.exports = router;
