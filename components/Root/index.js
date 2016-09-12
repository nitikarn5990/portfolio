import React from 'react';
import loading from 'components/loading';
import LoadingBar from 'components/LoadingBar';

export default class Root extends React.Component{
	componentDidMount(){
		loading.listen(() => {
			this.forceUpdate();
		});
	}

	render(){
		return (
			<div className="app">
				<LoadingBar visible={loading.state} />
				{this.props.children}
			</div>
		);
	}
}
