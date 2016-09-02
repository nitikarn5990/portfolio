import React from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends React.Component{
	static id = 'memorial';
	static title = 'Bodin 2 Memorial Site #17-18';

	render(){
		return (
			<Item id={Work.id} title={Work.title} small={true}>
				<Image>
					<img src="/work/anusorn17.png" />
				</Image>
				<Access>
					<a href="http://anusorn18.bd2.in.th.s3-website-ap-southeast-1.amazonaws.com/register/" className={style.icon}>
						<i className="fa fa-globe" />
					</a>
				</Access>
				<Description>
					<p>@ntklp asked me to create a site to preorder the year book for the class of 2012 (my senior). I used Django to accomplish this and hosted it on Heroku. The application can be access standalone, or accessed from <a href="https://www.facebook.com/anusornbodin2/app_230091100405985">Facebook Page Tab</a>. It also features responsive design that adapts to desktop, tablets and phones.</p>
					<p>Later, my guidance teacher asked me to create a site for students to register their university. I built it as another Django module to the same site. The site was completely success and guidance teachers in my school was happy with its analytical system that reduced manual labour.</p>
					<p>In my year (class of 2013) the whole system was rewritten using PHP and MongoDB to be more faster and more complex analytics can be performed using MongoDB's powerful MapReduce system.</p>
				</Description>
			</Item>
		);
	}
}
