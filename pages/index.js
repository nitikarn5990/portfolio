import React from 'react';
import Link from '../components/Link';
import style from '../components/style.scss';

export default class IndexPage extends React.Component{

	render(){
		return (
			<div className={`${style.main} container-fluid`}>
				<div className="row">
					<div className={`col-xs-12 col-md-8 ${style.profile}`}>
						<h1 className={style.name}>Manatsawin Hanmongkolchai</h1>
						<div className={style.profileText}>
							<div>An undergraduate studying in Software and Knowledge Engineering<br />at <a href="http://iup.eng.ku.ac.th" target="_blank">Kasetsart University IUP program</a>.</div>
							<div>Knows <strong>Thai, English</strong>.</div>
							<div>Codes <strong>Python, PHP</strong> and <strong>JavaScript</strong>.</div>
							<div>Prefers <strong>OSX</strong> for Desktop, <strong>Debian GNU/Linux</strong> for server.</div>
						</div>

						<ul className={style.iconBar}>
							<li><a href="http://whs.in.th" className="icon"><i className="fa fa-globe" /></a></li>
							<li><a href="http://th.linkedin.com/in/manatsawin" className="icon"><i className="fa fa-linkedin" /></a></li>
							<li><a href="https://facebook.com/whsinth" className="icon"><i className="fa fa-facebook-official" /></a></li>
							<li><a href="https://github.com/whs" className="icon"><i className="fa fa-github" /></a></li>
						</ul>
					</div>
					<div className={`col-xs-12 col-md-4 ${style.menu}`}>
						<div className="row">
							<div className={`${style.box} col-xs-12`}><a href="bio" onClick={Link.handleClick}><span>Biography</span></a></div>
						</div>
						<div className="row">
							<div className={`${style.box} col-xs-6`}><a href="works" onClick={Link.handleClick}><span>Works</span></a></div>
							<div className={`${style.box} col-xs-6`}><a href="achievements" onClick={Link.handleClick}><span>Achievements</span></a></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
