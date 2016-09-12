import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';

export default class Work extends React.Component{
	static id = 'cdpb';
	static title = 'Club Distro Package Builder';
	static badges = [
		'NSC11 Finalist',
	];

	render(){
		return (
			<Item id={Work.id} title={Work.title} badges={Work.badges} small={true} {...this.props}>
				<Image>
					<img src={require('./cdpb.png')} />
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
