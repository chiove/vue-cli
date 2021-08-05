'use strict';
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/index.js'),
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'build*')],
    }),
  ],
});
