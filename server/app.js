// 子进程服务
const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router');
const { childProcessPort } = require('./config');

const app = new Koa();
app.use(router.middleware());
app.use(koaBody());
app.listen(childProcessPort);

