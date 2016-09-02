const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const routes = require('./components/routes');
const webpackConfig = require('./webpack.config');
const webpackConfigServer = require('./webpack.config.server');
const webpackConfigProd = require('./webpack.config.prod');
const clone = require('clone');
const deepAssign = require('deep-assign');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { RouterContext } = require('react-router');

const DEST = 'build/';
const DEST_SERVER = './build_server/';
const TEMPLATE = 'static/index.html';

gulp.task('default', ['copy', 'webpack', 'ssr']);

let ssrTargets = [];
for(let route of routes){
	ssrTargets.push(`build-${route.path}`);
}
gulp.task('ssr', ssrTargets);

gulp.task('copy', () => {
	return gulp.src('static/**/*')
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
		.pipe(gulp.dest(DEST_SERVER));
});

for(let route of routes){
	gulp.task(`build-${route.path}`, ['webpack_server'], () => {
		let match = require(`${DEST_SERVER}/bundle.js`).default;
		return match({location: route.path}).then((props) => {
			let body = renderToString(React.createElement(RouterContext, props));
			let filename = route.path;
			if(route.path.endsWith('/')){
				filename += 'index.html';
			}else{
				filename += '.html';
			}

			if(filename.startsWith('/')){
				filename = filename.substr(1);
			}

			return gulp.src(TEMPLATE)
				.pipe(replace('<div id="app"></div>', '<div id="app">' + body + '</div>'))
				.pipe(rename(filename))
				.pipe(gulp.dest(DEST));
		});
	});
}
