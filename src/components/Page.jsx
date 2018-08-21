import React from 'react';
function Page(props) {
	return(
		<article className="mainPage">
			<div className="mainPageDiv">
				{props.children}
			</div>
		</article>
	)
}

export default Page;