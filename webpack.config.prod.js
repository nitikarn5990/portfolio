const webpack = require('webpack');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

let loaders = config.module.loaders.slice(0);
loaders[0] = Object.assign({}, loaders[0], {
	query: {
		plugins: ['transform-react-constant-elements', 'transform-react-inline-elements'],
	},
});
loaders[1] = {
	test: /.scss$/,
	loader: ExtractTextPlugin.extract('style-loader', ['css-loader?modules&localIdentName=[hash:base64:5]', 'postcss-loader']),
};

module.exports = {
	module: {
		loaders: loaders,
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
			minChunks: 3,
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('style.css', {
			allChunks: true,
		}),
		new StatsWriterPlugin({
			filename: 'stats.json',
			fields: null,
		}),
	],

	profile: true,
};
