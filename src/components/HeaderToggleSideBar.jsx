import React, { Component } from 'react';
class HeaderToggleSidebar extends Component {
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
			<div className='toogleSidebar'>
				<span onClick={this.props.clickToogleSideBar} className='openSideBar'><i className={iconClose}></i></span>
			</div>
		)
	}
}

export default HeaderToggleSidebar;