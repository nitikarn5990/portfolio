import React, { Component } from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import GitHub from 'react-icons/lib/fa/github';
import style from '../components/style.scss';

export default class Work extends Component{
	static id = 'cdpb';
	static title = 'Club Distro Package Builder';
	static badges = [
		'NSC11 Finalist'
	];

	render(){
		return (
			<Item id={Work.id} title={Work.title} badges={Work.badges} small={true}>
				<Image>
					<img src="/work/cdpb.png" />
				</Image>
				<Access>
					Source code is lost
				</Access>
				<Description>
					<p>CDPB enable you to upload your package to a server and the server would compile the source to Debian package. It then put the package in a Debian repository. This software passed to the final round of National Software Competition 2009.</p>
				</Description>
			</Item>
		);
	}
}