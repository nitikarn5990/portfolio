import React from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends React.Component{
	static id = 'ovzcp';
	static title = 'OvzCP';
	static badges = [
		'NSC13 2nd prize',
		'TICTA 2011 Runner up',
	];

	render(){
		return (
			<Item id={Work.id} title={Work.title} badges={Work.badges}>
				<Image>
					<img src="/work/ovzcp.png" />
				</Image>
				<Access>
					<a href="https://github.com/whs/OvzCP" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>OvzCP is a web-based control panel for OpenVZ, a virtualization system for Linux. OvzCP is aimed to be user friendly by supporting internationalization and visualizations. OvzCP does not reinvent the wheels, but integrate many existing services such as Munin and Varnish.</p>
					<p>OvzCP features a mobile site that users can change their Varnish configuration and restart their container. Users also can access to their data using OvzCP API.</p>
					<p>OvzCP won the second prize from 13<sup>th</sup> National Software Competition and runner-up in Thailand ICT Award 2011</p>
				</Description>
			</Item>
		);
	}
}
