const router = require('@koa/router')();
const ProductList = require('../models/product_list');
const ProductDetail = require('../models/product_detail');

router.prefix('/product');

router.post('/list', async (ctx, next) => {
  const { pageSize, pageNo } = ctx.request.body;
  const data = await ProductList.find({})
    .limit(pageSize)
    .skip(pageSize * (pageNo - 1));

  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.post('/detail', async (ctx, next) => {
  const { goodsId: id } = ctx.request.body;
  if (!id) {
    ctx.status = 403;
    ctx.body = {
      code: 403,
      message: '请输入正确的商品id',
    };
    return;
  }

  const data = await ProductDetail.findById('5f5b83333f8b304102b7aacb');
  ctx.body = {
    code: 200,
    entry: data,
  };
});

module.exports = router;
