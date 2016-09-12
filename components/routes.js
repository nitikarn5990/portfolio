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

			createRoute('/works/arg', (cb) => require(['works/arg'], cb)),
			createRoute('/works/bcbk5', (cb) => require(['works/bcbk5'], cb)),
			createRoute('/works/bd2', (cb) => require(['works/bd2'], cb)),
			createRoute('/works/bd2score', (cb) => require(['works/bd2score'], cb)),
			createRoute('/works/cdpb', (cb) => require(['works/cdpb'], cb)),
			createRoute('/works/grader', (cb) => require(['works/grader'], cb)),
			createRoute('/works/juiz', (cb) => require(['works/juiz'], cb)),
			createRoute('/works/k2aandroid', (cb) => require(['works/k2aandroid'], cb)),
			createRoute('/works/kusmartbus', (cb) => require(['works/kusmartbus'], cb)),
			createRoute('/works/kyou', (cb) => require(['works/kyou'], cb)),
			createRoute('/works/memorial', (cb) => require(['works/memorial'], cb)),
			createRoute('/works/menome', (cb) => require(['works/menome'], cb)),
			createRoute('/works/ovzcp', (cb) => require(['works/ovzcp'], cb)),
			createRoute('/works/snakerun', (cb) => require(['works/snakerun'], cb)),
			createRoute('/works/streaming', (cb) => require(['works/streaming'], cb)),
			createRoute('/works/twitica', (cb) => require(['works/twitica'], cb)),
		],
	},
];
