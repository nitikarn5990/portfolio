import React from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends React.Component{
	static id = 'k2aandroid';
	static title = 'K2A USB Keyboard plugin';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src="/work/k2usb.png" />
				</Image>
				<Access>
					<a href="https://play.google.com/store/apps/details?id=th.in.whs.k2ausbkbd" className={style.icon}>
						<i className="fa fa-android" />
					</a>
				</Access>
				<Access>
					<a href="https://github.com/whs/K2AUSBKeyboard" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>Keepass2Android USB Keyboard Plugin allow users to send password in Keepass2Android to a connected PC with no additional hardware.</p>
					<p>The application use USB HID kernel API to allow phones to act as a keyboard to computers. It then convert password string from Keepass2Android to keyboard scancodes and send it to the kernel.</p>
				</Description>
			</Item>
		);
	}
}
