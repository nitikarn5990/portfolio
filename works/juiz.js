import React, { Component } from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends Component{
	static id = 'juiz';
	static title = 'project Juiz';
	static badges = [
		'NSC17 3rd place'
	];

	render(){
		return (
			<Item id={Work.id} title={Work.title} badges={Work.badges}>
				<Image>
					<img src="/work/juiz.png" />
				</Image>
				<Access>
					<a href="https://github.com/whs/juiz" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>Juiz is a novelty PaaS-like shipped as a desktop application. Web developers can import their project, add API key for Amazon Web Services or DigitalOcean and start deploying in one click without preparing any server-side system.</p>
					<p>Juiz works by using libcloud to spawn new cloud machine, then install Heroku Buildpack and user application using Ansible. The interface use WxWidget and could be run on both OS X and Linux.</p>
					<p>Juiz was placed third place at National Software Competition 2015. No team won the second and first place.</p>
				</Description>
			</Item>
		);
	}
}