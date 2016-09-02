import React from 'react';
import { Router, browserHistory } from 'react-router';

function createRoute(path, getComponent){
	return {
		path,
		getComponent: (nextState, cb) => {
			getComponent((component) => {
				component = component.default ? component.default : component;
				cb(null, component);
			});
		},
	};
}

let routes = [
	createRoute('/', (cb) => require(['pages/index'], cb)),
	createRoute('/bio', (cb) => require(['pages/bio'], cb)),
	createRoute('/achievements', (cb) => require(['pages/achievements'], cb)),
	createRoute('/donate', (cb) => require(['pages/donate'], cb)),
	createRoute('/donate-th', (cb) => require(['pages/donate-th'], cb)),
	createRoute('/works', (cb) => require(['pages/works'], cb)),
];

export default () => (
	<Router history={browserHistory} routes={routes} />
);
