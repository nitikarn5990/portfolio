import React from 'react';
import { Item, Image, Description, Access } from 'components/Item';
import style from 'components/style.scss';

export default class Work extends React.Component{
	static id = 'kusmartbus';
	static title = 'KUSmartBus';

	render(){
		return (
			<Item id={Work.id} title={Work.title}>
				<Image>
					<img src="/work/kusmartbus-android.png" />
				</Image>
				<Access>
					<a href="https://play.google.com/store/apps/details?id=th.in.whs.ku.bus" className={style.icon}>
						<i className="fa fa-android" />
					</a>
				</Access>
				<Access>
					<a href="https://github.com/whs/kubus-android" className={style.icon}>
						<i className="fa fa-github" />
					</a>
				</Access>
				<Description>
					<p>Created by Department of Civil Engineering, Kasetsart University, KUSmartBus project aims to help students to travel in the campus more efficiently by providing real time service bus location.</p>
					<p>There are two user-visible parts I created in this project: the Android application which is available on the Play Store and the bus information display which is installed on 3 locations on campus.</p>
					<p>The bus information display is powered by CentOS and Chromium. 24x7 operation is one of requirements for this task which the system maintained for months.</p>
				</Description>
			</Item>
		);
	}
}
