import React, { Component } from 'react';

function SideBar(props) {
	var sideBarLeft = 'sideBarLeft';
	if(props.openSidebar) {
		sideBarLeft = 'sideBarLeft';
	} else {
		sideBarLeft = 'sideBarLeft open'
	}

	return (
		<div className={sideBarLeft} id="sideBar">
			<ul className='sideBarLeftParent'>
				{props.children}
			</ul>
		</div>
	);
}
export default SideBar;
