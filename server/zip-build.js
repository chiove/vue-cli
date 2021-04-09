/* eslint-disable no-console */
'use strict';
const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.prod');
const JSZip = require('jszip');

const zip = new JSZip();
const target = webpackConfig.output.path;
const compiler = webpack(webpackConfig);

const readDirectory = (zipFolder, path, folder) => {
  const files = fs.readdirSync(path);
  files.forEach((fileName) => {
    const filePath = `${path}/${fileName}`;
    const file = fs.statSync(filePath);
    if (file.isDirectory()) {
      const fileFolder = folder ? `${folder}/${fileName}` : fileName;
      const zipFolderChild = zip.folder(fileFolder);
      // eslint-disable-next-line no-unused-vars
      readDirectory(zipFolderChild, filePath, fileFolder);
    } else {
      zipFolder.file(fileName, fs.readFileSync(filePath));
    }
  });
};

compiler.run((err) => {
  if (!err) {
    readDirectory(zip, target, '');
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
