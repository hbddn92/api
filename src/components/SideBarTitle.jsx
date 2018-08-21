import React, { Component } from 'react';

function SideBarTitle(props) {
	if(!props.hasChild) {
		return(
			<a className='sideBarLink' href={props.pathPage}><i className={props.icon}></i>{props.children}</a>
		)
	} else {
		return(
			<span onClick={props.onClick} className='sideBarLink sideBarLeftSub'>
				<i className={props.icon}></i>
				{props.children} 
				<i className={props.stateClose ? 'fas fa-angle-right' : 'fas fa-angle-up'}></i>
			</span>
		)
	}
}

export default SideBarTitle;