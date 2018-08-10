import React, {Component} from 'react'


var style = {
	display: 'flex',
	margin: '30px 0',
}

class GroupButton extends Component {

	render() {
		var children = this.props.children
		var listChild = React.Children.map(children, (child, i) => {
          return child
        })
		return(
			<div className='groupButton' style={style}>
				{listChild}
			</div>
		)
	}
}

export default GroupButton