const config = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');

let loaders = config.module.loaders.slice(0);
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

	output: {
		library: true,
		libraryTarget: 'commonjs2',
	},
};
