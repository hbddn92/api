import React, { Component } from 'react';

class SideBarSub extends Component {
	constructor(props) {
		super(props)
		this.openSubSideBar = this.openSubSideBar.bind(this);
		this.state = {close: true}
	}

	openSubSideBar(e) {
		this.setState({close: !this.state.close})
	}

	render() {
		var barTitle;
		var listItem = []
		var itemSidaBar = 'itemSidaBar'
		if(this.state.close) {
			itemSidaBar = 'itemSidaBar'
		} else {
			itemSidaBar = 'itemSidaBar open'
		}

		if(this.props.hasChild && this.props.children.length > 0) {
			var self = this
			this.props.children.map(function(child, index) {
			  if(index === 0) {
			  	barTitle = React.cloneElement(child, {onClick:  self.openSubSideBar, stateClose: self.state.close})
			  } else {
			  	listItem.push(child)
			  }
			})
		}

		if(!this.props.hasChild) {
			return(
				<li>{this.props.children}</li>
			)
		} else {
			return(
				<li>
					{barTitle}
					<ul className={itemSidaBar}>
						{listItem}
					</ul>
				</li>

			)
		}
	}
}

export default SideBarSub;