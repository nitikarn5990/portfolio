import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
import routes from './routes';

export default () => (
	<Router history={browserHistory} routes={routes} />
);
