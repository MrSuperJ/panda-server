const router = require('@koa/router')();

const MktBanner = require('../models/mkt_banner');
const MktCategory = require('../models/mkt_category');
const MktSession = require('../models/mkt_session');
const MktList = require('../models/mkt_list');

router.prefix('/home');

router.get('/banner', async (ctx, next) => {
  const data = await MktBanner.find({});
  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.get('/category', async (ctx, next) => {
  const data = await MktCategory.find({});
  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.get('/session', async (ctx, next) => {
  const data = await MktSession.find({});
  ctx.body = {
    code: 200,
    entry: data,
  };
});

router.post('/list', async (ctx, next) => {
  const { pageSize, pageNo } = ctx.request.body;
  const data = await MktList.find({})
    .limit(pageSize)
    .skip(pageSize * (pageNo - 1));

  ctx.body = {
    code: 200,
    entry: data,
  };
});

module.exports = router;
