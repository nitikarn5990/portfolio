const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: '/',
		filename: 'bundle.js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /.scss$/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							modules: true,
							localIdentName: '[hash:base64:5]',
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /.(jpg|png)/,
				loader: 'file-loader',
				query: {
					name: 'i/[sha512:hash:base64:6].[ext]',
				},
			},
		],
	},
	resolve: {
		modules: [
			path.resolve('.'),
			'node_modules',
		],
	},
	postcss: () => [
		require('precss'),
	],
	plugins: [
		new ProgressBarPlugin(),
	],
};
