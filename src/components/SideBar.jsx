import React, { Component } from 'react';

class SideBar extends Component {
	constructor(props) {
		super(props)
		this.closeSideBar = this.closeSideBar.bind(this)
		this.openSubSidaBar = this.openSubSidaBar.bind(this)
		this.state = {
			close: true
		}
	}

	closeSideBar() {
		this.setState({
			close: !this.state.close
		})
	}

	openSubSidaBar(e) {
		var parentElement = e.target.nextSibling;

	}

	render() {
		var sideBarLeft = 'sideBarLeft';
		if(this.props.openSidebar) {
			sideBarLeft = 'sideBarLeft';
		} else {
			sideBarLeft = 'sideBarLeft open'
			window.addEventListener( 'click', this.handlerClickWindow, false );
		}

		return (
			<div className={sideBarLeft} id="sideBar">
				<ul className='sideBarLeftParent'>
					{this.props.children}
				</ul>
			</div>
		);
	}
}
export default SideBar;
