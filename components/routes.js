// This file is NOT compiled!

function createRoute(path, getComponent){
	return {
		path,
		getComponent: (nextState, cb) => {
			let loading = require('./loading').default;
			loading.state = true;
			getComponent((component) => {
				component = component.default ? component.default : component;
				loading.state = false;
				cb(null, component);
			});
		},
	};
}

// Make sure require() is parsable by webpack

module.exports = [
	{
		getComponent: (nextState, cb) => cb(null, require('./Root').default),
		childRoutes: [
			createRoute('/', (cb) => require(['pages/index'], cb)),
			createRoute('/bio', (cb) => require(['pages/bio'], cb)),
			createRoute('/achievements', (cb) => require(['pages/achievements'], cb)),
			createRoute('/donate', (cb) => require(['pages/donate'], cb)),
			createRoute('/donate-th', (cb) => require(['pages/donate-th'], cb)),
			createRoute('/works', (cb) => require(['pages/works'], cb)),
		],
	},
];

for(let item of ['arg', 'bcbk5', 'bd2', 'bd2score', 'cdpb', 'grader', 'juiz', 'k2aandroid', 'kusmartbus', 'kyou', 'memorial', 'menome', 'ovzcp', 'snakerun', 'streaming', 'twitica']){
	module.exports[0].childRoutes.push(createRoute(`/works/${item}`, (cb) => require([`works/${item}`], cb)));
}
