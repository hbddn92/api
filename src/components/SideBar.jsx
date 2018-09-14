import React, { Component } from 'react';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target.id !== 'iconControlSidebar') {
			this.props.clickToogleSideBar();
		}
	}

	render() {
		var sideBarLeft = 'sideBarLeft';
		if(this.props.openSidebar) {
			sideBarLeft = 'sideBarLeft';
			document.removeEventListener('mousedown', this.handleClickOutside);
		} else {
			sideBarLeft = 'sideBarLeft open'
			document.addEventListener('mousedown', this.handleClickOutside)
		}

		return (
			<div className={sideBarLeft} id="sideBar" ref={this.setWrapperRef}>
				<ul className='sideBarLeftParent'>
					{this.props.children}
				</ul>
			</div>
		);
	}
}
export default SideBar;
