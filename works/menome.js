import React, { Component } from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends Component{
	static id = 'menome';
	static title = 'menome';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src="/work/menome.png" />
				</Image>
				<Description>
					<p>menome started in 2011 from the idea that there's no anime database in available in Thai. Created under the concept "Social + Anime", menome brings socializing to anime by letting you know whenever your friends watched anime.</p>
					<p>The backend is written with PHP, JavaScript (with Node.js backend) and Python. It use MongoDB and Redis as storage.</p>
					<p>One notable part of the site is the forum. The forum is reinvented using realtime technology so that topics now feels like a combination of chat and conventional topic. New posts appears in realtime just like chatting, and posts can be seeked backwards like conventional forum.</p>
					<p>menome is a product of <a href="http://sunburn.in.th">Sunburn Group</a> consisting of 3 programmers and a handful writers who take part in CoreAnime project and menome site content. I wrote all the code of the site and nearly the entire design.</p>
				</Description>
			</Item>
		);
	}
}