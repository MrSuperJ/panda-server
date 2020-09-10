const router = require('@koa/router')();
const User = require('../models/user');

router.prefix('/user');

router.get('/info', async (ctx, next) => {
  const data = await User.find({});
  ctx.status = 200;
  ctx.body = data;
});

module.exports = router;
