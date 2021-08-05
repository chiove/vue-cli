'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const chalk = require('chalk');
const { version } = require('../package.json');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: devMode ? 'cheap-module-source-map' : 'source-map',
  output: {
    path: path.resolve(__dirname, `../build-v${version}`),
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'chunk',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.less$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      chunkFilename: 'static/css/[name].[hash:8].css',
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
      __VERSION__: JSON.stringify(version),
    }),
    new ProgressBarPlugin({
      format: `${chalk.green('编译进度：') + chalk.green('[:bar]')} ${chalk.green(':percent')} (耗时：${chalk.green(':elapsed')}秒)`,
      stream: process.stdout ? process.stdout : undefined,
      clear: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      src: path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: devMode,
              lessOptions: {
                modifyVars: {
                  '@primary-color': '#1890ff', // 全局主色 '#1890ff'
                  '@link-color': '#1890ff', // 链接色
                  '@success-color': '#52c41a', // 成功色
                  '@warning-color': '#faad14', // 警告色
                  '@error-color': '#f5222d', // 错误色
                  '@font-size-base': '14px', // 主字号
                  '@heading-color': 'rgba(0, 0, 0, 0.85);', // 标题色
                  '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
                  '@text-color-secondary ': 'rgba(0, 0, 0, 0.45)', // 次文本色
                  '@disabled-color ': 'rgba(0, 0, 0, 0.25)', // 失效色
                  '@border-radius-base': '2px', // 组件/浮层圆角
                  '@border-color-base': '#d9d9d9', // 边框色
                  '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12) , 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05) ', // 浮层阴影
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 1024 * 10,
          name: 'static/images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
};
