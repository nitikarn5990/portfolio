import React from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends React.Component{
	static id = 'arg';
	static title = 'Valve ARG thank you whiteboard';

	render(){
		return (
			<Item id={Work.id} title={Work.title} small={true}>
				<Image>
					<img src="/work/arg.png" />
				</Image>
				<Access>
					<a href="http://valvearg.com/thankyou/whiteboard/" className={style.icon}><i className="fa fa-globe" /></a>
				</Access>
				<Description>
					<p>
						Marketing the launch of a highly anticipated game Portal 2, Valve cooperated with indie game developers to create an ARG. (Alternate Reality Game) The ARG starts on 1 April 2011. On that day, various indie games have been updated. Players found that new, out of place stuff have been added to the games that could form cryptic clues that ultimately leads to <a href="http://www.aperturescience.com/glados@home/">GLaDOS@Home</a>.
					</p>
					<p>
						During the ARG, events were recorded in the <a href="http://valvearg.com">ValveARG wiki</a>. After the ARG have ended, one of the key player decided to ask the community to create a thank you page. Few days have passed with no news from the team. On April 22<sup>nd</sup> 2011, a countdown appeared on ValveARG.com. Press guessed it was a countdown to a DLC. After the countdown ended, people start flooding the message board with thank you messages to Valve. Over 1,722 people have shown their gratitude on the message board. The thank you messages were read by the indie developers and Valve.
					</p>
				</Description>
			</Item>
		);
	}
}
