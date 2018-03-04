var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();


router.get('/aa', async (ctx, next) => {
  // ctx.router available
  ctx.body = 'aaa';
  next()

  // await new Promise(resolve => {
  //   setTimeout(e => {
  //     console.log(33333333333333)
  //     resolve()
  //   }, 2000)
  // })

});

app
  .use(router.routes())
  .use(router.allowedMethods());
// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  ctx.body = '66';
  // next();

  await new Promise(resolve => {
    setTimeout(e => {
      resolve()
    }, 2000)
  })

  console.log(`gttrrth`);
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  if (ctx.url == '/') {
    console.log(`111-'X-Response-Time', ${ms}ms`);
  }
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  ctx.body = '33333';
  // await new Promise(resolve => {
  //   setTimeout(e => {
  //     resolve()
  //   }, 5000)
  // })
  await next();
  const ms = Date.now() - start;
  if (ctx.url == '/') {
    console.log(`222-${ctx.method} ${ctx.url} - ${ms}`);
  }
});

// response

app.use(async ctx => {
  if (ctx.url == '/') {
    console.log(`333`);
  }
  ctx.body = 'Hello World';
  if (ctx.url == '/') {
    console.log(`444`);
  }
});

app.listen(1234);
