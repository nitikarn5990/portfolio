const path = require('path');
const config = require('./webpack.config');
const clone = require('clone');
const nodeExternals = require('webpack-node-externals');

let loaders = clone(config.module.loaders);
loaders[1] = {
	test: /.scss$/,
	loaders: [
		{
			loader: 'css-loader/locals',
			query: {
				modules: true,
				localIdentName: '[hash:base64:5]',
			},
		},
		'postcss-loader',
	],
};
loaders[2] = {
	test: /.(jpg|png)/,
	loader: 'file-loader',
	query: {
		name: 'i/[sha512:hash:base64:6].[ext]',
		emitFile: false,
	},
};

module.exports = {
	entry: './components/root_server.js',
	target: 'node',
	externals: [nodeExternals({
		whitelist: [/^react-router/],
	})],

	module: {
		loaders: loaders,
	},

	resolve: {
		modules: [
			path.resolve('.'),
			'node_modules',
		],
	},

	output: {
		library: 'portfolio',
		libraryTarget: 'commonjs2',
	},
};
