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
		height: 300,
		initial: true
	};

	render() {
		let image = this.props.src;
		if(!Array.isArray(image)){
			image = [image];
		}
		if(this.state.initial){
			// on first load or server side rendering
			// prioritize first image only
			image = image.slice(0, 1);
		}

		image = image.map((url, index) => {
			return <img key={index} src={url} onLoad={this.onImageLoad.bind(this)} style={{
				display: this.state.image == index ? 'inline' : 'none'
			}} />
		});

		return (
			<div style={{
				width: '100%',
				minHeight: this.state.height,
				textAlign: 'center'
			}} onMouseMove={this.onMouseMove.bind(this)} onTouchMove={this.onMouseMove.bind(this)} ref={(elem) => this._elem = elem}>
				{image}
			</div>
		);
	}

	componentDidMount(){
		this.setState({initial: false});
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