import React, { Component } from 'react';
import Link from '../components/Link';
import style from '../components/style.scss';

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

	loadWork(name){
		return require('../works/' + name + '.js');
	}

	renderWork(){
		let contents = [];

		for(let item of require('../works/works.json')){
			let element = this.loadWork(item);

			contents.push(React.createElement(element, {key: element.id}));
		}

		return contents;
	}

	renderWorkList(){
		let workList = [];

		for(let item of require('../works/works.json')){
			let element = this.loadWork(item);
			let badges = [];

			if(element.badges){
				badges = element.badges.map((badge, index) => {
					return <span className={style.badge} key={index}>{badge}</span>;
				});
			}

			workList.push(<li key={element.id}>
				<a href={`#${element.id}`} key={element.id}>{element.title} {badges}</a>
			</li>);
		}

		return workList;
	}

}
