import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'twitica';
	static title = 'Twitica Desktop';

	render(){
		return (
			<Item id={Work.id} title={Work.title} {...this.props}>
				<Image>
					<img src={require('./twitica.png')} />
				</Image>
				<Access>
					<a href="https://chrome.google.com/webstore/detail/ogndknhgkahnialefpjkhmbekkobjfkh" className={style.icon}>
						<i className="fa fa-chrome" />
					</a>
				</Access>
				<Description>
					<p>Twitica Desktop started life in 2010. It was an attempt to clone thaiWitter with <a href="https://identi.ca">identi.ca</a> support. The first version ran on my personal server using an API proxy. It is one of the first Twitter client to support the User Stream feature. Later, an optional extension was created named Twitica Desktop+ that removed the need for API proxy. The extension was then merged to the main application and now Twitica Desktop is completely self-supporting using JavaScript only.</p>
					<p>Twitica Desktop use many HTML5 features, such as CSS3 Animations, CSS 3D Transformation, Web Worker, XMLHttpRequest 2, HTML5 File Drag &amp; Drop.</p>
					<p>Twitica Desktop is now being used by over 200 users and being rewritten from scratch to be more optimized and customizable. The concept behind this is to bring mobile Twitter client experience to the desktop, and become configurable and programmable.</p>
				</Description>
			</Item>
		);
	}
}
