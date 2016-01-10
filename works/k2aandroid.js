import React, { Component } from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import GitHub from 'react-icons/lib/fa/github';
import Android from 'react-icons/lib/fa/android';
import style from '../components/style.scss';

export default class Work extends Component{
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
						<Android />
					</a>
				</Access>
				<Access>
					<a href="https://github.com/whs/K2AUSBKeyboard" className={style.icon}>
						<GitHub />
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