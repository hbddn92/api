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
		if(this.props.stateClose) {
			iconClose   = 'fas fa-align-justify'
		} else {
			iconClose   = 'fas fa-times'
		}
		return(
			<p className='openSideBar'><i onClick={this.props.onClick} className={iconClose}></i></p>
		)
	}
}

export default SideBarToggle;