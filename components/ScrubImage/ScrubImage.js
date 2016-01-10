import React, { Component } from 'react';

export default class extends Component {
	static propTypes = {
		src: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.arrayOf(React.PropTypes.string)
		])
	};

	state = {
		image: 0,
		height: 300
	};

	render() {
		let image = this.props.src;
		if(Array.isArray(image)){
			image = image[this.state.image];
		}

		return (
			<div style={{width: '100%', minHeight: this.state.height}} onMouseMove={this.onMouseMove.bind(this)} onTouchMove={this.onMouseMove.bind(this)} ref={(elem) => this._elem = elem}>
				<img src={image} onLoad={this.onImageLoad.bind(this)} />
			</div>
		);
	}

	onMouseMove(e){
		if(!Array.isArray(this.props.src)){
			return;
		}

		let rect = this._elem.getBoundingClientRect();
		let elemX = e.clientX - rect.left;
		let percent = elemX/rect.width;
		let image = Math.round(percent * (this.props.src.length - 1));

		this.setState({
			image: image
		});
	}

	onImageLoad(e){
		this.setState({
			height: Math.max(e.target.getBoundingClientRect().height, this.state.height)
		});
	}
}