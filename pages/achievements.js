import React from 'react';
import { Link } from 'react-router';
import { AchievementGroup, AchievementItem } from '../components/AchievementGroup';
import style from '../components/style.scss';

export default class AchievementPage extends React.Component{

	render(){
		return (
			<div className={style.achievements}>
				<div className={`${style.item} container-fluid ${style.toc}`} id="top">
					<h1>
						<Link to="/">Portfolio/ <small>&lt;&mdash; Click to go back</small></Link>
						Achievements
					</h1>
					<div className="row">
						{this.renderToc()}
					</div>
				</div>
				{this.renderAchievements()}
			</div>
		);
	}

	renderToc(){
		return this.renderAchievements().map((node) => {
			let year = node.props.year;
			let items = React.Children.map(node.props.children, (item, index) => {
				return (
					<li key={index}>
						<strong>{item.props.title}</strong>
						<div>{item.props.category}</div>
					</li>
				);
			});

			return (<div className="col-xs-12 col-sm-6" key={year}>
				<a href={`#${year}`} className={style.tocblock}>
					<h2>{year}</h2>
					<ul className={style.unlist}>
						{items}
					</ul>
				</a>
			</div>);
		});
	}

	renderAchievements(){
		return [
			<AchievementGroup year={2007} key={2007}>
				<AchievementItem
					image={['/achfile/nlc8.jpg', '/achimg/nlc8-1.jpg']}
					title="The Eight National Linux Competition (NLC8)"
					category="Second place, Linux client category" />
				<AchievementItem
					image={['/achimg/bdcom-1.jpeg', '/achimg/bdcom-2.jpeg']}
					title="36 years of Bodindecha computer competition"
					category="First place" />
			</AchievementGroup>,
			<AchievementGroup year={2008} key={2008}>
				<AchievementItem
					image={['/achfile/nlc9.jpg', '/achfile/nlc9-1.jpg', '/achfile/nlc9-2.jpg', '/achimg/nlc9-1.jpg', '/achimg/nlc9-2.jpg']}
					title="The Ninth National Linux Competition (NLC9)"
					category="First place, Linux client category" />
				<AchievementItem
					image={['/achfile/html08.jpg', '/achimg/html08-1.jpg']}
					title="HTML web page competition, Seri Thai area"
					category="Second place, silver medal" />
				<AchievementItem
					image="/achfile/qa08.jpg"
					title="Computer competition, NMR. Bodindecha school"
					category="Gold medal" />
			</AchievementGroup>,
			<AchievementGroup year={2009} key={2009}>
				<AchievementItem
					image={['/achfile/nlc10.jpg', '/achfile/nlc10-1.jpg', '/achfile/nlc10-2.jpg', '/achimg/nlc10-1.jpg', '/achimg/nlc10-2.jpg', '/achimg/nlc10-3.jpg']}
					title="The Tenth National Linux Competition (NLC10)"
					category="First place, Linux server category" />
				<AchievementItem
					image={['/achfile/nlcp2.jpg', '/achfile/nlcp1.jpg']}
					title="NECTEC Certified Linux Professional (NLCP) Level 1 &amp; 2">
					Awarded as a part of NLC10 competition.
				</AchievementItem>
				<AchievementItem
					image={['/achfile/nsc11.jpg', '/achimg/nsc11-1.jpg', '/work/cdpb.png']}
					title="National Software Competition 2009 (NSC11)"
					category="Finalist, student's application software category">
					<span style={{fontWeight: 400}}>Project:</span> <Link to="/works#cdpb">Club Distro Package Builder</Link>
				</AchievementItem>
				<AchievementItem
					image="/achfile/student.jpg"
					title="Supreme Patriarch Award" />
			</AchievementGroup>,
			<AchievementGroup year={2010} key={2010}>
				<AchievementItem
					image={['/achimg/nlc11-1.jpeg', '/achimg/nlc11-2.jpeg', '/achimg/nlc11-3.jpg']}
					title="The Eleventh National Linux Competition (NLC11)"
					category="First place, Linux client category" />
				<AchievementItem
					image={['/achfile/nsc13.jpg', '/achimg/nsc13-1.jpg', '/achimg/nsc13-2.jpg', '/work/ovzcp.png']}
					title="National Software Competition 2011 (NSC13)"
					category="Second place, student's application software category">
					<span style={{fontWeight: 400}}>Project:</span> <Link to="/works#ovzcp">Web-based Linux virtualisation control panel (OvzCP)</Link>
				</AchievementItem>
			</AchievementGroup>,
			<AchievementGroup year={2011} key={2011}>
				<AchievementItem
					image="/achimg/nlc12-1.jpeg"
					title="The Twelfth National Linux Competition (NLC12)"
					category="Second place, Linux server category" />
				<AchievementItem
					image={['/achimg/hlp-1.jpeg', '/achimg/hlp-2.jpeg', '/achimg/hlp-3.jpeg']}
					title="The first HLP Hackathon competition"
					category="Passed to the final round with 15 others competitors" />
				<AchievementItem
					image={['/achimg/nmrhtml.jpeg', '/achimg/nmrhtml-1.jpeg', '/achimg/nmrhtml-2.jpeg', '/achimg/nmrhtml-3.jpeg']}
					title="Text editor website development, NMR. Bodindecha school"
					category="Bronze medal" />
				<AchievementItem
					image={['/achimg/php-1.jpeg', '/achimg/php-2.jpeg', '/achimg/php-3.jpeg', '/achimg/php-4.jpeg']}
					title="PHP Web Application competition, IT Ladkrabang Open House 2011"
					category="First place" />
			</AchievementGroup>,
			<AchievementGroup year={2012} key={2012}>
				<AchievementItem
					image={['/achfile/nsc15.jpg', '/achimg/nsc15-4.jpg', '/achimg/nsc15-1.jpg', '/achimg/nsc15-2.jpg', '/achimg/nsc15-3.jpg', '/work/kyou.png']}
					title="National Software Competition 2013 (NSC15)"
					category="Winner, student's application software category">
					<div>H.R.H. Maha Chakri Sirindhorn's cup.</div>
					<span style={{fontWeight: 400}}>Project:</span> <Link to="/works#kyou" onClick={Link.handleClick}>Kyou: HTML5 Interactive Digital Magazine Creator</Link>
				</AchievementItem>
				<AchievementItem
					image="/achimg/security-1.jpeg"
					title="Network security competition, IT Ladkrabang Open House 2012"
					category="First place" />
				<AchievementItem
					image={['/achimg/ict-1.jpg', '/achimg/ict-2.jpg']}
					title="ICT Challenge 2012, SIT, KMUTT"
					category="Third place" />
			</AchievementGroup>,
			<AchievementGroup year={2013} key={2013}>
				<AchievementItem
					image={['/achfile/apicta.jpg', '/achimg/apicta-1.jpg', '/achimg/apicta-2.jpg', '/achimg/apicta-3.jpg', '/achimg/apicta-4.jpg']}
					title="Asia Pacific ICT Award 2013 (APICTA 2013), Hong Kong"
					category="Merit, school project category">
					<span style={{fontWeight: 400}}>Project:</span> <Link to="/works#kyou">Kyou: HTML5 Interactive Digital Magazine Creator</Link>
				</AchievementItem>
			</AchievementGroup>,
			<AchievementGroup year={2014} key={2014}>
				<AchievementItem
					image="/achfile/youthday.jpg"
					title="Thailand Youth Award 2014"
					category="Merit, school project category">
					In Mathematics, Science, Computer and Technology major from participating in Asia Pacific ICT Award 2013
				</AchievementItem>
			</AchievementGroup>,
			<AchievementGroup year={2015} key={2015}>
				<AchievementItem
					image={['/achfile/ywc.jpg', '/achimg/ywc-1.jpg', '/achimg/ywc-2.jpg', '/achimg/ywc-3.jpg']}
					title="Young Webmaster Camp 12"
					category="Best Teamwork">
					<span style={{fontWeight: 400}}>Project:</span> <a href="http://mixic.whs.in.th">Mixic</a>
				</AchievementItem>
				<AchievementItem
					image={['/achimg/nsc17-1.jpg', '/achimg/nsc17-2.jpg', '/achimg/nsc17-3.jpg']}
					title="National Software Competition 2015 (NSC17)"
					category="Third place, Linux desktop software category">
					<span style={{fontWeight: 400}}>Project:</span> <Link to="/works#juiz">Juiz: Locally installed Platform as a Service</Link>
				</AchievementItem>
				<AchievementItem
					image={['/achfile/asc.jpg', '/achimg/asc-1.jpg', '/achimg/asc-2.jpg', '/achimg/asc-3.jpg']}
					title="ASC Student Computer Challenge 2015, China"
					category="Team Lighting Green: First prize" />
			</AchievementGroup>,
		];
	}

}
