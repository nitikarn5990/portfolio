import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'bd2score';
	static title = 'Online Exam Score Viewer';

	render(){
		return (
			<Item id={Work.id} title={Work.title} small={true} {...this.props}>
				<Image>
					<img src={require('./bd2score.png')} />
				</Image>
				<Access>
					<a href="http://www.bodin2.ac.th/test/" className={style.icon}><i className="fa fa-globe" /></a>
				</Access>
				<Description>
					<p>
						My school wanted to show students' exam score as soon as possible as they're already using machines to process the answer cards. This application have evolved from the first version that used MooTools and supported only Internet Explorer (as Internet Explorer is the only browser that can read AJAX data in the correct encoding) to the second version, using jQuery UI and the character encoding is handled server-side.
					</p>
					<p>In 2009, Minprasat Wittaya school's teachers visited my school and asked for the source code of the system. They're using it to show their students' grades online.</p>
					<p>In 2013, I rewrote the entire system due to security breach and load problems. The new system use only static JSON files. It also have Facebook share and Twitter post features. I also documented its API for future teachers and students.</p>
				</Description>
			</Item>
		);
	}
}
