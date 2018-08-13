import React, { Component } from 'react';
class SideBarToggle extends Component {
	constructor(props) {
		super(props)
	}

	// closeSideBar(e) {
	// 	this.setState({close: !this.state.close})
	// }

	render() {
		var iconClose   = 'fas fa-align-justify'
		if(this.props.openSidebar) {
			iconClose   = 'fas fa-align-justify'
		} else {
			iconClose   = 'fas fa-times'
		}
		return(
			<div className='sidebarToogle'>
				{this.props.children}
				<p className='openSideBar'><i onClick={this.props.clickToogleSideBar} className={iconClose}></i></p>
			</div>
		)
	}
}

export default SideBarToggle;