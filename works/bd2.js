import React, { Component } from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends Component{
	static id = 'bd2';
	static title = 'bd2.in.th';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src="/work/bd2.in.th.png" />
				</Image>
				<Description small={true}>
					<p>bd2.in.th was created by @ntklp in 2009. The first version was named Dek-BD2 and the forum ran on my personal server at my home. In 2010, we rebranded the site to bd2.in.th. The site was powered by WordPress and Simple Machines Forum. Later, WordPress was changed to Drupal with custom theme.</p>
					<p>Major site redesign took place in summer 2011. The CMS was changed back to WordPress and the forum to Vanilla Forum. The site features a prominent top bar that links to multiple section of the sites:</p>
					<ul>
						<li><strong>Front page:</strong> WordPress news site. User can also login with their Facebook account.</li>
						<li><strong>Blue Wave:</strong> Our most popular section. A 24 hours internet radio. I wrote the custom DJ bot that handles this section when no DJ is online. Any user can request song in bot's database and it will be enqueued. When DJ is active, the request system can be viewed by DJ. The permission system is backed by WordPress'</li>
						<li><strong>Webboard:</strong> Vanilla Forum powered site. Vanilla was chosen for its simplicity and modernness. When a thread has new reply, people who subscribed will receive a site-wide notification which will appear in all section of the site, not just the webboard. Vanilla use WordPress as its one-click sign in provider.</li>
						<li><strong>Playback:</strong> Videos of classes for self-learning. Use a custom built system backed with WordPress authentication</li>
					</ul>
				</Description>
			</Item>
		);
	}
}