const router = require('@koa/router')();

router.prefix('/search');

router.get('/hotlist', async (ctx, next) => {
  ctx.body = {
    code: 200,
    entry: ['衣服', '手机', '三体书籍三体书籍', '鞋子', '箱包'],
  };
});

module.exports = router;
