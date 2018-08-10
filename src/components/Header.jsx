import React, {Component} from 'react'

class Header extends Component {

	render() {
		// var children = this.props.children
		// var listChild = React.Children.map(children, (child, i) => {
  //         return child
  //       })
		return(
			<header>
				<div id='header'>
					{this.props.children}
				</div>
			</header>
		)
	}
}

export default Header