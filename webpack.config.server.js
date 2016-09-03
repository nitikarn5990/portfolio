const config = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');

let loaders = config.module.loaders.slice(0);
loaders[1] = {
	test: /.scss$/,
	loaders: ['css-loader/locals?modules', 'postcss-loader'],
};

module.exports = {
	entry: './components/root_server.js',
	target: 'node',
	externals: [nodeExternals()],

	module: {
		loaders: loaders,
	},

	output: {
		library: true,
		libraryTarget: 'commonjs2',
	},

	postcss: () => {
		return [...config.postcss(), require('cssnano')];
	},
};
