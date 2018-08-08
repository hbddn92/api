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
		var toggleSideBar
		var listSideBar = []
		var sideBarLeft = 'sideBarLeft';
		var iconClose   = 'fas fa-align-justify'
		if(this.state.close) {
			sideBarLeft = 'sideBarLeft';
			iconClose   = 'fas fa-align-justify'
		} else {
			sideBarLeft = 'sideBarLeft open'
			iconClose   = 'fas fa-times'
		}

		if(this.props.children.length > 0) {
			var self = this
			this.props.children.map(function(child, index) {
			  if(index === 0) {
			  	toggleSideBar = React.cloneElement(child, {onClick:  self.closeSideBar, stateClose: self.state.close});
			  } else {
			  	listSideBar.push(child)
			  }
			})
		}

		return (
			<div className={sideBarLeft}>
				{toggleSideBar}
				<ul className='sideBarLeftParent'>
					{listSideBar}
				</ul>
			</div>
	);
	}
}
export default SideBar;
