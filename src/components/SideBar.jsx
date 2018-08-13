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
		var logoSideBar
		var listSideBar = []
		var sideBarLeft = 'sideBarLeft';
		if(this.props.openSidebar) {
			sideBarLeft = 'sideBarLeft';
		} else {
			sideBarLeft = 'sideBarLeft open'
		}

		if(this.props.children.length > 0) {
			var self = this
			this.props.children.map(function(child, index) {
			  if(index === 0) {
			  	logoSideBar = child
			  } else {
			  	listSideBar.push(child)
			  }
			})
		}

		return (
			<div className={sideBarLeft}>
				{logoSideBar}
				<ul className='sideBarLeftParent'>
					{listSideBar}
				</ul>
			</div>
		);
	}
}
export default SideBar;
