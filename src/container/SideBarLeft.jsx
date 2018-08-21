import React, {Component} from 'react';
import SideBarTitle 	from '../components/SideBarTitle';
import SideBarSub 	from '../components/SideBarSub';
import SideBarToogle from '../components/SideBarToogle';
import SideBar			from '../components/SideBar';
import Logo			from '../components/Logo';
import logo			from '../logo.png';

class SideBarLeft extends Component {
	render() {
		return(
			<SideBar openSidebar={this.props.openSidebar}>
				<SideBarSub>
					<SideBarTitle icon={'fas fa-atlas'} pathPage={'/'}>Home</SideBarTitle>
				</SideBarSub>
				<SideBarSub hasChild={true}>
					<SideBarTitle icon={'fab fa-android'} hasChild={true}>Android</SideBarTitle>
					<SideBarSub>
						<SideBarTitle icon={'fab fa-android'} pathPage={'/android'}>Get Setting</SideBarTitle>
					</SideBarSub>
					<SideBarSub>
						<SideBarTitle icon={'fab fa-android'} pathPage={'/android'}>Get Cartype</SideBarTitle>
					</SideBarSub>
				</SideBarSub>
				<SideBarSub hasChild={true}>
					<SideBarTitle icon={'fab fa-apple'} hasChild={true}>IOS</SideBarTitle>
					<SideBarSub>
						<SideBarTitle icon={'fab fa-apple'}>Get Setting</SideBarTitle>
					</SideBarSub>	
					<SideBarSub>
						<SideBarTitle icon={'fab fa-apple'}>Get Cartype</SideBarTitle>
					</SideBarSub>
				</SideBarSub>
				<SideBarSub hasChild={true}>
					<SideBarTitle icon={'fab fa-edge'} hasChild={true}>Web Browser</SideBarTitle>
					<SideBarSub hasChild={true}>
						<SideBarTitle icon={'fas fa-brain'} hasChild={true}>WebBooking</SideBarTitle>
						<SideBarSub>
							<SideBarTitle icon={'fab fa-apple'}>Get Setting</SideBarTitle>
						</SideBarSub>
						<SideBarSub>
							<SideBarTitle icon={'fab fa-apple'}>Get Cartype</SideBarTitle>
						</SideBarSub>
					</SideBarSub>
					<SideBarSub hasChild={true}>
						<SideBarTitle icon={'fas fa-brain'} hasChild={true}>New CC</SideBarTitle>
						<SideBarSub>
							<SideBarTitle icon={'fab fa-apple'}>Get Setting</SideBarTitle>
						</SideBarSub>	
						<SideBarSub>
							<SideBarTitle icon={'fab fa-apple'}>Get Cartype</SideBarTitle>
						</SideBarSub>
					</SideBarSub>
				</SideBarSub>
				<SideBarSub>
					<SideBarTitle icon={'fab fa-algolia'}>Algolia</SideBarTitle>
				</SideBarSub>
			</SideBar>
		);
	}
}

export default SideBarLeft;

