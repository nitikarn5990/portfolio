const config = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let loaders = config.module.loaders.slice(0);
loaders[1] = {
	test: /.scss$/,
	loader: ExtractTextPlugin.extract('css-loader?modules', 'postcss-loader'),
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

	plugins: [
		new ExtractTextPlugin('style.css'),
	],
};
