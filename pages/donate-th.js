import React, { Component } from 'react';
import style from '../components/style.scss';

export default class extends Component{

	render(){
		return (
			<div className={`${style.donate} container`}>
				<h1 style={{marginTop: 0, paddingTop: 40}}>
					Donate
				</h1>
				<div className={style.message}>
					<strong>ขอบคุณที่สนใจงานของผมครับ สามารถบริจาคสนับสนุนงานพัฒนาได้ที่หน้านี้</strong>
					<p>สำหรับ <a href="https://chrome.google.com/webstore/detail/mylive-enhancements-2/dkkapfcpodifgaabdlmohjpokenggcml" target="_blank">MyLive Enhancements</a> รบกวน <a href="http://mylive.in.th/inbox">inbox</a> ชื่อที่ให้ลงเครดิตไว้ด้วยครับ</p>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className={style.tocblock}>
							<h2><i className="fa fa-paypal" /> PayPal</h2>
							<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{margin: 'auto'}}>
								<input type="hidden" name="cmd" value="_xclick" />
								<input type="hidden" name="business" value="manatsawin@gmail.com" />
								<input type="hidden" name="lc" value="th_TH" />
								<input type="hidden" name="item_name" value="Donation" />
								<input type="number" name="amount" min="12" placeholder="ระบุจำนวนเงิน (บาท)" required />
								<input type="hidden" name="currency_code" value="THB" />
								<p><input type="image" src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png" border="0" name="submit" /></p>
							</form>
						</div>
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
