import React, { Component } from 'react';
import Link from '../Link';
import ScrubImage from '../ScrubImage';
import style from '../style.scss';
import itemstyle from './style.scss';

export class AchievementGroup extends Component {
	static propTypes = {
		year: React.PropTypes.number.isRequired
	};

	render() {
		return (
			<div className={`${style.item} container-fluid`} id={this.props.year} key={this.props.year}>
				<div className="row">
					<h2 className={`col-xs-12 col-sm-9`}>{this.props.year}</h2>
					<div className={`col-xs-12 col-sm-3 ${itemstyle.nav}`}>
						<a href="/" onClick={Link.handleClick}>Portfolio</a> <a href="#top">To Top</a>
					</div>
				</div>
				<div className={itemstyle.skipHelp}>Move mouse over images to view other images</div>
				<div className="row">
					{this.props.children}
				</div>
			</div>
		);
	}

}

export class AchievementItem extends Component{
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		category: React.PropTypes.string,
		image: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.arrayOf(React.PropTypes.string)
		])
	};

	render() {
		return (
			<div className={`${itemstyle.achievement} col-xs-12 col-sm-6`}>
				<ScrubImage src={this.props.image} />
				<strong className={itemstyle.title}>{this.props.title}</strong>
				<div>{this.props.category}</div>
				{this.props.children}
			</div>
		);
	}
}