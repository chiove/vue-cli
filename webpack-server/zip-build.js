/* eslint-disable no-console */
'use strict';
const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.prod');
const JSZip = require('jszip');

const zip = new JSZip();
const target = webpackConfig.output.path;
const os = /^win/.test(process.platform);
const name = target.slice(os ? target.lastIndexOf('\\') + 1 : target.lastIndexOf('/'));
const compiler = webpack(webpackConfig);
compiler.run((err) => {
  if (!err) {
    zip.folder(name);
    zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9,
      },
    }).then((content) => {
      fs.writeFileSync(`${target}.zip`, content, 'utf-8');
      console.log(chalk.green('----- 构建压缩包成功! -----'));
    });
  }
});
