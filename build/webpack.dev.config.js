/**
 * Created by kid on 2017/5/22.
 */
const merge = require('webpack-merge');
const Webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

const devConfig = merge(baseConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'less-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = devConfig;
