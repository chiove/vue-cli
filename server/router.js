// 模拟数据
const Router = require('koa-better-router');

const router = Router().loadMethods();
router.options = {
  prefix: '/api',
};
// api
router.get('/test', (ctx, next) => {
  const { name, password } = ctx.request.query;
  ctx.body = {
    code: 200,
    data: {
      name,
      password,
    },
  };
  next();
});

router.post('/test', (ctx, next) => {
  const { name, password } = ctx.request.body;
  ctx.body = {
    code: 200,
    data: {
      name,
      password,
    },
  };
  next();
});

module.exports = router;
