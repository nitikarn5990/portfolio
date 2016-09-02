/* globals FlattrLoader */
import React from 'react';

export default class Flattr extends React.Component{
	static propTypes = {
		uid: React.PropTypes.string.isRequired,
		url: React.PropTypes.string,
		title: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired,
		category: React.PropTypes.oneOf(['text', 'images', 'video', 'audio', 'software', 'people', 'rest']),
	};

	render(){
		return <div ref={(ref) => this._button = ref} />;
	}

	componentDidMount(){
		this._script = document.createElement('script');

		this._script.async = true;
		this._script.src = '//api.flattr.com/js/0.6/load.js?mode=manual';
		this._script.onload = this.onLoad.bind(this);

		document.head.appendChild(this._script);
	}

	componentWillUnmount(){
		document.head.removeChild(this._script);
	}

	onLoad(){
		FlattrLoader.render({
			title: this.props.title,
			description: this.props.description,
			category: this.props.category,
			uid: this.props.uid,
			url: this.props.url || window.location.toString(),
		}, this._button, 'replace');
	}
}
