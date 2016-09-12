import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'streaming';
	static title = 'Streaming';

	render(){
		return (
			<Item id={Work.id} title={Work.title} {...this.props}>
				<Image>
					<img src={require('./streaming.png')} />
				</Image>
				<Access>
					<a href="https://github.com/whs/streaming" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>Twitter people often discuss live TV shows together, which inspired me to create this application in 2012.</p>
					<p>The application use HTML5 video tag and sync its state with master application using WebSocket with Socket.IO. The chat effects was inspired by <a href="http://niconico.com">Nico Nico Douga</a> and Summer Wars. The application used menome API to authenticate, then later switched to Facebook.</p>
					<p>In 2015 the application now ships with a Dockerfile for ease of installation</p>
				</Description>
			</Item>
		);
	}
}
