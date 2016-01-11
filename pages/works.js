import React, { Component } from 'react';
import Link from '../components/Link';
import style from '../components/style.scss';

import workList from '../works/index';

export default class extends Component {

	render() {
		return (
			<div className={style.works}>
				<div className={`${style.item} container-fluid ${style.toc}`} id="top">
					<h1>
						<a href="/" onClick={Link.handleClick}>Portfolio/ <small>&lt;&mdash; Click to go back</small></a>
						Works
					</h1>
					<ul className={style.workList}>
						{this.renderWorkList()}
					</ul>
				</div>
				{this.renderWork()}
			</div>
		);
	}

	renderWork(){
		let contents = [];

		for(let element of workList){
			contents.push(React.createElement(element, {key: element.id}));
		}

		return contents;
	}

	renderWorkList(){
		let contents = [];

		for(let element of workList){
			let badges = [];

			if(element.badges){
				badges = element.badges.map((badge, index) => {
					return <span className={style.badge} key={index}>{badge}</span>;
				});
			}

			contents.push(<li key={element.id}>
				<a href={`#${element.id}`} key={element.id}>{element.title} {badges}</a>
			</li>);
		}

		return contents;
	}

}
