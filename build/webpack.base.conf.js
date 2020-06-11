var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var PostCompilePlugin = require('webpack-post-compile-plugin')
var TransformModulesPlugin = require('webpack-transform-modules-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': resolve('src'),
			'common': resolve('src/common'),
			'components': resolve('src/components'),
			'api': resolve('src/api'),
			'base': resolve('src/base')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [
		new PostCompilePlugin(),
		new TransformModulesPlugin()
		// new UglifyJsPlugin()
	]

}
