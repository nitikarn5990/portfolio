import React, { Component } from 'react';
import { Item, Image, Description, Access } from '../components/Item';
import style from '../components/style.scss';

export default class Work extends Component{
	static id = 'kyou';
	static title = 'project Kyou';
	static badges = [
		'NSC15 winner',
		'APICTA 2013 Merit'
	];

	render(){
		return (
			<Item id={Work.id} title={Work.title} badges={Work.badges}>
				<Image>
					<img src="/work/kyou.png" />
				</Image>
				<Access>
					<a href="https://github.com/whs/kyou" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>Kyou is a HTML5 ebook editor. Kyou is used to create the entire of <a href="https://chrome.google.com/webstore/detail/gjcchdjonjbnkcnafhbamkjpgchggbkn">CoreAnime 2</a>.</p>
					<p>The goal of Kyou is to create an easy to use e-book editor that make books adapt to how we use the computers, instead of imitating paper books. No coding is nessesary to use Kyou.</p>
					<p>Kyou won the first prize, H.R.H. Maha Chakri Sirindhorn's cup at National Software Competition 2012, Best in Edutainment at ICT Princess Awards, Runner-up at Thailand ICT Awards 2013 and Merit award at Asia-Pacific ICT Awards 2013, Hong Kong.</p>
					<p>Kyou was open sourced in 2015.</p>
				</Description>
			</Item>
		);
	}
}