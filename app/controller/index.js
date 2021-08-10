const path = require('path');
const fs = require('fs');

module.exports = {
  index: async (ctx, next) => {
    if (ctx.url.indexOf('favicon.ico') !== -1) {
      return next();
    }
    if (process.env.NODE_ENV === 'development') {
      ctx.body = ctx.compiler && ctx.compiler.outputFileSystem.readFileSync(path.resolve(__dirname, '../../build/index.html')).toString('utf-8');
    } else {
      const html = path.resolve(__dirname, '../../build/index.html');
      ctx.body = fs.readFileSync(html, 'utf-8');
    }
    await next();
  },
};
