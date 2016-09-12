const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const file = require('gulp-file');
const routes = require('./components/routes');
const webpackConfig = require('./webpack.config');
const webpackConfigServer = require('./webpack.config.server');
const webpackConfigProd = require('./webpack.config.prod');
const clone = require('clone');
const deepAssign = require('deep-assign');
const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const { RouterContext } = require('react-router');
const Helmet = require('react-helmet');

const DEST = 'build/';
const DEST_SERVER = './build_server/';

let buildRoutes = routes[0].childRoutes;

gulp.task('default', ['copy', 'webpack', 'ssr']);

let ssrTargets = [];
for(let route of buildRoutes){
	ssrTargets.push(`build-${route.path}`);
}
gulp.task('ssr', ssrTargets);

gulp.task('copy', () => {
	return gulp.src(['static/**/*', '!static/index.html'])
		.pipe(gulp.dest(DEST));
});

gulp.task('webpack', () => {
	let config = deepAssign(clone(webpackConfig), webpackConfigProd);
	return gulp.src('components/root.js')
		.pipe(webpackStream(config))
		.pipe(gulp.dest(DEST));
});

gulp.task('webpack_server', () => {
	let config = deepAssign(clone(webpackConfig), webpackConfigServer);
	return gulp.src(config.entry)
		.pipe(webpackStream(config))
		.on('error', () => {})
		.pipe(gulp.dest(DEST_SERVER));
});

for(let route of buildRoutes){
	gulp.task(`build-${route.path}`, ['copy', 'webpack_server'], () => {
		let bundle = require(`${DEST_SERVER}/bundle.js`);
		let match = bundle.default;
		let Html = bundle.Html;

		return match({location: route.path}).then((props) => {
			let body = renderToString(React.createElement(RouterContext, props));
			let html = renderToStaticMarkup(React.createElement(Html, {html: body, head: Helmet.rewind()}));
			let filename = route.path;
			if(route.path.endsWith('/')){
				filename += 'index.html';
			}else{
				filename += '.html';
			}

			if(filename.startsWith('/')){
				filename = filename.substr(1);
			}

			return file(filename, '<!DOCTYPE html>' + html, {src: true})
				.pipe(gulp.dest(DEST));
		});
	});
}
