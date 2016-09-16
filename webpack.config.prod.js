const webpack = require('webpack');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

let loaders = config.module.loaders.slice(0);
loaders[0] = Object.assign({}, loaders[0], {
	query: {
		plugins: ['transform-react-constant-elements', 'transform-react-inline-elements'],
	},
});
loaders[1] = {
	test: /.scss$/,
	loaders: ExtractTextPlugin.extract({
		fallbackLoader: 'style-loader',
		loader: [
			{
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[hash:base64:5]',
				},
			},
			'postcss-loader',
		],
	}),
};

module.exports = {
	module: {
		loaders: loaders,
	},

	plugins: [
		new ProgressBarPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			},
		}),
		new webpack.optimize.CommonsChunkPlugin({
			children: true,
			minChunks: 3,
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
		}),
		new StatsWriterPlugin({
			filename: 'stats.json',
			fields: null,
		}),
	],

	profile: true,
};
