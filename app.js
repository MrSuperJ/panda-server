const path = require('path');

const Koa = require('koa');
const koaBody = require('koa-body');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const logger = require('koa-logger');
const compress = require('koa-compress');

const router = require('./routes');

const app = new Koa();

// error handler
onerror(app);

// middleware
app.use(koaBody());
app.use(json());
app.use(logger());
app.use(compress());
app.use(require('koa-static')(path.resolve(__dirname, '/public')));
app.use(views(path.resolve(__dirname, '/views'), { extension: 'pug' }));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(router());

// start service
app.listen(3210, () => {
  console.log('服务器成功启动在3210端口上');
});
