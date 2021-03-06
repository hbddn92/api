import React, {Component} from 'react';
import SideBarTitle 	from '../components/SideBarTitle';
import SideBarSub 	from '../components/SideBarSub';
import SideBar			from '../components/SideBar';

class SideBarLeft extends Component {
	render() {
		return(
			<SideBar {...this.props}>
				<SideBarSub>
					<SideBarTitle icon={'fas fa-atlas'} pathPage={'/'}>Home</SideBarTitle>
				</SideBarSub>
				<SideBarSub>
					<SideBarTitle icon={'fas fa-atlas'} pathPage={'/schemaForm'}>JsonSchemaForm</SideBarTitle>
				</SideBarSub>
				<SideBarSub hasChild={true}>
					<SideBarTitle icon={'fab fa-android'} hasChild={true}>Android</SideBarTitle>
					<SideBarSub>
						<SideBarTitle icon={'fab fa-android'} pathPage={'/android'}>Get Setting</SideBarTitle>
					</SideBarSub>
					<SideBarSub>
						<SideBarTitle icon={'fab fa-android'} pathPage={'/android1/2'}>Get Cartype</SideBarTitle>
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

