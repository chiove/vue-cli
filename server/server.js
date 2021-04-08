/* eslint-disable no-console */
'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.config.dev');
const chalk = require('chalk');
const { port, proxy } = require('./config');

const compiler = webpack(webpackConfig);
const netWork = require('os').networkInterfaces();

const server = new WebpackDevServer(compiler, {
  clientLogLevel: 'silent',
  contentBase: './build',
  noInfo: true,
  hotOnly: true,
  host: '0.0.0.0',
  proxy: {
    [proxy.baseUrl]: {
      target: proxy.dev,
      ws: false,
    },
  },
});

server.listen(port, '127.0.0.1', () => {
  compiler.hooks.done.tap('compiler', () => {
    console.log(chalk.green('-------------------- Compile success! --------------------'));
    setTimeout(() => {
      console.log(chalk.green('\r\nApp running at:'));
      console.log(chalk.green('-Local:  '), chalk.cyan(`🚀 http://127.0.0.1:${port}`));
      if (netWork.WLAN) {
        const ip = netWork.WLAN[0].address;
        console.log(chalk.green('-Network:'), chalk.cyan(`🚀 http://${ip}:${port}`));
      }
    });
  });
});

