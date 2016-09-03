const webpack = require('webpack');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let loaders = config.module.loaders.slice(0);
loaders[1] = {
	test: /.scss$/,
	loader: ExtractTextPlugin.extract('style-loader', ['css-loader?modules', 'postcss-loader']),
};

module.exports = {
	module: {
		loaders: loaders,
	},

	postcss: () => {
		return [...config.postcss(), require('cssnano')];
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			},
		}),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({
			children: true,
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('style.css', {
			allChunks: true,
		}),
	],
};
