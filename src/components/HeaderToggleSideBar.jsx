import React from 'react';
function HeaderToggleSidebar(props) {
	let iconClose   = 'fas fa-align-justify'
	if(props.openSidebar) {
		iconClose   = 'fas fa-align-justify'
	} else {
		iconClose   = 'fas fa-times'
	}
	return(
		<div className='toogleSidebar'>
			<span onClick={props.clickToogleSideBar} className='openSideBar'><i className={iconClose} id='iconControlSidebar'></i></span>
		</div>
	)
}

export default HeaderToggleSidebar;