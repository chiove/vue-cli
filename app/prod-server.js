/* eslint-disable no-console */
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const koaSatic = require('koa-static');
const chalk = require('chalk');
const https = require('https');
const k2c = require('koa2-connect');

const router = require('./router');
const config = require('./prod-config');
const proxy = require('./middleware/proxy');


const app = new Koa();

const start = () => {
  Object.keys(config.proxy).forEach((context) => {
    const options = config.proxy[context];
    options.logLevel = 'silent';
    app.use(k2c(proxy(context, options)));
  });

  app.use(koaSatic(path.resolve(__dirname, '../build')));

  app.use(router.middleware());
  const httpsApp = https.createServer({
    key: fs.readFileSync(path.resolve(__dirname, './ssl/key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './ssl/cert.pem')),
  }, app.callback());
  listen(config.https ? httpsApp : app);
};

const listen = (server) => {
  server.listen(config.port, () => {
    console.log(chalk.green('\r\n-------------------- Server success! --------------------'));
    console.log(chalk.green('\rApp running at:'));
    console.log(chalk.green('-Local:  '), chalk.cyan(`🚀${config.https ? 'https' : 'http'}://127.0.0.1:${config.port}/`));
    console.log(chalk.green('-Network:'), chalk.cyan(`🚀 ${config.https ? 'https' : 'http'}://${getLocalIp()}:${config.port}`));
  });
};

const getLocalIp = () => {
  const netWork = require('os').networkInterfaces();
  let ip = '';
  Object.keys(netWork).forEach((name) => {
    const iface = netWork[name];
    iface.forEach((item) => {
      if (item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal) {
        ip = item.address;
      }
    });
  });
  return ip;
};

start();
