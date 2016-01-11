import React, { Component } from 'react';
import Link from '../components/Link';
import style from '../components/style.scss';

export default class extends Component {

	render() {
		return (
			<div className={`${style.donate} container-fluid`}>
				<h1>
					<a href="/" onClick={Link.handleClick}>Portfolio/ <small>&lt;&mdash; Click to go back</small></a>
					Donate
				</h1>
				<div className={style.message}>
					<strong>Thank you for using my work. If you like it, please consider donating.</strong>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className={style.tocblock}>
							<h2><i className="fa fa-paypal" /> PayPal</h2>
							<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
								<input type="hidden" name="cmd" value="_donations" />
								<input type="hidden" name="business" value="manatsawin@gmail.com" />
								<input type="hidden" name="lc" value="US" />
								<input type="hidden" name="no_note" value="0" />
								<input type="hidden" name="currency_code" value="USD" />
								<input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest" />
								<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
								<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
							</form>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<a href="bitcoin:1HErNnBU47caE2tbBvZ45ixoCu1hLcUN9g" className={style.tocblock}>
							<h2><i className="fa fa-bitcoin" /> Bitcoin</h2>
							<div style={{wordBreak: "break-word"}}>1HErNnBU47caE2tbBvZ45ixoCu1hLcUN9g</div>
							<div><small>(please let me know if you have donated to me on Bitcoin)</small></div>
						</a>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className={style.tocblock}>
							<h2>Flattr</h2>
							<Flattr uid="awkwin" title="Donate" description="Donation from portfolio" category="people" />
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className={style.tocblock}>
							<h2>PaySbuy</h2>
							<p><small>(loaded balance, credit card or cash)</small></p>
							<form method="post" action="https://www.paysbuy.com/paynow.aspx?lang=e">
								<input type="hidden" name="psb" value="psb" />
								<input type="hidden" name="biz" value="manatsawin@gmail.com" />
								<input type="hidden" name="inv" value="" />
								<input type="hidden" name="itm" value="Donate" />
								<input type="number" name="amt" required={true} min="100" step="20" placeholder="Enter amount in THB" />
								<p />
								<input type="image" src="https://www.paysbuy.com/imgs/powerby5.jpg" border="0" name="submit" />
							</form>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<a href="https://www.reddit.com/gold?goldtype=gift&recipient=awkwin" className={style.tocblock}>
							<h2><i className="fa fa-reddit-alien" /> Reddit</h2>
							Send me a reddit gold
						</a>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<a href="https://steamcommunity.com/id/manatsawin/wishlist" className={style.tocblock}>
							<h2><i className="fa fa-steam-square" /> Steam</h2>
							<div><small>(please send to manatsawin@gmail.com)</small></div>
						</a>
					</div>
				</div>
			</div>
		);
	}

}

class Flattr extends Component {
	static propTypes = {
		uid: React.PropTypes.string.isRequired,
		url: React.PropTypes.string,
		title: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired,
		category: React.PropTypes.oneOf(['text', 'images', 'video', 'audio', 'software', 'people', 'rest']),
	};

	render(){
		return <div ref={(ref) => this._button = ref} />;
	}

	componentDidMount(){
		this._script = document.createElement('script');

		this._script.async = true;
		this._script.src = '//api.flattr.com/js/0.6/load.js?mode=manual';
		this._script.onload = this.onLoad.bind(this);

		document.head.appendChild(this._script);
	}

	componentWillUnmount(){
		document.head.removeChild(this._script);
	}

	onLoad(){
		FlattrLoader.render({
			title: this.props.title,
			description: this.props.description,
			category: this.props.category,
			uid: this.props.uid,
			url: this.props.url || window.location.toString(),
		}, this._button, 'replace');
	}
}