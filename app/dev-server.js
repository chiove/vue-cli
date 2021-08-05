/* eslint-disable no-console */
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const koaSatic = require('koa-static');
const webpack = require('webpack');
const kwm = require('kwm');
const chalk = require('chalk');
const https = require('https');
const k2c = require('koa2-connect');
const netWork = require('os').networkInterfaces();

const router = require('./router');
const webpackConfig = require('../webpack/webpack.config.dev.js');
const config = require('./dev-config');
const proxy = require('./middleware/proxy');


const compiler = webpack(webpackConfig);
const app = new Koa();

const start = () => {
  app.context.compiler = compiler;
  app.use(kwm(compiler, { logLevel: false }));
  app.use(koaSatic(path.resolve(__dirname, '../build')));
  Object.keys(config.proxy).forEach((context) => {
    const options = config.proxy[context];
    options.logLevel = 'silent';
    app.use(k2c(proxy(context, options)));
  });
  app.use(router.middleware());
  const httpsApp = https.createServer({
    key: fs.readFileSync(path.resolve(__dirname, './ssl/key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './ssl/cert.pem')),
  }, app.callback());
  listen(config.https ? httpsApp : app);
};

const listen = (server) => {
  server.listen(config.port, () => {
    compiler.hooks.done.tap('done', (res) => {
      setTimeout(() => {
        const times = new Date(res.endTime) - new Date(res.startTime);
        console.log(chalk.green('\r\n-------------------- Compile success! --------------------'));
        console.log(chalk.green(`\r\nTimes: ${times} ms`));
        console.log(chalk.green('\rApp running at:'));
        console.log(chalk.green('-Local:  '), chalk.cyan(`🚀${config.https ? 'https' : 'http'}://127.0.0.1:${config.port}`));
        if (netWork.en0 || netWork.WLAN) {
          const ip = (netWork.en0 && netWork.en0[1].address) ||
           (netWork.WLAN && netWork.WLAN[1].address);
          console.log(chalk.green('-Network:'), chalk.cyan(`🚀 ${config.https ? 'https' : 'http'}://${ip}:${config.port}`));
        }
      });
    });
  });
};

start();
