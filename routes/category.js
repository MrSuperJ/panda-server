const router = require('@koa/router')();
const CateItems = require('../models/cate_item');
const CateLists = require('../models/cate_list');

router.prefix('/category');

router.get('/items', async (ctx, next) => {
  const data = await CateItems.find({});

  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.post('/content', async (ctx, next) => {
  const { index } = ctx.request.body;
  const data = await CateLists.find({});

  ctx.body = {
    code: 200,
    entry: data[index],
  };
});

module.exports = router;
