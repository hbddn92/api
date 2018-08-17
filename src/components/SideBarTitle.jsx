import React, { Component } from 'react';

class SideBarTitle extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		if(!this.props.hasChild) {
			return(
				<a className='sideBarLink' href={this.props.pathPage}><i className={this.props.icon}></i>{this.props.children}</a>
			)
		} else {
			return(
				<span onClick={this.props.onClick} className='sideBarLink sideBarLeftSub'>
					<i className={this.props.icon}></i>
					{this.props.children} 
					<i className={this.props.stateClose ? 'fas fa-angle-right' : 'fas fa-angle-up'}></i>
				</span>	
			)
		}
	}
}

export default SideBarTitle;