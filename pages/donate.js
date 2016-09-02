import React from 'react';
import { Link } from 'react-router';
import style from '../components/style.scss';

export default class DonatePage extends React.Component{

	render(){
		return (
			<div className={`${style.donate} container`}>
				<h1 style={{marginTop: 0, paddingTop: 40}}>
					<Link to="/">Portfolio/ <small>&lt;&mdash; Click to go back</small></Link>
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
								<input type="hidden" name="cmd" value="_xclick" />
								<input type="hidden" name="business" value="manatsawin@gmail.com" />
								<input type="hidden" name="lc" value="US" />
								<input type="hidden" name="no_note" value="0" />
								<input type="hidden" name="currency_code" value="USD" />
								<input type="hidden" name="item_name" value="Donation" />
								<input type="number" name="amount" min="1" placeholder="Enter amount in USD" required />
								<p><input type="image" src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png" border="0" name="submit" /></p>
							</form>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<a href="bitcoin:1HErNnBU47caE2tbBvZ45ixoCu1hLcUN9g" className={style.tocblock}>
							<h2><i className="fa fa-bitcoin" /> Bitcoin</h2>
							<div style={{wordBreak: 'break-word'}}>1HErNnBU47caE2tbBvZ45ixoCu1hLcUN9g</div>
							<div><small>(please let me know if you have donated to me on Bitcoin)</small></div>
						</a>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<a href="https://www.reddit.com/gold?goldtype=gift&recipient=awkwin" className={style.tocblock}>
							<h2><i className="fa fa-reddit-alien" /> Reddit</h2>
							Send me a reddit gold
						</a>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className={style.tocblock}>
							<h2><i className="fa fa-steam-square" /> Games</h2>
							<div><a href="https://steamcommunity.com/id/manatsawin/wishlist">Steam wishlist</a></div>
							<div><a href="https://www.gog.com/u/manatsawin/wishlist">GOG Wishlist</a></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
