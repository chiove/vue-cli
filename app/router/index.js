const Router = require('koa-better-router');
const { index } = require('../controller');

const router = Router().loadMethods();
router.get('/*', index);

module.exports = router;
