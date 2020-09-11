const router = require('@koa/router')();
const Banner = require('../models/banner');
const Category = require('../models/category');
const Session = require('../models/session');
const List = require('../models/list');

router.prefix('/home');

router.get('/banner', async (ctx, next) => {
  const data = await Banner.find({});
  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.get('/category', async (ctx, next) => {
  const data = await Category.find({});
  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.get('/session', async (ctx, next) => {
  const data = await Session.find({});
  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.post('/list', async (ctx, next) => {
  const { pageSize, pageNo } = ctx.request.body;
  const data = await List.find({})
    .limit(pageSize)
    .skip(pageSize * (pageNo - 1));

  ctx.body = {
    code: 200,
    entry: data,
  };
});

module.exports = router;
