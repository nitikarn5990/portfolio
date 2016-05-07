import React, { Component } from 'react';
import Link from '../components/Link';
import style from '../components/style.scss';

export default class extends Component {

	render() {
		return (
			<div className={`${style.donate} container`}>
				<h1 style={{marginTop: 0, paddingTop: 40}}>
					Donate
				</h1>
				<div className={style.message}>
					<strong>ขอบคุณที่สนใจงานของผมครับ สามารถบริจาคสนับสนุนงานพัฒนาได้ที่หน้านี้</strong>
					<p>สำหรับ <a href="https://chrome.google.com/webstore/detail/mylive-enhancements-2/dkkapfcpodifgaabdlmohjpokenggcml" target="_blank">MyLive Enhancements</a> รบกวนระบุชื่อที่ให้ลงเครดิตไว้ด้วยครับ จะลงให้ในรุ่นถัดไป</p>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<div className={style.tocblock}>
							<h2><i className="fa fa-paypal" /> PayPal</h2>
							<p>PayPal หักค่าธรรมเนียม 11 บาท + 3.9% รบกวนระบุจำนวนเงินมากกว่า 11 บาทครับ</p>
							<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{margin: 'auto'}}>
								<input type="hidden" name="cmd" value="_donations" />
								<input type="hidden" name="business" value="manatsawin@gmail.com" />
								<input type="hidden" name="lc" value="th_TH" />
								<input type="hidden" name="no_note" value="0" />
								<input type="hidden" name="currency_code" value="THB" />
								<input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest" />
								<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
								<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
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
