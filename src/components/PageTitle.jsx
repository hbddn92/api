import React, {Component} from 'react'

class PageTitle extends Component {
	render() {
		return(
			<h1>
				{this.props.children}
			</h1>
		)
	}
}

export default PageTitle