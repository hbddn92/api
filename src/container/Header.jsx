import React, { Component } from 'react';
import logo 			from '../logo.png';
import Header	from '../components/Header';
import HeaderLeft	from '../components/HeaderLeft';
import HeaderRight	from '../components/HeaderRight';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HowToRegIcon from "@material-ui/icons/HowToReg";
import Logo			from '../components/Logo';
import PersonOutline from "@material-ui/icons/PersonOutline";
import HeaderToggleSideBar from '../components/HeaderToggleSideBar';

var style = {
	button: {
		color: 'white',
		borderColor: 'white'
	},
	rightIcon: {
		marginLeft: '5px'
	}
}

class HeaderMain extends Component {
	render() {
		return (
			<Header>
				<HeaderLeft>
					<HeaderToggleSideBar openSidebar={this.props.openSidebar} clickToogleSideBar={this.props.clickToogleSideBar}/>
					<Logo srcLogo={logo}/>
					<IconButton>
			      		<PersonOutline style={style.button}/>
			      	</IconButton>	
				</HeaderLeft>
				<HeaderRight>
					<Button style={style.button} variant="outlined" color="primary" aria-label="Add">
						Login <HowToRegIcon style={style.rightIcon}></HowToRegIcon>
			      	</Button>
				</HeaderRight>
			</Header>
		);
	}
}

export default HeaderMain;
