const path = require('path');

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
				loaders: ['babel-loader'],
			},
			{
				test: /.scss$/,
				loaders: ['style-loader', 'css-loader?modules', 'postcss-loader'],
			},
		],
	},
	resolve: {
		root: [
			path.resolve('.'),
		],
	},
	postcss: () => [
		require('precss'),
	],
};
