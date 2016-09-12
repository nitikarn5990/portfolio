import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'bcbk5';
	static title = 'Barcamp Bangkhen 5';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src={require('./bcbk5.jpg')} />
				</Image>
				<Access>
					<a href="http://2014.barcampbangkhen.org/" className={style.icon}><i className="fa fa-globe" /></a>
				</Access>
				<Description>
					<p>Barcamp Bangkhen is an annual unconference event held by the students' club at Department of Computer Engineering, Kasetsart University.</p>
					<p>I wrote the entire website of Barcamp Bangkhen 5 with web design from Chonnipa, a friend of mine at Software and Knowledge Engineering.</p>
					<p>The website is designed with open data in mind. Every dynamic data are fetched by open, documented API. All dynamic content are rendered by AngularJS on the frontend. The site is also marked with <a href="http://schema.org">schema.org</a> markup and email communication has iCalendar event file.</p>
					<p>During the event the website ran smoothly with no downtime even with over 2,000 visitors.</p>
				</Description>
			</Item>
		);
	}
}
