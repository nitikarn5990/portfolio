import React from 'react';
import classNames from 'classnames';
import style from './style.scss';

export default class Root extends React.Component{
	state = {
		visible: false,
	}

	componentWillReceiveProps(nextProps){
		if(!nextProps.visible){
			this.setState({hiding: true});
			setTimeout(() => {
				this.setState({visible: false});
			}, 300);
		}else{
			this.setState({visible: true, hiding: false});
		}
	}

	render(){
		if(!this.state.visible){
			return null;
		}

		return (
			<div className={classNames(style.bar, this.state.hiding && style.hiding)} style={{width: `${this.state.progress}%`}} />
		);
	}
}
