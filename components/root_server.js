import match from 'react-router/lib/match';
import routes from './routes';
import Html from './Html';

exports.Html = Html;

export default (options) => {
	return new Promise((resolve, reject) => {
		match({
			routes,
			...options,
		}, (error, redirect, props) => {
			if(error || redirect){
				return reject(error || redirect);
			}
			resolve(props);
		});
	});
};
