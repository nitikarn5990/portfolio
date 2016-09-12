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
				loader: 'babel-loader',
			},
			{
				test: /.scss$/,
				loaders: ['style-loader', 'css-loader?modules&localIdentName=[hash:base64:5]', 'postcss-loader'],
			},
			{
				test: /.(jpg|png)/,
				loaders: ['file-loader?name=i/[sha512:hash:base64:6].[ext]'],
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
