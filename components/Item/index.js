import React from 'react';
import { Link } from 'react-router';
import style from '../style.scss';
import itemstyle from './style.scss';

export class Item extends React.Component{
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		key: React.PropTypes.string,
		badges: React.PropTypes.arrayOf(React.PropTypes.string),
		small: React.PropTypes.bool,
	};

	render(){
		let badges = [];
		if(this.props.badges){
			badges = this.props.badges.map((badge, index) => {
				return <span className={style.badge} key={index}>{badge}</span>;
			});
		}

		let smallTitle = this.props.small ? itemstyle.smallTitle : '';

		return (
			<div className={`${style.item} container-fluid`} id={this.props.id} key={this.props.id}>
				<div className="row">
					<h2 className={`col-xs-12 col-sm-8 col-md-8 ${smallTitle}`}>
						<Link to={`/works/${this.props.id}`}>{this.props.title}</Link> {badges}
					</h2>
					<div className={`col-xs-12 col-sm-4 col-md-4 ${itemstyle.nav}`}>
						<Link to="/">Portfolio</Link> {this.props.toTop && <a href="#top">To Top</a>}
					</div>
				</div>
				<div className="row reverse">
					<div className={`col-xs-12 col-sm-4 ${itemstyle.image}`}>
						{React.Children.toArray(this.props.children).filter((x) => x.type === Image)}
						<div className={itemstyle.access}>
							{React.Children.toArray(this.props.children).filter((x) => x.type === Access)}
						</div>
					</div>
					{React.Children.toArray(this.props.children).filter((x) => x.type === Description)}
				</div>
			</div>
		);
	}

}
export class Image extends React.Component{
	render(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
export class Description extends React.Component{
	static propTypes = {
		small: React.PropTypes.bool,
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
export class Access extends React.Component{
	render(){
		return (
			<div style={{display: 'inline'}}>
				{this.props.children}
			</div>
		);
	}
}
