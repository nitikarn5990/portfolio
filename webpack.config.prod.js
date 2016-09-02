const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = {
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
	],
};
