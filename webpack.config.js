const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: '/',
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
