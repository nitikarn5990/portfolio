// This file is NOT compiled!

function createRoute(path, getComponent){
	return {
		path,
		getComponent: (nextState, cb) => {
			let loading = require('./loading').default;
			loading.state = true;
			getComponent().then((component) => {
				loading.state = false;
				cb(null, component.default || component);
			}, (err) => {
				console.error(err);
				loading.state = false;
				alert('Failed to load page');
			});
		},
	};
}

module.exports = [
	{
		getComponent: (nextState, cb) => cb(null, require('./Root').default),
		childRoutes: [
			createRoute('/', () => System.import('pages/index')),
			createRoute('/bio', () => System.import('pages/bio')),
			createRoute('/achievements', () => System.import('pages/achievements')),
			createRoute('/donate', () => System.import('pages/donate')),
			createRoute('/donate-th', () => System.import('pages/donate-th')),
			createRoute('/works', () => System.import('pages/works')),
		],
	},
];

for(let work of ['arg', 'bcbk5', 'bd2', 'bd2score', 'cdpb', 'grader', 'juiz', 'k2aandroid', 'kusmartbus', 'kyou', 'memorial', 'menome', 'ovzcp', 'snakerun', 'streaming', 'twitica']){
	module.exports[0].childRoutes.push(createRoute('/works/' + work, () => System.import('works/' + work + '/index')));
}
