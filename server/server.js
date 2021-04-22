/* eslint-disable no-console */
'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.config.dev');
const { spawn } = require('child_process');
const chalk = require('chalk');
const { port, proxy, childProcess } = require('./config');

const compiler = webpack(webpackConfig);
const netWork = require('os').networkInterfaces();

const options = {
  clientLogLevel: 'silent',
  contentBase: './build',
  // hot: true,
  hotOnly: true,
  host: '0.0.0.0',
  proxy: {
    [proxy.baseUrl]: {
      target: proxy.dev,
      ws: false,
    },
  },
};
// WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const server = new WebpackDevServer(compiler, options);
server.listen(port, '127.0.0.1', () => {
  compiler.hooks.done.tap('compiler', () => {
    if (childProcess) {
      spawn('node', [`${__dirname}/app.js`]);
    }
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

