import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import style from '../components/style.scss';

import workList from 'works';

export default class WorksPage extends React.Component{

	render(){
		return (
			<div className={style.works}>
				<Helmet title="Works | Manatsawin Hanmongkolchai" />
				<div className={`${style.item} container-fluid ${style.toc}`} id="top">
					<h1>
						<Link to="/">Portfolio/ <small>&lt;&mdash; Click to go back</small></Link>
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
