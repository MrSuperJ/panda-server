// const Koa = require('koa');
// const app = new Koa();
// const router = require('@koa/router')();
// const User = require('./models/user');

// app.use(router.routes());

// router.get('/', async (ctx, next) => {
//   ctx.body = 'hello world';
// });

// router.get('/find', async (ctx, next) => {
//   const data = await User.find({});
//   ctx.status = 200;
//   ctx.body = data;
// });

// router.get('/add', async (ctx, next) => {
//   User.create({
//     name: 'panda',
//     age: 18,
//   }).then((res) => {
//     console.log(res);
//     ctx.body = 'create success';
//   });
// });

// router.get('/delete', async (ctx, next) => {
//   User.deleteOne({}).then((res) => {
//     console.log(res);
//     ctx.body = res;
//   });
// });

// app.listen(3001, () => {
//   console.log('服务器启动成功');
// });

const Koa = require('koa');
// const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));
app.use(json());
app.use(logger());
app.use(require('koa-static')(path.resolve(__dirname, '/public')));
// app.use(views(path.resolve(__dirname, '/views'), { extension: 'pug' }));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
const user = require('./routes/user');
app.use(user.routes(), user.allowedMethods());

app.listen(3001, () => {
  console.log('服务器启动成功');
});
