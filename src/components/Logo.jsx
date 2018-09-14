import React from 'react';
function Logo(props) {
  return (
    <div className='logoComponents'>
     	<a href='/'><img src={props.srcLogo} alt={props.alt}/></a>
    </div>
  );
}

export default Logo