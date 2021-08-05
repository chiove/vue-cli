'use strict';
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: ['webpack-hot-middleware/client.js?noInfo=true&reload=true', path.resolve(__dirname, '../src/index.js')],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
