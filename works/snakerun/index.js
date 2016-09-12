import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'snakerun';
	static title = 'Snake Run';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src={require('./snakerun.png')} />
				</Image>
				<Access>
					<a href="http://ske.whs.in.th/awkwin/snake/" className={style.icon}>
						<i className="fa fa-play-circle" />
					</a>
				</Access>
				<Access>
					<a href="https://github.com/whsatku/snake" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>Snake Run is a class project for Individual Software Process. It use Cocos2d-html5 for the engine, AngularJS for UI and Primus for near real time communication.</p>
					<p>Snake Run features realtime online multiplayer in synchronized lock step model with deterministic simulation and offline play with A* bots. The game is a clone of the famous snake game featured in old Nokia phones, but with several things added on top; you compete with other players for highest score achieved when others rammed into you and there will be items that, when collected, cause special effects to your snake or other snakes such as inverting controls or being able to bite other snakes temporary.</p>
				</Description>
			</Item>
		);
	}
}
