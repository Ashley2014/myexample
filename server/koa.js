const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    if(ctx.url=='/'){
        console.log(`111-'X-Response-Time', ${ms}ms`);
    }
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    if(ctx.url=='/'){
        console.log(`222-${ctx.method} ${ctx.url} - ${ms}`);
    }
});

// response

app.use(async ctx => {
    if(ctx.url=='/'){
        console.log(`333`);
    }
    ctx.body = 'Hello World';
    if(ctx.url=='/'){
        console.log(`444`);
    }
});

app.listen(3000);