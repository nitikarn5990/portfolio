import React, { Component } from 'react';
import Link from '../Link';
import style from './style.scss';

export class Timeline extends Component {
	render() {
		return (
			<div className={style.timeline}>
				<div className={style.spine}></div>
				{this.props.children}
				<div className={style.clearfix}></div>
			</div>
		);
	}

}
export class TimelineItem extends Component {
	static propTypes = {
		side: React.PropTypes.oneOf(['center', 'left', 'right']).isRequired,
		year: React.PropTypes.number,
		multi: React.PropTypes.bool
	};

	render(){
		if(this.props.side == 'center'){
			return <div className={style.center}>
				<div className={style.box}>{this.props.children}</div>
			</div>;
		}

		let side = this.props.side == 'left' ? style.left : style.right;
		let yearSide = this.props.side == 'left' ? style.right : style.left;
		let multi = this.props.multi ? style.multi : '';
		let year = !this.props.multi ? <div className={`${yearSide} ${style.year}`}>{this.props.year}</div> : null;

		return <div>
			{year}
			<div className={`${side} ${multi}`}><div className={style.box}>{this.props.children}</div></div>
		</div>;
	}
}