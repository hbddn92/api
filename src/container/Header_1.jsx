import React, { Component } from 'react';
import logo 			from '../logo.png';
import Header	from '../components/Header';
import HeaderLeft	from '../components/HeaderLeft';
import HeaderRight	from '../components/HeaderRight';
import Button from '@material-ui/core/Button';
import Logo			from '../components/Logo';
import ToggleSidebar from '../components/ToggleSidebar';

class Header_1 extends Component {
	constructor(props) {
		super(props)
		this.clickToogle = this.clickToogle.bind(this)
	}

	clickToogle() {
		console.log(1111)
		this.props.clickToogle()
	}

	render() {
		return (
			<Header>
				<HeaderLeft>
					<ToggleSidebar clickToogle={this.clickToogle}/>
					<Logo srcLogo={logo}/>
					<Button variant="outlined" color="primary" aria-label="Add">
						Login
			      	</Button>
				</HeaderLeft>
				<HeaderRight>
					<Button variant="outlined" color="primary" aria-label="Add">
						Login
			      	</Button>
				</HeaderRight>
			</Header>
		);
	}
}

export default Header_1;
