import React from 'react'

function Header(props) {
	return(
		<header>
			<div id='header'>
				{props.children}
			</div>
		</header>
	)
}

export default Header