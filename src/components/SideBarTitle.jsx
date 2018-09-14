import React from 'react';
import { NavLink } from "react-router-dom";


function SideBarTitle(props) {
	if(!props.hasChild) {
		var pathPage = props.pathPage || '/404'
		return(
			<NavLink className="sideBarLink" to={pathPage} activeClassName="selected" exact={true}>
				<i className={props.icon}></i>
				{props.children}
			</NavLink>

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