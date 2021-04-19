// 子进程数据模拟
const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router');

const app = new Koa();
app.use(router.middleware());
app.use(koaBody());
app.listen(3000);

