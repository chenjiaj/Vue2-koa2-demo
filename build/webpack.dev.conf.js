/**
 * Created by chenjiajun on 2017/8/17.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.dev.conf');
const webpack = require('webpack');

let devConfig =  merge(baseConfig, {
	entry: {
		index:[
			'webpack-hot-middleware/client?reload=1',
			'./src/index.js'
		]
	},
	output: {
		path: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});

module.exports = devConfig;