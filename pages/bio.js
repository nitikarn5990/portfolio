import React from 'react';
import Link from '../components/Link';
import { Timeline, TimelineItem } from '../components/Timeline';
import style from '../components/style.scss';

export default class BioPage extends React.Component{

	render(){
		return (
			<div className={`${style.bio} container-fluid`}>
				<h1>
					<a href="/" onClick={Link.handleClick}>Portfolio/ <small>&lt;&mdash; Click to go back</small></a>
					Biography
				</h1>
				<Timeline>
					<TimelineItem side="center">
						Born on 29<sup>th</sup> October, 1994
					</TimelineItem>
					<TimelineItem side="right" year={1996}>
						Have one younger sister
					</TimelineItem>
					<TimelineItem side="left" year={2001}>
						Started school at
						<div><a href="http://www.pramoch.th.edu" target="_blank"><strong>Pramochwittaya Ramindra</strong></a></div>
					</TimelineItem>
					<TimelineItem side="right" year={2004}>
						Learnt <a href="http://php.net">PHP</a>
					</TimelineItem>
					<TimelineItem side="left" year={2004}>
						Started using <a href="http://ubuntu.com" target="_blank">Ubuntu 6.06</a>
					</TimelineItem>
					<TimelineItem side="right" year={2004} multi={true}>
						Started school at
						<div><a href="http://www.bodin2.ac.th" target="_blank"><strong>Bodindecha (Sing Singhaseni) 2</strong></a></div>
					</TimelineItem>
					<TimelineItem side="left" year={2008}>
						Learnt Python
					</TimelineItem>
					<TimelineItem side="right" year={2011}>
						Registered whs.in.th
					</TimelineItem>
					<TimelineItem side="left" year={2012}>
						Scored 297.5, highest score in<br />
						NIETS' General Aptitude Test<br />
						Round 1, Year 2013 (Tested October 2012)
					</TimelineItem>
					<TimelineItem side="right" year={2013}>
						Started undergraduate program at
						<div><a href="http://www.ku.ac.th" target="_blank"><strong>Kasetsart University</strong></a></div>
						International Undergraduate Program, Software and Knowledge Engineering
					</TimelineItem>
					<TimelineItem side="center">
						<a href="/" onClick={Link.handleClick}>Back to front page</a>
					</TimelineItem>
				</Timeline>
			</div>
		);
	}

}
