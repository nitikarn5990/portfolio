import React, { Component } from 'react';
import Link from '../Link';
import style from '../style.scss';
import itemstyle from './style.scss';

export class Item extends Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		key: React.PropTypes.string,
		badges: React.PropTypes.arrayOf(React.PropTypes.string),
		small: React.PropTypes.bool
	};

	render() {
		let badges = [];
		if(this.props.badges){
			badges = this.props.badges.map((badge, index) => {
				return <span className={style.badge} key={index}>{badge}</span>
			});
		}

		let smallTitle = this.props.small ? itemstyle.smallTitle : '';

		return (
			<div className={`${style.item} container-fluid`} id={this.props.id} key={this.props.id}>
				<div className="row">
					<h2 className={`col-xs-12 col-sm-9 ${smallTitle}`}>{this.props.title} {badges}</h2>
					<div className={`col-xs-12 col-sm-3 ${itemstyle.nav}`}>
						<a href="/" onClick={Link.handleClick}>Portfolio</a> <a href="#top">To Top</a>
					</div>
				</div>
				<div className="row reverse">
					<div className={`col-xs-12 col-sm-4 ${itemstyle.image}`}>
						{React.Children.toArray(this.props.children).filter((x) => x.type == Image)}
						<div className={itemstyle.access}>
							{React.Children.toArray(this.props.children).filter((x) => x.type == Access)}
						</div>
					</div>
					{React.Children.toArray(this.props.children).filter((x) => x.type == Description)}
				</div>
			</div>
		);
	}

}
export class Image extends Component {
	render(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
export class Description extends Component {
	static propTypes = {
		small: React.PropTypes.bool
	};

	render(){
		let cls = ['col-xs-12', 'col-sm-8', itemstyle.description];

		if(this.props.small){
			cls.push(itemstyle.small);
		}

		return (
			<div className={cls.join(' ')}>
				{this.props.children}
			</div>
		);
	}
}
export class Access extends Component {
	render(){
		return (
			<div style={{display: 'inline'}}>
				{this.props.children}
			</div>
		);
	}
}