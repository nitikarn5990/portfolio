import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'grader';
	static title = 'Grader';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src={require('./grader.jpg')} />
				</Image>
				<Access>
					<a href="https://github.com/whs/grader" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>This untitled online programming judging system (grader) was used in SOSCamp 3, the introduction to programming camp for new SKE students held by their senior. It support various programming languages such as C, C#, PHP, Python, Java and Ruby.</p>
					<p>The frontend interface is written in AngularJS and has two versions, one is designed for simple of use and supports only one programming language and another one is designed to be similar to Google Code Jam's.</p>
					<p>The backend use a job queue to allow distribution of grading job over several machines (over 5 are used during SOSCamp). Each grading job spawns new Docker container to run untrusted code so that users may submit code using fork that some variants of grading sandbox disallowed such system calls.</p>
				</Description>
			</Item>
		);
	}
}
