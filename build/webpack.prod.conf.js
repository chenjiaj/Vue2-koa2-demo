/**
 * Created by chenjiajun on 2017/8/17.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

let prodConfig =  merge(baseConfig, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendors',
			filename:'js/[name].[hash].js'
		})
	]
});

module.exports = prodConfig;