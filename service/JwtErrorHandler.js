module.exports = (ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: '用户鉴权失败',
      };
    } else {
      throw err;
    }
  });
};
